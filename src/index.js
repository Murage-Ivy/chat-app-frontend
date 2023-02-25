import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const cable = ActionCable.createConsumer("ws://localhost:3000/cable");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
