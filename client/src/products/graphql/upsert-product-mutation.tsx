import { graphql } from "@/graphql";

export const UPSERT_PRODUCT_MUTATION = graphql(`
  mutation UpsertProduct($input: UpsertProductInput!) {
    upsertProduct(input: $input) {
      product {
        id
        name
        description
        coverImgUrl
        thumbnailImgUrl
        price
        currency
        themeColor
      }
      errors
    }
  }
`);
