import { NavLink, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <>
      <header className="bar">
        <div className="wrap">
          <a className="wordmark" href="https://spectivis.com">
            Spectivis <span>Cloud</span>
          </a>
          <nav aria-label="Pages">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/about/deep/link">Deep link</NavLink>
          </nav>
        </div>
      </header>
      <main className="wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="foot">
        <div className="wrap">
          <span>Hosted on Spectivis Cloud</span>
          <a href="https://spectivis.com">spectivis.com</a>
        </div>
      </footer>
    </>
  );
}
