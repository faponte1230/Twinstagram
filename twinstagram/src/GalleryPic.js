import React, {useState} from "react";

function GalleryPic({twin, deleteTwin}){
    const [isFav, setIsFav] = useState(false)
    const [likes, setLikes] = useState(0)
    
    function handleDelete(){
        fetch(`http://localhost:3000/Twins/${twin.id}` , {
              method: 'DELETE' ,
            })
            deleteTwin(twin.id)
    }
    //fix likes
    function handleLike(){
        setLikes((likes) => likes + 1)
        /*fetch(`http://localhost:3000/Twins/${twin.id}`, {
            method: 'PATCH' ,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'likes': likes + 1
            })
            .then(res => res.json())
        }) */
    }

    function handleFavToggle(){
        setIsFav(isFav =>!isFav)
      }

    return (
        <div className="card">
            <img src={twin.img} alt={'Not Found'} className="img"/>
            <h5>Likes:{likes} </h5>
            <h4>{twin.name}</h4>
            <p>{twin.caption}</p>
             {isFav ? (
             <button className="emoji-button favorite active" onClick={handleFavToggle}>★</button>
                 ) : (
            <button className="emoji-button favorite"onClick={handleFavToggle}>☆</button>
                )}
            <br></br><button className="btn" onClick={handleLike}> Click To Like! </button>
            <button className="btn" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default GalleryPic