import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { LogInForm } from "./form/LogInForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LogInForm />
  </StrictMode>
);
