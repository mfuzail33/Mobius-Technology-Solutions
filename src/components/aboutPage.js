import React from "react";
import Header from "./global/header";
import Footer from "./global/footer";
import AboutUs from "./pages/aboutUs/aboutus";
import WhyHireUs from "./pages/aboutUs/whyHireUs";
import Services from "./pages/aboutUs/services";
import { Helmet } from 'react-helmet';
import Cursor from "./cursor";

const AboutPage = ({ header, footer }) => {
    const { menu } = footer;

    return (
        <>
            
            <Cursor />
            <Helmet>
                <title>About - Mobius Technology Solutions</title>
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
