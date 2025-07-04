import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {makeSchema, queryType, stringArg} from 'nexus';

const Query = queryType({
   definition: (t) => {
       t.string('greeting', {
           args: { },
           resolve: () => `Hello World!`,
       })
   },
});

const schema = makeSchema({ types: [Query]});

const server = new ApolloServer({ schema})

const { url } = await startStandaloneServer(server, { listen: { port: 9000 }});
console.log(`Server running at ${url}`);
