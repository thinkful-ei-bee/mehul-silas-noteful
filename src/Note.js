import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import UserContext from './UserContext';

class Note extends React.Component {
 
  static contextType = UserContext;

  render() {

    const {deleter} = this.context;
    let date = moment(this.props.modified).format('MM-DD-YYYY HH:MM:SS');

    return (
    
      <li key={this.props.noteId}>         
        <Link to={`/Note/${this.props.noteId}`}>
        {this.props.name}</Link>
        <p>{date}</p>
        <button onClick={() => deleter(this.props.noteId)}>Delete</button>
      </li>
    
    );
  }
}

export default Note;