const publicProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || "";
const publicDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || "";

export const apiVersion =
  process.env.SANITY_API_VERSION || process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const projectId = publicProjectId;
export const dataset = publicDataset;
export const readToken = process.env.SANITY_READ_TOKEN;
export const isSanityConfigured = Boolean(projectId && dataset);

export function getSanityEnv() {
  return {
    apiVersion,
    dataset,
    projectId,
    readToken,
    isSanityConfigured,
  };
}
