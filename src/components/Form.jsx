import React from "react";

export const Form = () => {
  return (
    <form action="javascript:void(0)" onSubmit="handleOnSubmit(this)">
      <div className="row g-2 mt-5 shadow-lg border p-5 rounded">
        <div className="col-md-7">
          <input
            type="text"
            className="form-control"
            placeholder="Task"
            aria-label="Task"
            name="task"
            required
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
