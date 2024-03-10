import React, { useContext } from "react";
import { Avatar, List } from "antd";
import { Navigate } from "react-router-dom";
import { RootProvider } from "../MainLayout/MainLayout";
import NumRating from "../Components/RatingsComponents/NumRating";

const ListItem = ({ data, navigate }) => (
  <List
    style={{ cursor: "pointer" }}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
            />
          }
          title={
            <a
              onClick={() => navigate(`/${item.key}/${encodeURI(item.title)}`)}
            >
              {item.title}
            </a>
          }
          description={item.disc}
        />

        <NumRating item={item} index={index} />
      </List.Item>
    )}
  />
);
export default ListItem;
