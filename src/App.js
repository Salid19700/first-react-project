import './App.css';
import List from "./List.jsx";
import ListWrapper from "./ListWrapper";

const students = [
  {
    name: "ali",
    id: 1
  },
  {
    name: "behrad",
    id: 2
  },
  {
    name: "tannaz",
    id: 3
  },
  {
    name: "aliajafary",
    id: 4
  }
]
function App() {
  return (
    <div className="App">
      <ListWrapper>
        <List title="student" students={students}/>
      </ListWrapper>

    </div>
  );
}

export default App;
