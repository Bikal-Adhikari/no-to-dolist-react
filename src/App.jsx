import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { Title } from "./components/Title";

function App() {
  const [entryList, setEntryList] = useState([]);
  const addNewTask = (taskObj) => {
    setEntryList([...entryList, taskObj]);
  };
  const switchTask = (id, type) => {
    const tempArg = entryList.map((item) => {
      if (item.id === id) item.type = type;

      return item;
    });
    setEntryList(tempArg);
  };

  const handOnDelete = (id) => {
    if (window.confirm("Are you sure, you want to delete the item?")) {
      setEntryList(entryList.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="wrapper vh-100 pt-5">
      <div className="container">
        <Title />
        <Form addNewTask={addNewTask} />
        <Table
          entryList={entryList}
          switchTask={switchTask}
          handOnDelete={handOnDelete}
        />
        <div className="alert alert-success" role="alert">
          The total hours allocated = <span id="ttlHrs">0</span>hrs
        </div>
      </div>
    </div>
  );
}

export default App;
