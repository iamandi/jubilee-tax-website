import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import CALENDLY_LOGIN from '@/utils/constant';

const RetirementPlanningService = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle1="What Is Your" pageTitle2="Retirement Planning Goal?" pageSubTitle='Retirement Planning' />

            <div className="services-details-area ptb-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 services-details">
                            <div className="services-details-desc">
                                <p>Retirement planning is not just about growing your savings - it's about preserving your legacy. True retirement planning requires that you develop a deep understanding of the concepts surrounding inflation, protection, taxation and risk, and how they affect your wealth and your legacy. We educate our clients by breaking down these 4 basic steps also known as the Principle of Building Wealth. Let Jubilee Tax & Financial Inc., teach you how to make your retirement plan serve you by helping you create customized goals based on wealth principles to assure you won't outlive your money.</p>
                            </div>
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

export default RetirementPlanningService;