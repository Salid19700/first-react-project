import { useState } from "react";
import "./App.css";
import List from "./List.jsx";
import ListWrapper from "./components/ListWrapper";
import StudentItem from "./components/StudentItem";

function App() {
  const [name, setName] = useState("ali");
  const [students, setStudents] = useState([]);
  // const [newStudent, setNewStudent] = useState("");
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    age: 10,
    id:0
  });
  function onChangeInput(e) {
    const { name, value } = e.target;
    const newNewStudent = { ...newStudent };
    newNewStudent[name] = value;
    newNewStudent.id = Math.round(Math.random()*1000);
    setNewStudent(newNewStudent);
  }
  function onClickSubmit() {
    const newStudents = [...students];
    if(newStudent.firstName.length > 0 && newStudent.lastName.length > 0){
      newStudents.push(newStudent);
      setStudents(newStudents);
      setNewStudent({
        firstName: "",
        lastName: "",
        age: 10,
        id:0
      })
    }
  }
  console.log(students);
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
          value={newStudent.lastName}
        />
        <input
          onChange={onChangeInput}
          name="age"
          className="input-style"
          type="number"
          placeholder="Age"
          value={newStudent.age}
        />
        <button onClick={onClickSubmit} className="button-style">
          Submit
        </button>
      </div>
      <div className="list">
        <ListWrapper title="students">
          {students.map(function (item, index) {
            console.log(item.id);
            return (
              <StudentItem
                key={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                age={item.age}
              />
            );
          })}
        </ListWrapper>
      </div>
    </div>
  );
}

export default App;
