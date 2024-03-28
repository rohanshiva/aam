import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";
import Markdown from "react-markdown";

type MarkdownFormEditorProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  field: ControllerRenderProps<TFieldValues, TName>;
  name: TName;
  label: string;
  description: string;
};

export default function MarkdownFormEditor<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ field, label, description }: MarkdownFormEditorProps<TFieldValues, TName>) {
  return (
    <Tabs defaultValue="edit" className="w-full">
      <TabsList>
        <TabsTrigger value="edit">Edit</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <FormItem className="mt-2">
        <FormLabel>{label}</FormLabel>
        <TabsContent value="edit">
          <FormControl>
            <Textarea {...field} className="min-h-64"/>
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </TabsContent>
        <TabsContent
          value="preview"
          className="w-full rounded-md border border-input bg-transparent px-3 py-2 shadow-sm"
        >
          <Markdown className="prose text-sm">
            {field.value.length
              ? field.value
              : "Add some text in the 'edit' tab."}
          </Markdown>
        </TabsContent>
      </FormItem>
    </Tabs>
  );
}
