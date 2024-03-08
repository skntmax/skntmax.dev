import React from "react";
import { Card } from "antd";
import { Button, Flex } from "antd";
import category from "../apis/category";
import { Image } from "antd";

import { Space, Typography } from "antd";

const { Text, Link } = Typography;

const CardBox = () => (
  <Space direction="hirozontal" size={16}>
    <Flex wrap="wrap" gap="small">
      {category.map((_, i) => (
        <Card style={{ width: "240" }} title={_.label}>
          <div className="custom-image">
            <Image alt="example" width="100%" height={220} src={_.logo} />
          </div>
          <div className="custom-card"></div>
        </Card>
      ))}
    </Flex>
  </Space>
);
export default CardBox;
