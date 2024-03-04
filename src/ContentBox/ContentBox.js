import React, { useContext } from "react";
import { RootProvider } from "../MainLayout/MainLayout";

function ContentBox() {
  const { state, setState } = useContext(RootProvider);
  return <div>{state.categoryList.value}</div>;
}

export default ContentBox;
