import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/game";
import Home from "./components/home";
import Library from "./components/library";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <header>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item className="navItem">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItem">
          <Nav.Link href="/game">Game</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItem">
          <Nav.Link href="/library">Library</Nav.Link>
        </Nav.Item>
      </Nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/library" element={<Library />} />
        </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
