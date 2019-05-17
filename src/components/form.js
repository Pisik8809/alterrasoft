// form.js
import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="contact-form-block" id="contacts">
                <form action="https://formspree.io/pisik8809@gmail.com" method="post" id="confirmationForm" target="_blank" className="full-form-element">
                <h2 className="contact-form-block_heading">Contact us to discuss your project</h2>
                    <div className="form-example">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div className="form-example">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div className="form-example-2">
                        <label htmlFor="subject">Subject: </label>
                        <input type="text" name="subject" id="subject" required/>
                    </div>
                    <div className="form-example-2">
                        <label htmlFor="message">Message: </label>
                        <textarea form="confirmationForm" id="message" name="user-message" required rows="10" cols="20" maxLength="2000"/>
                    </div>
                    <div className="form-example">
                        <input type="submit" value="Send message"/>
                    </div>
                </form>
                <p className="contact-form-block_additional-text">The most astonishing projects start at AlterraSoft. 
                Just fill out the quick form and tell us about you idea, and let’s bring it to life, together!</p>
            </div>
        );
    }
}

export default Form;