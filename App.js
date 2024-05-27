import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <div class="header">
      <h1>React Title component</h1>
      <ul>
        <li class="items1">items- 1</li>
        <li class="items2">items- 2</li>
        <li class="items3">items- 3</li>
        <li class="items4">items- 4</li>
      </ul>
    </div>
  );
};

const rootEle = ReactDOM.createRoot(document.getElementById("root"));
rootEle.render(<Title />);
