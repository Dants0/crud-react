import React from 'react';
import "./App.css";

import Logo from "../src/components/templates/Logo";
import Nav from "../src/components/templates/Nav";
import Home from "../src/components/templates/Home"
import Footer from "../src/components/templates/Footer";


function App() {
  return (
    <div className="App">
      <Logo/>
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
