import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Homepage from "./Components/MainComponent/Homepage/Homepage";
import RouterWrapper from "./RouterWrapper";
import ContentPage from "./Components/MainComponent/ContentPage/ContentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouterWrapper>
        <Homepage />
      </RouterWrapper>
    ),
  },

  {
    exact: true,
    path: "/:url",
    element: (
      <RouterWrapper>
        <Homepage />
      </RouterWrapper>
    ),
  },

  {
    exact: true,
    path: "/:key/:title",
    element: (
      <RouterWrapper>
        <ContentPage />
      </RouterWrapper>
    ),
  },
]);

export default router;
