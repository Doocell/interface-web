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


createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);