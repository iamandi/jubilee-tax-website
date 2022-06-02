import React from 'react';
import { BarChart, Gift, Smile } from 'react-feather';
import ScrollAnimationContainer from '@/utils/ScrollAnimationContainer';

const AboutUsContent = () => {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }
    };

    return (
        <div className="agency-about-area ptb-40">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <ScrollAnimationContainer boxVariant={boxVariant}>
                            <div className="agency-about-img animate__animated animate__fadeInLeft animate__fast">
                                <img src="/images/bigdata-analytics/experience_triangle.png" alt="About us cover image" />
                            </div>
                        </ScrollAnimationContainer>
                    </div>

                    <div className="col-lg-6 col-md-12 animate__animated animate__fadeInRight animate__fast">
                        <div className="repair-about-content">
                            <div className='title-container'>
                                <h6 className="dashed-sub-title">GROWING WITH OUR CLIENTS</h6>
                                <h2 style={{ color: '#1d5089' }}>22 Years of</h2>
                                <h2 style={{ color: '#088a42' }}>Experience</h2>
                            </div>
                            <p>We take pride in consistent delivery of 5 star service and results.</p>

                            <div className='feature-widget-container'>
                                <ScrollAnimationContainer boxVariant={boxVariant}>
                                    <div className='feature-widget'>
                                        <div className='feature-circle'>
                                            <div style={{ position: 'relative', top: 0, left: 0, padding: '0 1rem' }}>
                                                <svg
                                                    initial="hidden"
                                                    animate="visible"
                                                    viewBox="0 0 100 100" style={{ display: 'block', width: '100%' }}>
                                                    <path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="#f5f5f5" strokeWidth="4" fillOpacity="0"></path><path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="rgb(8,138,66)" strokeWidth="4" fillOpacity="0"></path>
                                                </svg>
                                            </div>
                                            <div style={{ position: 'absolute', top: '35%', left: '38%' }}>
                                                <Smile size={50} /></div>
                                        </div>
                                        <h5>Consistent Satisfaction</h5>
                                    </div>
                                </ScrollAnimationContainer>

                                <ScrollAnimationContainer boxVariant={boxVariant}>
                                    <div className='feature-widget'>
                                        <div className='feature-circle'>
                                            <div style={{ position: 'relative', top: 0, left: 0, padding: '0 1rem' }}>
                                                <svg viewBox="0 0 100 100" style={{ display: 'block', width: '100%' }}><path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="#f5f5f5" strokeWidth="4" fillOpacity="0"></path><path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="rgb(8,138,66)" strokeWidth="4" fillOpacity="0"></path></svg>
                                            </div>
                                            <div style={{ position: 'absolute', top: '35%', left: '38%' }}>
                                                <BarChart size={50} /></div>
                                        </div>
                                        <h5>Consistent Business Growth</h5>
                                    </div>
                                </ScrollAnimationContainer>

                                <ScrollAnimationContainer boxVariant={boxVariant}>
                                    <div className='feature-widget'>
                                        <div className='feature-circle'>
                                            <div style={{ position: 'relative', top: 0, left: 0, padding: '0 1rem' }}>
                                                <svg viewBox="0 0 100 100" style={{ display: 'block', width: '100%' }}><path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="#f5f5f5" strokeWidth="4" fillOpacity="0"></path><path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="rgb(8,138,66)" strokeWidth="4" fillOpacity="0"></path></svg>
                                            </div>
                                            <div style={{ position: 'absolute', top: '35%', left: '38%' }}>
                                                <Gift size={50} /></div>
                                        </div>
                                        <h5>Maximizing Tax Returns</h5>
                                    </div>
                                </ScrollAnimationContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsContent;