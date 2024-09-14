/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./global/header";
import Footer from "./global/footer";
import Portfolio from "./portfolio";
import { Helmet } from 'react-helmet';

const ContactPage = ({ header, footer }) => {
    const { menu } = footer;

    return (
        <>
            <Helmet>
                <title>Portfolio | Mobius Technology Solutions - Exceptional Works</title>
                <meta name="description" content="Explore Mobius Technology Solutions's portfolio with exceptional books across genres, showcasing our quality and talented authors." />
                <meta name="keywords" content="Portfolio, Mobius Technology Solutions, quality publishing, exceptional books, talented authors." />
            </Helmet>
            <Header header={header} />
            <Portfolio isBg="" />
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default ContactPage;
