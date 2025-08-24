import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import passport from "passport";
import session from "express-session";
import connectMongo from "connect-mongodb-session";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { buildContext } from "graphql-passport";
import mergedResolvers from "./resolvers/index.js";
import mergedTypeDefs from "./typeDefs/index.js";
import { connectDB } from "./db/connectDB.js";
import { configurePassport } from "./passport/passport.config.js";
import job from "./cron.js";
import { fileURLToPath } from 'url';

dotenv.config();
configurePassport();

const app = express();
const httpServer = http.createServer(app);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ========== ✅ CORS middleware FIRST ==========
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://expense-tracker-pi-virid-11.vercel.app",
    "https://expense-tracker-thenewgamerzy-4975s-projects.vercel.app"
  ],
  credentials: true
}));

// ========== ✅ Session + Passport ==========
const MongoDBStore = connectMongo(session);
const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions"
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
  store
}));

app.use(passport.initialize());
app.use(passport.session());

// ========== ✅ Apollo Server Setup ==========
const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/graphql",
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => buildContext({ req, res }),
  })
);

// ========== ✅ Serve frontend ==========
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// ========== ✅ Start Server ==========
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
await connectDB();
job.start();

console.log(`🚀 Server ready at http://localhost:4000/graphql`);
