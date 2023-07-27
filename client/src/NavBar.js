import React from 'react'
import { Link } from "react-router-dom"



const NavBar = () => {
    return (
        <div>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/places">Places</Link>
            <Link className='navLink' to="/reviews">Reviews</Link>
            <Link className='navLink' to="/login">Log In</Link>
        </div>
    )
}

export default NavBar
