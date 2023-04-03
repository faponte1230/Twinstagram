import React, {useState} from "react";

function ChatForm({addMsg}){
    const [input, setInput] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/Messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'body': input
            })
        })
        .then(res => res.json())
        .then(data =>  {
        console.log(data) 
        addMsg(data)
        setInput('')
        })
            
    }
        
    
    
    return (
        <div className="home">
            <section >
            <form onSubmit={handleSubmit}>
            <input type='text' required name='msg' value={input} onChange={(e) => setInput(e.target.value)} />
            <input type='submit' value='Send' />
            </form>
        </section>
        </div>
    )
}

export default ChatForm