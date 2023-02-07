import React from "react";
import App from "./App";
import { subDomainPages } from "routers/index";
import viteSSR from "vite-ssr";

import "./index.css";
import "./styles/index.scss";
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";

const routes: any = subDomainPages;

export default viteSSR(App, { routes }, (context) => {
  /* Vite SSR main hook for custom logic */
  /* const { app, router, initialState, ... } = context */
});
