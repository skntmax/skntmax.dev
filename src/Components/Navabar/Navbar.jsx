"use client";
import React, { useContext, useState } from "react";
import Logo from "@/assets/logo/logo-no-background.png";
import "./navbar.css";
import Darklogo from "@/assets/logo/night-view.png";
import Lightlogo from "@/assets/logo/logo-no-background.png";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserAddOutlined,
  HomeOutlined,
  MergeOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, theme } from "antd";

const { Header, Content, Footer } = Layout;

import { Menu } from "antd";
import ModalWrapper from "@/Components/ModalWrapper/ModalWrapper";
import Image from "next/image";
import { Switch } from "antd";
import { ThemeContextProvider } from "../ThemeProvider/ThemeProvider";

const items = [
  {
    label: "HOME",
    key: "home",
    icon: <HomeOutlined />,
  },

  {
    label: "COURSES",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },

  {
    label: "MY GEARS",
    key: "alipay",
    icon: <MergeOutlined />,
  },
  {
    label: <ModalWrapper CMP="LOGIN/SIGNUP">body</ModalWrapper>,
    key: "login",
    icon: <UserAddOutlined />,
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState("mail");
  const { themes, setThemes } = useContext(ThemeContextProvider);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
    setThemes((prev) => {
      return {
        ...prev,
        active: prev.active == "dark" ? "light" : "dark",
      };
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-12 col-sm-12 col-xl-2 col-lg-2">
          <Layout>
            <div className="  w-100 h-100 float-left">
              <Header
                className="d-inline-flex justify-content-center align-items-center gap-4 w-100"
                style={{
                  backgroundColor: themes.active == "dark" ? "" : "white",
                }}
              >
              
                <Image
                  src={themes.active == "dark" ? Darklogo : Lightlogo}
                  height={30}
                  width={200}
                  className="img-fluid"
                />
                <Switch defaultChecked onChange={onChange} />
              </Header>
            </div>
          </Layout>
        </div>

        <div className="col-12 col-md-12 col-sm-12 col-xl-10 col-lg-10 h-100 ">
          <Layout>
            <div className="d-flex w-100  justify-content-end align-items-center  ">
              <Header
                className="w-100"
                style={{
                  backgroundColor: themes.active == "dark" ? "" : "white",
                }}
              >
                <Menu
                  className="anta-regular d-flex w-100  justify-content-end gap-4"
                  theme={themes.active == "dark" ? "dark" : "light"}
                  style={{ width: "100%" }}
                  onClick={onClick}
                  selectedKeys={[current]}
                  mode="horizontal"
                  items={items}
                />
              </Header>
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
