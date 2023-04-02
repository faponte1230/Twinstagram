import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav>
            <NavLink exact to ='/'>Home</NavLink>
            <NavLink to = '/upload'>Upload</NavLink>
            <NavLink to = '/gallery'>Gallery</NavLink>
            <NavLink to = '/chat'>Chat</NavLink>
        </nav>
    )
}

export default NavBar