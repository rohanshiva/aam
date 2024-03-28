/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query sellerView($id: ID, $email: String) {\n    seller(id: $id, email: $email) {\n      id\n      name\n      email\n      avatarUrl\n    }\n  }\n": types.SellerViewDocument,
    "\n  mutation CreateRelease($input: CreateReleaseInput!) {\n    createRelease(input: $input) {\n      release {\n        id\n        name\n        notes\n        releaseDate\n        prettyReleaseDate\n      }\n      errors\n    }\n  }\n": types.CreateReleaseDocument,
    "\n  query ProductView($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      description\n      coverImgUrl\n      thumbnailImgUrl\n      prettyLatestRelease\n      themeColor\n      price\n      prettyPrice\n      currency\n      seller {\n        id\n        name\n        email\n      }\n      releases {\n        id\n        name\n        notes\n        releaseDate\n        prettyReleaseDate\n      }\n    }\n  }\n": types.ProductViewDocument,
    "\n  query products($sellerId: ID) {\n    products(sellerId: $sellerId) {\n      id\n      name\n      description\n      coverImgUrl\n      thumbnailImgUrl\n      prettyLatestRelease\n      themeColor\n      price\n      prettyPrice\n      currency\n    }\n  }\n": types.ProductsDocument,
    "\n  query releases($sellerId: ID, $productId: ID) {\n    releases(sellerId: $sellerId, productId: $productId) {\n      id\n      name\n      notes\n      releaseDate\n      prettyReleaseDate\n    }\n  }\n": types.ReleasesDocument,
    "\n  mutation UpsertProduct($input: UpsertProductInput!) {\n    upsertProduct(input: $input) {\n      product {\n        id\n        name\n        description\n        coverImgUrl\n        thumbnailImgUrl\n        price\n        currency\n        themeColor\n      }\n      errors\n    }\n  }\n": types.UpsertProductDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query sellerView($id: ID, $email: String) {\n    seller(id: $id, email: $email) {\n      id\n      name\n      email\n      avatarUrl\n    }\n  }\n"): (typeof documents)["\n  query sellerView($id: ID, $email: String) {\n    seller(id: $id, email: $email) {\n      id\n      name\n      email\n      avatarUrl\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateRelease($input: CreateReleaseInput!) {\n    createRelease(input: $input) {\n      release {\n        id\n        name\n        notes\n        releaseDate\n        prettyReleaseDate\n      }\n      errors\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRelease($input: CreateReleaseInput!) {\n    createRelease(input: $input) {\n      release {\n        id\n        name\n        notes\n        releaseDate\n        prettyReleaseDate\n      }\n      errors\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ProductView($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      description\n      coverImgUrl\n      thumbnailImgUrl\n      prettyLatestRelease\n      themeColor\n      price\n      prettyPrice\n      currency\n      seller {\n        id\n        name\n        email\n      }\n      releases {\n        id\n        name\n        notes\n        releaseDate\n        prettyReleaseDate\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProductView($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      description\n      coverImgUrl\n      thumbnailImgUrl\n      prettyLatestRelease\n      themeColor\n      price\n      prettyPrice\n      currency\n      seller {\n        id\n        name\n        email\n      }\n      releases {\n        id\n        name\n        notes\n        releaseDate\n        prettyReleaseDate\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query products($sellerId: ID) {\n    products(sellerId: $sellerId) {\n      id\n      name\n      description\n      coverImgUrl\n      thumbnailImgUrl\n      prettyLatestRelease\n      themeColor\n      price\n      prettyPrice\n      currency\n    }\n  }\n"): (typeof documents)["\n  query products($sellerId: ID) {\n    products(sellerId: $sellerId) {\n      id\n      name\n      description\n      coverImgUrl\n      thumbnailImgUrl\n      prettyLatestRelease\n      themeColor\n      price\n      prettyPrice\n      currency\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query releases($sellerId: ID, $productId: ID) {\n    releases(sellerId: $sellerId, productId: $productId) {\n      id\n      name\n      notes\n      releaseDate\n      prettyReleaseDate\n    }\n  }\n"): (typeof documents)["\n  query releases($sellerId: ID, $productId: ID) {\n    releases(sellerId: $sellerId, productId: $productId) {\n      id\n      name\n      notes\n      releaseDate\n      prettyReleaseDate\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpsertProduct($input: UpsertProductInput!) {\n    upsertProduct(input: $input) {\n      product {\n        id\n        name\n        description\n        coverImgUrl\n        thumbnailImgUrl\n        price\n        currency\n        themeColor\n      }\n      errors\n    }\n  }\n"): (typeof documents)["\n  mutation UpsertProduct($input: UpsertProductInput!) {\n    upsertProduct(input: $input) {\n      product {\n        id\n        name\n        description\n        coverImgUrl\n        thumbnailImgUrl\n        price\n        currency\n        themeColor\n      }\n      errors\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;