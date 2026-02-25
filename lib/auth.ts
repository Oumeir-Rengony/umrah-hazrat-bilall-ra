import { APIError, betterAuth } from "better-auth";
import { createAuthMiddleware } from "better-auth/api";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getClient } from "@/lib/mongoose";

const ALLOWED_EMAILS = process.env.ALLOWED_EMAILS!;

const client = await getClient();


export const auth = betterAuth({
  database: mongodbAdapter(client),
  baseURL: process.env.BETTER_AUTH_URL,
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID! as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET! as string,
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user, ctx) => {

          if (!ALLOWED_EMAILS.includes(user?.email)) {
            return false;
          }

        },
      },
    },
  },
  hooks: {
    after: createAuthMiddleware(async (ctx) => {

      // This is the Google OAuth return
      if (!ctx.path.startsWith("/callback/")) return;

      const provider = ctx.params?.id;
      if (provider !== "google") return;


      const email = ctx.context?.newSession?.user?.email || "";

      if (!ALLOWED_EMAILS.includes(email)) {
        return ctx.redirect("/auth/denied");
        // throw new APIError("FORBIDDEN", {
        //   message: "Google account not allowed",
        // });
      }


    }),
  },
});

export type Session = typeof auth.$Infer.Session;