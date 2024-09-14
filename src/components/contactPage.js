/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./global/header";
import Footer from "./global/footer";
import ContactContent from "./contactContent";
import { Helmet } from 'react-helmet';

const ContactPage = ({ header, footer }) => {
    const { menu } = footer;

    return (
        <>
            <Helmet>
                <title>Contact Mobius Technology Solutions | Reach Out to Us Today</title>
                <meta name="description" content="Get in touch with Mobius Technology Solutions for inquiries, support, and more. Fill out our contact form or reach us directly via email or phone. We’re here to help with all your publishing needs!" />
                <meta name="keywords" content="contact us, Mobius Technology Solutions, contact, noble books" />
            </Helmet>
            <Header header={header} />
            <ContactContent isBg="" />
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default ContactPage;
