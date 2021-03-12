import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type Query {
    getAllUsers: [User]
    getToken(email: String, password: String): String
    getProducts: [Product]
    getPurchases: [Purchase]
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Product {
    id: ID!
    description: String!
    weight: String!
    price: String!
    quantity: Int
  }

  type Purchase {
    id: ID!
    title: String!
    date: String!
    goods: [Product]
  }

  input UserInput {
    id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input ProductInput {
    id: ID
    description: String
    weight: String
    price: String
  }

  input PurchaseInput {
    id: ID
    title: String
    date: String
    goods: [ProductInput]
  }

  type Mutation {
    createUser(input: UserInput): User!
    createProduct(input: ProductInput): Product!
    deleteProduct(input: ProductInput): [Product!]
    createPurchase(input: PurchaseInput): Purchase
    deletePurchase(input: PurchaseInput): [Purchase]
  }
`;
