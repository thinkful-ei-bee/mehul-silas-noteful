import React from 'react';
import HomePage from './HomePage'
import {Route,Link} from 'react-router-dom';
import STORE from './STORE'
import Note from './Note'

class NoteList extends React.Component  {
    

  render(){
    const NOTES = STORE.notes.filter(note =>{
       return note.folderId === this.props.match.params.id
      }
    )

     let newnotes =  NOTES.map(note => {
        return <Note noteId = {note.id} 
          modified = {note.modified} 
          name= {note.name}
          content={note.content} />
      })
    return (
      <ul>
        {newnotes}
      </ul>
    );
  }
}

export default NoteList;