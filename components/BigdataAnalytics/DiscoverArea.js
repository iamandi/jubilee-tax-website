import React from 'react';
import { MapPin } from 'react-feather';

const DiscoverArea = () => {
    return (
        <div className="discover-area ptb-40">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <div className="discover-content">
                            <h5>GRAND OPENING</h5>
                            <h1>Visit Us At Our New Location!</h1>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <div className="secondary-content">
                            <div className="icon-holder">
                                <MapPin />
                            </div>
                            <div className="icon-text-holder">
                                <h5 style={{ fontWeight: '700' }}>Address</h5>
                                <p style={{ color: 'black' }}>330 Franklin Street, Oakland, CA 94607</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverArea;  