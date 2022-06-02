import React from 'react';
// import Navbar from "@/components/_App/Navbar";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Navbar from "@/components/_App/NavbarStyleFour";

const About1 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle1="Dinese" pageTitle2="Gamble" pageSubTitle='MEET THE OWNER' />

            <div className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/dinese_headshot.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <p>
                                    Dinese Gamble is the Owner and Principal of Jubilee Tax & Financial Inc., a leading provider of personal financial education and planning. Dinese launched Jubilee Financial with the goal of providing proper financial education and planning services to families and business owners
                                </p>
                                <p>
                                    A Certified Tax Professional that serves local, national and international clients, Dinese Gamble launched Gamble Tax & Notary in 1998, advising individuals, small businesses, partnerships and local corporations on their taxes and financial goals. She celebrated her 22nd year in business in 2020.
                                </p>
                                <p>
                                    In 2013, Dinese expanded her operations and renamed the business Jubilee Financial, providing a full suite of financial services including tax preparation, full accounting/payroll services, financial education and planning i.e. retirement, college, asset acquisition and coaching businesses on tax and financial strategy.
                                </p>
                            </div>
                            <p>
                                Dinese holds a Masters of Public Health from the University of California, Berkeley, a B.S. in Biology from Cal State East Bay, and certifications and licenses in the areas of tax, accounting, insurance/annuities. A Bay Area native, Dinese resides in Oakland with her young adult twin daughters.
                            </p>
                            <p>
                                When she is not spending time with her family, she can be found serving her clients, speaking to local businesses, schools and churches, and conducting conferences about proper tax and financial planning, wealth-building and asset protection.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <FunFactsArea />

            <Footer />
        </>
    )
}

export default About1;