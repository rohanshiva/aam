import { useParams } from "wouter";
import ProductForm from "./product-form";
import { useQuery } from "@apollo/client";
import { PRODUCT_VIEW_QUERY } from "./graphql/product-view-query";
import Loading from "@/utils/loading";
import { ProductType, ReleaseType } from "@/graphql/graphql";
import ErrorView from "@/utils/error-view";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Releases from "./releases";
import ReleaseForm from "./release-form";
import { RELEASES_DOCUMENT } from "./graphql/releases-document";

export default function EditProduct() {
  const { id } = useParams();

  const {
    data: productData,
    loading,
    error,
  } = useQuery(PRODUCT_VIEW_QUERY, {
    variables: {
      id: id as string,
    },
  });

  const { data: releasesData, refetch: refetchReleases } = useQuery(
    RELEASES_DOCUMENT,
    {
      variables: {
        productId: productData?.product?.id,
        sellerId: productData?.product?.seller?.id,
      },
    }
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorView />;
  }

  return (
    <div className="mt-10">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="releases">Releases</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="py-4">
          <ProductForm product={productData?.product as ProductType} />
        </TabsContent>
        <TabsContent value="releases">
          <ReleaseForm
            product={productData?.product as ProductType}
            refetch={refetchReleases}
          />
          <Releases
            releases={(releasesData?.releases as ReleaseType[]) || []}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
