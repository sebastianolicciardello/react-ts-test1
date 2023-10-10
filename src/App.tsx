
import './App.css'
import Home from './Home'
import Foobar from "./Foobar";
import CartaForbiceSasso from "./CartaForbiceSasso";
import GiocoUmanoVsComputer from "./components/GiocoUmanoVsComputer";
import GiocoComputerVsComputer from "./components/GiocoComputerVsComputer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foobar" element={<Foobar />} />
        <Route path="/carta-forbice-sasso" element={<CartaForbiceSasso />} />
        <Route path='/uman-vs-pc' element={<GiocoUmanoVsComputer />} />
        <Route path='/pc-vs-pc' element={<GiocoComputerVsComputer />} />
      </Routes>
    </Router>
  );
}

export default App;
