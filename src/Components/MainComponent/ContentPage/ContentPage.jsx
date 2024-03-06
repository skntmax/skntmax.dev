import React, { useContext, useEffect } from "react";
import { RootProvider } from "../../../MainLayout/MainLayout";
// import hljs from "highlight.js";
import jscode from "../../../apis/js_questions";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  a11yDark,
  zenburn,
  darcula,
  dark,
  tomorrowNight,
  tomorrowNightBlue,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Space, Typography } from "antd";
import { Routes, Route, useParams } from "react-router-dom";
const { Text, Link } = Typography;

function ContentPage() {
  const [hl, setHl] = useState();
  const { state, setState } = useContext(RootProvider);
  let [searchParams, setSearchParams] = useSearchParams();
  let params = useParams();

  return (
    <div
      style={{
        height: "100%",
        scrollbarColor: "inherit",
        overflow: "hidden",
      }}
    >
      <h1 mark> {jscode.find((ele) => ele.key == params.key).qs} </h1>
      <Text>{jscode.find((ele) => ele.key == params.key).disc} </Text>
      <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
        {jscode.find((ele) => ele.key == params.key).answer}
      </SyntaxHighlighter>
    </div>
  );
}

export default ContentPage;
