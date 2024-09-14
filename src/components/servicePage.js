/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./global/header";
import Footer from "./global/footer";
import ServicesTabs from "./pages/services/servicesTabs";
import { Helmet } from 'react-helmet';
import AllServices from "./allServices";

const ServicePage = ({ header, footer }) => {
    const { menu } = footer;

    return (
        <>
            <Helmet>
                <title>Services</title>
                <meta name="description" content=": We provides range of high-quality ebook writing, proofreading, and publishing services, article writing, author website design, ghostwriting and more services." />
                <meta name="keywords" content="ebook writing, proofreading services, article writing service, author website service, website content writer, ebook cover design, ebook publishing, ghostwriting services, autobiography services" />
            </Helmet>
            <Header header={header} />
            {/* <ServicesTabs isBg="" /> */}
            <AllServices />
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default ServicePage;
