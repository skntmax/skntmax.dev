"use client";
import React from "react";

import dynamic from "next/dynamic";
import HomePageContentShimmer from "../ShimmerEffects/HomePageContentShimmer";
const SildeBarAndContent = dynamic(
  () => import("@/Components/Sidebar/SideBar"),
  {
    ssr: false,
    loading: () => <HomePageContentShimmer />,
  }
);
function SideBarWithBody({ children }) {
  return (
    <>
      <SildeBarAndContent children={children} />
    </>
  );
}

export default SideBarWithBody;
