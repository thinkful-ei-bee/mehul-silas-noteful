import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import UserContext from './UserContext';

class NotePage extends React.Component  {

  static contextType = UserContext;    

  render(){

    const {state} = this.context;

    const NOTE = state.notes.find(note =>{
       return note.id === this.props.match.params.id
      }
    )
    
    let date = moment(NOTE.modified).format('MM-DD-YYYY HH:MM:SS');

    return (
      <ul className='note-page'>
          <li className='back-button'>
        <Link to={`/Folder/${NOTE.folderId}`}>Go Back</Link>
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