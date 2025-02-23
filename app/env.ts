import { z } from "zod";

const viteEnvVariablesSchema = z.object({
    VITE_PAT: z.string(),
})
const serverEnvVariablesSchema = z.object({
    PAT: z.string(),
})

const parsedClientEnv = viteEnvVariablesSchema.safeParse(import.meta.env);

if (!parsedClientEnv.success && parsedClientEnv.error) {
    throw new Error('Invalid environment variables'+parsedClientEnv.error.flatten().fieldErrors);
}

const parsedServerEnv = serverEnvVariablesSchema.safeParse(import.meta.env);

if (!parsedServerEnv.success && parsedServerEnv.error) {
    throw new Error('Invalid environment variables'+parsedServerEnv.error.flatten().fieldErrors);
}


// export const envVariables = parsedClientEnv.data!
export const viteEnvVariables = parsedClientEnv.data!
export const serverEnvVariables = parsedServerEnv.data!


