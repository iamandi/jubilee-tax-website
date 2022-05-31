import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="bigdata-services-area bg-eef6fd mt-neg-3 pbr-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 animate__animated animate__SlideInDown animate__delay-0.7s">
                        <div className="single-services-box-item">
                            <div className='bg-img bg-img-1'>
                                <h6>PLAN, THEN DO</h6>
                                <h3>
                                    Our Services
                                </h3>
                                <p>
                                    We are all about strategy. Whether you are trying to maximize your cash flow, lower tax liabilities or start a new business. We have you covered.
                                </p>

                                <Link href="/services-5">
                                    <a className="btn btn-primary">Jubilee Services</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 animate__animated animate__SlideInDown animate__delay-0.7s">
                        <div className="single-services-box-item">
                            <div className='bg-img bg-img-2'>
                                <h6>Here To Help</h6>
                                <h3>
                                    Our Mission
                                </h3>
                                <p>
                                    To help people understand and get a better handle on their taxes and financial goals, both professionally and personally.
                                </p>

                                <Link href="/about-1">
                                    <a className="btn btn-primary">More about Jubilee</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 animate__animated animate__SlideInDown animate__delay-0.7s">
                        <div className="single-services-box-item">
                            <div className='bg-img bg-img-3'>
                                <h6>PROOF, NOT PROMISES</h6>
                                <h3>
                                    We Yield Results
                                </h3>
                                <p>
                                    We are the answer to all your tax question, tax preparation and tax planning needs.
                                    <br />
                                    We have you covered.
                                </p>

                                <Link href="/contact">
                                    <a className="btn btn-primary">Contact Us</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;  