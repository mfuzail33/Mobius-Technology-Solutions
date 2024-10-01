/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../../global/header";
import Footer from "../../global/footer";
import AnimatedBackground from "../../animatedBackground";
import Cursor from "../../cursor";
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = ({ header, footer }) => {
    const { t } = useTranslation();
    const { menu } = footer;

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
                                <h2 className="text-center" style={{ color: '#fff' }}>{t('Privacy Policy')}</h2>
                                <p className="text-center mb-5 fs-6" style={{ color: '#fff' }}>{t('Privacy Policy Desc')}</p>
                            </div>
                            <div className="section-title-left text-lg-start">
                                <h4 style={{ color: '#fff' }}>{t('We respect your privacy, and we promise:')}</h4>
                                <ul>
                                    <li style={{ color: '#fff' }}>{t('privacyPolicyBullet1')}</li>
                                    <li style={{ color: '#fff' }}>{t('privacyPolicyBullet2')}</li>
                                    <li style={{ color: '#fff' }}>{t('privacyPolicyBullet3')}</li>
                                    <li style={{ color: '#fff' }}>{t('privacyPolicyBullet4')}</li>
                                </ul>


                                <h2 className="mt-5" style={{ color: '#fff' }}>{t('Information collection')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Information collection Desc')}</p>
                                <ul>
                                    <li style={{ color: '#fff' }}>{t('Information collection Bullet')}</li>
                                </ul>

                                <p className="fs-6" style={{ color: '#fff' }}>{t('Information collection Para')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Information collection Para2')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Information collection Para3')}</p>


                                <h2 className="mt-5" style={{ color: '#fff' }}>{t('Use of information')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Use of information Desc')}</p>
                                <ol style={{ listStyleType: 'lower-alpha', color: '#fff' }}>
                                    <li style={{ color: '#fff' }}>{t('Use of information a')}</li>
                                    <li style={{ color: '#fff' }}>{t('Use of information b')}</li>
                                    <li style={{ color: '#fff' }}>{t('Use of information c')}</li>
                                    <li style={{ color: '#fff' }}>{t('Use of information d')}</li>
                                    <li style={{ color: '#fff' }}>{t('Use of information e')}</li>
                                    <li style={{ color: '#fff' }}>{t('Use of information f')}</li>
                                    <li style={{ color: '#fff' }}>{t('Use of information g')}</li>
                                    <li style={{ color: '#fff' }}>{t('Use of information h')}</li>
                                </ol>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Use of information Para')}</p>


                                <h2 className="mt-5" style={{ color: '#fff' }}>{t('Disclosure')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Disclosure Desc')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Disclosure Desc2')}</p>
                                <ul>
                                    <li style={{ color: '#fff' }}>{t('Disclosure Bullet 1')}</li>
                                    <li style={{ color: '#fff' }}>{t('Disclosure Bullet 2')}</li>
                                </ul>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Disclosure Para')}</p>


                                <h2 className="mt-5" style={{ color: '#fff' }}>{t('Cookies')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Cookies Para1')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Cookies Para2')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Cookies Para3')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Cookies Para4')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Cookies Para5')}</p>


                                <h2 className="mt-5" style={{ color: '#fff' }}>{t('Security')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Security Desc')}</p>


                                <h2 className="mt-5" style={{ color: '#fff' }}>{t('Hyperlinks')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Hyperlinks Desc')}</p>


                                <h2 className="mt-5" style={{ color: '#fff' }}>{t('Changes')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Changes Desc')}</p>


                                <h2 className="mt-5" style={{ color: '#fff' }}>{t('Your data privacy rights')}</h2>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Your data privacy rights Desc')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Under the law, you have the right:')}</p>
                                <ul>
                                    <li style={{ color: '#fff' }}>{t('Your data privacy rights Bullet1')}</li>
                                    <li style={{ color: '#fff' }}>{t('Your data privacy rights Bullet2')}</li>
                                </ul>
                                <p className="fs-6" style={{ color: '#fff' }}>
                                    {t('To exercise these rights, please contact us at')}
                                    <a href="mailto:contact@mobiustechnologysolutions.com" style={{ color: '#1a8ce0', fontWeight: 600 }}>
                                        contact@mobiustechnologysolutions.com
                                    </a>
                                </p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Your data privacy rights Para')}</p>
                                <p className="fs-6" style={{ color: '#fff' }}>{t('Your data privacy rights Para2')}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer menu={menu} isBg="yes" />
        </>
    );
};

export default PrivacyPolicy;
