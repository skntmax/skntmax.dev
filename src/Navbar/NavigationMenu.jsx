import React, { useContext, useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserAddOutlined,
  HomeOutlined,
  MergeOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import LoginModal from "../Components/Login/LoginModel";
import ModalWrapper from "../Components/Login/ModalWrapper";
import ModalButtonTitle from "./ModalButtonTitle";
import { ThemeContextProvider } from "../ThemeProvider";
import SearchBar from "./Searchbar";

const items = [
  {
    label: <ModalButtonTitle title={"HOME"} />,
    key: "home",
    icon: <HomeOutlined />,
  },

  {
    label: <ModalButtonTitle title={"COURSES"} />,
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
    label: <ModalButtonTitle title={"MY GEARS"} />,
    key: "alipay",
    icon:<MergeOutlined />
  },
  {
    label: (
      <ModalWrapper CMP={() => <ModalButtonTitle title={"login/signup"} />}>
        body
      </ModalWrapper>
    ),
    key: "login",
    icon: <UserAddOutlined />,
  },

];


const NavigationMenu = () => {
  const { themes, setThemes } = useContext(ThemeContextProvider);
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    setCurrent(e.key);
  };
   
  return (
    <Menu
      className="w-100"
      theme={themes.active == "dark" ? "dark" : "light"}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
        inlineIndent={0}
      items={items}
    />
  );
};
export default NavigationMenu;
