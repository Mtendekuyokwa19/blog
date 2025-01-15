import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./route.tsx";
import { Footer } from "./Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  </StrictMode>,
);
