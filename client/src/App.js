import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Crud Application</h1>
      <div className="form">
        <label>Demo 1:</label>
        <input type="text" name="demoOne" />
        <label>Demo 2:</label>
        <input type="text" name="demoTwo" />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
