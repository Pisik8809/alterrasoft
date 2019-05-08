// technologies.js
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Technologies extends Component {
    render() {
        return (
            <div>
                Technologies block
                <FontAwesomeIcon icon="palette" />
                <FontAwesomeIcon icon="desktop" />
                <FontAwesomeIcon icon="wrench" />
                <FontAwesomeIcon icon="cog" />
            </div>
        );
    }
}

export default Technologies;