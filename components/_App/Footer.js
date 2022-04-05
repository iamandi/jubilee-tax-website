import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-f7fafd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/faq">
                                        <a>FAQs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Book a Free Consultation</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/term-condition">
                                        <a>Terms & Condition</a>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <Icon.MapPin />
                                    330 Franklin Street, Oakland, <br /> CA 94607, USA
                                </li>
                                <li>
                                    <Icon.PhoneCall />
                                    Phone: <a href="tel:5109091100"> (510) 909 1100</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Opening Hours</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <Icon.Calendar />
                                    Monday - Friday
                                </li>
                                <li>
                                    <Icon.Clock />
                                    8am - 5pm
                                </li>
                                <br />
                                <li>
                                    <Icon.Calendar />
                                    Saturday - Sunday
                                </li>
                                <li>
                                    <Icon.UserCheck />
                                    By Appointment Only
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Social</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <Icon.Mail />
                                    Email: <a href="mailto:dinese@jubileetaxfinancial.com">dinese@jubileetaxfinancial.com</a>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li>
                                    <a href="https://www.facebook.com/" className="facebook" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="linkedin" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>Copyright &copy; {currentYear} Jubilee Tax & Financial Solutions. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/images/map.png" className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </footer>
    )

}

export default Footer; 