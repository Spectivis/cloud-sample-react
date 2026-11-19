import { Link, useLocation } from "react-router-dom";

export function NotFound() {
  const { pathname } = useLocation();

  return (
    <section className="welcome solo">
      <div className="welcome-copy">
        <h1>Page not found</h1>
        <p className="intro">
          The router has no page for <code>{pathname}</code>. The server still sent the app, because
          of the fallback to <code>index.html</code>.
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
