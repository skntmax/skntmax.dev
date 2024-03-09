import React, { useEffect } from "react";
import { Card } from "antd";
import { Button, Flex } from "antd";
import category from "../apis/category";
import { Image } from "antd";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import { Space, Typography } from "antd";
import { getCategories } from "../actions/category_action";
import HomePageShimmer from "../Components/Shimmer/Shimmer";

const { Text, Link } = Typography;

const CardBox = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategories("get-categories"),
  });

  if (isPending) return <HomePageShimmer />;

  if (error) return "An error has occurred: " + error.message;

  console.log("data", data);
  return (
    <Space direction="hirozontal" size={16}>
      <Flex wrap="wrap" gap="small">
        {data.result.data.map((_, i) => (
          <Card style={{ width: "240" }} title={_.TITLE}>
            <div className="custom-image">
              <Image
                alt="example"
                width="100%"
                height={220}
                src={`${process.env.REACT_APP_BASE_URL}/${_.IMAGE}`}
              />
            </div>
            <div className="custom-card"></div>
          </Card>
        ))}
      </Flex>
    </Space>
  );
};

export default CardBox;
