import './App.css';
import {useState} from 'react';

function App() {
  const [todos, setTodos] = useState(["Take dog for a walk", "Get a job", "Love yourself often"]);
  const [input,setInput] = useState("");

  const addTodo = (event)=>{
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  }
  return (
    <div className="App">
      <h1>TODO List</h1>
      <form>

      <input type="text" value = {input} onChange = {event=>{setInput(event.target.value)}} placeholder="Task..."/>
      <button type = "submit" onClick = {addTodo}>Add To Todo</button>

      </form>

      <ul>
        {todos.map(todo=>{
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
