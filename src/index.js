import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./screens/Home";

import "react-toastify/dist/ReactToastify.css";
import DataProvider from "./components/DataProvider";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
