import React from "react";
import NewMessage from "./NewMessage";

function ChatComponent({msgs, msgDelete}){

    const msgsList = msgs.map(msg => {
       return <NewMessage key={msg.id} msg={msg} msgDelete={msgDelete}/>
    })

    return (
        <div className="home">
            <section className="chat">
            <div className="msgBox">
                <ul>{msgsList}</ul>
            </div>
            </section>
        </div>
    )
}

export default ChatComponent