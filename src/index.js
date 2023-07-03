import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
