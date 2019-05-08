// meters.js
import React, { Component } from 'react';

class Meters extends Component {
    render() {
        return (
            <div className="alterra-meters-block">
            <div className="ultrawrapper">
            <h2 className="meters-heading">Our Skills, Talents & Expertise</h2>
            <div className="meters-wrapper">
            <label htmlFor="trend">Trend folowing:</label>
            <progress title="75%" id="trend" max="100" value="75"> 75% </progress>
            <label htmlFor="code-quality">Code quality:</label>
            <progress title="99%" id="code-quality" max="100" value="99"> 99% </progress>
            <label htmlFor="predictability">Predictability:</label>
            <progress title="85%" id="predictability" max="100" value="85"> 85% </progress>
            </div>
            </div>
            </div>
        );
    }
}

export default Meters;