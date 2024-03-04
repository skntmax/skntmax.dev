import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;

function FooterCmp() {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      skntmax.dev ©{new Date().getFullYear()}
    </Footer>
  );
}

export default FooterCmp;
