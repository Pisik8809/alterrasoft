// meters.js
import React, { Component } from 'react';

class Meters extends Component {
    render() {
        return (
            <div>
            <label htmlFor="fuel">Fuel level:</label>
            <meter id="fuel"  min="0" max="100"
                   low="33" high="66" optimum="80"  value="50">
                at 50/100
            </meter>
            </div>
        );
    }
}

export default Meters;