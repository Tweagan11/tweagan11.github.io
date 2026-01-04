import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Projects from './Projects';

function Home() {
  return (
    <>
      <h2>Teagan Smith</h2>
      <p>Welcome to my personal website</p>
    </>
  );
}

function About() {
  return <h2>About page</h2>;
}

function Resume() {
  return <h2>Resume page</h2>;
}


function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link> <Link className="resume" to="/resume">Resume</Link>
    </nav>
  );
}

export default function App() {
  return (
    <>
    <header>
      <NavBar />
    </header>
    <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
      
    </>
  );
}