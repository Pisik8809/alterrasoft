// menu.js
import React, { Component } from 'react';
import GlobalUrl from './global-url';
import { Link} from "react-scroll";
//animateScroll as scroll 
class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            alterraData: {}
        }
        
    }

    getMyData(){
        fetch(`${GlobalUrl}alterra-data.json`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ alterraData: data });
                console.log(this.state.alterraData);
            });
    }

    render() {
        const menuData = this.state.alterraData.menu;
        if (!menuData) {
            return <div className="alternate-site-loader"></div>
        }
        else {
            const menuMarckup = menuData.map((item, index) =>
             <li key={index} className="alterra-navigation-list-item">
                <Link to={item.href}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    href={`#${item.href}`} 
                    offset={-60}
                    duration={1000}
                    delay={300}               
                >{item.text}</Link>
            </li>
        );
            return (
                <nav>
                    <nav>
                    <ul className={"alterra-navigation"}>
                        {menuMarckup}
                    </ul>
                    </nav>
                </nav>
            );
        
        }
    }
    componentDidMount(){
        this.getMyData();
    }
}

/*scrollTargetIds={['home', 'about', 'projects', 'blog', 'contacts' ]}
activeNavClass="active"
scrollDuration="1000"
headerBackground="true"*/
export default Menu;