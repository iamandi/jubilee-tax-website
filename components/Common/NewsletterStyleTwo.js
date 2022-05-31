import React from 'react';

const CALENDLY_LOGIN = 'https://calendly.com/dinesejubilee';

const NewsletterStyleTwo = () => {
    return (
        <div id="newsletter-section" className="newsletter-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="newsletter-content">
                            <p>FREE CONSULTATION</p>
                            <h2>A Professional Is Waiting To Support</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="newsletter-image">
                            <a
                                className='btn btn-primary'
                                href={CALENDLY_LOGIN}
                                target='_blank'
                                rel='noopener noreferrer'
                                activeClassName='active'
                            >
                                Schedule An Appointment
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsletterStyleTwo;  