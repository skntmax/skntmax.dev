import React, { useEffect, useState } from "react";
import { v1rouer } from "../actions/root_action";

let intial_state = {
  title: { name: "title", value: "", error: "", required: false },
  disc: { name: "disc", value: "", error: "", required: false },
  multi: { name: "multi", value: false, error: "", required: false },
  sub_cat: {
    name: "sub_cat",
    value: "",
    error: "",
    required: false,
  },
  img: { name: "img", value: "", error: "", required: false },

  sub_categoryValues: [
    {
      name: "sub_categoryValues",
      value: "",
      error: "",
    },
  ],

  bulk_sub_cat: { name: "bulk_sub_cat", value: "", error: "" },
  removed_subcat: [],

  sub_cat_status: {
    name: "sub_cat_status",
    bulk_upload: false,
    ono: true,
  },
};

function EditForm({ cat_id }) {
  const [data, setData] = useState({ ...intial_state });

  const [loader, setLoader] = useState(false);

  const { title, disc, multi, sub_cat, img, sub_categoryValues } = data;

  const subCatHandler = (e, currentIndex) => {
    const { name, value } = e.target;

    let updatedArr = data.sub_categoryValues.map((ele, i) => {
      if (i == currentIndex) {
        return {
          ...ele,
          value: value,
        };
      } else return ele;
    });

    setData((prev) => {
      return {
        ...prev,
        // ["sub_cat"]: {
        //   ...prev["sub_cat"],
        //   value: updatedArr.map((ele) => ele.value).join("=="),
        // },
        ["sub_categoryValues"]: updatedArr,
      };
    });
  };

  const onChangeHandler = (e) => {
    const { name, value, type } = e.target;

    if (type == "checkbox") {
      console.log("checkbox");
      const { checked } = e.target;
      setData((prev) => {
        return {
          ...prev,
          [name]: { ...prev[name], value: checked },
        };
      });
    } else {
      console.log("text");

      setData((prev) => {
        return {
          ...prev,
          [name]: { ...prev[name], value: value },
        };
      });
    }

    if (type == "file") {
      let img = e.target.files[0];
      setData((prev) => {
        return {
          ...prev,
          [name]: { ...prev[name], value: img },
        };
      });
    }
  };

  const getCatContent = async () => {
    try {
      let catgs = await v1rouer.get(`get-categories-by-id/${cat_id}`);
      if (catgs.status) {
        if (catgs.result) {
          const response = catgs.result.data;
          console.log("response", response);
          setData((prev) => {
            return {
              ...prev,
              title: { ...prev["title"], value: response.TITLE },
              disc: { ...prev["disc"], value: response.DISC },
              multi: { ...prev["multi"], value: response.MULTI },
              //   sub_cat: {
              //     ...prev["multi"],
              //     value: response.MULTI?response.SUB_CAT.join(","):"",
              //   },

              sub_categoryValues: response.MULTI
                ? response.ALL_CAT.map((ele) => {
                    return {
                      ...ele,
                      value: ele.TITLE,
                      _id: ele._id,
                    };
                  })
                : [],

              //   bulk_sub_cat: { name: "bulk_sub_cat", value: "", error: "" },
            };
          });
        }
      }
    } catch (err) {}
  };

  useEffect(() => {
    getCatContent();
  }, [cat_id]);

  const updateCategory = async () => {
    try {
      //   let fd = new FormData();
      //   let model = {}
      //   fd.append("title", data.title.value);
      //   fd.append("disc", data.disc.value);
      //   fd.append("multi", data.multi.value);

      //   //   fd.append("img", data.img.value);

      //   if (data.multi.value) {
      //     fd.append(
      //       "sub_cat",
      //       data.sub_categoryValues.map((ele) => {
      //         return ele._id + "==" + ele.value;
      //       })
      //     );
      //   }

      //   if (data.removed_subcat.length > 0) {
      //     fd.append("deleted_sub_cat", data.removed_subcat);
      //   }

      setLoader(true);

      let model = { sub_cat: [], deleted_sub_cat: [] };
      model["title"] = data.title.value;
      model["disc"] = data.disc.value;
      model["multi"] = data.multi.value;

      //   fd.append("img", data.img.value);

      if (data.multi.value) {
        model["sub_cat"] = data.sub_categoryValues.map((ele) => {
          return ele._id + "==" + ele.value;
        });
      }

      if (data.removed_subcat.length > 0) {
        model["deleted_sub_cat"] = data.removed_subcat;
      }

      let update_cat = await v1rouer.post(
        `update-categories-by-id/${cat_id}`,
        model
      );

      console.log("update_cat", update_cat);

      if (update_cat.status) {
        alert("updated");
        await getCatContent();
      } else {
        alert(update_cat.error.message);
      }

      setLoader(false);
    } catch (err) {
      setLoader(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column justify-content-center align-items-center  ">
              <form style={{ width: "70%" }}>
                <div class="form-group my-2">
                  <input
                    onChange={onChangeHandler}
                    name={title.name}
                    value={title.value}
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="title"
                  />
                </div>

                <div class="form-group my-1">
                  <textarea
                    name={disc.name}
                    value={disc.value}
                    cols={5}
                    style={{ height: "200px" }}
                    onChange={onChangeHandler}
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Discription"
                  />
                </div>

                {multi.value && (
                  <div class="form-group my-5">
                    <label for="exampleInputEmail1">sub category</label>

                    <div
                      className="h-400 overflow-hidden overflow-scroll"
                      style={{ height: "400px" }}
                    >
                      {sub_categoryValues.map((item, index, arr) => (
                        <>
                          <div key={index} className="row my-4">
                            <div className="col-10">
                              <input
                                name={item.name}
                                value={item.value}
                                onChange={(e) => {
                                  subCatHandler(e, index);
                                }}
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="subcategory"
                              />
                            </div>

                            {arr.length > 1 && (
                              <div className="col-1 ">
                                <span
                                  onClick={(e) => {
                                    setData((prev) => {
                                      return {
                                        ...prev,
                                        sub_categoryValues:
                                          sub_categoryValues.filter(
                                            (_, i) => i != index
                                          ),
                                        removed_subcat: [
                                          ...prev.removed_subcat,
                                          item._id,
                                        ],
                                      };
                                    });
                                  }}
                                  className="badge badge-danger badge-lg text-dark cursor-pointer "
                                  style={{ cursor: "pointer" }}
                                >
                                  remove
                                </span>
                              </div>
                            )}
                          </div>
                        </>
                      ))}
                    </div>

                    {data.sub_cat_status.ono && (
                      <span
                        onClick={() => {
                          setData((prev) => {
                            return {
                              ...prev,
                              sub_categoryValues: [
                                ...prev.sub_categoryValues,
                                {
                                  name: "sub_categoryValues",
                                  value: "",
                                  error: "",
                                },
                              ],
                            };
                          });
                        }}
                        className="btn btn-primary btn-block w-100"
                      >
                        Add One more category
                      </span>
                    )}
                  </div>
                )}

                {loader ? (
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status"></div>
                  </div>
                ) : (
                  <span
                    onClick={updateCategory}
                    class="btn btn-primary btn-block w-100 "
                  >
                    Update category
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditForm;
