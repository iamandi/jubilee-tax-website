import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';

const IRA401kRolloverService = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="401K AND IRA ROLLOVER" />

            <div className="services-details-area ptb-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h2>What is 401K and IRA Rollover?</h2>
                                <p>Depending on your financial circumstances, you may be able to transfer money between your retirement accounts without paying tax penalties, a process known as a 401K and IRA Rollover. We can help you discern whether or not your situation meets the requirements and can assist you in allocating funds from your 401K or IRA appropriately to other vehicles.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/services-details-image/services-details1.png"
                                className="animate__animated animate__fadeInUp"
                                alt="image"
                            />
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-12 services-details">
                            <div className="services-details-desc">
                                <p>Some benefits of 401K and IRA Rollover are:</p>
                                <ul>
                                    <li>Your wealth continues to grow, tax deferred.</li>
                                    <li>You gain full control of your retirement account.</li>
                                    <li>You gain full control of your investment options.</li>
                                    <li>You control the level of risk you are willing to take.</li>
                                    <li>You can guard your personal capital from any market risk.</li>
                                    <li>You can guarantee an income stream for life.</li>
                                </ul>
                            </div>
                            <div className="btn-bigdata" style={{ marginTop: '2rem' }}>
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
            </div>

            <Footer />
        </>
    )
}

export default IRA401kRolloverService;