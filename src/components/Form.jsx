import React, { useState } from "react";
import { postNewTask } from "../utils/axiosHelper";

const initialState = {
  task: "",
  hr: "",
  type: "entry",
};
const ttlPerWk = 24 * 7;
export const Form = ({ total, fetchAllTasks }) => {
  // local state

  const [form, setForm] = useState(initialState);

  const [response, setResponse] = useState({});
  // create a function that receives the form data and updates to the local state
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    response.message && setResponse({});
    setForm({
      ...form,
      [name]: name === "hr" ? +value : value,
    });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();

    if (total + form.hr > ttlPerWk) {
      return alert("Sorry Boss not enough hours left to fit this task");
    }
    const result = await postNewTask(form);
    setResponse(result);
    if (result.status === "success") {
      setForm(initialState);
      fetchAllTasks();
    }
  };

  return (
    <form onSubmit={handelOnSubmit}>
      <div className="row g-2 mt-5 shadow-lg border p-5 rounded">
        {response.message && (
          <div className="row">
            <div
              className={
                response.status === "success"
                  ? "alert alert-success"
                  : "alert alert-danger"
              }
            >
              {response.message}
            </div>
          </div>
        )}
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
            value={form.task}
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
            value={form.hr}
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
