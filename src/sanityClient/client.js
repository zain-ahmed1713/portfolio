import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: import.meta.env.VITE_DATASET,
    useCdn: true,
    apiVersion: '2024-07-09',
})