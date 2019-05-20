// portfolio.js
import React, { Component } from 'react';

class Portfolio extends Component {
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
        const portfolioData = this.state.alterraData.portfolio;
        if (!portfolioData) {
            return <div>NO DATA</div>
        }
        else {
            const portfolioMarckup = portfolioData.map((item, index) =>
                <a key={index} className="portfolio-item" href={item.link}>
                    <img src={item.src} alt={item.alt}/>
                    <div className="portfolio-item-text">
                        <h3 className="portfolio-item-heading">{item.heading}</h3>
                        <p className="portfolio-item-category">{item.category}</p>
                        <p className="portfolio-item-tags">Tags: 
                            <span className="standing-out_tag">{item.tag1}</span>
                            <span className="standing-out_tag">{item.tag2}</span>
                            <span className="standing-out_tag">{item.tag3}</span>
                        </p>
                        </div>
                </a> 
        );
            return (
                <section className="portfolio-block" id="projects">
                <h2 className="portfolio-heading">Our Proudly Presented Projects</h2>
                <p className="portfolio-description">You can evaluate the projects implemented by our team.</p>
                    <div className="portfolio-items-wrapper">
                        {portfolioMarckup}
                    </div>
                </section>
            );
        }
    }
    componentDidMount(){
        this.getMyData();
    }
}

export default Portfolio;