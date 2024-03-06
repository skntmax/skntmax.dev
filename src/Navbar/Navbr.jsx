import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./navbar.css";
import logo from "./../assets/images/logo.png";

import { Flex, Radio } from "antd";
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
                  <Header>
                    <span
                      className="anta-regular"
                      style={{
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      SKNTMAX.DEV
                    </span>
                  </Header>
                )}
                {i == 1 && (
                  <Header>
                    <div className="demo-logo" />

                    <Menu
                      theme="dark"
                      mode="horizontal"
                      items={Headings}
                      style={{
                        flex: 1,
                        minWidth: 0,
                        fontSize: "20px",
                      }}
                    />
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
