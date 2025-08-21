import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

// const API_BASE = "http://127.0.0.1:8000/api";
const API_BASE = "https://mibrahim72.pythonanywhere.com/api"; // Replace with your actual API base URL

function Navbar({ settings }) {
  const navigate = useNavigate();

  return (
    <header className="fixed w-full z-50 bg-sky-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-2">
        
        {/* اللوجو + اسم الشركة */}
        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => navigate("/")}
        >
          {settings.logo && (
            <img
              src={settings.logo}
              alt="Logo"
              className="h-16 w-auto drop-shadow-lg transform transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>

        {/* روابط القائمة */}
        <nav className="flex gap-6 font-medium drop-shadow-lg">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-800 hover:text-yellow-500 transition-colors duration-300"
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/settings/`)
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch settings");
        return r.json();
      })
      .then((data) => {
        setSettings(data[0] || null);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 font-semibold">⚠️ {error}</p>
      </div>
    );
  }

  if (!settings) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">⚠️ No site settings found.</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        
        {/* Navbar */}
        <Navbar settings={settings} />

        {/* صفحات */}
        <div className="flex-grow pt-20">
          <main>
            <Routes>
              <Route path="/" element={<Home API_BASE={API_BASE} />} />
              <Route path="/about" element={<About settings={settings} />} />
              <Route path="/services" element={<Services API_BASE={API_BASE} />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact API_BASE={API_BASE} />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <footer className="bg-sky-50 text-gray-700 text-center py-16">
          <p>© {new Date().getFullYear()} {settings.company_name}. All rights reserved.</p>

          <div className="flex justify-center gap-4 mt-3">
            {settings.facebook && (
              <a href={settings.facebook} target="_blank" rel="noreferrer" className="hover:text-blue-400">Facebook</a>
            )}
            {settings.twitter && (
              <a href={settings.twitter} target="_blank" rel="noreferrer" className="hover:text-blue-400">Twitter</a>
            )}
            {settings.linkedin && (
              <a href={settings.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400">LinkedIn</a>
            )}
          </div>

          <div className="mt-3 flex justify-center items-center gap-2">
            <span>Developed by</span>
            <a
              href="https://www.linkedin.com/in/mohamed--gaber/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-yellow-500 hover:text-yellow-400 flex items-center gap-1"
            >
              Mohamed Gaber
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                2.239 5 5 5h14c2.761 0 5-2.239 
                5-5v-14c0-2.761-2.239-5-5-5zm-11 
                19h-3v-10h3v10zm-1.5-11.25c-.966 
                0-1.75-.784-1.75-1.75s.784-1.75 
                1.75-1.75 1.75.784 
                1.75 1.75-.784 1.75-1.75 
                1.75zm13.5 11.25h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 
                1.121-2.5 2.5v5.5h-3v-10h3v1.4c.818-1.144 
                2.291-1.9 3.833-1.9 2.481 0 4.667 
                2.186 4.667 4.667v6.833z"/>
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}
