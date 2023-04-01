import React from "react";
import LoginForm from "./LoginForm";

function Home(){
    return (
        <div>
            <header className="App-header">
                <h1> TwinstaGram</h1>
                <h4>The Social Media Platform Exclusively For Twins!</h4>
            </header>
            <LoginForm/>
        </div>
    )
}

export default Home