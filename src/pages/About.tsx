import { useLocation } from "react-router-dom";

export function About() {
  const { pathname } = useLocation();

  return (
    <section className="intro">
      <p className="eyebrow">Client route</p>
      <h1>About</h1>
      <p className="lead">
        You are at <code>{pathname}</code>. Reload this page. The server has no file at this path, so
        it answers with <code>index.html</code> and the router shows this page. That is the
        single-page fallback.
      </p>
    </section>
  );
}
