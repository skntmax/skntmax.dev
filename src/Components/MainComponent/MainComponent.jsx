import React, { useContext, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  JavaScriptOutlined,
} from "@ant-design/icons";
// import { Navigate } from "react-router-dom";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, message, Space, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import Categories from "./../../apis/category";
import { Layout, Menu, Button, theme } from "antd";
import { RootProvider } from "../../MainLayout/MainLayout";
import { ThemeContextProvider } from "../../ThemeProvider";
import SearchBar from "../../Navbar/Searchbar";
const { Header, Sider, Content } = Layout;

const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const LayoutComponent = ({ children }) => {
  const { themes, setThemes } = useContext(ThemeContextProvider);

  let nv = useNavigate();
  const { state, setState } = useContext(RootProvider);
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleButtonClick = (e) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          style={{ minHeight: "100%" }}
          onClick={(e) => {
            debugger;
            let selectVal = state.categoryList.options.find(
              (ele) => e.key == ele._id
            );

            setState((prev) => {
              return {
                ...prev,
                categoryList: {
                  ...prev["categoryList"],
                  value: { key: selectVal._id, value: selectVal.TITLE },
                },
              };
            });

            nv(`/${selectVal._id}-${encodeURI(selectVal.TITLE)}`);
            return null;
          }}
          theme={themes.active}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={state.categoryList.options.map((ele, index) => {
            return {
              ...ele,
              key: ele._id,
              // icon : ele.icon  ,
              label: ele.TITLE,
            };
          })}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
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
          <SearchBar />
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
