import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type Query {
    getAllUsers: [User]
    getUser(email: String): User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input UserInput {
    id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Mutation {
    createUser(input: UserInput): User!
  }
`;
