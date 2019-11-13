import React from "react";
import { render } from "react-dom";
import App from "./app";
import "./styles.css";

const Flex = () => (
  <div>
    <App />
  </div>
);

render(<Flex />, document.getElementById("root"));
