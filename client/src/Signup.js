import React, { useState, useContext } from 'react';
import { UserContext } from './context/user';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorList, setErrorList] = useState([])
    const { signup } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
            .then(resp => resp.json())
            .then(user => {
                if (!user.errors) {
                    signup(user)
                    navigate('/')
                } else {
                    setUserName("")
                    setPassword("")
                    setPasswordConfirmation("")
                    const errorList = user.errors.map(e => <li>{e}</li>)
                    setErrorList(errorList)
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
                <label>Confirm ypur Password:</label>
                <input type="text" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
                <input type="submit" />
            </form>
            <ul>{errorList}</ul>
        </div>
    )
}

export default Signup
