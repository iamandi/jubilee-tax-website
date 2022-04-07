import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';

const RetirementPlanningService = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Retirement Planning" />

            <div className="services-details-area ptb-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h2>What Is Your Retirement Planning Goal?</h2>
                                <p>Retirement planning is not just about growing your savings - it's about preserving your legacy. True retirement planning requires that you develop a deep understanding of the concepts surrounding inflation, protection, taxation and risk, and how they affect your wealth and your legacy. We educate our clients by breaking down these 4 basic steps also known as the Principle of Building Wealth. Let Jubilee Tax & Financial Inc., teach you how to make your retirement plan serve you by helping you create customized goals based on wealth principles to assure you won't outlive your money.</p>
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
                                <p>Jubilee Financial, helps increase our understanding of common retirement planning components such as:</p>
                                <ul>
                                    <li>Social Security</li>
                                    <li>Pension</li>
                                    <li>Life Insurance</li>
                                    <li>Traditional IRA</li>
                                    <li>ROTH IRA</li>
                                    <li>IRA Rollovers and Transfers</li>
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

export default RetirementPlanningService;