import React from 'react';

const PageBanner = ({ pageTitle1, pageTitle2, pageSubTitle, pageQuote }) => {
    return (
        <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        {pageSubTitle && <h6 className='subtitle'>{pageSubTitle}</h6>}
                    </div>
                    <div className="container">
                        <h2>
                            <span style={{ color: '#1d5089' }}>{pageTitle1}</span>
                            <span style={{ color: '#088a42' }}>&nbsp;{pageTitle2}</span>
                        </h2>
                    </div>

                    {pageQuote && <blockquote className="otro-blockquote container">
                        People do not care how much you know until they know how much you care.
                        <span>Teddy Roosevelt</span>
                    </blockquote>}
                </div>
            </div>
        </div>
    );
}

export default PageBanner;