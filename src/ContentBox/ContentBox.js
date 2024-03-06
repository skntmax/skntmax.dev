import React, { useContext, useEffect } from "react";
import { RootProvider } from "../MainLayout/MainLayout";
// import hljs from "highlight.js";
import jscode from "../apis/js_questions";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Space, Typography } from "antd";
import ListItem from "./List";

const { Text, Link } = Typography;

function ContentBox() {
  const [hl, setHl] = useState();
  const { state, setState, navigate } = useContext(RootProvider);

  return (
    <div>
      {jscode.filter((ele) => ele.cat_id == state.categoryList.value.key)
        .length > 0 && (
        <ListItem
          data={jscode
            .filter((ele) => ele.cat_id == state.categoryList.value.key)
            .map((ele) => {
              return {
                key: ele.key,
                title: ele.qs,
                disc: ele.disc,
              };
            })}
          navigate={navigate}
        />
      )}
    </div>
  );
}

export default ContentBox;
