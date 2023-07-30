import React, { useState, useContext } from 'react';
import { UserContext } from './context/user';

const Signup = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <form action="">
                <label>User Name:</label>
                <input type="text"></input>
                <label>User Name:</label>
                <input type="text"></input>
            </form>

        </div>
    )
}

export default Signup
