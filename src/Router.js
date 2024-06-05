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
import HomePageShimmer from "./Components/Shimmer/Shimmer";
import AddContent from "./Components/AdminPages/AddContent";
import AddCategory from "./AdminCmp/AddCategory";
import CustomEditor from "./Components/EditorComponent/RichTextEditor";
import RootEditor from "./Components/EditorComponent/RootEditor";
import AdminNav from "./Components/AdminPages/AdminNavabr/AdminNav";
import AddPaidFiles from "./Components/AddPaidFiles/AddPaidFiles";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <AdminNav />
        <AddCategory />
      </>
    ),
  },

  {
    path: "/add-content",
    element: (
      <>
        <AdminNav />

        <RootEditor />
      </>
    ),
  },


  {
    path: "/add-paid-files",
    element: (
      <>
        <AdminNav />

        <AddPaidFiles />
      </>
    ),
  },


  // {
  //   path: "/",
  //   element: (
  //     <RouterWrapper>
  //       <Homepage />
  //     </RouterWrapper>
  //   ),
  // },

  // {
  //   exact: true,
  //   path: "/:url",
  //   element: (
  //     <RouterWrapper>
  //       <Homepage />
  //     </RouterWrapper>
  //   ),
  // },

  // {
  //   exact: true,
  //   path: "/:key/:title",
  //   element: (
  //     <RouterWrapper>
  //       <ContentPage />
  //     </RouterWrapper>
  //   ),
  // },

  // {
  //   exact: true,
  //   path: "/admin-user",
  //   element: <HomePageShimmer />,
  // },

  // {
  //   exact: true,
  //   path: "/add-content",
  //   element: <AddContent />,
  // },
]);

export default router;
