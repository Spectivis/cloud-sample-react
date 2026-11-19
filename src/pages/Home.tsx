import { version as reactVersion } from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <section className="welcome">
        <div className="welcome-copy">
          <h1>Your starter React app</h1>
          <p className="intro">
            Hosted on Spectivis Cloud as a static site. Edit <code>src/pages/Home.tsx</code>, push, and
            the new version goes live. Routes are in <code>src/App.tsx</code>.
          </p>

          <ul className="services">
            <li>
              <span className="name">Build</span>
              <span className="detail">
                Cloud runs <code>npm run build</code> and publishes the <code>dist</code> folder.
              </span>
            </li>
            <li>
              <span className="name">Routing</span>
              <span className="detail">
                Paths without a file get <code>index.html</code>, and the router picks the page.
              </span>
            </li>
            <li>
              <span className="name">Always on</span>
              <span className="detail">
                <span className="state ok">Serving</span> &middot; no instance, so it never sleeps and
                uses no compute credit
              </span>
            </li>
          </ul>

          <div className="actions">
            <Link className="button" to="/about">
              Open a client route
            </Link>
            <a className="button quiet" href="https://spectivis.com">
              Open Spectivis Cloud
            </a>
          </div>
        </div>

        <div className="panel" aria-hidden="true">
          <dl className="panel-meta">
            <div>
              <dt>Library</dt>
              <dd>React {reactVersion}</dd>
            </div>
            <div>
              <dt>Build</dt>
              <dd>Vite</dd>
            </div>
          </dl>
          <div className="panel-word">React</div>
        </div>
      </section>

      <section className="guestbook tight">
        <div>
          <h2>Try the router</h2>
          <p className="sub">
            Open a route, then reload it. The server has no file at that path, so it answers with{" "}
            <code>index.html</code> and the router shows the page.
          </p>
        </div>
        <div>
          <ul className="entries">
            <li>
              <div className="who">
                <strong>
                  <Link to="/about">About</Link>
                </strong>
                <span className="when">/about</span>
              </div>
              <p>A second page, served by the single-page fallback on reload.</p>
            </li>
            <li>
              <div className="who">
                <strong>
                  <Link to="/about/deep/link">Deep link</Link>
                </strong>
                <span className="when">/about/deep/link</span>
              </div>
              <p>A path with no page. The router shows its not found page.</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
