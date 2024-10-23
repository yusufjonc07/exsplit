import React from 'react';
import './Header.css'

const Header = props => {
    return (
        <header className="header">
            <h1>Welcome to {props.title}</h1>
            <p>This is a header component</p>
        </header>
    );
};

export default Header;
