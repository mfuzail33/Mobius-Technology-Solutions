import React from "react";
import Header from "../../global/header";
import Footer from "../../global/footer";
import AnimatedBackground from "../../animatedBackground";
import Cursor from "../../cursor";
import { useTranslation } from 'react-i18next';

const WorkplacePolicy = ({ header, footer }) => {
    const { menu } = footer;
    const { t } = useTranslation();

    return (
        <>
            <Header header={header} />
            <section id="benefits" style={{ paddingTop: '150px', zIndex: 1, position: 'relative' }} className={`section-padding authorv3 site_bg`}>
                <AnimatedBackground />
                <Cursor />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-left text-center text-lg-start">
                                <h2 className="text-center mb-3" style={{ color: '#fff' }}>{t('Workplace Policies and Procedures of Mobius Technology Solutions')}</h2>
                            </div>
                            <div className="section-title-left text-lg-start">

                                <h2 className="mt-5" style={{ color: '#fff' }}>1. {t('General Conduct')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('General Conduct Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>2. {t('Professional Conduct')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Professional Conduct Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>3. {t('Regulatory Compliance')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Regulatory Compliance Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>4. {t('HR and Employment Policies')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('HR and Employment Policies Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>5. {t('Ordering Equipment and Other Transactions')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Ordering Equipment and Other Transactions Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>6. {t('Use of Technology and Social Media')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Use of Technology and Social Media Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>7. {t('Health and Safety')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Health and Safety Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>8. {t('Employee Onboarding')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Employee Onboarding Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>9. {t('Procurement and Due Diligence')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Procurement and Due Diligence Desc')}</p>

                                <p className="mt-5 fs-6" style={{ color: '#fff' }}>{t('Workplace Policies and Procedures of Mobius Technology Solutions Desc')}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default WorkplacePolicy;
