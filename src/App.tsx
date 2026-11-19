import { NavLink, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <>
      <nav>
        <NavLink to="/" end>Home</NavLink> <NavLink to="/about">About</NavLink>{" "}
        <NavLink to="/about/deep/link">Deep link</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
