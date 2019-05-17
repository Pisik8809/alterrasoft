// footer.js
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

class Footer extends Component {
    render() {
        return (
            <footer>
            <div className="contacts-section">
                <div className="contacts-section_item">
                    <img src="http://localhost:3000/footer-logo.png" alt="alterrasoft-logo"/>
                </div>
                <div className="contacts-section_item">
                    <h3 className="footer-contact-heading">Contacts</h3>
                    <p className="footer-contacts-link">Skype: <a href="skype:alterrasoft?chat">alterrasoft</a></p>
                    <p className="footer-contacts-link">E-mail:&nbsp;<a href="mailto:info@alterrasoft.com">info@alterrasoft.com</a></p>
                    <p className="footer-contacts-link">Tel:<a href="tel:+13153550053"> +1 315 355 0053</a>
                    </p>
                </div>
                <div className="contacts-section_item">
                    <a className="footer-contacts-social_link" 
                    href="https://www.facebook.com/alterrasoft/" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a className="footer-contacts-social_link" href="https://www.linkedin.com/company/alterrasoft" 
                    rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className="footer-contacts-social_link" href="https://www.instagram.com/alterrasoft/?hl=ru"
                    rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
            <div className="copywrite">
                <p>Copyright © <span>AlterraSoft</span> 2019</p>
            </div> 
        </footer>
    );
    }
}

export default Footer;