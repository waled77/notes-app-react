import React, { Component } from "react";
import './AddNotes.css';
import { NavLink } from "react-router-dom";

class AddNotes extends Component {
    state = {
        authorName:"",
        content:""
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


    render() {
        return (
            <div className="add-page">      
                <form>
                    <input type="text" placeholder="Author name" id="authorName"  value={this.state.authorName}  onChange={this.handelChange}/>
                    <textarea placeholder="The note" id="content" value={this.state.content} onChange={this.handelChange} />
                    <button type="submit" onClick={this.handelSubmit}><NavLink to="/notesitems">Add</NavLink></button>
                </form>
            </div>
        )
    }
}

export default AddNotes;