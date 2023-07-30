import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Places from './Places';
import Place from './Place';
import Reviews from './Reviews';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserProvider } from "./context/user";



function App() {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    fetch("/places ")
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setPlaces(data)
      })
  }, [])
  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/places" element={<Places places={places} setPlaces={setPlaces} />} />
          <Route exact path="/places/:id" element={<Place />} />
          <Route exact path="/reviews" element={<Reviews />} />
        </Routes>
      </UserProvider>

    </div>
  );
}

export default App;
