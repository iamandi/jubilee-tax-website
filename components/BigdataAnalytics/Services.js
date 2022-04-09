import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'react-feather';
import * as Icon from 'react-feather';

const Services = () => {
    return (
        <div className="bigdata-services-area ptb-80 bg-eef6fd">
            <div className="container">
                <div className="section-title">
                    <h2>Jubilee Services At A Glance</h2>
                    <div className="bar"></div>

                    {/* <blockquote class="otro-blockquote">
                        People do not care how much you know until they know how much you care.
                        <span>Teddy Roosevelt</span>
                    </blockquote> */}
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 animate__animated animate__SlideInDown animate__delay-0.7s">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/tax-planning">
                                    <a>Tax Planning</a>
                                </Link>
                            </h3>
                            <p>We believe that taking 4 simple steps will help individuals achieve a successful financial future - manage your money wisely, protect your income and your family, accumulate assets and then preserve your assets.</p>

                            <Link href="/tax-planning">
                                <a className="learn-more-btn">
                                    <ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 animate__animated animate__SlideInDown animate__delay-0.7s">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/insurance-services">
                                    <a>Insurance Services</a>
                                </Link>
                            </h3>
                            <p>Did you know that insurance services can be your best financial partner, not only by helping you through major life hardships, but by contributing to your retirement security and your overall wealth?</p>

                            <Link href="/insurance-services">
                                <a className="learn-more-btn">
                                    <ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 animate__animated animate__SlideInDown animate__delay-0.7s">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/living-benefits">
                                    <a>Living Benefits</a>
                                </Link>
                            </h3>
                            <p>Living Benefits ensure peace of mind. We all know someone who has a parent or loved one who can no longer take care of themselves. Perhaps you even have someone like this in your own family.</p>

                            <Link href="/living-benefits">
                                <a className="learn-more-btn">
                                    <ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 animate__animated animate__SlideInDown animate__delay-0.7s">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon4.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/business-strategies">
                                    <a>Business Strategies</a>
                                </Link>
                            </h3>
                            <p>We work with each client to understand their new business venture and what the client's goals and needs for the new business.</p>

                            <Link href="/business-strategies">
                                <a className="learn-more-btn">
                                    <ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 animate__animated animate__SlideInDown animate__delay-0.7s">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon5.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/wealth-preservation">
                                    <a>Wealth Preservation</a>
                                </Link>
                            </h3>
                            <p>Wealth preservation is not about how much money you bring in - it's about how much you are able to hold on to.</p>

                            <Link href="/wealth-preservation">
                                <a className="learn-more-btn">
                                    <ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 animate__animated animate__SlideInDown animate__delay-0.7s">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <img src="/images/bigdata-analytics/icon6.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/retirement-planning">
                                    <a>Retirement Planning</a>
                                </Link>
                            </h3>
                            <p>Retirement planning is not just about growing your savings - it's about preserving your legacy.</p>

                            <Link href="/retirement-planning">
                                <a className="learn-more-btn">
                                    <ArrowRight /> Learn More
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;  