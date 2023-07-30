import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const { Login } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>User Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>User Password:</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </form>

        </div>
    )
}


export default Login
