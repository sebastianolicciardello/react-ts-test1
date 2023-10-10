
import './App.css'
import Home from './Home'
import Foobar from "./Foobar";
import CartaForbiceSasso from "./CartaForbiceSasso";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foobar" element={<Foobar />} />
        <Route path="/carta-forbice-sasso" element={<CartaForbiceSasso />} />
      </Routes>
    </Router>
  );
}

export default App;
