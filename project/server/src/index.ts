import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createDB } from './db/db-client';
import { TodoResolver } from './resolvers/Todo';

dotenv.config();

async function main() {
  await createDB();
  const app = express();

  // // CORS 설정 (SSE 경로에만 적용)
  // app.use(
  //   cors({
  //     origin: [
  //       'http://localhost:3000', // 클라이언트 주소 추가
  //       'https://studio.apollographql.com', // Apollo Studio 허용
  //       // 추가 허용할 주소들
  //       // 'https://todo-server-coral-iota.vercel.app',
  //       'https://jsfiddle.net',
  //       'https://todo-web-nu.vercel.app',
  //     ],
  //     credentials: true,
  //   }),
  // );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TodoResolver],
    }),
    // introspection: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    persistedQueries: false,
    cache: 'bounded',
  });

  app.get('/', (req, res) => {
    res.status(200).send(); // for health check
    console.log('success');
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: {
      // 아폴로 스튜디오를 GraphQL 테스트 용도로 활용하기 위해 https://studio.apollographql.com도 허용하도록 구성
      origin: [
        'http://localhost:3000',
        'https://studio.apollographql.com',
        // 'https://todo-server-coral-iota.vercel.app',
        'https://todo-web-nu.vercel.app',
      ],
      credentials: true,
    },
  });

  const httpServer = http.createServer(app);

  httpServer.listen(process.env.PORT || 4000, () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`
            server started on => http://localhost:4000
            graphql playground => http://localhost:4000/graphql
            `);
    } else {
      console.log(`
            Production server Started...
            `);
    }
  });
}

main().catch((err) => console.error(err));
