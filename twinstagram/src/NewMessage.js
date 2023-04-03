import React from "react";

function NewMessage({msg, msgDelete}){

    function handleDeleteClick() {
        fetch(`http://localhost:3000/Messages/${msg.id}`, {
          method: "DELETE" ,
        })
        msgDelete(msg.id)
      }

    return (
        <div>
            <li>
             <em>{msg.body}</em>
            <button onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>
        </li>
        </div>
    )
}

export default NewMessage