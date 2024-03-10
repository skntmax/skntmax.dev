"use client";
import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;

function FooterCmp() {
  return (
    <div className="container-fluid">
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        skntmax.dev ©{new Date().getFullYear()}
      </Footer>
    </div>
  );
}

export default FooterCmp;
