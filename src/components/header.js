// header.js
import React, { Component } from 'react';
import Menu from './menu';

class Header extends Component {
    render() {
        return (
            <div>
                <Menu/>
                APP header
            </div>
        );
    }
}

export default Header;