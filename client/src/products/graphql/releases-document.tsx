import { graphql } from "@/graphql";

export const RELEASES_DOCUMENT = graphql(`
  query releases($sellerId: ID, $productId: ID) {
    releases(sellerId: $sellerId, productId: $productId) {
      id
      name
      notes
      releaseDate
      prettyReleaseDate
    }
  }
`);
