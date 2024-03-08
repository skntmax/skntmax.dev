import logo from "./logo.svg";
import "./App.css";

import MainLayout, { RootProvider } from "./MainLayout/MainLayout";
import { useContext } from "react";
import ContentBox from "./ContentBox/ContentBox";
import { ConfigProvider } from "antd";
import { Input, theme } from "antd";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import router from "./Router";
import { ThemeContextProvider } from "./ThemeProvider";

function App() {
  const { themes } = useContext(ThemeContextProvider);
  return (
    <>
      <ConfigProvider
        theme={
          themes.active == "dark"
            ? {
                algorithm: theme.darkAlgorithm,
                ...themes.dark,
              }
            : {
                ...themes.light,
              }
        }
      >
        {/* <MainLayout> */}
        <RouterProvider router={router}></RouterProvider>
        {/* </MainLayout> */}
      </ConfigProvider>
    </>
  );
}

export default App;
