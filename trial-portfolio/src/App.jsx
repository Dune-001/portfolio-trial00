//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {

  return (
    <>

      {/* testing if tailwindcss works
      <div className='min-h-screen bg-blue-100 flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-blue-600'>Tailwind is working! 🎉</h1>
      </div>*/}
      <div className="min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-center py-8">My Portfolio</h1>
        <p className="text-center">Welcome to my portfolio website!</p>
        <Header />
        <Hero />
        <About />

        {/* SECTIONS FOR PROJECTS AND CONTACT */}
        <section id="projects" className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
            <p className="text-center text-gray-600">Projects section inakuja ivi karibuni</p>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Me</h2>
            <p className="text-center text-gray-600">Contact section inakuja nipee time buana</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
