//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import React from "react";
import Header from "./components/Header";
//import MC from "./components/MC";
//import About from "./components/About";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./components/Footer";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        </div>
      </Router>
  );
}

// 404 component
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-4">The page you're looking for doesn't exist.</p>
        <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">Return to Home Page</a>
      </div>
    </div>
  );
};

export default App;
