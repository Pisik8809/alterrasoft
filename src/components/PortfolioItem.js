import React, { Component } from 'react';
import GlobalUrl from './global-url';
import Slider from "react-slick";
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
        var settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        };
        let contentHeading = "heading";
        let contentText = "test";
        let technologies = "test";
        let allImgsList = [];
        if(this.props.location.pathname === "/portfolio/8") {
            contentHeading = "IT School app";
            contentText = `IT school project where experienced lecturers share their knowledge with students. 
            It contains actual information about the schedule, courses, lecturers, and events as well as contacts. 
            This project was created within a limited budget. And due to its fixed cost origin, we decided to 
            implement using Firebase BaaS platform to store all the data. This solution goes really well with the 
            projects of such size. So for the customers who want small or up to mid-size projects, we can recommend 
            this way of implementation.`;
            technologies = "iOS, Firebase";
            allImgsList = [{img: `${GlobalUrl}lemon1.jpg`, alt: "portfolio-img-1"}, 
            {img: `${GlobalUrl}e-learning-1-4.jpg`, alt: "portfolio-img-2"}, 
            {img: `${GlobalUrl}e-learning-2-4.jpg`, alt: "portfolio-img-3"},
            {img: `${GlobalUrl}e-learning-3-4.jpg`, alt: "portfolio-img-4"},
            {img: `${GlobalUrl}e-learning-4-4.jpg`, alt: "portfolio-img-5"},
            {img: `${GlobalUrl}e-learning-5-4.jpg`, alt: "portfolio-img-5"}];
        }
        if(this.props.location.pathname === "/portfolio/7") {
            contentHeading = "Detox marketplace/Health app";
            contentText = `Detox app will help you to understand more about the detox lifestyle and how to 
            start your detox in healthy ways. It’s really crucial to help re-set your body to its natural best! 
            There are different programs included that have been designed to help you boost your detoxification process. 
            Anyway, you can refer to other materials provided by the app and combine them to turn your 
            life into a healthy path.`;
            technologies = "iOS, Firebase";
            allImgsList = [{img: `${GlobalUrl}detox1.jpg`, alt: "portfolio-img-1"}];
        }
        if(this.props.location.pathname === "/portfolio/6") {
            contentHeading = "Home Climate Control";
            contentText = `As the perfect addition to special hardware supplement, the application provides 
            the user with the great opportunity to manage the climate conditions inside their homes remotely. 
            It supports all the rooms the system is installed to and allows to manage personal climate preferences 
            on different profile screens. Laconic UI guides the users through the necessary steps to make sure 
            the system is configured right up to them. You can address a few rooms or the entire house. 
            So with the system components all together you will never feel uncomfortable stepping into your smart home.`;
            technologies = "React Native";
            allImgsList = [{img: `${GlobalUrl}house1.jpg`, alt: "portfolio-img-1"},  
            {img: `${GlobalUrl}house2.jpg`, alt: "tportfolio-img-2"}];
        }
        if(this.props.location.pathname === "/portfolio/5") {
            contentHeading = "Dog Owners Social Net";
            contentText = `The platform is for matching and gathering proud dog owners. It provides a unique 
            way of meeting up and having fun with other users and dog lovers alike. Created for all dog owners 
            and their pups to unite, make new friends, build lasting relationships, and connect with people who 
            share the love for dogs. The app facilitates the communication between dog parents according to user areas. 
            Whether user’s got a question, or needs advice from another parent, or even wants to meet in real 
            life and hang out, this app is the perfect point to start it all.`;
            technologies = "iOS, NodeJS";
            allImgsList = [{img: `${GlobalUrl}dog1-6.jpg`, alt: "portfolio-img-1"}, 
            {img: `${GlobalUrl}dog2-4.jpg`, alt: "portfolio-img-2"}, 
            {img: `${GlobalUrl}dog3-4.jpg`, alt: "portfolio-img-3"}];
        }
        if(this.props.location.pathname === "/portfolio/4") {
            contentHeading = "Private Investors Discussion club";
            contentText = `A special investors forum intended for key players in investment from Europe and GCC. 
            The main goal is to create new, stable and positive personal ties between investors. 
            Therefore, the specialty of these meetings is the emphasis on the easiness and convenience of creating 
            personal connections for investing.`;
            technologies = "React Native";
            allImgsList = [{img: `${GlobalUrl}disc2-5.jpg`, alt: "portfolio-img-1"}, 
            {img: `${GlobalUrl}disc1-5.jpg`, alt: "portfolio-img-2"}];
        }
        if(this.props.location.pathname === "/portfolio/3") {
            contentHeading = "Home Renovations";
            contentText = `The platform helps people find and compare qualified and available contractors 
            for renovation projects. So it’s easy to find the trusted handymen and complete your renovation 
            successfully on time. That’s why the website focuses on evaluating workers’ skills and quality 
            of the work performed.`;
            technologies = "PHP, JS";
            allImgsList = [{img: `${GlobalUrl}dom1-5.jpg`, alt: "portfolio-img-1"}, 
            {img: `${GlobalUrl}dom2-5.jpg`, alt: "portfolio-img-2"}, 
            {img: `${GlobalUrl}dom3-6.jpg`, alt: "portfolio-img-3"}];
        }
        if(this.props.location.pathname === "/portfolio/2") {
            contentHeading = "Black Friday Offers Aggregator";
            contentText = `This state-wide special offers aggregator helps buyers to be with Big Black Friday 
            sale and not to miss perfect deals this year. The website gathers all the most interesting propositions 
            that will be available right at that time. So the users can subscribe and get notified in order to be ready 
            beforehand.`;
            technologies = "JS";
            allImgsList = [{img: `${GlobalUrl}bf-uniq-rotate.jpg`, alt: "portfolio-img-1"}, 
            {img: `${GlobalUrl}bf3-4.jpg`, alt: "portfolio-img-2"}, 
            {img: `${GlobalUrl}bf2-4-1.jpg`, alt: "portfolio-img-3"}];
        }
        if(this.props.location.pathname === "/portfolio/1") {
            contentHeading = "Tiles and finishing configurator";
            contentText = `The website of special tiles and finishing materials that offers on-site customization and 
            ultimate products quality to build up trendsetting designs. It has PHP-based E-commerce back-end to manage 
            orders and a user-friendly selection path on UI side to attract customers and help them find the suitable design 
            solution to be applied.`;
            technologies = "PHP, JS";
            allImgsList = [{img: `${GlobalUrl}dl1-4.jpg`, alt: "portfolio-img-1"}, 
            {img: `${GlobalUrl}dl2-4.jpg`, alt: "portfolio-img-2"}, 
            {img: `${GlobalUrl}dl3-4.jpg`, alt: "portfolio-img-3"}];
        }
        const sliderMarckup = allImgsList.map((item, index) =>
                <div key={index} >
                    <img className={"slick-slide-image"} src={item.img} alt={item.alt}/>
                </div>
        );
        return(
            <div className="portfolio-page-block">
            <a className="route-to-home" href={GlobalUrl}>Return to Home page</a>
            <h2 className="portfolio-page-heading_top">{contentHeading}</h2>
            <Slider className="portfolio-page-slider" {...settings}>
                {sliderMarckup}
            </Slider>
            <div className="portfolio-page-content-wrapper">
                <h3 className="portfolio-page-heading_content">{contentHeading}</h3>
                <p className="portfolio-page-text">{contentText}</p>
                <p className="portfolio-page-technologies">Technologies:{technologies}</p>
            </div>
            <Footer/>
            </div>
        )
            
    }
    componentDidMount() {
        console.log(this.match);
    }
}

export default PortfolioItem;