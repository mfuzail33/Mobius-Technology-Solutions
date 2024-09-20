import React from "react";
import img from "../../../assets/images/moreServices/industrialSolutions2.png"
import { useTranslation } from 'react-i18next';
import AnimatedBackground from "../../animatedBackground";
import { useMediaQuery } from 'react-responsive';
import CustomSwiper from "../swiper";
import Cursor from "../../cursor";

const IndustrialSolutions = ({ isBg }) => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <>
            <Cursor />
            <AnimatedBackground />
            <section style={{ marginTop: '40px', position: 'relative' }}>
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    <h2 className="display-6 heading">{t('IndustrialSolutions')}</h2>
                    <div className="section-divider divider-traingle_color" style={{ display: 'flex', margin: '50px auto 50px auto' }}></div>
                </div>
            </section>

            <section
                id="hero"
                className={`hero hero__padding overflow-hidden position-relative
                    }`}
                style={{ paddingTop: isMobile ? '0px' : '100px', zIndex: 0 }}
            >
                <div className="circle x1"></div>
                <div className="circle x2"></div>
                <div className="circle x3"></div>
                <div className="circle x4"></div>
                <div className="circle x5"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="hero__content position-relative">

                                <h3 className="display-6 m-30px-b heading">
                                    {t('Automotive Industrial Solutions')}
                                </h3>
                                <p className="mb-5 fs-5 heading">
                                    <ul>
                                        <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                            <b>{t('Technologies')}:</b> {t('Technologies Desc')}
                                        </li>
                                    </ul>
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-6" style={{ paddingBottom: isMobile ? '50px' : '0px' }}>
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
                        <div>
                            <h3 className="display-7 m-30px-b heading">
                                {t('Petrochemical Industrial Solutions')}
                            </h3>
                            <p className="mb-5 fs-5 heading">
                                <ul>
                                    <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                        <b>{t('Instrumentation and Automation')}</b> {t('Instrumentation and Automation Desc')}
                                    </li>
                                    <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                        <b>{t('Shutdown and Safety Systems')}</b> {t('Shutdown and Safety Systems Desc')}
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div>
                            <h3 className="display-7 m-30px-b heading">
                                {t('Manufacturing Plant Solutions')}
                            </h3>
                            <p className="mb-5 fs-5">
                                <ul>
                                    <li style={{ fontSize: '18px', textAlign: 'start' }} className="heading">
                                        <b>{t('Optimization and Technology')}</b> {t('Optimization and Technology Desc')}
                                    </li>
                                    <li style={{ fontSize: '18px', textAlign: 'start' }} className="heading">
                                        <b>{t('Automation Systems')}</b> {t('Automation Systems Desc')}
                                    </li>
                                </ul>
                            </p>

                            <h3 className="display-7 m-30px-b heading">
                                {t('Green Factory Solutions')}
                            </h3>
                            <p className="mb-5 fs-5">
                                <ul>
                                    <li style={{ fontSize: '18px', textAlign: 'start' }} className="heading">
                                        <b>{t('Energy Efficiency and Sustainability')}</b> {t('Energy Efficiency and Sustainability Desc')}
                                    </li>
                                </ul>
                            </p>

                            <h3 className="display-7 m-30px-b heading">
                                {t('Vigilance Monitoring for Factories')}
                            </h3>
                            <p className="mb-5 fs-5">
                                <ul>
                                    <li style={{ fontSize: '18px', textAlign: 'start' }} className="heading">
                                        <b>{t('Monitoring Solutions')}</b> {t('Monitoring Solutions Desc')}
                                    </li>
                                </ul>
                            </p>

                            <h3 className="display-7 m-30px-b heading">
                                {t('Additive Manufacturing')}
                            </h3>
                            <p className="mb-5 fs-5">
                                <ul>
                                    <li style={{ fontSize: '18px', textAlign: 'start' }} className="heading">
                                        <b>{t('Advanced Manufacturing')}</b> {t('Advanced Manufacturing Desc')}
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <CustomSwiper dataType="solutions" />
            </section>
        </>
    );
};

export default IndustrialSolutions;
