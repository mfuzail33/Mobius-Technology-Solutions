import React from "react";
import { useTranslation } from 'react-i18next';
import image from "../../../assets/images/services/ghost/9.jpg"

const WhyHireUs = ({ isBg }) => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="hero__content position-relative">
                        <h3 className="display-5 m-30px-b">
                            {t('WhyHireUs')}
                        </h3>
                        <p className="mb-5 fs-5">
                            <ul>
                                <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                    <b>{t('WhyHireUsBullet1')}:</b> {t('WhyHireUsDesc1')}.
                                </li>
                                <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                    <b>{t('WhyHireUsBullet2')}:</b> {t('WhyHireUsDesc2')}.
                                </li>
                                <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                    <b>{t('WhyHireUsBullet3')}:</b> {t('WhyHireUsDesc3')}.
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
                                    src={image}
                                    alt="Mobius Technology Solutions"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyHireUs;