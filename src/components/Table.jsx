/* eslint-disable react/prop-types */
import React, { useState } from "react";

export const Table = ({ entryList, switchTask, handOnDelete }) => {
  const [idsToDelete, setIdsToDelete] = useState([]);

  const entries = entryList.filter((item) => item.type === "entry");
  const badList = entryList.filter((item) => item.type === "bad");

  const handelOnSelect = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setIdsToDelete([...idsToDelete, value]);
    } else {
      //remove

      setIdsToDelete(idsToDelete.filter((_id) => _id !== value));
    }
  };

  const handelOnSelectAll = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);
    if (value === "entry") {
      if (checked) {
        // get all ids of entry and add to Idsto delete
        const allIds = entries.map((entry) => entry._id);
        setIdsToDelete((prevIds) => [...prevIds, ...allIds]);
      } else {
        // remove all ids of entry and add to Idsto delete
        setIdsToDelete([]);
      }
    }
    if (value === "bad") {
      if (checked) {
        // get all ids of bad and add to Idstodelete
        const allBadIds = badList.map((bad) => bad._id);
        setIdsToDelete((prevIds) => [...prevIds, ...allBadIds]);
      } else {
        // remove all ids of bad and add to Idstodelete
        setIdsToDelete([]);
      }
    }
  };
  console.log(idsToDelete);

  return (
    <>
      <div className="row mt-5 gap-2">
        {/* <!-- entry list --> */}
        <div className="col-md">
          <h3 className="text-center">Entry List</h3>
          <hr />
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="selectEntryList"
              onChange={handelOnSelectAll}
              value="entry"
            />
            <label htmlFor="selectEntryList">Select all entry list</label>
          </div>
          <table className="table table-striped table-hover">
            <tbody id="entry">
              {entries.map((item, i) => (
                <tr key={item._id}>
                  <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={handelOnSelect}
                      value={item._id}
                    />
                  </td>
                  <th>{i + 1}</th>
                  <td>{item.task}</td>
                  <td>{item.hr}hrs</td>
                  <td className="text-end">
                    {/* <button
                    onClick={() => handOnDelete(item._id)}
                    className="btn btn-danger btn-sm"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button> */}
                    <button
                      onClick={() => switchTask(item._id, "bad")}
                      className="btn btn-success btn-sm"
                    >
                      <i className="fa-sharp fa-solid fa-arrow-right-long"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <!-- bad list --> */}
        <div className="col-md">
          <h3 className="text-center">Bad List</h3>
          <hr />
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="selectEntryList"
              onChange={handelOnSelectAll}
              value="bad"
            />
            <label htmlFor="selectEntryList">Select all entry list</label>
          </div>
          <table className="table table-striped table-hover">
            <tbody id="bad">
              {badList.map((item, i) => (
                <tr key={item._id}>
                  <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={handelOnSelect}
                      value={item._id}
                    />
                  </td>
                  <th>{i + 1}</th>
                  <td>{item.task}</td>
                  <td>{item.hr}hrs</td>
                  <td className="text-end">
                    <button
                      onClick={() => switchTask(item._id, "entry")}
                      className="btn btn-warning btn-sm"
                    >
                      <i
                        className="fa-sharp fa-solid fa-arrow-left-long
                    "
                      ></i>
                    </button>
                    {/* <button
                    onClick={() => handOnDelete(item._id)}
                    className="btn btn-danger btn-sm"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="alert alert-success" role="alert">
            You could have saved ={" "}
            <span id="total-bad">
              {badList.reduce((acc, item) => acc + item.hr, 0)}
            </span>
            hrs last week
          </div>
        </div>
      </div>
      <div className="d-grid mb-3">
        <button className="btn btn-danger btn-lg">
          <i className="fa-solid fa-trash"></i> Delete 5 task
        </button>
      </div>
    </>
  );
};
