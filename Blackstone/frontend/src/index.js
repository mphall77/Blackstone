import React from "react";
import * as ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Index.scss";
import App from "./App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
