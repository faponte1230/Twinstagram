import React from "react";
import { useHistory } from "react-router-dom";


function Home(){
    const history = useHistory()

    function handleStart(){

        history.push('/upload')
    }

    return (
        <div className="home">
            <section id='home'>
                <h2> Welcome to TwiinstaGram</h2>
                
                <h4>~ Our Chat is still in beta ~<br></br></h4>
                <strong>Try it out!</strong><br></br>
                <button onClick={handleStart}>Get Started</button>
            </section> 
            
        </div>
    )
}

export default Home