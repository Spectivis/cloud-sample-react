import { NavLink, Route, Routes } from "react-router-dom";
import { version as reactVersion } from "react";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <div className="page">
      <header className="top">
        <span className="host">React sample</span>
        <nav aria-label="Pages">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <a className="outline" href="https://spectivis.com">
            Spectivis Cloud
          </a>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="foot">
        <span>React {reactVersion}, built with Vite</span>
        <a href="https://spectivis.com">spectivis.com</a>
      </footer>
    </div>
  );
}
