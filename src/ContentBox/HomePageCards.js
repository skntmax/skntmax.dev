import React, { useEffect } from "react";
import { Card, Layout } from "antd";
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

  return (
     <Layout>

    <Space direction="hirozontal" size={16}>
      <Flex wrap="wrap" gap="small">
        {data.result.data.map((_, i) => (
          <Card
            className="text-center text-caption-top cursor-pointer w-240 cursor-pointer"
            title={_.TITLE}
            extra={<a href="#">More</a>} style={{ width: 300 }}
          >
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
     </Layout>
  );
};

export default CardBox;
