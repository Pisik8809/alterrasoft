// header.js
import React, { Component } from 'react';
import Menu from './menu';

//const headerHeight = window.innerHeight;

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
             scrollClass: ''
        }
    }

    handleScroll(event) {
        console.log('the scroll things', event);
        if (window.scrollY < 10 && this.state.scrollClass === 'dashed') {
            this.setState({scrollClass: ''});
            console.log('delete');
        }
        else if (window.scrollY !== 0 && this.state.scrollClass !== 'dashed') {
            this.setState({scrollClass: 'dashed'});
            console.log('set up');
        }
    };

    render() {
        return (
            <div className={this.state.scrollClass}>
                <Menu/>
            </div>
        );
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
}

export default Header;