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
  console.log(entryList);
  return (
    <div className="wrapper vh-100 pt-5">
      <div className="container">
        <Title />
        <Form addNewTask={addNewTask} />
        <Table />
        <div className="alert alert-success" role="alert">
          The total hours allocated = <span id="ttlHrs">0</span>hrs
        </div>
      </div>
    </div>
  );
}

export default App;
