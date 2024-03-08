import React, { useContext, useState } from "react";
import { Breadcrumb, Layout, Menu, Switch, theme } from "antd";
import "./navbar.css";
import logo from "./../assets/images/logo.png";

import { Flex, Radio } from "antd";
import { RootProvider } from "../MainLayout/MainLayout";
import NavigationMenu from "./NavigationMenu";
import SwitchCmp from "./Switch";
import { ThemeContextProvider } from "../ThemeProvider";
const baseStyle = {
  width: "100%",
  height: 54,
};

const { Header, Content, Footer } = Layout;
const Headings = [
  { key: 1, label: "HOME" },
  { key: 2, label: "COURSES" },
  { key: 3, label: "MY GEARS" },
  { key: 4, label: "LOGIN" },
];

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const Navbar = () => {
  const { setState, navigate } = useContext(RootProvider);
  const { themes, setThemes } = useContext(ThemeContextProvider);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [value, setValue] = React.useState("horizontal");

  return (
    <>
      <Layout>
        <Flex gap="middle" vertical>
          <Flex vertical={value === "vertical"}>
            {Array.from({
              length: 2,
            }).map((_, i) => (
              <div
                key={i}
                style={{
                  ...baseStyle,
                }}
              >
                {i == 0 && (
                  <Header
                    style={{
                      backgroundColor: themes.active == "dark" ? "" : "white",
                    }}
                  >
                    <span
                      onClick={() => {
                        setState((prev) => {
                          return {
                            ...prev,
                            categoryList: {
                              ...prev["categoryList"],
                              value: "",
                            },
                          };
                        });
                        navigate("/");
                      }}
                      className={
                        themes.active == "dark" ? "text-light" : "text-dark"
                      }
                    >
                      SKNTMAX.DEV
                    </span>
                    <span className="mx-2 align-items-center">
                      <SwitchCmp />
                    </span>
                  </Header>
                )}
                {i == 1 && (
                  <Header
                    style={{
                      backgroundColor: themes.active == "dark" ? "" : "white",
                    }}
                  >
                    <NavigationMenu />
                  </Header>
                )}
              </div>
            ))}
          </Flex>
        </Flex>
      </Layout>
    </>
  );
};

export default Navbar;
