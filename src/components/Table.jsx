import React from "react";

export const Table = () => {
  return (
    <div className="row mt-5 gap-2">
      {/* <!-- entry list --> */}
      <div className="col-md">
        <h3 className="text-center">Entry List</h3>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="entryList"></tbody>
        </table>
      </div>

      {/* <!-- bad list --> */}
      <div className="col-md">
        <h3 className="text-center">Bad List</h3>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="badList"></tbody>
        </table>
        <div className="alert alert-success" role="alert">
          You could have saved = <span id="total-bad">0</span>hrs last week
        </div>
      </div>
    </div>
  );
};
