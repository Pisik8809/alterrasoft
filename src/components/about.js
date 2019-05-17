// about.js
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class About extends Component {
    render() {
        return (
            <section className="about-block" id="about">
                <h2 className={"about-heading"}>About Us & What We Do</h2>
                <p className={"about-description"}>At AlterraSoft we specialize in outsourcing IT services.</p>
                <div className={"about-section-grid"}>
                    <div className="about-section-item">
                        <FontAwesomeIcon icon="object-group" />
                        <h4 className="about-section-item__heading">Development</h4>
                        <p className="about-section-item__desc">
                            Our developers are experienced in several  programming languages including HTML CSS,
                            PHP, JavaScript, React JS, Objective-C, Swift, React Native and Flutter
                            which allows us to develop for a variety of platforms including Web, Android,
                            iOS and Mobile Web.
                        </p>
                    </div>
                    <div className="about-section-item">
                        <FontAwesomeIcon icon="folder-open" />
                        <h4 className="about-section-item__heading">UX/UI consulting</h4>
                        <p className="about-section-item__desc">
                            We specialize in UX/UI design and can provide recommendations on how products
                            should look and flow in order to drive conversions while upholding strong branding
                            guidelines and best practices. Have your digital exterior handled with care.
                            Our designers’ tastefulness combined with thorough audits,
                            will make your solution effective and popular.
                        </p>
                    </div>
                    <div className="about-section-item">
                        <FontAwesomeIcon icon="file" />
                        <h4 className="about-section-item__heading">Technology consulting</h4>
                        <p className="about-section-item__desc">
                            We work closely with our customers to identify and execute the best
                            strategies for resolving their complicated development needs.
                            Ask our professionals about any issues and get them successfully resolved.
                            All your technical questions will be fully answered, by our reliable team.
                            They can also guide you through any technical challenges you are facing now.
                        </p>
                    </div>
                    <div className="about-section-item">
                        <FontAwesomeIcon icon="tv" />
                        <h4 className="about-section-item__heading">Startup development</h4>
                        <p className="about-section-item__desc">
                            Grow your startup from a raw idea to a  running project. Share your ideas with our
                            team and we’ll add our expertise to facilitate their creation! We provide
                            recommendations on product management and prioritization to best position your company
                            to meet their objectives and drive success metrics in an increasingly
                            competitive startups market.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;