import React from 'react';
import Link from 'next/link';

const HelloPage = () => {
    // Get demo blocks
    // const demo = document.querySelectorAll('.cb-demo');

    // // Demo: 1
    // const demoParticles = document.querySelector('.cb-particles');
    // const particles = new Particles({
    //     container: demoParticles,
    // <div class="cb-particles-item -emoji -v2 -s6" style="transform: translate3d(0px, 158.223px, 0px); will-change: transform;">🎉</div>
    //     itemsSelector: ".cb-particles-item",
    // });<div class="cb-particles-item -emoji -v6 -s6" style="transform: translate3d(0px, 1125.48px, 0px); will-change: transform;">💎</div>

    return (
        <div className="hello-page-container">
            <div className="" style={{ position: 'relative', padding: '2px', width: '100%' }}>
                <div className="snowflakes">
                    <div className="snowflake">
                        <span style={{ color: 'white', opacity: 0.6, fontSize: '1.6rem' }}>Aloha!</span>
                    </div>
                    <div className="snowflake">
                        <span style={{ color: 'white', opacity: 0.6, fontSize: '1.6rem' }}>Ola!</span>
                    </div>
                    <div className="snowflake">
                        <span style={{ color: 'white', opacity: 0.6, fontSize: '1.6rem' }}>Halló!</span>
                    </div>
                    <div className="snowflake">
                        <span style={{ color: 'white', opacity: 0.6, fontSize: '1.6rem' }}>Shalom!</span>
                    </div>
                    <div className="snowflake">
                        <span style={{ color: 'white', opacity: 0.6, fontSize: '1.6rem' }}>¡Hola!</span>
                    </div>
                    <div className="snowflake">
                        <span style={{ color: 'white', opacity: 0.6, fontSize: '1.6rem' }}>Aloha!</span>
                    </div>
                    <div className="snowflake">
                        <span style={{ color: 'white', opacity: 0.6, fontSize: '1.6rem' }}>Hei!</span>
                    </div>
                    <div className="snowflake">
                        <span style={{ color: 'white', opacity: 0.6, fontSize: '1.6rem' }}>Привет!</span>
                    </div>
                    <div className="snowflake">
                        <span style={{ color: 'white', opacity: 0.6, fontSize: '1.6rem' }}>Terve!</span>
                    </div>
                    <div className="snowflake">
                        <span style={{ color: 'white', opacity: 0.6, fontSize: '1.6rem' }}>Bonjour!</span>
                    </div>
                    <div className="snowflake">
                        <span style={{ color: 'white', opacity: 0.6, fontSize: '1.6rem' }}>Salam!</span>
                    </div>
                    <div className="snowflake">
                        <span style={{ color: 'white', opacity: 0.6, fontSize: '1.6rem' }}>Ciao!</span>
                    </div>
                    <div className="snowflake">
                        <span style={{ color: 'white', opacity: 0.6, fontSize: '1.6rem' }}>Hello!</span>
                    </div>

                </div>

                <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h2 style={{ color: 'white', fontSize: '40px', fontWeight: '700' }}>
                        Before you go!
                    </h2>

                    <div className="btn-bigdata" style={{ marginTop: '2%' }}>
                        <Link href="/contact">
                            <button className="pushable" style={{ width: '350px' }}>
                                <span className="shadow" />
                                <span className="edge" />
                                <span className="front">
                                    Schedule Consultation
                                </span>
                            </button>
                        </Link>
                    </div>

                    <div className="btn-bigdata" style={{ marginTop: '2%' }}>
                        <a href="tel:5109091100">
                            <button className="pushable" style={{ width: '350px' }}>
                                <span className="shadow" />
                                <span className="edge" />
                                <span className="front">
                                    Call Us
                                </span>
                            </button>
                        </a>
                    </div>

                    <div className="btn-bigdata" style={{ marginTop: '2%' }}>
                        <a href="mailto:dinese@jubileetaxfinancial.com">
                            <button className="pushable" style={{ width: '350px' }}>
                                <span className="shadow" />
                                <span className="edge" />
                                <span className="front">
                                    Email Us
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelloPage;