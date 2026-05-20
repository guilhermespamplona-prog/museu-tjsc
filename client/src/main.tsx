import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("museu-tjsc-root");

if (!rootElement) {
  throw new Error("Elemento #museu-tjsc-root não encontrado.");
}

createRoot(rootElement).render(<App />);
