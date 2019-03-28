import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import UserContext from './UserContext';

class NotePage extends React.Component  {

  static contextType = UserContext;    

  render(){

    const {notes, deleter} = this.context;

    const NOTE = notes.find(note =>{
       return note.id === this.props.match.params.id
      }
    )
    
    let date = moment(NOTE.modified).format('MM-DD-YYYY HH:MM:SS');

    return (
      <ul className='note-page'>
        <li className='back-button'>
          <Link to={`/Folder/${NOTE.folderId}`}>Go Back</Link>
        </li>
        <li className='delete-button'>
          <Link to={`/Folder/${NOTE.folderId}`} onClick={() => deleter(NOTE.id)}>Delete</Link>
        </li>
        <li className='note-info'>
          <h2>{NOTE.name}</h2>
          <p>{date} </p>
          <p>{NOTE.content}</p>
        </li>
      </ul>
    );
  }
}

export default NotePage;