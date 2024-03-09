import React, { useContext, useEffect } from "react";
import { RootProvider } from "../../../MainLayout/MainLayout";
// import hljs from "highlight.js";
import jscode from "../../../apis/js_questions";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Select } from "antd";
import all_themes_options, { themes } from "./AllEditorThemes";
import * as all_themes from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Space, Typography } from "antd";
import { Routes, Route, useParams } from "react-router-dom";
import { ThemeContextProvider } from "../../../ThemeProvider";
const { Text, Link } = Typography;

function ContentPage() {
  const [hl, setHl] = useState();
  const { themes: active_themes, setThemes } = useContext(ThemeContextProvider);

  const [active_theme, set_active_theme] = useState({
    name: "a11yDark",
    value:
      active_themes.active == "dark"
        ? all_themes.a11yDark
        : all_themes.colorBrewer,
  });

  const { state, setState } = useContext(RootProvider);

  let params = useParams();

  const handleChange = (value) => {
    let selected_theme = themes.find((ele) => ele.name == value);
    set_active_theme((prev) => {
      return {
        name: value,
        value: selected_theme.value,
      };
    });
  };

  return (
    <div
      style={{
        minHeight: "100%",
        scrollbarColor: "inherit",
      }}
    >
      <div className="row">
        <div className="col-sm-12 col-sm-12 col-md-12 col-xl-6 ">
          <h3 className="text-text-capitalize"> {jscode.find((ele) => ele.key == params.key).qs} </h3>
          <span className="badge badge-pill badge-info ">
            <Text>{jscode.find((ele) => ele.key == params.key).disc} </Text>
          </span>
        </div>

        <div className="col-sm-12 col-sm-12 col-md-12 col-xl-6 ">
          <Select
            defaultValue="Choose theme"
            style={{ width: "100%" }}
            onChange={handleChange}
            options={all_themes_options}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <SyntaxHighlighter language="javascript" style={active_theme.value}>
            {jscode.find((ele) => ele.key == params.key).answer}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
