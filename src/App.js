import { useState } from "react";
import "./App.css";
import List from "./List.jsx";
import ListWrapper from "./ListWrapper";
import capitalize, { upperCase, length } from "./helper/string.js";

function App() {
  const [name, setName] = useState("ali");
  const [students, setStudents] = useState([]);
  // const [newStudent, setNewStudent] = useState("");
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lasName: "",
    age: 10,
  });
  function onChangeInput(e) {
    const {name, value} = e.target
    const newNewStudent = {...newStudent};
    newNewStudent[name] = value;
    setNewStudent(newNewStudent);
  }
  console.log(newStudent);
  return (
    <div className="container">
      <div className="header">
        <input
          onChange={onChangeInput}
          name="firstName"
          className="input-style"
          type="text"
          placeholder="First name"
          value={newStudent.firstName}
        />
        <input
          onChange={onChangeInput}
          name="lastName"
          className="input-style"
          type="text"
          placeholder="Last name"
          value={newStudent.lasName}
        />
        <input
          onChange={onChangeInput}
          name="age"
          className="input-style"
          type="number"
          placeholder="Age"
          value={newStudent.age}
        />
        <button className="button-style">Submit</button>
      </div>
      <div className="list">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
