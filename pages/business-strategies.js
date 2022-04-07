import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';

const BusinessStrategiesService = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Business Strategies" />

            <div className="services-details-area ptb-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h2>Grow Your Business The Right Way</h2>
                                <p>Jubilee Financial, offer business owner clients full bookkeeping, accounting and payroll services.</p>
                                <p>We also take the time to go over the client's plan for the business and ask questions, which helps our tax consultants advice the client on the most appropriate legal structure that's best for the business in terms of taxes and liability protection.</p>
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
                                <p>We will work with each client to understand their new business venture and what the client's goals and needs for the new business.</p>
                                <ul>
                                    <li>Sole Proprietorship</li>
                                    <li>General Partnership</li>
                                    <li>Limited Partnership</li>
                                    <li>Registered Limited Liability Partnership</li>
                                    <li>Limited Liability Company</li>
                                    <li>S-Corporation</li>
                                    <li>C-Corporation</li>
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

export default BusinessStrategiesService;