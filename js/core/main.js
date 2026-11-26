import { App } from "./App.js";

const root = document.getElementById("app");
if (!root) {
  throw new Error('Missing application root element with id "app".');
}

new App(root);
