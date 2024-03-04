import React, { useContext, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Categories from "./../../apis/category";
import { Layout, Menu, Button, theme } from "antd";
import { RootProvider } from "../../MainLayout/MainLayout";
const { Header, Sider, Content } = Layout;
const LayoutComponent = ({ children }) => {
  const { state, setState } = useContext(RootProvider);
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        height: "90vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          onClick={(e) => {
            console.log("e", e);
            setState((prev) => {
              let selectVal = Categories.find((ele) => e.key == ele.key).label;
              return {
                ...prev,
                categoryList: { ...prev["categoryList"], value: selectVal },
              };
            });
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={Categories.map((ele) => {
            return {
              ...ele,
              icon: <UserOutlined />,
            };
          })}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;
