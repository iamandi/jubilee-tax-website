import React from 'react';
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";
import MainBanner from '@/components/BigdataAnalytics/MainBanner';
import WhatWeDo from '@/components/BigdataAnalytics/WhatWeDo';
import DiscoverArea from '@/components/BigdataAnalytics/DiscoverArea';
import Services from '@/components/BigdataAnalytics/Services';
import TeamStyleTwo from '@/components/Common/TeamStyleTwo';
import BigdataFunFacts from '@/components/BigdataAnalytics/BigdataFunFacts';
import Feedback from '@/components/BigdataAnalytics/Feedback';
import IndustriesWeServe from '@/components/BigdataAnalytics/IndustriesWeServe';
import BlogPost from '@/components/BigdataAnalytics/BlogPost';
import NewsletterStyleTwo from '@/components/Common/NewsletterStyleTwo';
import Footer from "@/components/_App/Footer";

import AboutUsContent from '@/components/BigdataAnalytics/AboutUsContent';
// import AboutUsContent from '@/components/PCRepair/AboutUsContent';

// import ParticlesPage from '@/components/BigdataAnalytics/ParticlesPage';
import HelloPage from '@/components/BigdataAnalytics/HelloPage';

const Index = () => {
    return (
        <>
            <NavbarStyleFour />
            <MainBanner />
            <AboutUsContent />

            <Services />

            <DiscoverArea />

            {/* <IndustriesWeServe /> */}
            {/* <TeamStyleTwo /> */}
            {/* <BigdataFunFacts /> */}
            {/* <Feedback /> */}

            <BlogPost />
            <NewsletterStyleTwo />

            <HelloPage />

            <Footer />
        </>
    )
}

export default Index;
