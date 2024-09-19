import React from "react";
import img from "../../../assets/images/moreServices/health2.jpg"
import { useTranslation } from 'react-i18next';
import AnimatedBackground from "../../animatedBackground";

const Health = ({ isBg }) => {
    const { t } = useTranslation();

    return (
        <>
            <AnimatedBackground />
            <section style={{ marginTop: '40px', position: 'relative' }}>
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    <h2 className="display-6 heading">{t('HealthSafetyAndRescue')}</h2>
                    <div className="section-divider divider-traingle_color" style={{ display: 'flex', margin: '50px auto 50px auto' }}></div>
                </div>
            </section>

            <section
                id="hero"
                className={`hero hero__padding overflow-hidden position-relative
                    }`}
                style={{ paddingTop: '100px' }}
            >
                <div className="circle x1"></div>
                <div className="circle x2"></div>
                <div className="circle x3"></div>
                <div className="circle x4"></div>
                <div className="circle x5"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="hero__content position-relative">
                                <p className="mb-5 fs-5">
                                    <ul>
                                        <li style={{ fontSize: '18px', textAlign: 'start' }} className="heading">
                                            <b>{t('Healthcare Services')}:</b> {t('HealthcareServicesDetails')}
                                        </li>
                                        <li style={{ fontSize: '18px', textAlign: 'start' }} className="heading">
                                            <b>{t('Emergency Services')}:</b> {t('EmergencyServicesDetails')}
                                        </li>
                                        <li style={{ fontSize: '18px', textAlign: 'start' }} className="heading">
                                            <b>{t('PublicCommercialSafety')}:</b> {t('PublicCommercialSafetyDetails')}
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero__author text-center">
                                <div className="hero__author--inner3">
                                    <div className="hero__author--inner3--wrapper">
                                        <img
                                            width="500"
                                            className="img-fluid"
                                            src={img}
                                            alt="Mobius Technology Solutions"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Health;
