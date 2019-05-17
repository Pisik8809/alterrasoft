// menu.js
import React, { Component } from 'react';
import ScrollspyNav from "react-scrollspy-nav";
class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
            return (
                <nav>
                    <ScrollspyNav                        
                        scrollTargetIds={['home', 'about', 'projects', 'blog', 'contacts' ]}
                        activeNavClass="active"
                        scrollDuration="1000"
                        headerBackground="true"
                    >
                    <ul className={"alterra-navigation"}>
                        <li className="alterra-navigation-list-item">
                            <a href="#home">Home</a>
                        </li>
                        <li className="alterra-navigation-list-item">
                            <a href="#about">About</a>
                        </li>
                        <li className="alterra-navigation-list-item">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="alterra-navigation-list-item">
                            <a href="#blog">Blog</a>
                        </li>
                        <li className="alterra-navigation-list-item">
                            <a href="#contacts">Contacts</a>
                        </li>
                    </ul>
                    </ScrollspyNav>
                </nav>
            );
    }
}

export default Menu;