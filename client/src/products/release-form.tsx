import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MarkdownFormEditor from "@/utils/markdown-form-editor";
import { CREATE_RELEASE_MUTATION } from "./graphql/create-release-mutation";
import { useMutation } from "@apollo/client";
import { ProductType } from "@/graphql/graphql";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  notes: z.string(),
  relaseDate: z.date(),
});

export default function ReleaseForm({
  product,
  refetch,
}: {
  product: ProductType;
  refetch: () => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      notes: "",
      relaseDate: new Date(),
    },
  });

  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [createRelease, { data, error }] = useMutation(CREATE_RELEASE_MUTATION);

  useEffect(() => {
    if (
      error ||
      (data?.createRelease?.errors && data.createRelease.errors.length > 0)
    ) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error?.message || "An unexpected error occurred.",
      });
    }

    if (data && data.createRelease?.release) {
      refetch();
      setOpen(false);
    }
  }, [data, error]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    createRelease({
      variables: {
        input: {
          release: {
            name: values.name,
            notes: values.notes,
            releaseDate: values.relaseDate,
            productId: product.id,
            sellerId: product.seller.id,
          },
        },
      },
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex flex-row justify-between mt-4">
        <div className="flex flex-col text-sm">
          <span className="italic underline font-medium">
            Updated your product?
          </span>
          <span>
            Publish release notes to inform your users about the latest changes
            to your product!
          </span>
        </div>
        <DialogTrigger>
          <Button>Create Release</Button>
        </DialogTrigger>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Let your users know about the new changes!</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Release Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Fresh!" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <MarkdownFormEditor
                  field={field}
                  name="notes"
                  label="Notes"
                  description={
                    "Release notes. We recommend that you keep it short and concise. Supports basic Markdown syntax."
                  }
                />
              )}
            />
            <Button type="submit">Create Release</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
