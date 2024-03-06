import React from "react";
import { Card, Space } from "antd";
import { Button, Flex } from "antd";
import category from "../apis/category";
const CardBox = () => (
  <Space direction="hirozontal" size={16}>
    <Flex wrap="wrap" gap="small">
      {category.map((_, i) => (
        <Card
          title={_.label}
          extra={<a href="#">More</a>}
          style={{
            width: 300,
            height: "200px",
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <img />
        </Card>
      ))}
    </Flex>
  </Space>
);
export default CardBox;
