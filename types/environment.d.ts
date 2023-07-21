export {}

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_RAPIDAPI_KEY: string
			NEXT_PUBLIC_JAVASCRIPT_MASTERY_API_KEY: string
			ENV: "test" | "dev" | "prod"
		}
	}
}
