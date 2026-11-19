import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import { App } from "./App";

function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

test("shows the home page", () => {
  renderAt("/");
  expect(screen.getByRole("heading", { name: "React on Spectivis Cloud" })).toBeTruthy();
});

test("shows the about page at its own path", () => {
  renderAt("/about");
  expect(screen.getByRole("heading", { name: "About" })).toBeTruthy();
});

test("shows the not found page for an unknown path", () => {
  renderAt("/about/deep/link");
  expect(screen.getByRole("heading", { name: "Page not found" })).toBeTruthy();
});
