import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import { Facebook, Twitter } from 'react-feather';
// import GoogleProvider from "next-auth/providers/google";
// providers: [
//     GoogleProvider({
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET
//     })
// ]

const LOGIN_URL = "https://totaledgemarketing.insuredmine.com/agent/session/loginone";

const Login = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Login" />

            <div className="pb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/">
                                <a style={{ backgroundColor: 'lightslategray' }}>
                                    <img style={{ width: '50%' }} src="/images/bigdata-analytics/jubilee-logo.jpg" alt="Jubilee logo" />
                                </a>
                            </Link>
                            <p>Don't have an account yet? <Link href="/sign-up">Sign Up</Link></p>
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
                                <p><Link href="/forgot-password"><a>Forgot Password</a></Link></p>
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>

                        {/* <div className="foot">
                            <p>or connect with</p>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Twitter />
                                    </a>
                                </li>
                            </ul>
                        </div> */}

                        <div className="mb-3" style={{ marginTop: "10%" }}>
                            <p>Looking for admin site?
                                <a
                                    className="nav-link"
                                    href={LOGIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    activeClassName="active"
                                >
                                    Click Here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Login;