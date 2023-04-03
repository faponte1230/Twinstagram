import React from "react";
import NewMessage from "./NewMessage";

function ChatComponent({msgs, msgDelete}){

    const msgsList = msgs.map(msg => {
       return <NewMessage key={msg.id} msg={msg} msgDelete={msgDelete}/>
    })

    return (
        <section className="chat">
            <ul> {msgsList}</ul>
        </section>
    )
}

export default ChatComponent