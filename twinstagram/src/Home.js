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
                <h2> About TwiinstaGram</h2>
                <h4>TwinstaGram is the newest social platform for users who have a double!<br></br>
                To get started, click 'Get Started'. Then enter your twin information!<br></br>
                The upload form will redirect you to the gallery, where all twins live!</h4>
                <p></p>
                <button onClick={handleStart}>Get Started</button>
            </section> 
            
        </div>
    )
}

export default Home