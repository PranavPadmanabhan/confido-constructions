import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./contexts/appContext";
import ImageProvider from "./contexts/ImageView";
import LoadingContextProvider from "./contexts/LoadingContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoadingContextProvider>
      <AppContextProvider>
        <ImageProvider>
          <App />
        </ImageProvider>
      </AppContextProvider>
    </LoadingContextProvider>
  </React.StrictMode>
);
