import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Effect } from "./hooks/UseEffect";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Effect />
  </StrictMode>
);
