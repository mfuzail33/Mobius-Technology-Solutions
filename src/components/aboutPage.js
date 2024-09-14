/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./global/header";
import Footer from "./global/footer";
import AboutUs from "./pages/aboutUs/aboutus";
import WhyHireUs from "./pages/aboutUs/whyHireUs";
import Services from "./pages/aboutUs/services";
import { Helmet } from 'react-helmet';

const AboutPage = ({ header, footer }) => {
    const { menu } = footer;

    return (
        <>
            <Helmet>
                <title>About Mobius Technology Solutions</title>
                <meta name="description" content="Learn about Mobius Technology Solutions's mission to support emerging authors and produce quality literature. Explore their journey and values." />
                <meta name="keywords" content="Mobius Technology Solutions, About Noble Books, Publishing Services, Company History" />
            </Helmet>
            <Header header={header} />
            <AboutUs isBg="Yes" />
            <WhyHireUs />
            <Services />
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default AboutPage;
