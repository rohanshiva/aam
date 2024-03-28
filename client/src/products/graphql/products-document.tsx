import { graphql } from "@/graphql";

export const PRODUCTS_DOCUMENT = graphql(`
  query products($sellerId: ID) {
    products(sellerId: $sellerId) {
      id
      name
      description
      coverImgUrl
      thumbnailImgUrl
      prettyLatestRelease
      themeColor
      price
      prettyPrice
      currency
    }
  }
`);
