import React, { Component } from 'react';
import Footer from './footer';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PortfolioItem extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.match = this.props.match;
    }
    

    render() {
        let contentImg = "img";
        let contentText = "test";
        if(this.props.location.pathname === "/article/8") {
            contentImg = "img8";
            contentText = "test8";
        }
        if(this.props.location.pathname === "/article/7") {
            contentImg = "img7";
            contentText = "test7";
        }
        if(this.props.location.pathname === "/article/6") {
            contentImg = "img6";
            contentText = "test6";
        }
        if(this.props.location.pathname === "/article/5") {
            contentImg = "img5";
            contentText = "test5";
        }
        if(this.props.location.pathname === "/article/4") {
            contentImg = "img4";
            contentText = "test4";
        }
        if(this.props.location.pathname === "/article/3") {
            contentImg = "img3";
            contentText = "test3";
        }
        if(this.props.location.pathname === "/article/2") {
            contentImg = "img2";
            contentText = "test2";
        }
        if(this.props.location.pathname === "/article/1") {
            contentImg = "img1";
            contentText = "test1";
        }
        return(
            <div>
            <p>{contentImg}</p>
            <h1>{contentText}</h1>
            <Footer/>
            </div>
        )
            
    }
    componentDidMount() {
        console.log(this.match);
    }
}

export default PortfolioItem;