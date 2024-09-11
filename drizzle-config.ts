import { defineConfig } from "./Server/node_modules/drizzle-kit";
import { env } from "./Server/src/env";

export default defineConfig({
  schema: "./Server/src/db/schema.ts",
  out: "./.migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
