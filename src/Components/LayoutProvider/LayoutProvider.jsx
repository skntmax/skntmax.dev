import React from "react";
import Navbar from "@/Components/Navabar/RootNavbar";
import Footer from "@/Components/Footer/Footer";

function LayoutProvider() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />

        <Footer />
      </div>
    </>
  );
}

export default LayoutProvider;
