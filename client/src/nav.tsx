import { Link, useRoute } from "wouter";
import { Button } from "./components/ui/button";

export default function Nav() {
  const [isHomePage] = useRoute("/");
  const [isProductEditPage, params] = useRoute("/products/:id/edit");

  return (
    <nav className="flex flex-row justify-between my-4">
      <Link href="/">
        <h1 className="font-semibold text-flair">Aam</h1>
      </Link>
      {isHomePage && (
        <Link href="/products/new">
          <Button>Add product</Button>
        </Link>
      )}
      {isProductEditPage && (
        <Link href={`/products/${params.id}`}>
          <Button className="animate-pulse">Preview</Button>
        </Link>
      )}
    </nav>
  );
}
