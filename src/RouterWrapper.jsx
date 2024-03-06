import React from "react";
import MainLayout from "./MainLayout/MainLayout";

function RouterWrapper({ children }) {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
}

export default RouterWrapper;
