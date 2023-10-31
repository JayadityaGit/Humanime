import   { RequestHandler } from "express";
import createHttpError from "http-errors";
import "dotenv/config"
import env from "../util/validatenv"



interface SearchAnimeRequestBody{
    animeName: string,
    page?: string
}

export const SearchAnime: RequestHandler<unknown, unknown, SearchAnimeRequestBody, unknown>  = async (req, res, next) => {
    
    try {

        const animeName = req.body.animeName;

        if(!animeName){
            throw createHttpError(400, "animename is requried")
        }

        const page = req.body.page;

        const response = await fetch(env.Anime_Search+"/"+animeName+"?page="+page, {method:"GET"})

        if(!response){
            throw createHttpError(500, "server could not fetch the anime !!")
        }

        
        const data = await response.json();

        res.status(200).json(data)

        
        
    } catch (error) {
        next(error)
    }

}



export const TopAnime: RequestHandler =async (req, res, next) => {

    
    
    try {
        //throw createHttpError(500, "HEllo there am i visible or causing u problems lol")
        
        const response = await fetch(env.Anime_Search+"/top-airing", {method:"GET"})

        if(!response){
            throw createHttpError(500, "server could not fetch top airing anime")
        }


        const topAiring = await response.json();

        res.status(200).json(topAiring)

    } catch (error) {
        next(error)
    }

}



export const RecentReleases: RequestHandler =async (req, res, next) => {
    
    try {
        
        const response = await fetch(env.Anime_Search+"/recent-episodes", {method:"GET"})

        if(!response){
            throw createHttpError(500, "server could not fetch recent releases")
        }


        const recent = await response.json();

        res.status(200).json(recent)

    } catch (error) {
        next(error)
    }

}



export const AnimeInfo: RequestHandler =async (req, res, next) => {

    try {

        const animeId = req.body.id;

        if(!animeId){
            throw createHttpError(400, "animeId is missing !")
        }
        
        const response = await fetch(env.Anime_Search+"/info/"+animeId, {method:"GET"});

        if(!response){
            throw createHttpError(500, "server could not fetch the anime info")
        }

        const info = await response.json();

        res.status(200).json(info)

    } catch (error) {
        next(error)
    }
    
}



export const AnimeStreams: RequestHandler =async (req, res, next) => {
    try {

        const episodeId = req.body.epId;

        if(!episodeId){
            throw createHttpError(400, "episodeId is missing !!!!")
        }

        const response = await fetch(env.Anime_Search+"/watch/"+episodeId, {method: "GET"})


        const animeStreamLinks = await response.json();


        res.status(200).json(animeStreamLinks)
        
    } catch (error) {
        next(error)
    }
}