import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "./graphql";
import Nav from "./nav";
import { Seller } from "./graphql/graphql";
import AuthContext from "./context/auth-context";
import { PRE_WIRED_USER_EMAIL } from "./utils/constants";
import Products from "./products/products";
import { Route, Switch } from "wouter";
import NewProduct from "./products/new-product";
import EditProduct from "./products/edit-product";
import { Toaster } from "./components/ui/toaster";
import NotFound from "./utils/not-found";
import ProductPage from "./products/product-page";

const SELLER_VIEW_DOCUMENT = graphql(`
  query sellerView($id: ID, $email: String) {
    seller(id: $id, email: $email) {
      id
      name
      email
      avatarUrl
    }
  }
`);

function App() {
  const [user, setUser] = useState<Seller | null>(null);

  const { data: userData } = useQuery(SELLER_VIEW_DOCUMENT, {
    variables: { email: PRE_WIRED_USER_EMAIL },
  });

  useEffect(() => {
    if (userData?.seller) {
      setUser(userData.seller);
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={user}>
      <div className="w-5/6 max-w-3xl mx-auto flex flex-col pt-8 pb-8">
        <Switch>
          <Route path="/">
            <Nav />
            <Products />
          </Route>
          <Route path="/products/new">
            <Nav />
            <NewProduct />
          </Route>
          <Route path="/products/:id/edit">
            <Nav />
            <EditProduct />
          </Route>
          <Route path="/products/:id">
            <Nav />
            <ProductPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Toaster />
    </AuthContext.Provider>
  );
}

export default App;
