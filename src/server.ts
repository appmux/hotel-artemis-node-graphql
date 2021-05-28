import express from "express";
import {ApolloServer} from "apollo-server-express";
import {createServer} from "http";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import {schema} from "./services/schema";
import mongoose from "mongoose";

const start = async () => {
  const PORT = process.env.PORT || 5000;
  const app = express();

  app.use(cors({origin: true}));
  app.use(helmet({contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false}));
  app.use(compression());

  const server = new ApolloServer({schema});

  server.applyMiddleware({app, path: "/graphql"});

  await mongoose.connect('mongodb://mongodb-server:27017/reservations', {useNewUrlParser: true, useUnifiedTopology: true});

  const httpServer = createServer(app);

  httpServer.listen({port: PORT}, (): void =>
    console.log(`Hotel Artemis GraphQL-Server is running on http://localhost:${PORT}/graphql`)
  );
};

start();
