import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ImageProvider from "./contexts/ImageView";
import LoadingContextProvider from "./contexts/LoadingContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoadingContextProvider>
      <ImageProvider>
        <App />
      </ImageProvider>
    </LoadingContextProvider>
  </React.StrictMode>
);
