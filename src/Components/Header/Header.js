import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <NavLink exact to="/" className="link"><span>Notes App</span></NavLink>
                <NavLink to="/notesitems" className="link">Notes List</NavLink>
            </div>
        </div>
    )
}

export default Header;