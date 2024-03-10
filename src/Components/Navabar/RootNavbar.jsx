import dynamic from "next/dynamic";
import React from "react";
import NavbarShimmer from "../ShimmerEffects/NavbarShimmer";

const Navbar = dynamic(() => import("@/Components/Navabar/Navbar"), {
  ssr: false,
  loading: () => <NavbarShimmer />,
}); 

function RootNavbar() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default RootNavbar;
