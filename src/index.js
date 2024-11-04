import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assuming App is your main component
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'; // Import your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
