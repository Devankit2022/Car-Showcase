export {}

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			RAPIDAPI_KEY: string
			JAVASCRIPT_MASTERY_API_KEY: string
			ENV: "test" | "dev" | "prod"
		}
	}
}
