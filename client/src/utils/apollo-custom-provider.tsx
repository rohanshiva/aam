import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

export default function ApolloCustomProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new ApolloClient({
    uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache()
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
