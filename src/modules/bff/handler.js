import { ApolloServer, gql } from 'apollo-server-micro';
import { makeExecutableSchema } from 'graphql-tools';
import layoutModule from './modules/layout';

const typeDefs = gql`
  enum ContentLocale {
    PT_BR
    EN_US
  }
  type Query {
    greet: String
  }

  input CreateSampleTextInput {
    text: String!
  }
  type Mutation {
    createSampleText(input: CreateSampleTextInput): String!
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [typeDefs, layoutModule.typeDefs],
  resolvers: {
    ...layoutModule.resolvers.Commons,
    Query: {
      greet: () => 'Welcome to DevSoutinho verso',
      ...layoutModule.resolvers.Query,
    },
    ...layoutModule.resolvers.Commons,
    Mutation: {
      createSampleText: (_, args) => args.input.text,
      ...layoutModule.resolvers.Mutation,
    },
  },
});

export const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});

export default server.createHandler({
  path: '/api/graphql',
});
