import React, {useEffect ,useState} from "react";
import ChatComponent from "./ChatComponent";
import ChatForm from "./ChatForm";

function Chat(){
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Messages')
        .then(res => res.json())
        .then(data => setMessages(data))
    }, [])

    function addMsg(msg){
        setMessages([...messages, msg])
    }

    function msgDelete(id){
        const deletedMsg = messages.filter(msg => msg.id !== id)
        setMessages(deletedMsg)
    }

    return (
        <div>
            <ChatComponent  msgs={messages} msgDelete={msgDelete} />
            <ChatForm addMsg={addMsg}/>
        </div>
    )
}

export default Chat 