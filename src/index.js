import React, { StrictMode } from "react"; // React
import { createRoot } from "react-dom/client"; // React 与 Web 浏览器对话的库（React DOM）

import "./styles.css"; // 组件的样式

import App from "./App"; // App.js 里面创建的组件

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
