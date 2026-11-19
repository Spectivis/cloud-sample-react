import { useLocation } from "react-router-dom";

export function NotFound() {
  const { pathname } = useLocation();

  return (
    <>
      <h1>Page not found</h1>
      <p>
        The router has no page for <code>{pathname}</code>. The server still sent the app, because of
        the fallback to <code>index.html</code>.
      </p>
    </>
  );
}
