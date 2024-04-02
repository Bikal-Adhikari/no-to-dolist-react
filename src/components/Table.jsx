import React from "react";

export const Table = ({ entryList, switchTask, handOnDelete }) => {
  const entries = entryList.filter((item) => item.type === "entry");
  const badList = entryList.filter((item) => item.type === "bad");
  const ttlBad = badList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);
  return (
    <div className="row mt-5 gap-2">
      {/* <!-- entry list --> */}
      <div className="col-md">
        <h3 className="text-center">Entry List</h3>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="entry">
            {entries.map((item, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{item.task}</td>
                <td>{item.hr}hrs</td>
                <td className="text-end">
                  <button
                    onClick={() => handOnDelete(item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    onClick={() => switchTask(item.id, "bad")}
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
        <table className="table table-striped table-hover">
          <tbody id="bad">
            {badList.map((item, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{item.task}</td>
                <td>{item.hr}hrs</td>
                <td className="text-end">
                  <button
                    onClick={() => switchTask(item.id, "entry")}
                    className="btn btn-warning btn-sm"
                  >
                    <i
                      className="fa-sharp fa-solid fa-arrow-left-long
                    "
                    ></i>
                  </button>
                  <button
                    onClick={() => handOnDelete(item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="alert alert-success" role="alert">
          You could have saved = <span id="total-bad">{ttlBad}</span>hrs last
          week
        </div>
      </div>
    </div>
  );
};
