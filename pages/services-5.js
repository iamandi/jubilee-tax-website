import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import { PlusCircle } from 'react-feather';

const Services5 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Services" />

            <div className="agency-services-area ptb-80 pb-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/agency-services-img1.jpg" alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="/tax-planning">
                                            <a>Tax Planning</a>
                                        </Link>
                                    </h3>

                                    <Link href="/tax-planning">
                                        <a className="read-more-btn">
                                            Read More <PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/agency-services-img2.jpg" alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="/insurance-services">
                                            <a>Insurance Services</a>
                                        </Link>
                                    </h3>

                                    <Link href="/insurance-services">
                                        <a className="read-more-btn">
                                            Read More <PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/agency-services-img3.jpg" alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="/living-benefits">
                                            <a>Living Benefits</a>
                                        </Link>
                                    </h3>

                                    <Link href="/living-benefits">
                                        <a className="read-more-btn">
                                            Read More <PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/agency-services-img4.jpg" alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="/401k-ira-rollover">
                                            <a>401k and IRA Rollover</a>
                                        </Link>
                                    </h3>

                                    <Link href="/401k-ira-rollover">
                                        <a className="read-more-btn">
                                            Read More <PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/agency-services-img5.jpg" alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="/wealth-preservation">
                                            <a>Wealth Preservation</a>
                                        </Link>
                                    </h3>

                                    <Link href="/wealth-preservation">
                                        <a className="read-more-btn">
                                            Read More <PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/agency-services-img6.jpg" alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="/retirement-planning">
                                            <a>Retirement Planning</a>
                                        </Link>
                                    </h3>

                                    <Link href="/retirement-planning">
                                        <a className="read-more-btn">
                                            Read More <PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/agency-services-img6.jpg" alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="/business-strategies">
                                            <a>Business Strategies</a>
                                        </Link>
                                    </h3>

                                    <Link href="/business-strategies">
                                        <a className="read-more-btn">
                                            Read More <PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape6 rotateme">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Services5;