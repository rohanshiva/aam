import { graphql } from "@/graphql";

export const CREATE_RELEASE_MUTATION = graphql(`
  mutation CreateRelease($input: CreateReleaseInput!) {
    createRelease(input: $input) {
      release {
        id
        name
        notes
        releaseDate
        prettyReleaseDate
      }
      errors
    }
  }
`);
