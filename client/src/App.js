import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [demo_name, setDemoName] = useState("");
  const [demoDescription, setDemoDescription] = useState("");
  const [demoList, setDemoList] = useState([]);

  const [newDescription, setDescription] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:5000/api/get").then((response) => {
      setDemoList(response.data);
    });
  }, []);

  const submitDemo = () => {
    Axios.post("http://localhost:5000/api/insert", {
      demo_name: demo_name,
      demo_description: demoDescription,
    });

    setDemoList([
      ...demoList,
      { demo_name: demo_name, demo_description: demoDescription },
    ]);
  };

  const deleteDemo = (demo) => {
    Axios.delete(`http://localhost:5000/api/delete/${demo}`);
  };

  const updateDemo = (demo_name) => {
    Axios.put("http://localhost:5000/api/update", {
      demo_name: demo_name,
      demo_description: newDescription,
    });
    setDescription("");
  };

  return (
    <div className="App">
      <h1>Crud Application</h1>
      <div className="form">
        <label>Demo Name:</label>
        <input
          type="text"
          name="demo_name"
          onChange={(e) => {
            setDemoName(e.target.value);
          }}
        />
        <label>Demo Description:</label>
        <input
          type="text"
          name="demoDescription"
          onChange={(e) => {
            setDemoDescription(e.target.value);
          }}
        />

        <button onClick={submitDemo}>Submit</button>

        {demoList.map((val) => {
          return (
            <div clannName="card">
              <h1>{val.demo_name}</h1>
              <p>{val.demo_description}</p>

              <button
                onClick={() => {
                  deleteDemo(val.demo_name);
                }}
              >
                Delete
              </button>
              <input
                type="text"
                id="updateInput"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  updateDemo(val.demo_name);
                }}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
