import React, { useState, useContext } from 'react';
import { UserContext } from './context/user';

const Signup = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const { signup } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(resp => resp.json())
            .then(user => {
                if (!user.errors) {
                    signup(user)
                } else {
                    setUserName("")
                    setPassword("")
                }
            })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>User Name:</label>
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)}></input>
                <label>User Password:</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input type="submit" />
            </form>

        </div>
    )
}

export default Signup
