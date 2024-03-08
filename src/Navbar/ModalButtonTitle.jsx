import React from "react";
import { Button, Space, Typography } from "antd";
const { Text, Link } = Typography;
function ModalButtonTitle({ title }) {
  return <Button type="primary"> {title} </Button>;
}

export default ModalButtonTitle;
