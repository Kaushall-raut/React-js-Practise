import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HandleFormData from "./form/GoodFormHandling.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HandleFormData />
  </StrictMode>
);
