// 1 - import react libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2 - get a reference to div with root id
const el = document.getElementById("root");

// 3 - tell rect to take control of that telement
const root = ReactDOM.createRoot(el);

// 5 - show the component on the screen
root.render(<App />);

