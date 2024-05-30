import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from 'react-dom' for rendering
import Modal from "react-modal";
import App from "./App";
import "./index.css";

Modal.setAppElement("#root"); // Set the modal's parent element for accessibility

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root for ReactDOM
root.render(
  // Render the app inside the root
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
