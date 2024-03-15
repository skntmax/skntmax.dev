import axios from "axios";
import React from "react";
import { useState } from "react";
import EditCategory from "./EditCategory";
import EditForm from "./EditForm";

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

  sub_cat_status: {
    name: "sub_cat_status",
    bulk_upload: false,
    ono: true,
  },

  mode: "create",
  _id: "",
};

function AddCategory() {
  const [data, setData] = useState({ ...intial_state });

  const [loader, setLoader] = useState(false);

  const { title, disc, multi, sub_cat, img, sub_categoryValues } = data;

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

    // console.log("updatedSubCat", updatedSubCat);

    // setData(updatedSubCat);
  };

  const addCategory = async () => {
    try {
      let fd = new FormData();
      fd.append("title", data.title.value);
      fd.append("disc", data.disc.value);
      fd.append("multi", data.multi.value);
      fd.append("img", data.img.value);

      console.log("topic 1 ", fd.get("sub_cat"));

      if (data.sub_cat_status.bulk_upload) {
        if (data.bulk_sub_cat.value != "") {
          let sub_cat_pay = data.bulk_sub_cat.value.split(",").join("==");
          fd.append("sub_cat", sub_cat_pay);
        } else {
          alert(
            "please enter some category or topics related keywork seperated by comma"
          );
        }
      } else {
        fd.append(
          "sub_cat",
          data.sub_categoryValues.map((ele) => ele.value).join("==")
        );
      }

      console.log("get file", fd.get("sub_cat"));

      setLoader(true);

      let addedCategory = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/v1/add-category`,
        fd,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("addedCategory", addedCategory);
      if (addedCategory.status) {
        alert("saved");
        setData(intial_state);
        setLoader(false);
      }

      console.log(addedCategory);
    } catch (err) {
      console.log("err", err);
      setLoader(false);
    }
  };

  return (
    <>
      <div className="contaner">
        <div className=" row">
          <div className="row-8 ">
            <h1 className="text-center text-uppercase">Add category</h1>

            <div
              className="d-flex flex-column justify-content-center align-items-center  border "
              style={{ height: "100vh" }}
            >
              <div className="col-12" style={{ width: "50%" }}>
                <EditCategory
                  changeMode={(val, value) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        mode: val,
                        _id: value,
                      };
                    })
                  }
                />
              </div>

              {data.mode == "create" ? (
                <form style={{ width: "50%" }}>
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

                  <div class="form-group m-2">
                    <input
                      onChange={onChangeHandler}
                      name={multi.name}
                      checked={multi.value}
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label for="exampleInputEmail1" className="mx-2 ">
                      sub category
                    </label>
                  </div>

                  {multi.value && (
                    <div class="form-group my-5">
                      <label for="exampleInputEmail1">sub category</label>

                      <div className="row">
                        <div className="col-12">
                          <input
                            name={data.sub_cat_status.name}
                            type="radio"
                            checked={data.sub_cat_status.bulk_upload}
                            onChange={(e) => {
                              const { name } = e.target;
                              setData((prev) => {
                                return {
                                  ...prev,
                                  ["sub_cat"]: {
                                    ...prev["sub_cat"],
                                    value: "",
                                  },
                                  [name]: {
                                    ...prev[name],
                                    bulk_upload: true,
                                    ono: false,
                                  },
                                };
                              });
                            }}
                          />{" "}
                          Bulk upload
                        </div>

                        <div className="col-12">
                          <input
                            name={data.sub_cat_status.name}
                            type="radio"
                            checked={data.sub_cat_status.ono}
                            onChange={(e) => {
                              const { name } = e.target;
                              setData((prev) => {
                                return {
                                  ...prev,
                                  ["sub_cat"]: {
                                    ...prev["sub_cat"],
                                    value: "",
                                  },
                                  [name]: {
                                    ...prev[name],
                                    bulk_upload: false,
                                    ono: true,
                                  },
                                };
                              });
                            }}
                          />
                          One by One
                        </div>
                      </div>

                      {data.sub_cat_status.bulk_upload && (
                        <div className="col-12">
                          <textarea
                            cols={6}
                            style={{ height: "200px" }}
                            name={data.bulk_sub_cat.name}
                            value={data.bulk_sub_cat.value}
                            onChange={onChangeHandler}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder={`add subcategories related to this topic '${title.value}'  followed by comma , such as :             topic1 , topic2 , topic2 ...`}
                          />
                        </div>
                      )}

                      {data.sub_cat_status.ono &&
                        sub_categoryValues.map((item, index, arr) => (
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
                          add One category
                        </span>
                      )}
                    </div>
                  )}

                  <div class="form-group my-5">
                    <label for="exampleInputEmail1"> Category Image </label>
                    <input
                      name={img.name}
                      onChange={onChangeHandler}
                      type="file"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="subcategory"
                    />
                  </div>

                  {loader ? (
                    <div class="d-flex justify-content-center">
                      <div class="spinner-border" role="status"></div>
                    </div>
                  ) : (
                    <span
                      onClick={addCategory}
                      class="btn btn-primary btn-block w-100 "
                    >
                      Submit
                    </span>
                  )}
                </form>
              ) : (
                <EditForm cat_id={data._id} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
