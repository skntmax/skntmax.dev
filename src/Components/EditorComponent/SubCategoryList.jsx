import React, { useEffect, useState } from "react";
import { v1rouer } from "../../actions/root_action";

function SubCategoryList({ cat_id, changeMode }) {
  const [data, setdata] = useState({
    topic: {
      name: "topic",
      value: "",
      options: [],
      error: "",
      required: false,
    },
  });
  const getCatSubcat = async () => {
    try {
      let catgs = await v1rouer.get(`get-categories-by-id/${cat_id}`);
      if (catgs.status) {
        setdata((prev) => {
          return {
            ...prev,
            ["topic"]: { ...prev["topic"], options: catgs.result.data.ALL_CAT },
          };
        });
      }
    } catch (err) {}
  };

  useEffect(() => {
    getCatSubcat();
  }, [cat_id]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (value != "") {
      setdata((prev) => {
        return {
          ...prev,
          [name]: { ...prev[name], value: value },
        };
      });
      changeMode(value); // id of sub category
    } else {
      changeMode(value);
    }
  };

  return (
    <>
      <select
        name={data.topic.name}
        onChange={onChangeHandler}
        class="form-select"
        aria-label="Default select example"
      >
        <option value="">Select topic </option>

        {data.topic.options.map((ele) => {
          return <option value={ele._id}>{ele.TITLE}</option>;
        })}
      </select>
    </>
  );
}

export default SubCategoryList;
