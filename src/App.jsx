import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { Title } from "./components/Title";
import { deleteTasks, getAllTasks, updateTask } from "./utils/axiosHelper";

function App() {
  const [entryList, setEntryList] = useState([]);
  useEffect(() => {
    fetchAllTasks();
  }, []);

  const switchTask = async (_id, type) => {
    const { status } = await updateTask({ _id, type });
    status === "success" && fetchAllTasks();
  };

  const fetchAllTasks = async () => {
    const { status, task } = await getAllTasks();
    console.log(task);
    status === "success" && setEntryList(task);
  };

  const handOnDelete = async (_id) => {
    if (window.confirm("Are you sure, you want to delete the item?")) {
      const { status, message } = await deleteTasks({ _id });
      if (status === "success") {
        fetchAllTasks();
        alert(message);
      }
    }
  };

  const total = entryList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);

  return (
    <div className="wrapper vh-100 pt-5">
      <div className="container">
        <Title />
        <Form total={total} fetchAllTasks={fetchAllTasks} />
        <Table
          entryList={entryList}
          switchTask={switchTask}
          handOnDelete={handOnDelete}
        />

        <div className="alert alert-success" role="alert">
          The total hours allocated = <span id="ttlHrs">{total}</span>
          hrs
        </div>
      </div>
    </div>
  );
}

export default App;
