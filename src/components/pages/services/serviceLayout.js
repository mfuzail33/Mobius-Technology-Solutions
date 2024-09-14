import React from 'react';
import Header from '../../global/header';
import Footer from '../../global/footer';
import ServicesTabs from './servicesTabs';

const ServiceLayout = ({ children, header, footer }) => {
    const { menu } = footer;

    return (
        <>
            <Header header={header} />
            <ServicesTabs />
            <main>{children}</main>
            <Footer menu={menu} isBg="yes" />
        </>
    );
};

export default ServiceLayout;
