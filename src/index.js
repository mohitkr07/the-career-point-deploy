import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"

// ReactDOM.render(<h1>hi</h1>, document.getElementById("root")); or

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)