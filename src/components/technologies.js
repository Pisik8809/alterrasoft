// technologies.js
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Technologies extends Component {
    render() {
        return (
            <div className="technologies-block">
                <h2 className="technologies-block-heading">How We Do What We Do</h2>
                <div className="techno-items-global-wrapper">
                    <div className="technoly-item-wrapper">
                        <div className="technology-icon-plus-heading">
                            <div className="techlogogy-icon-wrapper">
                                <FontAwesomeIcon icon="palette" />
                            </div>
                                <h3 className="technoly-item-heading">Sketch</h3>
                        </div>
                        <p className="technoly-item-description">Design prototyping takes your raw idea and turns them into sketches that are 
                        ready to go further. We're open to discuss,advise, and create at the same time.</p>
                    </div>
                    <div className="technoly-item-wrapper">
                        <div className="technology-icon-plus-heading">
                            <div className="techlogogy-icon-wrapper">
                                <FontAwesomeIcon icon="desktop" />
                            </div>
                            <h3 className="technoly-item-heading">Design</h3>
                        </div>
                        <p className="technoly-item-description">We always suggest different design options for you to choose from. 
                        You choose the best design that defines the best solution for you.</p>
                    </div>
                    <div className="technoly-item-wrapper">
                        <div className="technology-icon-plus-heading">
                            <div className="techlogogy-icon-wrapper">
                                <FontAwesomeIcon icon="wrench" />
                            </div>
                            <h3 className="technoly-item-heading">Testing</h3>
                        </div>
                        <p className="technoly-item-description">TDD can be applied to your project from the beginning as well as testing 
                        after the implementation phase by phase.</p>
                    </div>
                    <div className="technoly-item-wrapper">
                        <div className="technology-icon-plus-heading">
                            <div className="techlogogy-icon-wrapper">
                                <FontAwesomeIcon icon="cog" />
                            </div>
                                <h3 className="technoly-item-heading">Development</h3>
                        </div>
                        <p className="technoly-item-description">Project development process follows the latest industry 
                        standards and approaches.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Technologies;