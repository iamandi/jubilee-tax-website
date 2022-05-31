import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import CALENDLY_LOGIN from '@/utils/constant';

const InsuranceServices = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle1="We protect Your" pageTitle2="Best Assets" pageSubTitle='Insurance Services' />

            <div className="services-details-area ptb-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 services-details">
                            <div className="services-details-desc">
                                <p>Did you know that insurance services can be your best financial partner, not only by helping you through major life hardships, but by contributing to your retirement security and your overall wealth?</p>

                                <p>Jubilee Financial helps you understand the different insurance services you need by educating you on the many usages for insurance, and helping you create the right insurance plan for you and your family. Insurance services give families and individuals of all income brackets the ability to maintain financial independence in all areas of their lives.</p>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-12 services-details">
                            <div className="services-details-desc">
                                <p>Available options include:</p>
                                <ul>
                                    <li>Life Insurance</li>
                                    <li>Term Life</li>
                                    <li>Whole Life (Permanent)</li>
                                    <li>Universal Life
                                        <ul>
                                            <li>Fixed</li>
                                            <li>Variable</li>
                                            <li>Index Universal</li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>Annuities
                                        <ul>
                                            <li>Indexed</li>
                                            <li>Fixed</li>
                                            <li>Immediate</li>
                                        </ul>
                                    </li>
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

export default InsuranceServices;