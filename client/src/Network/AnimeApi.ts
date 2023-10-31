async function getErrorOrAnime(input: RequestInfo, init: RequestInit) {


    const response = await fetch(input, init);

    if(response.ok){
        const data = await response.json();

        return data;
    }
    else{
        const errorBody = await response.json();

        throw Error(errorBody.error)
    }

    
}

export async function getStreams(episodeId: string) {
    const response = await getErrorOrAnime("/anime/stream", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({epId: episodeId})
    })


    return response;
}


export async function getAnimeInfo(animeid: string) {

    const response = await getErrorOrAnime("/anime/info", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },


        body: JSON.stringify({id: animeid})
    })


    return response;
    
}


export async function getSearchResults(anime: string) {

    const response = await getErrorOrAnime("/anime/search", {
        
        
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },


        body: JSON.stringify({animeName: anime})
    
    
    
    })


    return response;



    
}

