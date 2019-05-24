// header.js
import React, { PureComponent } from 'react';
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from './menu';

//const headerHeight = window.innerHeight;

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
             scrollClass: '',
             active: false
        }
        this.toggleClass = this.toggleClass.bind(this);
    }

    handleScroll(event) {
        if (window.scrollY < 1 && this.state.scrollClass === 'dashed') {
            this.setState({scrollClass: ''});
            console.log('delete');
        }
        else if (window.scrollY !== 0 && this.state.scrollClass !== 'dashed') {
            this.setState({scrollClass: 'dashed'});
            console.log('set up');
        }
    };

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        let menuActiveClass;
        if(this.state.active) {
            menuActiveClass = "active";
        }
        else {
            menuActiveClass = "deactive";
        }
        return (
            <div className={this.state.scrollClass}>
            <img className={"alterra-logo"} src={logo} alt={"logo"}/>
            <span onClick={this.toggleClass} className={menuActiveClass}>
                        <FontAwesomeIcon className="menu-bars" icon="bars"/>
            </span>
                <Menu/>
            </div>
        );
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    };
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    };
}

export default Header;