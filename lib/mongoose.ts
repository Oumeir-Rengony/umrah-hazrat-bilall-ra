import mongoose from "mongoose";
import { attachDatabasePool } from "@vercel/functions";

declare global {
  var _mongooseConnection:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
        poolAttached: boolean;
      }
    | undefined;
}

const MONGO_URI = process.env.MONGODB_URI!;
const DB_NAME = process.env.MONGODB_NAME!;

if (!MONGO_URI) {
  throw new Error("MONGODB_URI is not defined");
}

let cached = global._mongooseConnection;

if (!cached) {
  cached = global._mongooseConnection = {
    conn: null,
    promise: null,
    poolAttached: false,
  };
}

export async function connectDB() {
  // ✅ Reuse existing connection
  if (cached!.conn) return cached!.conn;

  if (!cached!.promise) {
    cached!.promise = mongoose.connect(MONGO_URI, {
      dbName: DB_NAME,
      maxPoolSize: 10,
      maxIdleTimeMS: 5000,
      appName: "devrel.vercel.integration",
      bufferCommands: false, // 🔴 prevents silent buffering
    });
  }

  cached!.conn = await cached!.promise;

  // ✅ Attach pool once (Vercel-specific)
  if (!cached!.poolAttached) {
    const client = cached!.conn.connection.getClient();
    attachDatabasePool(client);
    cached!.poolAttached = true;
  }

  console.log("Database connected");

  return cached!.conn;
}

/**
 * Optional helper if you need the native MongoDB client
 */
export async function getClient() {
  const conn = await connectDB();
  return conn.connection.getClient().db(DB_NAME);
}