import { Link, useLocation } from "react-router-dom";

export function About() {
  const { pathname } = useLocation();

  return (
    <section className="welcome solo">
      <div className="welcome-copy">
        <h1>About</h1>
        <p className="intro">
          You are at <code>{pathname}</code>. Reload this page. The server has no file at this path,
          so it answers with <code>index.html</code> and the router shows this page. That is the
          single-page fallback.
        </p>
        <div className="actions">
          <Link className="button quiet" to="/">
            Back to the start page
          </Link>
        </div>
      </div>
    </section>
  );
}
