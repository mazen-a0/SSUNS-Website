import "server-only";

import { createClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId, readToken } from "@/sanity/env";

const fallbackProjectId = projectId || "placeholder";
const fallbackDataset = dataset || "production";

export function getSanityClient(preview = false) {
  return createClient({
    projectId: fallbackProjectId,
    dataset: fallbackDataset,
    apiVersion,
    useCdn: !preview && process.env.NODE_ENV === "production",
    token: preview ? readToken : undefined,
    perspective: preview && readToken ? "previewDrafts" : "published",
  });
}

export const client = getSanityClient(false);
export { isSanityConfigured };
