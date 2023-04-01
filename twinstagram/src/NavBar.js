import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav>
            <NavLink exact to ='/'>Home</NavLink>
            <NavLink to = '/login'>Log In</NavLink>
        </nav>
    )
}

export default NavBar