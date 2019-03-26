import React from 'react';
import HomePage from './HomePage'
import {Route,Link} from 'react-router-dom';

function Note(props) {

  return (
      
    <li key={props.noteId}>         
      <Link to={`/Note/${props.noteId}`}>
      {props.name}</Link>
      <p>{props.content}</p>
    </li>
   
  );
}

export default Note;