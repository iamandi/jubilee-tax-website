import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import ContactInfo from '@/components/Contact/ContactInfo';
import GoogleMap from '@/components/Contact/GoogleMap';
import ContactForm from '@/components/Contact/ContactForm';

const Contact = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle1="Get in" pageTitle2="touch" pageSubTitle='CONTACT US TODAY!' />

            <ContactInfo />

            <ContactForm />

            <GoogleMap />


            <Footer />
        </>
    )
}

export default Contact;