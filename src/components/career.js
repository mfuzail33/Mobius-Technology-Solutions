import React from "react";
import { useTranslation } from 'react-i18next';
import Header from "./global/header";
import Footer from "./global/footer";
import { Helmet } from 'react-helmet';

const Career = ({ header, footer }) => {
    const { t } = useTranslation();
    const { menu } = footer;

    return (
        <>
            <Helmet>
                <title>Contact Mobius Technology Solutions | Reach Out to Us Today</title>
                <meta name="description" content="Get in touch with Mobius Technology Solutions for inquiries, support, and more. Fill out our contact form or reach us directly via email or phone. We’re here to help with all your publishing needs!" />
                <meta name="keywords" content="contact us, Mobius Technology Solutions, contact, noble books" />
            </Helmet>
            <Header header={header} />
            <section
                id="achievements"
                className={`section-padding achievement`}
                style={{ marginTop: '50px', minHeight: '650px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    <h2 className="display-6">{t('JoinOurTeam')}</h2>
                    <div className="section-divider divider-traingle" style={{ display: 'flex', margin: '50px auto 50px auto' }}></div>
                    <span>{t('JoinOurTeamDesc')}</span>
                </div>

            </section>

            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default Career;
