import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';

const SignUp = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Sign Up" />

            <div className="pb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <a style={{ backgroundColor: 'lightslategray' }}>
                                    <img style={{ width: '50%' }} src="/images/bigdata-analytics/jubilee-logo.jpg" alt="Jubilee logo" />
                                </a>
                            </Link>
                            <p>Create a new account</p>
                        </div>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="ConfirmPassword" />
                            </div>

                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>

                        <div className="foot">
                            <p>Already have an account yet? <Link href="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SignUp;