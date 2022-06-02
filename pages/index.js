import React from 'react';

import Footer from "@/components/_App/Footer";
import NavbarContactHeader from "@/components/_App/NavbarContactHeader";
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";

import NewsletterStyleTwo from '@/components/Common/NewsletterStyleTwo';

import AboutUsContent from '@/components/BigdataAnalytics/AboutUsContent';
import BlogPost from '@/components/BigdataAnalytics/BlogPost';
import DiscoverArea from '@/components/BigdataAnalytics/DiscoverArea';
// import HelloPage from '@/components/BigdataAnalytics/HelloPage';
import MainBanner from '@/components/BigdataAnalytics/MainBanner';
import Services from '@/components/BigdataAnalytics/Services';

import WhoWeArePage from '@/components/BigdataAnalytics/WhoWeArePage';

const Index = () => {
    return (
        <>
            {/* <NavbarContactHeader /> */}
            <NavbarStyleFour />

            <MainBanner />

            <Services />

            <DiscoverArea />

            <WhoWeArePage />

            <NewsletterStyleTwo />

            {/* <BlogPost /> */}

            <AboutUsContent />

            <Footer />
        </>
    )
}

export default Index;
