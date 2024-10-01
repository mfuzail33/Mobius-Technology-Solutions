import React from "react";
import Header from "../../global/header";
import Footer from "../../global/footer";
import AnimatedBackground from "../../animatedBackground";
import Cursor from "../../cursor";
import { useTranslation } from 'react-i18next';

const VaccinePolicy = ({ header, footer }) => {
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
                                <h2 className="text-center mb-3" style={{ color: '#fff' }}>{t('Vaccine Policy of Mobius Technology Solutions')}</h2>
                            </div>
                            <div className="section-title-left text-lg-start">

                                <h2 className="mt-5" style={{ color: '#fff' }}>1. {t('Mandatory Vaccination Requirement')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Mandatory Vaccination Requirement Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>2. {t('Vaccine Accessibility')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Vaccine Accessibility Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>3. {t('Exemptions')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Exemptions Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>4. {t('Education and Awareness')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Education and Awareness Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>5. {t('Confidentiality and Privacy')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Confidentiality and Privacy Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>6. {t('Support for Vaccine hesitant Employees')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Support for Vaccine hesitant Employees Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>7. {t('Compliance Monitoring')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Compliance Monitoring Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>8. {t('Adaptation to Changing Epidemiological Landscape')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Adaptation to Changing Epidemiological Landscape Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>9. {t('Communication Strategy')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Communication Strategy Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>10. {t('Conclusion')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Conclusion Desc')}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default VaccinePolicy;
