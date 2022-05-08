import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';

const ForgotPassword = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Forgot Password" />

            <div className="pb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/">
                                <a style={{ backgroundColor: 'lightslategray' }}>
                                    <img style={{ width: '50%' }} src="/images/bigdata-analytics/jubilee-logo.jpg" alt="Jubilee logo" />
                                </a>
                            </Link>
                            <p>If you have lost password or wisht to reset it, enter your email below and we will send instructions to reset your password.</p>
                        </div>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Reset Password</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ForgotPassword;