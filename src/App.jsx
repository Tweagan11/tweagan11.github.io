// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import './App.css'
// import Projects from './Projects';

// function Home() {
//   return (
//     <>
//       <h2>Teagan Smith</h2>
//       <p>Welcome to my personal website</p>
//     </>
//   );
// }

// function About() {
//   return <h2>About page</h2>;
// }

// function Resume() {
//   return <h2>Resume page</h2>;
// }


// function NavBar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link> <Link className="resume" to="/resume">Resume</Link>
//     </nav>
//   );
// }

// export default function App() {
//   return (
//     <>
//     <header>
//       <NavBar />
//     </header>
//     <main className="content">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/resume" element={<Resume />} />
//       </Routes>
//     </main>
      
//     </>
//   );
// }

import { useState, useEffect } from 'react';
import About from './About.jsx';
import timp_peak from './assets/timp.jpg';
import Projects from './proj.jsx';
import Resume from './Resume.jsx';

const MountainPhoto = ({ darkMode }) => (
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <img 
      src={timp_peak}
      alt="Timpanogos Peak"
      className="w-full h-full object-cover opacity-100"
      style={{ 
        objectPosition: 'center center',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
      }}
    />
    {/* Gradient overlay to fade the image edges */}

    {darkMode ? (<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/0"></div>)
    : (<div className="absolute inset-0 bg-gradient-to-b from-white/0 via-transparent to-white/80"></div>)}
  </div>
);

const TopoLines = () => (
  <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute left-0 right-0 border-t border-emerald-700"
        style={{ top: `${i * 12.5}%` }}
      />
    ))}
  </div>
);

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-stone-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}

function Home({ darkMode }) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative">
      <MountainPhoto darkMode={darkMode} />
      <div className="text-center z-10 px-4 py-12 rounded-2xl backdrop-blur-sm bg-white/10 dark:bg-black/15 border border-white/20 dark:border-white/10 shadow-xl">
        <h1 className="text-6xl md:text-7xl font-light text-stone-800 dark:text-stone-50 mb-4 tracking-tight">
          Teagan Smith
        </h1>
        <div className="w-24 h-0.5 bg-emerald-700 dark:bg-emerald-500 mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl text-stone-700 dark:text-stone-100 font-light mb-8">
          Computer Science Student & Outdoorsman
        </p>
        <p className="text-lg text-stone-700 dark:text-stone-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          Building intelligent systems and exploring the wilderness. 
          Currently at the University of Utah, where the mountains meet machine learning.
        </p>
        <div className="flex gap-6 justify-center items-center text-stone-700 dark:text-stone-300">
          <a href="https://github.com/Tweagan11" target="_blank" rel="noopener noreferrer" 
             className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300 text-sm uppercase tracking-wider font-medium">
            GitHub
          </a>
          <span className="text-stone-400 dark:text-stone-500">•</span>
          <a href="https://linkedin.com/in/Teagan-Smith-a0b259246" target="_blank" rel="noopener noreferrer"
             className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300 text-sm uppercase tracking-wider font-medium">
            LinkedIn
          </a>
          <span className="text-stone-400 dark:text-stone-500">•</span>
          <a href="mailto:teagan.ms.ut@gmail.com"
             className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300 text-sm uppercase tracking-wider font-medium">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

function NavBar({ currentPage, setCurrentPage, darkMode, setDarkMode }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' }
  ];
  
  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm border-b border-stone-200 dark:border-stone-700">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <button 
          onClick={() => setCurrentPage('home')}
          className="text-2xl font-light text-stone-800 dark:text-stone-100 tracking-tight hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
        >
          TS
        </button>
        <div className="flex gap-8 items-center">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm uppercase tracking-wider transition-colors ${
                currentPage === item.id 
                  ? 'text-emerald-700 dark:text-emerald-400' 
                  : 'text-stone-600 dark:text-stone-300 hover:text-emerald-700 dark:hover:text-emerald-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-stone-200 dark:border-stone-700 mt-20 py-12 bg-stone-50 dark:bg-stone-900">
      <TopoLines />
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <p className="text-stone-500 dark:text-stone-400 text-sm mb-4">
          Built with React • Inspired by the Wasatch Mountains
        </p>
        <div className="flex gap-6 justify-center items-center text-stone-500 dark:text-stone-400 text-sm">
          <a href="https://github.com/Tweagan11" target="_blank" rel="noopener noreferrer" 
             className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
            GitHub
          </a>
          <span>•</span>
          <a href="https://linkedin.com/in/Teagan-Smith-a0b259246" target="_blank" rel="noopener noreferrer"
             className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
            LinkedIn
          </a>
          <span>•</span>
          <a href="mailto:teagan.ms.ut@gmail.com"
             className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved preference or default to dark mode
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    return true; // Default to dark mode
  });

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home darkMode={darkMode} />;
      case 'about': return <About />;
      case 'projects': return <Projects />;
      case 'resume': return <Resume />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-sans transition-colors duration-300">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}