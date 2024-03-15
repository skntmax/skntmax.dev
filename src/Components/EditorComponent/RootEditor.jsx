import React, { useState } from "react";
import "./editor_home.css";
import "./Editor.css";
import RichTextEditor from "./RichTextEditor";
import EditCategory from "../../AdminCmp/EditCategory";
import SubCategoryList from "./SubCategoryList";
function RootEditor() {
  const [content, setContent] = useState("");
  const [data, setData] = useState({
    selected_cat_id: "",
    selected_sub_cat_id: "",
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column justify-content-center align-items-center  ">
              <form style={{ width: "100%" }}>
                <div class="form-group ">
                  <EditCategory
                    changeMode={(val, value) =>
                      // getting subcategory related to these categories
                      {
                        setData((prev) => {
                          return {
                            ...prev,
                            selected_cat_id: value,
                          };
                        });
                      }
                    }
                  />
                </div>

                <div class="form-group ">
                  <SubCategoryList
                    cat_id={data.selected_cat_id}
                    changeMode={(sub_cat_id) => {
                      {
                        console.log(sub_cat_id);
                      }
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <RichTextEditor setContent={setContent} content={content} />
      <button className="save_btn border" onClick={() => console.log(content)}>
        Save
      </button>
    </>
  );
}

export default RootEditor;
