import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import './Todo.css'
import React from 'react'
import db from '../firebase'
import firebase from 'firebase';

function Todo(props) {
    return (
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.text.todo} secondary="Todo..."/>
        </ListItem>
        <Button onClick = {event => db.collection('todos').doc(props.text.id).delete()}>Remove</Button>
      </List>
    );
}

export default Todo
