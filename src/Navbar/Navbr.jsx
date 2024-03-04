import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./navbar.css";
// import logo from "./../assets/images/logo.png";
const { Header, Content, Footer } = Layout;
const Headings = [
  { key: 1, label: "home" },
  { key: 2, label: "courses" },
  { key: 3, label: "My gears" },
  { key: 4, label: "Login" },
];

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const Navbar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          float: "row-reverse",
          display: "flex",
          lineHeight: "30px",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />

        <Menu
          theme="dark"
          mode="horizontal"
          items={Headings}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
    </Layout>
  );
};
export default Navbar;
