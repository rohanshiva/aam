import { useQuery } from "@apollo/client";
import { useParams } from "wouter";
import { PRODUCT_VIEW_QUERY } from "./graphql/product-view-query";
import ErrorView from "@/utils/error-view";
import Loading from "@/utils/loading";
import Markdown from "react-markdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Releases from "./releases";
import { ReleaseType } from "@/graphql/graphql";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-medium">{data?.product?.name}</h1>
          <Badge>{data?.product?.seller?.name}</Badge>
        </div>
        <div className="flex flex-col gap-3">
          <div className="border border-2 w-fit h-fit border-dashed rounded-md px-2 font-semibold text-flair">
            <code>
              {data?.product?.prettyPrice}
            </code>
          </div>
          <Button>
            I want this!
          </Button>
        </div>

      </div>

      <Tabs defaultValue="overview" className="w-full mt-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="releases">Releases</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-8">
          <Markdown className="prose text-xs">
            {data?.product?.description}
          </Markdown>
        </TabsContent>
        <TabsContent value="releases" className="mt-8">
          <Releases releases={data?.product?.releases as ReleaseType[]} />
        </TabsContent>
      </Tabs>
    </>
  );
}
