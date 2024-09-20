import React from "react";
import Header from "./global/header";
import Footer from "./global/footer";
import ContactContent from "./contactContent";
import { Helmet } from 'react-helmet';
import Cursor from "./cursor";

const ContactPage = ({ header, footer }) => {
    const { menu } = footer;

    return (
        <>
            <Cursor />
            <Helmet>
                <title>Contact - Mobius Technology Solutions</title>
            </Helmet>
            <Header header={header} />
            <ContactContent isBg="" />
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default ContactPage;
