import { Link, useLocation } from "react-router-dom";

export function NotFound() {
  const { pathname } = useLocation();

  return (
    <section className="intro">
      <p className="eyebrow">No route</p>
      <h1>Page not found</h1>
      <p className="lead">
        The router has no page for <code>{pathname}</code>. The server still sent the app, because of
        the fallback to <code>index.html</code>. <Link to="/">Back to the start page</Link>.
      </p>
    </section>
  );
}
