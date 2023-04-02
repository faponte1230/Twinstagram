import React from "react";
import { useHistory } from "react-router-dom";


function Home(){
    const history = useHistory()

    function handleStart(){

        history.push('/upload')
    }

    return (
        <div>
            <section id='home'>
                <h2> About TwiinstaGram</h2>
                <h4>TwinstaGram is the newest social platform for users who have a double! </h4>
                <p></p>
                <button onClick={handleStart}>Get Started</button>
            </section> 
            
        </div>
    )
}

export default Home