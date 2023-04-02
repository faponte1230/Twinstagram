import React, {useState} from "react";

function GalleryPic({twin, deleteTwin}){
    const [isFav, setIsFav] = useState(false)
    const [likes, setLikes] = useState(0)
    
    function handleDelete(){
        fetch(`http://localhost:3000/Twins/${twin.id}` , {
              method: 'DELETE' ,
            })
            console.log(twin, 'in child')
            deleteTwin(twin.id)
    }
   
    function handleFavToggle(){
        setIsFav(isFav =>!isFav)
      }

    return (
        <div className="card">
            <img src={twin.img} alt={'Not Found'} className="img"/>
            <h4>{twin.name}</h4>
            <h4>Likes:{likes}</h4>
            <p>{twin.caption}</p>
             {isFav ? (
             <button className="emoji-button favorite active" onClick={handleFavToggle}>★</button>
                 ) : (
            <button className="emoji-button favorite"onClick={handleFavToggle}>☆</button>
                )}
            <button> Click To Like! </button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default GalleryPic