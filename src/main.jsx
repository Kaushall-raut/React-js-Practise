import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ContactForm } from "./form/ContactForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactForm />
  </StrictMode>
);
