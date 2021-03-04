import { ApolloServer, gql } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import express from "express";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://t1gergun:zevsgromoff1996@t1gergun.fpfbu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen({ port: 8080 }, () => console.log("server has been started 8080"));
