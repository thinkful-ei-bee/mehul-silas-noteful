import React from 'react';
import HomePage from './HomePage'
import {Route,Link} from 'react-router-dom';

function Note(props) {
  return (
      
   <li>         
           <Link to={`/Note/${props.noteId}`}>
           {props.name}</Link>
   </li>
   
  );
}

export default Note;