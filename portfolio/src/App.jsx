import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio';
import Curriculo from '../Pages/Curriculo';
import Contato from '../Pages/Contato';
import '../CSS/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;