// call-to-action.js
import React, { Component } from 'react';
import GlobalUrl from './global-url';

class CallToAction extends Component {
    render() {
        return (
            <section className="call-to-action-block">
                <p className="call-to-action-text">AlterraSoft drives your projects reliably.</p>
                <a href={GlobalUrl} className="call-to-action_link">Check It Out Now</a>
            </section>
        );
    }
}

export default CallToAction;