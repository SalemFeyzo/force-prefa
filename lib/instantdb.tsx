import type Schema from "@/types/schema";
import { init } from "@instantdb/react";
import { init as initAdmin } from "@instantdb/admin";
import { init as initCore } from "@instantdb/core";

export const INSTANT_APP_ID = process.env.NEXT_PUBLIC_INSTANTDB_APP_ID;
export const INSTANT_ADMIN_TOKEN = process.env.INSTANT_ADMIN_TOKEN;
export const isDev = process.env.NODE_ENV === "development";

export const db = init<Schema>({ appId: INSTANT_APP_ID, devtool: isDev });

export const dbAdmin = initAdmin({
  adminToken: INSTANT_ADMIN_TOKEN,
  appId: INSTANT_APP_ID,
});

export const dbCore = initCore({
  appId: INSTANT_APP_ID,
});
