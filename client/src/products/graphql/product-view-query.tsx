import { graphql } from "@/graphql";

export const PRODUCT_VIEW_QUERY = graphql(`
  query ProductView($id: ID!) {
    product(id: $id) {
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
      seller {
        id
        name
        email
      }
      releases {
        id
        name
        notes
        releaseDate
        prettyReleaseDate
      }
    }
  }
`);
