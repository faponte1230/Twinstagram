import React from "react";
import GalleryPic from "./GalleryPic";

function Gallery({twins, deleteTwin}){
    const collection = twins.map((t) => (
        <GalleryPic key={t.id} twin={t} deleteTwin={deleteTwin}/>
    ))
    
    return (
        <div className="card">{collection}</div>
    )
}

export default Gallery