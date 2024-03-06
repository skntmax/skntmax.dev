import logo from "./logo.svg";
import "./App.css";

import MainLayout, { RootProvider } from "./MainLayout/MainLayout";
import { useContext } from "react";
import ContentBox from "./ContentBox/ContentBox";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import router from "./Router";

function App() {
  return (
    <>
      {/* <MainLayout> */}
      <RouterProvider router={router}></RouterProvider>
      {/* </MainLayout> */}
    </>
  );
}

export default App;
