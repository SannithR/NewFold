import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NewScreen } from "./screens/NewScreen";
import { Frame } from "./components/Frame";

createRoot(document.getElementById("app")).render(
  <StrictMode>
   <Frame/>
  </StrictMode>,
);
