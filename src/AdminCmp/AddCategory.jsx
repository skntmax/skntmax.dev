import axios from "axios";
import React from "react";
import { useState } from "react";

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
};

function AddCategory() {
  const [data, setData] = useState({ ...intial_state });

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
        ["sub_cat"]: {
          ...prev["sub_cat"],
          value: updatedArr.map((ele) => ele.value).join("=="),
        },
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
      fd.append("sub_cat", data.sub_cat.value);

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
      }

      console.log(addedCategory);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      <div className="contaner">
        <div className=" row">
          <div className="row-8 ">
            <h1 className="text-center text-uppercase">Add category</h1>
            <div
              className="d-flex justify-content-center align-items-center  border "
              style={{ height: "100vh" }}
            >
              <form>
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

                    {sub_categoryValues.map((item, index) => (
                      <>
                        <div key={index}>
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
                      </>
                    ))}

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

                <span
                  onClick={addCategory}
                  class="btn btn-primary btn-block w-100"
                >
                  Submit
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
