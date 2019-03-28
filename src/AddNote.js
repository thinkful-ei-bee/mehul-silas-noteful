import React from 'react'
import moment from 'moment'
import cuid from 'cuid'

export default class AddNote extends React.Component {
  
  constructor(props) {
    super(props)
    this.state={
      folder: '',
      folderId: '',
      modified: '',
      name:'',
      content: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    fetch('http://localhost:9090/notes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: cuid(),
        name: this.state.name,
        modified: this.state.modified,
        folderId: this.state.folderId,
        content: this.state.content,
      })
    }).then(() => this.props.updateState())
  }

  handleName(name) {
    this.setState({name})
  }

  handleContent(content) {
    this.setState({content})
  }

  handleFolder(folderName) {
    console.log(folderName)
    const matchingFolder = this.props.folders.filter(folder => folder.name === folderName)[0]
    console.log(matchingFolder)
    this.setState({
      folder: folderName,
      folderId: matchingFolder.id,
    })
    //this.setState({folder})
  }

  render() {

    return(
      <form onSubmit={e => this.handleSubmit(e)}>
        <label for='name'>Name: </label>
        <input type='text' name='name' onChange={e => this.handleName(e.target.value)}></input>

        <label for='content'>Content: </label>
        <input type='text' name='content' onChange={e => this.handleContent(e.target.value)}></input>

        <label for='folder'>Folder: </label>
        <select name='folder' onChange={e => this.handleFolder(e.target.value)}>
          {this.props.folders.map(folder => {
            return (
              <option value={folder.name} id={folder.id}>{folder.name}</option>
            )
          })}
        </select>

        <button type='submit' onClick={() => this.setState({moment: moment()})}>Add</button>
      </form>
    )
  }
}