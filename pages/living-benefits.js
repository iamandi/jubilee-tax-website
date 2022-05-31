import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import CALENDLY_LOGIN from '@/utils/constant';

const LivingBenefitsService = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle1="Peace of" pageTitle2="Mind" pageSubTitle='LIVING BENEFITS' />

            <div className="services-details-area ptb-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 services-details">
                            <div className="services-details-desc">
                                <p>Living Benefits ensure peace of mind. We all know someone who has a parent or loved one who can no longer take care of themselves, where in many cases a retiree and their family are faced with financial hardship as their health declines. Perhaps you even have someone like this in your own family,</p>

                                <p>
                                    But it is also commonplace that chronic and critical conditions pose challenges not just for older adults, but younger adults as well. The number one cause of bankruptcy, disruption of retirement plans, and business failure are acute critical and chronic illnesses that temporarily disrupt income. Living benefits are a component of the “new insurances” where the policy owner is allowed to accelerate a portion of the death benefit, tax free, when the insured is diagnosed with a qualifying critical illness, terminal illness, or chronic illness.</p>

                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-12 services-details">
                            <div className="services-details-desc">
                                <p>These funds can be used to pay bills, outstanding debts, help keep your business afloat, etc., until regular income can be restored.</p>
                                <p>Having living benefits (life insurance you don't have to die to use) is a very important part in creating a stable financial portfolio that we all need and deserve to have.</p>
                                <p>Specific medical conditions that may qualify for the critical illness benefit include:</p>
                                <ul>
                                    <li>Heart Attack</li>
                                    <li>Different Types of Cancer</li>
                                    <li>Stroke</li>
                                    <li>Major Organ Transplant</li>
                                    <li>Kidney Failure</li>
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

export default LivingBenefitsService;