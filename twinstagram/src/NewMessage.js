import React from "react";

function NewMessage({msg, msgDelete}){

    function handleDeleteClick() {
        fetch(`http://localhost:3000/Messages/${msg.id}`, {
          method: "DELETE" ,
        })
        msgDelete(msg.id)
      }

    return (
        <li>
             <em>{msg.body}</em>
            <button onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>
        </li>
    )
}

export default NewMessage