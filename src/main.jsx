import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "@/index.css";

const script = document.createElement("script");
script.src =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2679829741412830";
script.crossOrigin = "anonymous";
script.async = true;
document.head.appendChild(script);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
