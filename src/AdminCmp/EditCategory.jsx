import React, { useEffect, useState } from "react";
import { v1rouer } from "../actions/root_action";

function EditCategory(props) {
  const [data, setdata] = useState({
    cat: { name: "cat", value: "", options: [], error: "" },
  });

  const getCat = async () => {
    try {
      let catgs = await v1rouer.get("get-categories");
      if (catgs.status) {
        setdata((prev) => {
          return {
            ...prev,
            ["cat"]: { ...prev["cat"], options: catgs.result.data },
          };
        });
      }
    } catch (err) {}
  };

  useEffect(() => {
    getCat();
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (value != "") {
      setdata((prev) => {
        return {
          ...prev,
          [name]: { ...prev[name], value: value },
        };
      });
      props.changeMode("edit");
    } else {
      props.changeMode("create");
    }
  };

  return (
    <>
      <select
        name={data.cat.name}
        onChange={onChangeHandler}
        class="form-select"
        aria-label="Default select example"
      >
        <option value="">Add a new One or Edit the existing one</option>

        {data.cat.options.map((ele) => {
          return <option value={ele._id}>{ele.TITLE}</option>;
        })}
      </select>
    </>
  );
}

export default EditCategory;
