import React, { useContext, useEffect } from "react";
import { RootProvider } from "../MainLayout/MainLayout";
// import hljs from "highlight.js";
import jscode from "../apis/js_questions";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { useState } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Space, Typography } from "antd";
import ListItem from "./List";
import CardBox from "./HomePageCards";
import { getContentByCatId } from "../actions/content_action";

const { Text, Link } = Typography;

function ContentBox() {
  const [content, setContent] = useState([]);
  const [loader, setLoader] = useState(false);

  const { state, setState, navigate } = useContext(RootProvider);

  useEffect(() => {
    getCategoryRelatedContent();
  }, [state.categoryList.value.key]);

  const getCategoryRelatedContent = async () => {
    debugger;
    setLoader(true);
    getContentByCatId("get-content-cat", state.categoryList.value.key)
      .then((res) => {
        if (res.status) {
          setLoader(false);
          setContent(res.result.data);
        }
      })
      .catch((err) => {
        setLoader(false);

        console.log("err", err);
      });
  };

  return (
    <div>
      {loader && state.categoryList.value != "" && (
        <div
          className="d-flex justify-content-center align-items-center  "
          style={{ height: "80vh" }}
        >
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 50,
                }}
                spin
              />
            }
          />
        </div>
      )}

      {!loader && content.length > 0 ? (
        <ListItem
          data={content.map((ele) => {
            return {
              key: ele._id,
              title: ele.QS,
              disc: ele.DISC,
            };
          })}
          navigate={navigate}
        />
      ) : (
        state.categoryList.value == "" && <CardBox />
      )}
    </div>
  );
}

export default ContentBox;
