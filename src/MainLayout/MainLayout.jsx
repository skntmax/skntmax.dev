import React, { createContext, useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbr";
import LayoutComponent from "../Components/MainComponent/MainComponent";
import FooterCmp from "../Footer/Footer";
import category from "../apis/category";
import { useNavigate } from "react-router-dom";
import { getCategoryList } from "../actions/category_action";
export const RootProvider = createContext({});

function MainLayout({ children }) {
  const navigate = useNavigate();

  const [state, setState] = useState({
    categoryList: { name: "categoryList", value: "", options: [] },
  });

  useEffect(() => {
    (async function () {
      let cats = await getCategoryList("get-categories");
      if (cats.status) {
        setState((prev) => {
          return {
            ...prev,
            ["categoryList"]: {
              ...prev["categoryList"],
              options: cats.result.data,
            },
          };
        });
      }
    })();
  }, []);

  return (
    <RootProvider.Provider value={{ state, setState, navigate }}>
      <Navbar />
      <LayoutComponent children={children} />
      <FooterCmp />
    </RootProvider.Provider>
  );
}

export default MainLayout;
