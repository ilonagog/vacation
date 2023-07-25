import React from 'react'
import { Link } from "react-router-dom"



const NavBar = () => {
    return (
        <div>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/packages">Package</Link>
            <Link className='navLink' to="/reviews">Reviews</Link>
        </div>
    )
}

export default NavBar
