import React from 'react';

const MainBanner = () => {
    return (
        <>
            <div className="agency-about-area">
                <div className="container ptb-80">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-12 col-md-12 animate__animated animate__fadeInRight animate__delay-0.5s"
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className="repair-about-content">
                                <span className="sub-title">WHO WE ARE</span>
                                <h1>AND WHAT WE DO</h1>
                                <p>Jubilee Tax & Financial Solutions Inc. provides a holistic and comprehensive package of practical tools and assistance to better support you in achieving your professional & personal financial goals. We specialize in tax preparation and strategy, and provide a variety of service offerings gearing our clients towards a life of financial freedom via two major sectors.</p>

                                <ul>
                                    <li>
                                        <p>
                                            <strong>Tax Related Services</strong>:&nbsp;From ensuring your paperwork is filed accurately, to helping you maximize your deductions, our team of professionals will assist you from start to finish when managing your taxes. Tax season can be a bit overwhelming. Every member of our team understands the complexity of proper tax preparation and planning and we will ensure our clients receive an optimal return.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>Wealth Management and Retirement</strong>:&nbsp;We provide financial planning services and manage assets for individuals, families, and businesses. Our holistic approach integrates the information we glean from understanding your financial profile and tax position along with your long-term financial goals to help you attain your desired lifestyle.
                                        </p>
                                    </li>
                                </ul>

                                <p>We know that one size doesn't fit all - everyone has a unique life path, and that means everyone has a unique financial situation. We don't try to put you in a box. The building blocks might be the same, but we have the freedom to assemble them in a way that meets your needs. We have the independence of a boutique financial firm</p>

                                <h4>We take nothing for granted!</h4>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBanner;  