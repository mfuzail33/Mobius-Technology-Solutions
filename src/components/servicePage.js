/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./global/header";
import Footer from "./global/footer";
import ServicesTabs from "./pages/services/servicesTabs";
import { Helmet } from 'react-helmet';
import AllServices from "./allServices";
import Cursor from "./cursor";

const ServicePage = ({ header, footer }) => {
    const { menu } = footer;

    return (
        <>
            <Cursor />
            <Helmet>
                <title>Services - Mobius Technology Solutions</title></Helmet>
            <Header header={header} />
            {/* <ServicesTabs isBg="" /> */}
            <AllServices />
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default ServicePage;
