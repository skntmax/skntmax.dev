import logo from "./logo.svg";
import "./App.css";

import MainLayout, { RootProvider } from "./MainLayout/MainLayout";
import { useContext } from "react";
import ContentBox from "./ContentBox/ContentBox";

function App() {
  return (
    <>
      <MainLayout>
        <ContentBox />
      </MainLayout>
    </>
  );
}

export default App;
