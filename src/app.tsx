import "core-js";

import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.scss";
import { AppRouter } from "./app-router/app-router";

ReactDOM.render(<AppRouter />, document.getElementById("root"));
