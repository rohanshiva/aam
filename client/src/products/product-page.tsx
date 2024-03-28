import { useQuery } from "@apollo/client";
import { useParams } from "wouter";
import { PRODUCT_VIEW_QUERY } from "./graphql/product-view-query";
import ErrorView from "@/utils/error-view";
import Loading from "@/utils/loading";
import Markdown from "react-markdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Releases from "./releases";
import { ReleaseType } from "@/graphql/graphql";

export default function ProductPage() {
  const { id } = useParams();

  const { data, error, loading } = useQuery(PRODUCT_VIEW_QUERY, {
    variables: {
      id: id as string,
    },
  });

  if (error) {
    return <ErrorView />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div
        className="flex flex-row gap-4 space-y-32 h-36"
        style={{
          background: `linear-gradient(180deg, ${"#FEEA89"} 0%, rgba(247,245,242,0) 80%)`,
        }}
      />
      <h1 className="text-lg">{data?.product?.name}</h1>

      <Tabs defaultValue="overview" className="w-full mt-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="releases">Releases</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Markdown className="prose mt-4 text-xs">
            {data?.product?.description}
          </Markdown>
        </TabsContent>
        <TabsContent value="releases">
          <Releases releases={data?.product?.releases as ReleaseType[]} />
        </TabsContent>
      </Tabs>
    </>
  );
}
