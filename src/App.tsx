
import './App.css'
import Home from './Home'
import Foobar from "./Foobar";
import CartaForbiceSasso from "./carta-forbice-sasso/CartaForbiceSasso";
import CFSGame from "./carta-forbice-sasso/CFSGame";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foobar" element={<Foobar />} />
        <Route path="/carta-forbice-sasso" element={<CartaForbiceSasso />} />
        <Route path='/carta-forbice-sasso/uman-vs-pc' element={<CFSGame uman={true} />} />
        <Route path='/carta-forbice-sasso/pc-vs-pc' element={<CFSGame uman={false} />} />
      </Routes>
    </Router>
  );
}

export default App;
