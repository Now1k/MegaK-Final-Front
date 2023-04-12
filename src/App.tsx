import React, {useState} from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {MainSection} from "./components/main-section/Main-Section";
import {Footer} from "./components/footer/Footer";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;
