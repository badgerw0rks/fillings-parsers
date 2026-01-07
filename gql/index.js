import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { MongoClient } from 'mongodb'


import DbStream from './data-sources/DbStream.js'

const client = new MongoClient('mongodb://localhost:27017/xbrl');
client.connect()

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Stream {
    date: [String!]!
    value: [Float!]!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    getstream(cik: Int): Stream
  }
`;

const mocks = [
  {
    date: ['2025-01-01','2025-01-01'],
    value: [100,200]
  },
  {
    date: ['2025-01-01','2025-01-01'],
    value: [100,200]
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    getstream(Stream, args, contextValue, info) {
      return {
              date: ['2025-01-01','2025-01-01'],
              value: [100,200]
            }
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests


const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({
  dataSources: {
    stream: new DbStream(client.db().collection('companyfacts'))
  }
  }),
})
console.log(`🚀  Server ready at: ${url}`);