import { useContext } from "react";
import { useQuery } from "@apollo/client";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import AuthContext from "@/context/auth-context";
import Loading from "@/utils/loading";
import { PRODUCTS_DOCUMENT } from "./graphql/products-document";
import ErrorView from "@/utils/error-view";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Products() {
  const user = useContext(AuthContext);

  const { data, error, loading } = useQuery(PRODUCTS_DOCUMENT, {
    variables: {
      sellerId: user?.id,
    },
  });

  const [_, setLocation] = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorView />;
  }

  const products = data?.products;

  if (products?.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-xl font-semibold">No products</h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a product.
          </p>
          <Link href="/products/new">
            <Button className="mt-2">Add Product</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-2 mt-4">
        <h1 className="text-lg">Products</h1>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Latest Release</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.map((product) => {
                return (
                  <TableRow
                    key={product.id}
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      setLocation(`/products/${product.id}/edit`);
                    }}
                  >
                    <TableCell>{product.name}</TableCell>
                    <TableCell>
                      {product.description?.substring(0, 35)}
                    </TableCell>
                    <TableCell>{product.prettyPrice}</TableCell>
                    <TableCell className="font-mono text-flair font-semibold">
                      {product.prettyLatestRelease}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
