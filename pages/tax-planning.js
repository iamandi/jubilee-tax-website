import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import CALENDLY_LOGIN from '@/utils/constant';

const TaxPlanningService = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle1="Manage Your Money" pageTitle2="The Right Way" pageSubTitle='Tax Planning' />

            <div className="services-details-area ptb-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 services-details">
                            <div className="services-details-desc">
                                <p>
                                    Jubilee Financial, provides tax- accounting - retirement- and business formation services for individuals, families, sole proprietors, corporations and non-profits. Since 1998, we have helped our clients create roadmaps to achieve their financial goals - giving them peace of mind and building lifelong partnerships based on professionalism, trust, accountability and care.
                                </p>

                                <p>
                                    Jubilee Financial offers a combination of sophisticated tax planning, consulting and compliance services, with our signature high level of personal attention. Whether it be our in-house experts, or working in partnership with our team of skilled tax, legal and financial specialists - we gain an understanding of your unique needs which allows us to focus on uncovering opportunities for tax savings and increased cash flow so that you can concentrate on building, protecting, and preserving your wealth.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-12 services-details">
                            <div className="services-details-desc">
                                <p>Our areas of expertise include, but is not limited to the following areas:</p>
                                <ul>
                                    <li>Federal &amp; State Tax Preparation and Representation</li>
                                    <li>Tax Consultation and Planning</li>
                                    <li>Bookkeeping, Accounting and Payroll Services</li>
                                    <li>Business Structure Consultation and Creation</li>
                                    <li>Business Tax Strategy</li>
                                    <li>Previous Year Tax Return Filings and Resolutions/Amended Returns</li>
                                    <li>Out-of-State Returns - all states</li>
                                    <li>Foreign Income Tax</li>
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

export default TaxPlanningService;