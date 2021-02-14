import "./App.css";
import { useState , useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Components/Todo";
import db from './firebase'
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    //when the app loads,we need to listen to the database and fetch new todos as they get added/removed.
    //this code here, fires when the app.js loads
    db.collection("todos").orderBy('timestamp','desc').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, [])

  const addTodo = (event) => {
    event.preventDefault(); //will stop the refresh after submit button gets hit
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    }
    )
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>TODO List</h1>
      <form>
        <FormControl>
          <InputLabel> Write your Todos</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          ADD TODO
        </Button>
      </form>
      <ul>
        {todos.map((todo, index) => 
            <Todo key = {index} text = {todo}/>
        )}
      </ul>

    </div>
  );
}

export default App;
