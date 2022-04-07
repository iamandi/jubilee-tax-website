import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';

const InsuranceServices = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Insurance Services" />

            <div className="services-details-area ptb-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h2>We protect Your Best Assets</h2>
                                <p>Did you know that insurance services can be your best financial partner, not only by helping you through major life hardships, but by contributing to your retirement security and your overall wealth?</p>

                                <p>Jubilee Financial helps you understand the different insurance services you need by educating you on the many usages for insurance, and helping you create the right insurance plan for you and your family. Insurance services give families and individuals of all income brackets the ability to maintain financial independence in all areas of their lives.</p>
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

export default InsuranceServices;