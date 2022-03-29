import './App.css';
import { Component } from 'react';
import NotesItems from './Components/NotesItems/NotesItems';
import AddNotes from './Components/AddNotes/AddNotes';
import Header from './Components/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

class App extends Component {

  state = {
      notes:[
        {
          id:1,
          authorName:"Author Name 1",
          content:"Lorem Ipsum is simply dummy text of Lorem Ipsum has "
        },
        {
          id:2,
          authorName:"Author Name 2",
          content:"Lorem Ipsum is simply dummy text of Lorem Ipsum hasLorem Ipsum is simply dummy text of Lorem Ipsum has"
        },
        {
          id:3,
          authorName:"Author Name 3",
          content:"Lorem Ipsum is simply dummy text of Lorem Ipsum"
        },
        {
          id:4,
          authorName:"Author Name 4",
          content:"Lorem Ipsum is simply dummy text of Lorem Ipsum Lorem Ipsum is simply dummy text of Lorem Ipsum Ipsum is simply dummy text of Lorem Ipsum"
        }
      ],
      
  }
  
  addNote = (note)  => {
    const {notes} = this.state;
    notes.push(note)
    this.setState({
      notes:notes
    })
  }

  deleteNote = (id) => {
    const {notes} = this.state;
    let i = notes.findIndex(note => note.id == id)
      notes.splice(i,1)
      this.setState({
        notes:notes
      })
  }

  handelChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })

}

handelSubmit = (e) => {
    e.preventDefault();
    if(this.state.authorName === '' || this.state.content === ""  ) {
        return false;
        
    } else {
        this.props.addNote(this.state)
        this.setState({
            authorName:"",
            content:""
        })
    }
}

  render () {
    return (
          <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<AddNotes addNote={this.addNote} />} />
                <Route path="/notesitems" element={<NotesItems notes={this.state.notes} deleteNote={this.deleteNote} />} />
            </Routes>
          </BrowserRouter>
    )
  }
}

export default App;
