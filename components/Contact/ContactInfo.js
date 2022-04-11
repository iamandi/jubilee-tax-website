import React from 'react';
import { MapPin, Mail, Phone } from 'react-feather';

const ContactInfo = () => {
    return (
        <div className="contact-info-area ptb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Mail />
                            </div>
                            <h3>Mail Here</h3>
                            <p><a href="mailto:dinese@jubileetaxfinancial.com">dinese@jubileetaxfinancial.com</a></p>
                            <p><a href="mailto:dineseg@pacbell.net">dineseg@pacbell.net</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <MapPin />
                            </div>
                            <h3>Visit Here</h3>
                            <p>330 Franklin Street, <br /> Oakland, CA 94607</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Phone />
                            </div>
                            <h3>Call Here</h3>
                            <p><a href="tel:5109091100">(510) 909 1100</a></p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;  