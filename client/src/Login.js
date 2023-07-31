import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
//import Error from './Error'

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { Login } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>User Name:</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                <label>User Password:</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input type="submit" />
            </form>

        </div>
    )
}


export default Login
