import { useContext, useEffect } from "react";
import { useLocation } from "wouter";
import { useReward } from "react-rewards";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MarkdownFormEditor from "@/utils/markdown-form-editor";
import { CurrencyEnum, ProductType } from "@/graphql/graphql";
import CurrencySelector from "./currency-selector";
import { UPSERT_PRODUCT_MUTATION } from "./graphql/upsert-product-mutation";
import AuthContext from "@/context/auth-context";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name your product!",
  }),
  description: z.string(),
  currency: z.nativeEnum(CurrencyEnum),
  price: z.coerce.number().positive(),
});

type ProductFormProps = {
  product?: ProductType;
};

export default function ProductForm({ product }: ProductFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: product?.name || "",
      currency: product?.currency || CurrencyEnum.Usd,
      price: (product?.price / 100) || 2,
      description: product?.description || "",
    },
  });

  const user = useContext(AuthContext);
  const { toast } = useToast();
  const [_, setLocation] = useLocation();

  const [upsertProduct, { data, error }] = useMutation(UPSERT_PRODUCT_MUTATION);

  const { reward: partyShower } = useReward('partyShower', 'emoji', { emoji: ["🎉"], spread: 60, lifetime: 50 });

  useEffect(() => {
    if (
      error ||
      (data?.upsertProduct?.errors && data.upsertProduct.errors.length > 0)
    ) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error?.message || "An unexpected error occurred.",
      });
    }

    if (
      data?.upsertProduct?.product?.id &&
      data?.upsertProduct.errors.length === 0
    ) {
      setLocation(`/products/${data?.upsertProduct?.product?.id}/edit`);
      toast({
        description: "Changes saved!",
      });
    }
  }, [data, error]);

  return (
    <>
      <h3 className="text-xl font-medium">What are you creating?</h3>
      <Separator className="my-4" />
      <Form {...form}>
        <form
          className="space-y-6 w-full"
          onSubmit={form.handleSubmit((values: z.infer<typeof FormSchema>) => {
            upsertProduct({
              variables: {
                input: {
                  product: {
                    ...values,
                    price: values.price * 100,
                    sellerId: user?.id,
                  },
                  ...(product?.id && { id: product.id }),
                },
              },
            });
            partyShower();
          })}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Apple" {...field} />
                </FormControl>
                <FormDescription>Name of the product</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row gap-2">
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pricing</FormLabel>
                  <FormControl>
                    <CurrencySelector
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">
                    Sell it for this price
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <MarkdownFormEditor
                field={field}
                name="description"
                label="Description"
                description={
                  "Describe your product (Supports basic Markdown syntax)"
                }
              />
            )}
          />
          <Button type="submit">
            Submit
            <span id="partyShower" />
          </Button>
        </form>
      </Form>
    </>
  );
}
