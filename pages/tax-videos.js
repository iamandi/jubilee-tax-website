import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FAQ = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Jubilee Financial Tax Videos" />

            <div className="faq-area ptb-80">
                <div className="container">
                    <div className="video-responsive">
                        <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/rokGy0huYEA`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default FAQ;