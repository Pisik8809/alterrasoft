// menu.js
import React, { Component } from 'react';
import ScrollspyNav from "react-scrollspy-nav";
class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            alterraData: {}
        }
    }

    getMyData(){
        fetch('http://localhost:3000/alterra-data.json')
            .then((res) => res.json())
            .then((data) => {
                this.setState({ alterraData: data });
                console.log(this.state.alterraData);
            });
    }

    render() {
        const menuData = this.state.alterraData.menu;
        if (!menuData) {
            return <div>NO DATA</div>
        }
        else {
            const menuMarckup = menuData.map((item, index) =>
             <li key={index} className="alterra-navigation-list-item">
                <a href={item.href}>{item.text}</a>
            </li>
        );
            return (
                <nav>
                    <ScrollspyNav                        
                        scrollTargetIds={['home', 'about', 'projects', 'blog', 'contacts' ]}
                        activeNavClass="active"
                        scrollDuration="1000"
                        headerBackground="true"
                    >
                    <ul className={"alterra-navigation"}>
                        {menuMarckup}
                    </ul>
                    </ScrollspyNav>
                </nav>
            );
        
        }
    }
    componentDidMount(){
        this.getMyData();
    }
}
export default Menu;