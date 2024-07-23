import * as React from "react";
import './index.css'
import * as ReactDOM from "react-dom";
import App from "./App";
import Main from "./main";
import { AppProvider } from "./context";
ReactDOM.render(
<AppProvider>
<App/>
</AppProvider>,
  document.getElementById("root")
);