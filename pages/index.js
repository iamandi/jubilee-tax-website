import React from 'react';

import Footer from "@/components/_App/Footer";
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";

import NewsletterStyleTwo from '@/components/Common/NewsletterStyleTwo';

import AboutUsContent from '@/components/BigdataAnalytics/AboutUsContent';
import BlogPost from '@/components/BigdataAnalytics/BlogPost';
import DiscoverArea from '@/components/BigdataAnalytics/DiscoverArea';
import HelloPage from '@/components/BigdataAnalytics/HelloPage';
import MainBanner from '@/components/BigdataAnalytics/MainBanner';
import Services from '@/components/BigdataAnalytics/Services';

const Index = () => {
    return (
        <>
            <NavbarStyleFour />
            <MainBanner />
            <AboutUsContent />

            <Services />

            <DiscoverArea />

            <BlogPost />
            <NewsletterStyleTwo />

            <HelloPage />

            <Footer />
        </>
    )
}

export default Index;
