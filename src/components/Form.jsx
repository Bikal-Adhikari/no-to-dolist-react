import React, { useState } from "react";

export const Form = ({ addNewTask }) => {
  // local state

  const [form, setForm] = useState({
    type: "entry",
  });
  // create a function that receives the form data and updates to the local state
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    const obj = {
      ...form,
      id: randomIdGenerator(),
    };
    addNewTask(obj);
  };

  const randomIdGenerator = () => {
    const idLength = 6;
    const str =
      "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";

    let id = "";
    for (let i = 0; i < idLength; i++) {
      const randomPosition = Math.floor(Math.random() * str.length);
      id += str[randomPosition];
    }
    return id;
  };

  return (
    <form onSubmit={handelOnSubmit}>
      <div className="row g-2 mt-5 shadow-lg border p-5 rounded">
        <div className="col-md-7">
          <input
            type="text"
            className="form-control"
            placeholder="Task"
            aria-label="Task"
            name="task"
            required
            // call the function on onChange event of the inputfield
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="hours"
            aria-label="hours"
            name="hr"
            required
            min="1"
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-3 d-grid">
          <button className="btn btn-primary" type="submit">
            Add New Task
          </button>
        </div>
      </div>
    </form>
  );
};
