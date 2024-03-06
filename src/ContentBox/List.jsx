import React, { useContext } from "react";
import { Avatar, List } from "antd";
import { Navigate } from "react-router-dom";
import { RootProvider } from "../MainLayout/MainLayout";

const ListItem = ({ data, navigate }) => (
  <List
    style={{ cursor: "pointer" }}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item
        onClick={() => {
          navigate(`/${item.key}/${encodeURI(item.title)}`);
          //   console.log("idid", item);
        }}
      >
        <List.Item.Meta
          avatar={
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
            />
          }
          title={item.title}
          description={item.disc}
        />
      </List.Item>
    )}
  />
);
export default ListItem;
