import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Packages from './Packages';
import Package from './Package';
import Reviews from './Reviews';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/packages" element={<Packages />} />
        <Route exact path="/packages/:id" element={<Package />} />
        <Route exact path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
