//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import React from "react";
import Header from "./components/Header";
import MC from "./components/MC";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-center py-8">My Portfolio</h1>
        <p className="text-center">Welcome to my portfolio website!</p>
        <Header />
        <MC />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
};

export default App;
