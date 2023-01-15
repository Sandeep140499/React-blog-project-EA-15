// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Navbars/Home';
import Header from './Components/Header';
import Nav from './Components/Navbars/Nav';
import Bollywood from './Components/Navbars/Bollywood';
import Technology from './Components/Navbars/Technology';
import Hollywood from './Components/Navbars/Hollywood';
import Fitness from './Components/Navbars/Fitness';
import Food from './Components/Navbars/Food';

function App() {
  return (
    <>
    <Header/>
    <Nav />
    <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/Bollywood" element={<Bollywood />} />
        <Route path="/Technology" element={<Technology />}  />
        <Route path="/Hollywood" element={<Hollywood />}  />
        <Route path="/Fitness" element={<Fitness />}  />
        <Route path="/Food" element={<Food />}  />
      </Routes>
    </>
  );
}

export default App;
