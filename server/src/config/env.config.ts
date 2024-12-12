import dotenv from "dotenv";
import { cleanEnv, str, num } from "envalid";

// Load environment variables from the .env file
dotenv.config();

export const env = cleanEnv(process.env, {
    PORT: num(),
    MONGO_DB_URL: str()
});

