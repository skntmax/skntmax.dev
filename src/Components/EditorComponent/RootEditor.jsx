import React, { useState } from "react";
import "./editor_home.css";
import "./Editor.css";
import RichTextEditor from "./RichTextEditor";
import EditCategory from "../../AdminCmp/EditCategory";
import SubCategoryList from "./SubCategoryList";
import { v1rouer } from "../../actions/root_action";
function RootEditor() {
  const [content, setContent] = useState("");
  const [loader, setLoader] = useState("");

  const [data, setData] = useState({
    selected_cat_id: "",
    selected_sub_cat_id: "",
    title: { name: "title", value: "", error: "", required: true },
    disc: { name: "disc", value: "", error: "", required: false },
  });

  const storeContent = async () => {
    try {
      setLoader(true);
      const payload = {
        title: data.title.value,
        multi: data.selected_sub_cat_id ? true : false,
        cat_id: data.selected_cat_id,
        sub_cat_id: data.selected_sub_cat_id,
        disc: data.disc.value,
        answer: content,
      };

      let store_content = await v1rouer.post("store-content", payload);
      if (store_content.status) {
        console.log("store-content", store_content);
      }
    } catch (err) {
      console.log("err", err);
      setLoader(false);
    }

    setLoader(false);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((p) => {
      return {
        ...p,
        [name]: { ...p[name], value: value },
      };
    });
  };

  const { title, disc } = data;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column justify-content-center align-items-center  ">
              <form style={{ width: "100%" }}>
                <div class="form-group mt-5 ">
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

                <div class="form-group my-2 ">
                  <SubCategoryList
                    cat_id={data.selected_cat_id}
                    changeMode={(sub_cat_id) => {
                      {
                        setData((prev) => {
                          return {
                            ...prev,
                            selected_sub_cat_id: sub_cat_id,
                          };
                        });
                      }
                    }}
                  />
                </div>
              </form>

              {data.selected_cat_id && (
                <>
                  <div className="col-12 form-group ">
                    <input
                      name={title.name}
                      value={title.value}
                      onChange={onChangeHandler}
                      className="form-control my-2"
                      id="title"
                      aria-describedby="emailHelp"
                      placeholder="Enter question related to this topic   "
                    />
                  </div>

                  <div className="col-12 form-group ">
                    <textarea
                      cols={5}
                      name={disc.name}
                      value={disc.value}
                      onChange={onChangeHandler}
                      className="form-control my-2"
                      id="title"
                      aria-describedby="emailHelp"
                      placeholder="Discription about your question "
                    />
                  </div>
                </>
              )}
              <div className="col-12">
                <RichTextEditor setContent={setContent} content={content} />

                <button
                  disabled={loader ? true : false}
                  className="save_btn border"
                  onClick={storeContent}
                >
                  {loader ? (
                    <div class="d-flex justify-content-center">
                      <div class="spinner-border" role="status"></div>
                    </div>
                  ) : (
                    "save"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RootEditor;
