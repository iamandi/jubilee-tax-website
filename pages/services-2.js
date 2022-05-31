import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';

const Services2 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle1="Jubilee" pageTitle2="Services" pageSubTitle='AT ONE GLANCE' pageQuote />

            <div className="ml-services-area pb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/blog-image/service_1.jpg" alt="image" />
                                </div>
                                <div className='content'>
                                    <h3>
                                        <Link href="/tax-planning">
                                            <a>Tax Planning</a>
                                        </Link>
                                    </h3>
                                    <p>We believe that taking 4 simple steps will help individuals achieve a successful financial future - manage your money wisely, protect your income and your family, accumulate assets and then preserve your assets.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/blog-image/service_2.jpg" alt="image" />
                                </div>
                                <div className='content'>
                                    <h3>
                                        <Link href="/insurance-services">
                                            <a>Insurance Services</a>
                                        </Link>
                                    </h3>
                                    <p>Did you know that insurance services can be your best financial partner, not only by helping you through major life hardships, but by contributing to your retirement security and your overall wealth?</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/blog-image/service_3.jpg" alt="image" />
                                </div>
                                <div className='content'>
                                    <h3>
                                        <Link href="/living-benefits">
                                            <a>Living Benefits</a>
                                        </Link>
                                    </h3>
                                    <p>Living Benefits ensure peace of mind. We all know someone who has a parent or loved one who can no longer take care of themselves. Perhaps you even have someone like this in your own family.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/blog-image/service_5.jpg" alt="image" />
                                </div>
                                <div className='content'>
                                    <h3>
                                        <Link href="/401k-ira-rollover">
                                            <a>401k and IRA Rollover</a>
                                        </Link>
                                    </h3>
                                    <p>Depending on your financial circumstances, you may be able to transfer money between your retirement accounts without paying tax penalties, known as a 401K and IRA Rollover.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/blog-image/service_6.jpg" alt="image" />
                                </div>
                                <div className='content'>
                                    <h3>
                                        <Link href="/business-strategies">
                                            <a>Business Strategies</a>
                                        </Link>
                                    </h3>
                                    <p>Jubilee Tax & Financial Solutions, Inc works with each client to understand their new business venture and what the client's goals and needs for the new business.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/blog-image/service_7.jpg" alt="image" />
                                </div>
                                <div className='content'>
                                    <h3>
                                        <Link href="/wealth-preservation">
                                            <a>Wealth Preservation</a>
                                        </Link>
                                    </h3>
                                    <p>Wealth preservation is not about how much money you bring in - it's about how much you are able to hold on to.</p>
                                    <br />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/blog-image/service_8.jpg" alt="image" />
                                </div>
                                <div className='content'>
                                    <h3>
                                        <Link href="/retirement-planning">
                                            <a>Retirement Planning</a>
                                        </Link>
                                    </h3>
                                    <p>Retirement planning is not just about growing your savings - it's about preserving your legacy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
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

export default Services2;