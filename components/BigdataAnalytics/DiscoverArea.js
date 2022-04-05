import React from 'react';
import Link from 'next/link';

const DiscoverArea = () => {
    return (
        <div className="discover-area ptb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="discover-image">
                            <img src="/images/bigdata-analytics/discover-img1.png" alt="image" />
                            <img src="/images/bigdata-analytics/discover-img2.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="discover-content">
                            <h2>Who We Are</h2>
                            <p>Jubilee Tax & Financial Solutions Inc. provides a holistic and comprehensive package of practical tools and assistance to better support you in achieving your professional & personal financial goals. We specialize in tax preparation and strategy, and provide a variety of service offerings gearing our clients towards a life of financial freedom via two major sectors, Tax Related Services and Wealth Management and Retirement.</p>
                            {/* <p>We know that one size doesn't fit all - everyone has a unique life path, and that means everyone has a unique financial situation. We don't try to put you in a box. The building blocks might be the same, but we have the freedom to assemble them in a way that meets your needs. We have the independence of a boutique financial firm and we hold to the highest standard of care that requires us to always put the interests of our clients above our own.</p> */}

                            <Link href="/about-3">
                                <a className="btn btn-primary">More About Us</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="analytics-shape1">
                <img src="/images/bigdata-analytics/analytics-shape1.png" alt="image" />
            </div>
        </div>
    )
}

export default DiscoverArea;  