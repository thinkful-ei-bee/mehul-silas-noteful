import React from 'react';
import {Route,Link} from 'react-router-dom'
import HomePage from './HomePage'
import FolderList from './FolderList'
import NoteList from './NoteList'
import NotePage from './NotePage'
import './App.css';
import UserContext from './UserContext'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
      onMain: true,
    }
  }

  handleDelete = (id) => {
    fetch(`http://localhost:9090/notes/${id}`, {
      method: 'DELETE'
    }).then(this.updateState)
    console.log(id)
  }


  // fetches notes and folder data from server
  // updates state
  updateState = () => {

    fetch('http://localhost:9090/folders', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        this.setState({
          folders: data
        })
      })
    
    fetch('http://localhost:9090/notes', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        this.setState({
          notes: data,
        })
      })
  }

  componentDidMount(){
    this.updateState()
  }

  

  render(){

    return (
      <main className='App'>

      <UserContext.Provider value={{
        state: this.state,
        deleter: this.handleDelete,
      }}>

        <section>
          <Route path='/' component={HomePage} />
          <Route exact path='/' component={FolderList}/>
          <Route exact path='/' component={NoteList} />
        </section>

        <section>
          <Route path='/Folder/:id' component={FolderList}/>
          <Route path='/Folder/:id' component={NoteList} />
        </section>

        <section>
          <Route path='/Note/:id' component={NotePage} />
        </section>


      </UserContext.Provider>

      </main>
    );
  }
}

export default App;