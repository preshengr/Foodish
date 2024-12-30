import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import ThemeProvider from "../foodies/src/context/ThemeContext/ThemeProvider";
import App from "./App";

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
