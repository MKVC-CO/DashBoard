'use strict'

import { getDataVideos } from "./getVideos.js";
import { updateTableVideos } from "./postVideo.js";

export const excludeVideo = async () => {
    const idVideo = localStorage.getItem('deletedVideo')                                                                                                                                          
    const dataBody = await getDataVideos()

    const initDelete = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBody)
    }

    const url = `http://localhost:8080/v1/cultural-path/videos-infantil/${idVideo}`;
    const respose = await fetch(url, initDelete);
    const video = await respose.json()
    alert('Video deletado no sistema!');
    await updateTableVideos()
    return video;
}

