import { cleanEnv, port, str } from "envalid";

export default cleanEnv (process.env, {
    Mongo_Connect: str(),
    PORT: port(),
    Anime_Search : str()
})