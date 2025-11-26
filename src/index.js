import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router } from "react-router-dom";
import logo from "./assets/all-images/logo.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
// set favicon at runtime to use logo from src
function setFavicon(href) {
  try {
    const head = document.getElementsByTagName('head')[0];
    let link = head.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      head.appendChild(link);
    }
    link.type = 'image/jpeg';
    link.href = href;
  } catch (e) {
    // ignore
  }
}

// apply favicon before rendering
setFavicon(logo);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
