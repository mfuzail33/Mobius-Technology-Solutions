import React from "react";
import { useTranslation } from 'react-i18next';
import Header from "./global/header";
import Footer from "./global/footer";
import { Helmet } from 'react-helmet';
import AnimatedBackground from "./animatedBackground";
import Cursor from "./cursor";

const Career = ({ header, footer }) => {
    const { t } = useTranslation();
    const { menu } = footer;

    return (
        <>
            <Cursor />
            <Helmet>
                <title>Career - Mobius Technology Solutions</title>
            </Helmet>
            <Header header={header} />
            <section
                id="achievements"
                className={`section-padding achievement site_bg`}
                style={{ paddingTop: '150px', minHeight: '650px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <AnimatedBackground />
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    <h2 className="display-6 heading">{t('JoinOurTeam')}</h2>
                    <div className="section-divider divider-traingle_color" style={{ display: 'flex', margin: '50px auto 50px auto' }}></div>
                    <span className="heading">{t('JoinOurTeamDesc')}</span>
                </div>

            </section>

            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default Career;
