import { version as reactVersion } from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <section className="intro">
        <p className="eyebrow">React {reactVersion}, built with Vite</p>
        <h1>Your starter React app, hosted by Spectivis</h1>
        <p className="lead">
          A single-page app with client routing. Change it or replace it with your own app.
        </p>
      </section>

      <section className="block">
        <header>
          <h2>Next steps</h2>
        </header>
        <div className="block-body">
          <ol className="steps">
            <li>
              <h3>Edit this page</h3>
              <p>
                It lives in <code>src/pages/Home.tsx</code>. Routes are in <code>src/App.tsx</code>.
              </p>
            </li>
            <li>
              <h3>Push to deploy</h3>
              <p>Each push to the connected branch builds the site and publishes it.</p>
            </li>
            <li>
              <h3>Always on</h3>
              <p>A static site has no instance, so it never sleeps and uses no compute credit.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="block">
        <header>
          <h2>How it is served</h2>
          <p>No server code runs for this app.</p>
        </header>
        <div className="block-body">
          <dl className="status">
            <div>
              <dt>Build</dt>
              <dd>
                Cloud runs <code>npm run build</code> and copies the <code>dist</code> folder to its
                static store.
              </dd>
            </div>
            <div>
              <dt>Routing</dt>
              <dd>
                Paths without a file get <code>index.html</code>, and the router picks the page. Open{" "}
                <Link to="/about">About</Link> and reload it, or try a{" "}
                <Link to="/about/deep/link">deep link</Link> with no page.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
