import React from "react";
import ReactDOM from "react-dom";
const element = React.createElement(
  "h1",
  { className: "header" },
  "Hello, world!"
);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(element);
