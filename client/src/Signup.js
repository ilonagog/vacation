import React, { useState, useContext } from 'react';
import { UserContext } from './context/user';

const Signup = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const { signup } = useContext(UserContext)

    return (
        <div>
            <form action="">
                <label>User Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>User Password:</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input type="submit" />
            </form>

        </div>
    )
}

export default Signup
