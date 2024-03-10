import React from "react";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Flex, Rate } from "antd";
import ToolTip from "./Tooltip";
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const NumRating = ({ item: selectedItem, index }) => {
  const favouriteRatingHandler = (ratingVal) => {
    console.log(ratingVal, selectedItem);
  };

  const DificultyLevelRatingHandler = (ratingVal) => {
    console.log(ratingVal, selectedItem);
  };

  const SatisfactoryRatingHandler = (ratingVal) => {
    console.log(ratingVal, selectedItem);
  };

  return (
    <Flex gap="middle" horizontal>
      <ToolTip title={"Favourites"}>
        <Rate onChange={favouriteRatingHandler} />
      </ToolTip>

      <ToolTip title={"Difficult"}>
        <Rate
          onChange={DificultyLevelRatingHandler}
          defaultValue={2}
          character={({ index = 0 }) => index + 1}
        />
      </ToolTip>

      <ToolTip title={"Satisfactory"}>
        <Rate
          onChange={SatisfactoryRatingHandler}
          defaultValue={3}
          character={({ index = 0 }) => customIcons[index + 1]}
        />
      </ToolTip>
    </Flex>
  );
};
export default NumRating;
