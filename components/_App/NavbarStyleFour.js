import React from "react";
import Link from '@/utils/ActiveLink';
import { ChevronDown } from 'react-feather';

const LOGIN_URL = "https://totaledgemarketing.insuredmine.com/agent/session/loginone";
const CALENDLY_LOGIN = "https://calendly.com/dinesejubilee"

const NavbarStyleFour = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom navbar-color-white navbar-style-four" style={{ backgroundColor: '#2D4474' }}>
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src="/images/bigdata-analytics/jubilee-logo.jpg" alt="logo" />
                            </a>
                        </Link>

                        <button
                            onClick={toggleNavbar}
                            className={classTwo}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link href="/about-1" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">About Us</a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Services <ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/tax-planning" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Tax Planning</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/insurance-services" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Insurance Services</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/living-benefits" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Living Benefits</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/business-strategies" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Business Strategies</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/wealth-preservation" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Wealth Preservation</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/retirement-planning" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Retirement Planning</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/401k-ira-rollover" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">401k and IRA Rollover</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Help <ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/faq" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">FAQ</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/#newsletter-section" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Newsletter</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/tax-videos" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Tax Videos</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-2" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Contact Us</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a
                                        onClick={toggleNavbar}
                                        className="nav-link"
                                        href={LOGIN_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        activeClassName="active"
                                    >
                                        Login
                                    </a>
                                </li>

                                {/* <li className="nav-item">
                                    <Link href="/login" activeClassName="active">
                                        <a
                                            onClick={toggleNavbar}
                                            className="nav-link"
                                        >
                                            Login
                                        </a>
                                    </Link>
                                </li> */}

                            </ul>
                        </div>

                        <div className="others-option">
                            <Link href="/contact">
                                {/* <a className="btn btn-primary">Talk to Us</a> */}
                                <a
                                    onClick={toggleNavbar}
                                    className="btn btn-primary"
                                    href={CALENDLY_LOGIN}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    activeClassName="active"
                                >
                                    Schedule Call
                                </a>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavbarStyleFour;