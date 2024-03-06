import React, { createContext, useContext, useState } from "react";
import Navbar from "../Navbar/Navbr";
import LayoutComponent from "../Components/MainComponent/MainComponent";
import FooterCmp from "../Footer/Footer";
import category from "../apis/category";
import { useNavigate } from "react-router-dom";
export const RootProvider = createContext({});

function MainLayout({ children }) {
  const navigate = useNavigate();

  const [state, setState] = useState({
    categoryList: { name: "categoryList", value: "", options: category },
  });

  return (
    <RootProvider.Provider value={{ state, setState, navigate }}>
      <Navbar />
      <LayoutComponent children={children} />
      <FooterCmp />
    </RootProvider.Provider>
  );
}

export default MainLayout;
