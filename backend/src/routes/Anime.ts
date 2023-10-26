import { Router } from "express";

import * as AnimeApi from "../controller/Anime"

export const routes = Router();

routes.post("/search", AnimeApi.SearchAnime)

routes.get("/topAnime", AnimeApi.TopAnime)

routes.get("/recent", AnimeApi.RecentReleases)