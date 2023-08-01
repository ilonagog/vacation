import React, { useContext } from 'react'
import { UserContext } from './context/user'

const Home = () => {
  const { user, loggedIn } = useContext(UserContext)
  if (loggedIn) {
    return (
      <div><h3>Welcome {user.username}</h3></div>
    )
  } else {
    return (
      <div className='home'>
        <h3>Please Login or Signup</h3>
        <h3>{user.username}</h3>
        <img className="cover" src="https://media.istockphoto.com/id/489833698/photo/two-lounge-chairs-under-tent-on-beach.jpg?s=612x612&w=0&k=20&c=df_6Jkb5YreyaAcGVbdcRrTP4dZ-opUrYWtgRC3eKKI=" alt='beach' />
      </div>
    )
  }
}

export default Home
