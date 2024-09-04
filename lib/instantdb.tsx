"use client";
import type Schema from "@/types/schema";
import { init } from "@instantdb/react";

export const INSTANT_APP_ID = process.env.NEXT_PUBLIC_INSTANTDB_APP_ID;
export const isDev = process.env.NODE_ENV === "development";

export const db = init<Schema>({ appId: INSTANT_APP_ID, devtool: isDev });
