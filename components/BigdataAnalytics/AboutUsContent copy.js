import React from 'react';
import Link from 'next/link';

const AboutUsContent = () => {
    return (
        <div className="agency-about-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="agency-about-img animate__animated animate__fadeInLeft animate__delay-0.5s">
                            <img src="/images/agency-image/agency-about-img.jpg" alt="About us cover image" />
                        </div>
                    </div>

                    <div
                        className="col-lg-6 col-md-12 animate__animated animate__fadeInRight animate__delay-0.5s"
                        style={{ paddingTop: '25px', paddingBottom: '25px', paddingLeft: '2rem' }}>
                        <div className="repair-about-content">
                            <span className="sub-title">WE'VE GOT YOUR BACK</span>
                            <h2>Jubilee is here to help</h2>
                            <ul>
                                <li>
                                    <h5>
                                        Smart, simple, expert-driven
                                        content
                                    </h5>
                                    <span>Our expert financial advisors ensure you get the best
                                        financial education so that you
                                        can achieve financial freedom.</span>
                                </li>
                                <li>
                                    <h5>22 Years of Experience</h5>
                                    <span>We take pride in consistent delivery of 5 star service and results in maximizing tax returns and fueling business growth.</span>
                                </li>
                                <li>
                                    <h5>Recommendations fit for you</h5>
                                    <span>Everyone's financial needs are
                                        different. We provide unbiased
                                        advice about financial products
                                        so you can choose which one
                                        suits your needs.</span>
                                </li>
                                <li>
                                    <h5>Proof, not promises</h5>
                                    <span>We are on a mission to help people understand and get a better handle on their taxes and financial goals, both professionally and personally.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="btn-bigdata" style={{ marginTop: '5%' }}>
                            <Link href="/contact">
                                <button className="pushable">
                                    <span className="shadow"></span>
                                    <span className="edge"></span>
                                    <span className="front">
                                        Schedule Consultation
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>

            {/* Shape Images */}
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape10">
                <img src="/images/agency-image/agency-shape2.png" alt="image" />
            </div>
        </div>
    );
}

export default AboutUsContent;