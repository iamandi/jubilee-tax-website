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

                            <Link href="/about-1">
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