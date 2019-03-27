import React from 'react';
import Note from './Note'
import UserContext from './UserContext';

class NoteList extends React.Component  {

  static contextType = UserContext;
    

  render(){

    const {state} = this.context;

    const NOTES = state.notes.filter(note =>{
       return note.folderId === this.props.match.params.id
      }
    )

     let newnotes =  NOTES.map(note => {
        return <Note noteId = {note.id} 
          modified = {note.modified} 
          name= {note.name}
           />
      })
    return (
      <ul className="noteList">
        {newnotes}
      </ul>
    );
  }
}

export default NoteList;