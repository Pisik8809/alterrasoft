// menu.js
import React, { Component } from 'react';
const homeUrl = 'http://localhost:3000/';
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
        const menuObject = this.state.alterraData.main;
        console.log(menuObject);
        if (!menuObject) {
            return <div>NO DATA</div>
        }
        else {
            return (
                <nav>
                    <ul className={"alterra-navigation"}>
                        {
                            Object.keys(menuObject).map((listKey) => (
                                <li key={listKey.toString()} className={"alterra-navigation-list-item"}>
                                    <a href={homeUrl}>{listKey}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            );
        }
    }

    componentDidMount(){
        this.getMyData();
    }
}

export default Menu;