import React, { useContext } from "react";
import { Switch } from "antd";
import { ThemeContextProvider } from "../ThemeProvider";

const SwitchCmp = () => {
  const { themes, setThemes } = useContext(ThemeContextProvider);

  const onChange = (checked) => {
    setThemes((prev) => {
      return {
        ...prev,
        active: prev.active == "dark" ? "light" : "dark",
      };
    });
  };

  return <Switch defaultChecked onChange={onChange} />;
};
export default SwitchCmp;
