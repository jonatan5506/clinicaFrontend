import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Router from "./app/routes";
import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./app/shared/contexts/AppContext";
import { ThemeProvider } from "@mui/material/styles";
import { LightTheme } from "./app/shared/themes/Light";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AppProvider>
    <React.StrictMode>
      <ThemeProvider theme={LightTheme}> {/* Adicione seu tema aqui */}
        <RouterProvider router={Router} />
      </ThemeProvider>
    </React.StrictMode>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
