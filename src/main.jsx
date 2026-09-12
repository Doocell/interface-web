import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./index.css";


const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Element dengan id="root" tidak ditemukan di index.html.'
  );
}

document.documentElement.classList.add("notranslate");
document.documentElement.setAttribute("translate", "no");
document.body.classList.add("notranslate");
document.body.setAttribute("translate", "no");
rootElement.classList.add("notranslate");
rootElement.setAttribute("translate", "no");

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);