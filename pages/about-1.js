import React from 'react';
// import Navbar from "@/components/_App/Navbar";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Navbar from "@/components/_App/NavbarStyleFour";

import Image from 'next/image';

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

const About1 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="About Us" />

            <div className="about-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/bigdata-analytics/dinese-headshot-half-transparent.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2>Meet the Owner</h2>
                                    <div className="bar"></div>
                                </div>
                                <p>
                                    Dinese Gamble is the Owner and Principal of Jubilee Tax & Financial Inc., a leading provider of personal financial education and planning. Dinese launched Jubilee Financial with the goal of providing proper financial education and planning services to families and business owners
                                </p>
                                <p>
                                    A Certified Tax Professional that serves local, national and international clients, Dinese Gamble launched Gamble Tax & Notary in 1998, advising individuals, small businesses, partnerships and local corporations on their taxes and financial goals. She celebrated her 22nd year in business in 2020.
                                </p>
                                <p>
                                    In 2013, Dinese expanded her operations and renamed the business Jubilee Financial, providing a full suite of financial services including tax preparation, full accounting/payroll services, financial education and planning (i.e. retirement, college, asset acquisition and coaching businesses on tax and financial strategy.
                                </p>
                            </div>
                        </div>

                        <div className="about-content" style={{ paddingTop: '1.3rem' }}>
                            <p>
                                Dinese holds a Masters of Public Health from the University of California, Berkeley, a B.S. in Biology from Cal State East Bay, and certifications and licenses in the areas of tax, accounting, insurance/annuities. A Bay Area native, Dinese resides in Oakland with her young adult twin daughters.
                            </p>
                            <p>
                                When she is not spending time with her family, she can be found serving her clients, speaking to local businesses, schools and churches, and conducting conferences about proper tax and financial planning, wealth-building and asset protection.
                            </p>
                        </div>
                    </div>

                    {/* <div className="about-inner-area">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our History</h3>
                                    <p>We take pride in consistent delivery of 5 star service and results for over 22 years of being in the business.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our Mission</h3>
                                    <p>To help people understand and get a better handle on their taxes and financial goals, both professionally and personally.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our Services</h3>
                                    <p>We are the answer to all your tax question, tax preparation and tax planning needs.
                                        We have you covered.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>


            {/* <Partner /> */}

            <FunFactsArea />

            <Footer />
        </>
    )
}

export default About1;