import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import CALENDLY_LOGIN from '@/utils/constant';

const WealthPreservationService = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle1="Grow Your Business" pageTitle2="The Right Way" pageSubTitle='Wealth Preservation' />

            <div className="services-details-area ptb-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 services-details">
                            <div className="services-details-desc">
                                <p>Wealth preservation is not about how much money you bring in - it's about how much you are able to hold on to.
                                    Our team takes you beyond the obvious wealth preservation products and helps you protect your wealth from its three primary enemies - inflation, taxation and risk. Understanding how these “Three” enemies can affect your wealth over the long term is vital to sustaining your personal capital and your legacy. Let our financial consultants teach you how to grow your wealth and preserve what you already have.</p>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-12 services-details">
                            <div className="services-details-desc">
                                <p>The Jubilee Financial Team can help educate you on wealth preservation strategies such as:</p>
                                <ul>
                                    <li>Insurance Services</li>
                                    <li>Annuities</li>
                                    <li>Tax Savings</li>
                                    <li>Multi-Generational Wealth Transfer</li>
                                    <li>Account Rollovers</li>
                                    <li>Roth Conversions</li>
                                </ul>
                            </div>

                            <Link href={CALENDLY_LOGIN}>
                                <a className="btn btn-primary">Schedule Consultation</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default WealthPreservationService;