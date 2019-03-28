import React from 'react';
import Note from './Note'
import UserContext from './UserContext';

class NoteList extends React.Component  {

  static contextType = UserContext;
    

  render(){

    // Import the state
    const {notes} = this.context;

    let NOTES;
    if(this.props.location.pathname !== '/'){
      NOTES = notes.filter(note =>{
        return note.folderId === this.props.match.params.id
      })
    } else {
      NOTES = notes
    }


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