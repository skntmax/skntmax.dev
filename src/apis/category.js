import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  JavaScriptOutlined,
} from "@ant-design/icons";

export default [
  {
    key: "1",
    label: "SQL interview Questions ",
    icon: <VideoCameraOutlined />,
    multi: false,
  },
  {
    key: "2",
    label: "Sorting algorithms",
    icon: <JavaScriptOutlined />,
    multi: false,
  },
  {
    key: "3",
    label: "Javascript interview",
    icon: <JavaScriptOutlined />,
    multi: true,
  },
  {
    key: "4",
    label: "DSA",
    icon: <UploadOutlined />,
    multi: false,
  },

  {
    key: "5",
    label: "Object Oriented Programming",
    icon: <MenuFoldOutlined />,
    multi: false,
  },
];
