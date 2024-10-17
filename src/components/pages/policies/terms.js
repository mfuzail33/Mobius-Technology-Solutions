import React from "react";
import Header from "../../global/header";
import Footer from "../../global/footer";
import AnimatedBackground from "../../animatedBackground";
import Cursor from "../../cursor";
import { useTranslation } from 'react-i18next';
import TermsTable from "./TermsTable";

const Terms = ({ header, footer }) => {
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
                                <h2 className="text-center mb-3" style={{ color: '#fff' }}>{t('Terms of use')}</h2>
                                <TermsTable />
                            </div>
                            <div className="section-title-left text-lg-start">

                                <h2 className="mt-5" style={{ color: '#fff' }}>1. {t('Terms & Conditions')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Terms & Conditions Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>2. {t('Changes to Website')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Changes to Website Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>3. {t('Use of the Website')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}><b>{t('Eligibility')}</b> {t('Use of the Website Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>4. {t('Intellectual Property Rights')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Intellectual Property Rights Desc')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Intellectual Property Rights Desc2')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Intellectual Property Rights Desc3')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>5. {t('Limitation of Liability and Warranty')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Limitation of Liability and Warranty Desc')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}><b>{t('YOUR ACCESS TO AND USE OF OUR WEBSITE IS AT YOUR SOLE RISK AND IS PROVIDED')} "{t('AS IS')}," "{t('AS AVAILABLE')}." {t('Limitation of Liability and Warranty Desc2')}</b></p>
                                <p className="fs-6" style={{ color: '#fff' }}><b>{t('Limitation of Liability and Warranty Desc3')}</b></p>
                                <p className="fs-6" style={{ color: '#fff' }}><b>{t('Limitation of Liability and Warranty Desc4')}</b></p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Neither Mobius Technology Solutions nor any of the Mobius Technology Solutions Affiliates shall guarantee or assume any responsibility that')}</p>
                                <ol style={{ listStyleType: 'numeric', color: '#fff' }}>
                                    <li style={{ color: '#fff' }}>{t('Limitation Bullet1')}</li>
                                    <li style={{ color: '#fff' }}>{t('Limitation Bullet2')}</li>
                                    <li style={{ color: '#fff' }}>{t('Limitation Bullet3')}</li>
                                    <li style={{ color: '#fff' }}>{t('Limitation Bullet4')}</li>
                                    <li style={{ color: '#fff' }}>{t('Limitation Bullet5')}</li>
                                    <li style={{ color: '#fff' }}>{t('Limitation Bullet6')}</li>
                                </ol>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Limitation of Liability and Warranty Desc5')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Limitation of Liability and Warranty Desc6')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Limitation of Liability and Warranty Desc7')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Limitation of Liability and Warranty Desc8')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Limitation of Liability and Warranty Desc9')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>6. {t('Service Descriptions and Pricing')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Service Descriptions and Pricing Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>7. {t('Third-Party Information')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Third-Party Information Desc')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Third-Party Information Desc2')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>8. {t('Payment Terms')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Payment Terms Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>9. {t('Termination of Access')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Termination of Access Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>10. {t('Changes to Terms')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Changes to Terms Desc')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Changes to Terms Desc2')}</p>
                                <ul>
                                    <li style={{ color: '#fff' }}>{t('Changes to Terms Bullet1')}.</li>
                                    <li style={{ color: '#fff' }}>{t('Changes to Terms Bullet2')}.</li>
                                </ul>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Changes to Terms Desc3')}.</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>11. {t('Users Conduct')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Users Conduct Desc')}</p>
                                <ol style={{ listStyleType: 'numeric', color: '#fff' }}>
                                    <li style={{ color: '#fff' }}>{t('Users Conduct Bullet1')}</li>
                                    <li style={{ color: '#fff' }}>{t('Users Conduct Bullet2')}</li>
                                    <li style={{ color: '#fff' }}>{t('Users Conduct Bullet3')}</li>
                                    <li style={{ color: '#fff' }}>{t('Users Conduct Bullet4')}</li>
                                    <li style={{ color: '#fff' }}>{t('Users Conduct Bullet5')}</li>
                                    <li style={{ color: '#fff' }}>
                                        {t('Users Conduct Bullet6')}
                                        <ul>
                                            <li style={{ color: '#fff' }}>{t('Users Conduct subBullet1')}</li>
                                            <li style={{ color: '#fff' }}>{t('Users Conduct subBullet2')}</li>
                                            <li style={{ color: '#fff' }}>{t('Users Conduct subBullet3')}</li>
                                            <li style={{ color: '#fff' }}>{t('Users Conduct subBullet4')}</li>
                                        </ul>
                                    </li>
                                    <li style={{ color: '#fff' }}>{t('Users Conduct Bullet7')}</li>
                                </ol>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Users Conduct Desc2')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>12. {t('Indemnity')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Indemnity Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>13. {t('Partial Invalidity')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Partial Invalidity Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>14. {t('Governing Law')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Governing Law Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>15. {t('terms-Privacy Policy')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('terms-Privacy Policy Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>16. {t('Several Users')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Several Users Desc')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>17. {t('Visual Content Disclaimer')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('disclaimer')}</p>

                                <h2 className="mt-5" style={{ color: '#fff' }}>{t('terms-Contact Us')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('terms-Contact Us Desc')}
                                    <a href="mailto:contact@mobiustechnologysolutions.com" style={{ color: '#1a8ce0', fontWeight: 600 }}>
                                        &nbsp;contact@mobiustechnologysolutions.com
                                    </a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default Terms;
