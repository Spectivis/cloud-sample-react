# Spectivis Cloud sample: React

A Vite, React and TypeScript single-page app with client-side routing. It shows how Spectivis Cloud serves a static site.

- Routes: `/`, `/about`, and a not-found page for anything else.
- Reload the app on `/about`. The server has no file at that path, so it answers with `index.html` and the router takes over. That is the single-page fallback.
- Output goes to `dist`. A static site has no instance, so it never sleeps and uses no compute credit. It counts toward bandwidth.

## Deploy it on Spectivis Cloud

1. In Spectivis Cloud, choose New app, then "Deploy a sample", then React.
2. Leave the static preset on. Cloud detects Vite and publishes `dist`.
3. Open the site, go to About, and reload. The page should load, not show a 404.

## Run it locally

Node 22 or newer.

```
npm install
npm run dev
```

## Test it

```
npm test
npm run build
```

`npm run build` type-checks first, then runs `vite build`.

## Build check

`railpack info .` with Railpack 0.43.0 detects the Node provider, "Deploying as vite static site", output directory `dist`.
