import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import insurance from '../../public/images/bigdata-analytics/insurance.svg'
import insuranceHover from '../../public/images/bigdata-analytics/insurance_hover.svg'
import mortgage from '../../public/images/bigdata-analytics/mortgage.svg'
import mortgageHover from '../../public/images/bigdata-analytics/mortgage_hover.svg'
import financialPlaning from '../../public/images/bigdata-analytics/financial_planing.svg'
import financialPlaningHover from '../../public/images/bigdata-analytics/financial_planing_hover.svg'
import creditCards from '../../public/images/bigdata-analytics/credit_cards.svg'
import creditCardsHover from '../../public/images/bigdata-analytics/credit_cards_hover.svg'
import autoLoans from '../../public/images/bigdata-analytics/auto_loans.svg'
import autoLoansHover from '../../public/images/bigdata-analytics/auto_loans_hover.svg'
import businessStrategies from '../../public/images/bigdata-analytics/business_strategies.svg'
import businessStrategiesHover from '../../public/images/bigdata-analytics/business_strategies_hover.svg'

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

const MainBanner = () => {
    return (
        <>
            <div className="bigdata-analytics-banner">
                <Image className='hide-cover' placeholder="blur" blurDataURL={rgbDataURL(237, 181, 6)} src='/images/bigdata-analytics/bg-new-half-res.png' alt='bg pic' layout='fill' objectFit='cover' objectPosition='center' priority={false} />
                <div className="container">
                    <div className="bigdata-analytics-content">
                        <h1>Make Smarter Financial Decisions</h1>
                        <p>For saving, growing, and spending your money and protecting the things you love.
                            We offer expert-driven advice and tools that help you make the best personal and business finance decisions.</p>

                        <div className="btn-bigdata">
                            <Link href="/services-5">
                                <button className="pushable">
                                    <span className="shadow"></span>
                                    <span className="edge"></span>
                                    <span className="front">
                                        Tell Me More
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="banner-boxes-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <Link href="/tax-planning">
                                <div className="col-lg-2 col-sm-6 single-banner-boxes-conatiner box">
                                    <div className="single-banner-boxes overlapGrid box-inner">
                                        <Image src={insurance} />
                                        <Image src={insuranceHover} className="upper-image" />
                                        <h3>
                                            Tax Planning
                                        </h3>
                                        <br className='display-br' />
                                    </div>
                                </div>
                            </Link>

                            <Link href="/insurance-services">
                                <div className="col-lg-2 col-sm-6 single-banner-boxes-conatiner">
                                    <div className="single-banner-boxes overlapGrid" >
                                        <Image src={mortgage} />
                                        <Image src={mortgageHover} className="upper-image" />
                                        <h3>
                                            Insurance Services
                                        </h3>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/living-benefits">
                                <div className="col-lg-2 col-sm-6 single-banner-boxes-conatiner">
                                    <div className="single-banner-boxes overlapGrid" >
                                        <Image src={financialPlaning} />
                                        <Image src={financialPlaningHover} className="upper-image" />
                                        <h3>
                                            Living Benefits
                                        </h3>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/wealth-preservation">
                                <div className="col-lg-2 col-sm-6 single-banner-boxes-conatiner">
                                    <div className="single-banner-boxes overlapGrid" >
                                        <Image src={creditCards} />
                                        <Image src={creditCardsHover} className="upper-image" />
                                        <h3>
                                            Wealth Preservation
                                        </h3>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/retirement-planning">
                                <div className="col-lg-2 col-sm-6 single-banner-boxes-conatiner">
                                    <div className="single-banner-boxes overlapGrid" >
                                        <Image src={autoLoans} />
                                        <Image src={autoLoansHover} className="upper-image" />
                                        <h3>
                                            Retirement Planning
                                        </h3>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/business-strategies">
                                <div className="col-lg-2 col-sm-6 single-banner-boxes-conatiner">
                                    <div className="single-banner-boxes overlapGrid" >
                                        <Image src={businessStrategies} />
                                        <Image src={businessStrategiesHover} className="upper-image" />
                                        <h3>
                                            Business Strategies
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>



            </div>



        </>
    )
}

export default MainBanner;  