// portfolio.js
import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <section className="portfolio-block" id="projects">
            <h2 className="portfolio-heading">Our Proudly Presented Projects</h2>
            <p className="portfolio-description">You can evaluate the projects implemented by our team.</p>
                <div className="portfolio-items-wrapper">
                    <a className="portfolio-item" href="http://localhost:3000/"><img src="http://localhost:3000/dl1-4.jpg" alt="dl-img"/>
                        <div className="portfolio-item-text">
                            <h3 className="portfolio-item-heading">Tiles and finishing configurator</h3>
                            <p className="portfolio-item-category">Web development</p>
                            <p className="portfolio-item-tags">Tags: 
                                <span className="standing-out_tag">E-commerce</span>
                                <span className="standing-out_tag">Wizard</span>
                                <span className="standing-out_tag">Online store</span>
                            </p>
                        </div>
                    </a>
                    <a className="portfolio-item" href="http://localhost:3000/"><img src="http://localhost:3000/bf-uniq-rotate.jpg" alt="bf-img"/>
                        <div className="portfolio-item-text">
                            <h3 className="portfolio-item-heading">Black Friday Offers Aggregator</h3>
                            <p className="portfolio-item-category">Web development</p>
                            <p className="portfolio-item-tags">Tags: 
                                <span className="standing-out_tag">Aggregator</span>
                                <span className="standing-out_tag">Subscription</span>
                                <span className="standing-out_tag">Promotions</span>
                            </p>
                        </div>
                    </a>
                    <a className="portfolio-item" href="http://localhost:3000/"><img src="http://localhost:3000/dom1-5.jpg" alt="dom-img"/>
                        <div className="portfolio-item-text">
                            <h3 className="portfolio-item-heading">Home Renovations</h3>
                            <p className="portfolio-item-category">Web development</p>
                            <p className="portfolio-item-tags">Tags: 
                                <span className="standing-out_tag">Aggregator</span>
                                <span className="standing-out_tag">Marketplace</span>
                                <span className="standing-out_tag">E-commerce</span>
                            </p>
                        </div>
                    </a>
                    <a className="portfolio-item" href="http://localhost:3000/"><img src="http://localhost:3000/disc2-5.jpg" alt="discuss-img"/>
                        <div className="portfolio-item-text">
                            <h3 className="portfolio-item-heading">Private Investors Discussion club</h3>
                            <p className="portfolio-item-category">Web development</p>
                            <p className="portfolio-item-tags">Tags: 
                                <span className="standing-out_tag">Discussion platform</span>
                                <span className="standing-out_tag">Chat</span>
                            </p>
                        </div>
                    </a>
                    <a className="portfolio-item" href="http://localhost:3000/"><img src="http://localhost:3000/dog1-6.jpg" alt="dog-img"/>
                        <div className="portfolio-item-text">
                            <h3 className="portfolio-item-heading">Dog Owners Social Net</h3>
                            <p className="portfolio-item-category">Mobile development</p>
                            <p className="portfolio-item-tags">Tags: 
                                <span className="standing-out_tag">Social net</span>
                                <span className="standing-out_tag">Chat</span>
                                <span className="standing-out_tag">Geo-location</span>
                            </p>
                        </div>
                    </a>
                    <a className="portfolio-item" href="http://localhost:3000/"><img src="http://localhost:3000/house1.jpg" alt="house-img"/>
                        <div className="portfolio-item-text">
                            <h3 className="portfolio-item-heading">Home Climate Control</h3>
                            <p className="portfolio-item-category">Mobile development</p>
                            <p className="portfolio-item-tags">Tags: 
                                <span className="standing-out_tag">BLE</span>
                                <span className="standing-out_tag">Smart home</span>
                                <span className="standing-out_tag">Remote control</span>
                                <span className="standing-out_tag">Home climate</span>
                            </p>
                        </div>
                    </a>
                    <a className="portfolio-item" href="http://localhost:3000/"><img src="http://localhost:3000/detox1.jpg" alt="detox-img"/>
                        <div className="portfolio-item-text">
                            <h3 className="portfolio-item-heading">Detox marketplace/Health app</h3>
                            <p className="portfolio-item-category">Mobile development</p>
                            <p className="portfolio-item-tags">Tags: 
                                <span className="standing-out_tag">Detox</span>
                                <span className="standing-out_tag">Healthy nutrition</span>
                                <span className="standing-out_tag">Recovery</span>
                            </p>
                        </div>
                    </a>
                    <a className="portfolio-item" href="http://localhost:3000/"><img src="http://localhost:3000/lemon1.jpg" alt="lemon-school-img"/>
                        <div className="portfolio-item-text">
                            <h3 className="portfolio-item-heading">IT School app</h3>
                            <p className="portfolio-item-category">Mobile development</p>
                            <p className="portfolio-item-tags">Tags: 
                                <span className="standing-out_tag">IT Courses</span>
                                <span className="standing-out_tag">E-learning</span>
                                <span className="standing-out_tag">Lessons</span>
                                <span className="standing-out_tag">Schedule</span>
                            </p>
                        </div>
                    </a>
                </div>
            </section>
        );
    }
}

export default Portfolio;