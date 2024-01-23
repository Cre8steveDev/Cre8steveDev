import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Using Hash Router helped me manage a situation where the page was previously breaking when a page loads directly to a component

    Now with the HashRouter, it appends a router on the url, but it doesn't send the other parts after the # to the server, so the server sends your initial index which sends your javascript from the server to the client side. Then react router can pick up the other parts that followers to render the necessary component.

    Will see how this works in the long term.
    
     */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
