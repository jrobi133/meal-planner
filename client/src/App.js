import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [demoName, setDemoName] = useState("");
  const [demoDescription, setDemoDescription] = useState("");
  const [demoList, setDemoList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/get").then((response) => {
      setDemoList(response.data);
    });
  }, []);

  const submitDemo = () => {
    Axios.post("http://localhost:5000/api/insert", {
      demo_name: demoName,
      demo_description: demoDescription,
    }).then(() => {
      alert("successful insert");
    });
  };

  return (
    <div className="App">
      <h1>Crud Application</h1>
      <div className="form">
        <label>Demo 1:</label>
        <input
          type="text"
          name="demoName"
          onChange={(e) => {
            setDemoName(e.target.value);
          }}
        />
        <label>Demo 2:</label>
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
            <h1>
              Demo Name: {val.demo_name} | Demo Description:
              {val.demo_description}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default App;
