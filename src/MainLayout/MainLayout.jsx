import React, { createContext, useContext, useState } from "react";
import Navbar from "../Navbar/Navbr";
import LayoutComponent from "../Components/MainComponent/MainComponent";
import FooterCmp from "../Footer/Footer";
import category from "../apis/category";
export const RootProvider = createContext({});

function MainLayout({ children }) {
  const [state, setState] = useState({
    categoryList: { name: "categoryList", value: "", options: category },
  });
  return (
    <RootProvider.Provider value={{ state, setState }}>
      <Navbar />
      <LayoutComponent children={children} />
      <FooterCmp />
    </RootProvider.Provider>
  );
}

export default MainLayout;
