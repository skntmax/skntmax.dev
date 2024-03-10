"use client";
import React from "react";
import Navbar from "@/Components/Navabar/RootNavbar";
import Footer from "@/Components/Footer/Footer";
import SideBarWithBody from "@/Components/LayoutProvider/SideBarWithBody";

function LayoutProvider({ children }) {
  return (
    <>
      <div className="container-fluid ">
        <Navbar />
        <SideBarWithBody children={children} />
        <Footer />
      </div>
    </>
  );
}

export default LayoutProvider;
