import React from "react";
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import About from "./About";
import Home from "./Home"
import Shop from "./Shop";
import Contact from "./Contact"
import "./App.css";


function App() {
  
  return (
  <Router>
    <nav className="nav">
      <Link className="link" to="/about">About</Link>
        <Link className="link" to="/shop">Shop</Link>
        <Link className="link" to="/contact">contact</Link>
    </nav>

    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Home />} />
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </Router>
  )
}

export default App