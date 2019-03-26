import React from 'react';
import HomePage from './HomePage'
import {Route,Link} from 'react-router-dom';
import STORE from './STORE'
import Note from './Note'
import moment from 'moment';

class NotePage extends React.Component  {
    

  render(){
    const NOTE = this.props.store.notes.find(note =>{
       return note.id === this.props.match.params.id
      }
    )
    
    let date = moment(NOTE.modified).format('MM-DD-YYYY HH:MM:SS');

    return (
      <ul>
          <li>
        <Link to={`/Folder/${NOTE.folderId}`}>Go Back</Link>
        </li>
          <li>
        <h2>{NOTE.name}</h2>
        <p>{date} </p>
        <p>{NOTE.content}</p>
        </li>
      </ul>
    );
  }
}

export default NotePage;