import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Query {
    health: String!,
    name:String!
  }
`;

const resolvers = {
  Query: {
    health: () => "API is running",
    name :()=>"Name"
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: Number(process.env.PORT ?? 8787) },
});

console.log(`API ready at ${url}`);
