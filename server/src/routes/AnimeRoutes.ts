import { Router } from "express";

import * as AnimeApi from "../controller/AnimeController"

export const routes = Router();

routes.post("/search", AnimeApi.SearchAnime)

routes.get("/topAnime", AnimeApi.TopAnime)

routes.get("/recent", AnimeApi.RecentReleases)

routes.post("/info", AnimeApi.AnimeInfo)


routes.post("/server", AnimeApi.GetServers)

routes.post("/stream", AnimeApi.GetStreaming)

routes.post("/stream", AnimeApi.AnimeStreams)

