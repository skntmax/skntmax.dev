import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Button, Space } from "antd";
import { ConfigProvider } from "antd";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
    <App />
  </ConfigProvider>
);
