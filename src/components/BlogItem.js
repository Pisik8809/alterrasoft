import React, { Component } from 'react';
import Footer from './footer';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BlogItem extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    

    render() {
        let contentHeading = "heading";
        let contentText = "test";
        let technologies = "test";
        let articleImg = [];
        if(this.props.location.pathname === "/article/5") {
            contentHeading = "IT School app";
            contentText = `IT school project where experienced lecturers share their knowledge with students. 
            It contains actual information about the schedule, courses, lecturers, and events as well as contacts. 
            This project was created within a limited budget. And due to its fixed cost origin, we decided to 
            implement using Firebase BaaS platform to store all the data. This solution goes really well with the 
            projects of such size. So for the customers who want small or up to mid-size projects, we can recommend 
            this way of implementation.`;
            technologies = "iOS, Firebase";
            articleImg = "http://localhost:3000/lemon1.jpg";
        }
        if(this.props.location.pathname === "/article/4") {
            contentHeading = "Detox marketplace/Health app";
            contentText = `Detox app will help you to understand more about the detox lifestyle and how to 
            start your detox in healthy ways. It’s really crucial to help re-set your body to its natural best! 
            There are different programs included that have been designed to help you boost your detoxification process. 
            Anyway, you can refer to other materials provided by the app and combine them to turn your 
            life into a healthy path.`;
            technologies = "iOS, Firebase";
            articleImg = "http://localhost:3000/lemon1.jpg";
        }
        if(this.props.location.pathname === "/article/3") {
            contentHeading = "Home Climate Control";
            contentText = `As the perfect addition to special hardware supplement, the application provides 
            the user with the great opportunity to manage the climate conditions inside their homes remotely. 
            It supports all the rooms the system is installed to and allows to manage personal climate preferences 
            on different profile screens. Laconic UI guides the users through the necessary steps to make sure 
            the system is configured right up to them. You can address a few rooms or the entire house. 
            So with the system components all together you will never feel uncomfortable stepping into your smart home.`;
            technologies = "React Native";
            articleImg = "http://localhost:3000/lemon1.jpg";
        }
        if(this.props.location.pathname === "/article/2") {
            contentHeading = "Dog Owners Social Net";
            contentText = `The platform is for matching and gathering proud dog owners. It provides a unique 
            way of meeting up and having fun with other users and dog lovers alike. Created for all dog owners 
            and their pups to unite, make new friends, build lasting relationships, and connect with people who 
            share the love for dogs. The app facilitates the communication between dog parents according to user areas. 
            Whether user’s got a question, or needs advice from another parent, or even wants to meet in real 
            life and hang out, this app is the perfect point to start it all.`;
            technologies = "iOS, NodeJS";
            articleImg = "http://localhost:3000/lemon1.jpg";
        }
        if(this.props.location.pathname === "/article/1") {
            contentHeading = "Private Investors Discussion club";
            contentText = `A special investors forum intended for key players in investment from Europe and GCC. 
            The main goal is to create new, stable and positive personal ties between investors. 
            Therefore, the specialty of these meetings is the emphasis on the easiness and convenience of creating 
            personal connections for investing.`;
            technologies = "React Native";
            articleImg = "http://localhost:3000/lemon1.jpg";
        }
        return(
            <div className="portfolio-page-block">
            <h2 className="portfolio-page-heading_top">{contentHeading}</h2>
            <img href={articleImg} alt="article-img"/>
            <div className="portfolio-page-content-wrapper">
                <h3 className="portfolio-page-heading_content">{contentHeading}</h3>
                <p className="portfolio-page-text">{contentText}</p>
                <p className="portfolio-page-technologies">Technologies:{technologies}</p>
            </div>
            <Footer/>
            </div>
        )
            
    }
}

export default BlogItem;