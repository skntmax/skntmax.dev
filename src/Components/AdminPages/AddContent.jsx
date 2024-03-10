import TextArea from "antd/es/input/TextArea";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const options = [
  {
    _id: "65eb77756d2787551603b3aa",
    TITLE: "SQL interview Questions",
  },
  {
    _id: "65eb77c36d2787551603b3ac",
    TITLE: "Sorting algorithm",
  },
  {
    _id: "65eb786c6d2787551603b3ae",
    TITLE: "Javascript interview questions",
  },
  {
    _id: "65eb78ec6d2787551603b3b0",
    TITLE: "DSA using javascript",
  },
  {
    _id: "65eb793f6d2787551603b3b2",
    TITLE: "Object Oriented Programming usin javascript",
  },
];

function AddContent() {
  const [data, setData] = useState({
    cat_id: { name: "cat_id", value: "", options: options },
    question: { name: "question", value: "", options: [] },
    answer: { name: "answer", value: "", options: [] },
    disc: { name: "disc", value: "", options: [] },
  });

  useEffect(() => {});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: { ...prev[name], value: value },
      };
    });
  };

  const saveContent = async () => {
    console.log(data);
    let model = {};

    for (let [key, val] of Object.entries(data)) {
      model[key] = data[key].value;
    }
    console.log(model);

    let save = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/v1/add-content`,
      model
    );
    if (save.data.status) {
      alert("saved");
    }
    console.log(save);
  };

  return (
    <div>
      <select name={data.cat_id.name} onChange={onChangeHandler}>
        {data.cat_id.options.map((ele) => {
          return <option value={ele._id}> {ele.TITLE} </option>;
        })}
      </select>

      <input
        name={data.question.name}
        value={data.question.value}
        onChange={onChangeHandler}
      />
      <TextArea
        name={data.answer.name}
        value={data.answer.value}
        onChange={onChangeHandler}
      />

      <TextArea
        cols={5}
        name={data.disc.name}
        value={data.disc.value}
        onChange={onChangeHandler}
      />

      <button className="btn btn-primary" onClick={saveContent}>
        save content
      </button>
    </div>
  );
}

export default AddContent;
