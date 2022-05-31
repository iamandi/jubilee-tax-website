import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import CALENDLY_LOGIN from '@/utils/constant';

const IRA401kRolloverService = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle1="What is 401K and" pageTitle2="IRA Rollover" pageSubTitle='401K AND IRA ROLLOVER' />

            <div className="services-details-area ptb-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 services-details">
                            <div className="services-details-desc">
                                <p>Depending on your financial circumstances, you may be able to transfer money between your retirement accounts without paying tax penalties, a process known as a 401K and IRA Rollover. We can help you discern whether or not your situation meets the requirements and can assist you in allocating funds from your 401K or IRA appropriately to other vehicles.</p>
                            </div>
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

export default IRA401kRolloverService;