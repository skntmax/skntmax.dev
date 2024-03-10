import React from "react";
import { Button, Divider, Space, Tooltip } from "antd";
const colors = ["gold"];
const customColors = ["#f50", "#2db7f5", "#87d068", "#108ee9"];
const ToolTip = ({ children, title }) => (
  <>
    <Space wrap>
      {colors.map((color) => (
        <Tooltip title={title} color={color} key={color}>
          {children}
        </Tooltip>
      ))}
    </Space>
  </>
);
export default ToolTip;
