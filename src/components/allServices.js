import React from "react";
import { Link as PageLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import image1 from '../assets/images/moreServices/health1.png';
import image2 from '../assets/images/moreServices/InfrastructuralSolutions1.png';
import image3 from '../assets/images/moreServices/industrialAutomation1.png';
import image4 from '../assets/images/moreServices/industrialMachines1.png';
import image5 from '../assets/images/moreServices/industrialSafety.png';
import image7 from '../assets/images/moreServices/industrialSolutions1.png';
import image8 from '../assets/images/moreServices/oilAndGas1.png';
import image9 from '../assets/images/moreServices/surveillance1.png';
import image10 from '../assets/images/moreServices/trade1.png';
import image11 from '../assets/images/moreServices/raw1.png';
import image12 from '../assets/images/moreServices/smart1.png';
import image13 from '../assets/images/moreServices/energy1.png';
import image14 from '../assets/images/moreServices/it2.png';
import AnimatedBackground from "./animatedBackground";

const services = [
    { image: image1, title: 'HealthSafetyAndRescue', details: 'HealthSafetyAndRescueDetails', path: '/health' },
    { image: image2, title: 'Infrastructural', details: 'InfrastructuralDetails', path: '/infrastructural' },
    { image: image3, title: 'IndustrialAutomation', details: 'IndustrialAutomationDetails', path: '/industrialAutomation' },
    { image: image4, title: 'IndustrialMachines', details: 'IndustrialMachinesDetails', path: '/industrialMachines' },
    { image: image5, title: 'IndustrialSafety', details: 'IndustrialSafetyDetails', path: '/industrialSafety' },
    { image: image7, title: 'IndustrialSolutions', details: 'IndustrialSolutionsDetails', path: '/industrialSolutions' },
    { image: image8, title: 'OilandGasFields', details: 'OilandGasFieldsDetails', path: '/oilAndGasFields' },
    { image: image9, title: 'SurveillanceSolutions', details: 'SurveillanceSolutionsDetails', path: '/surveillanceSolutions' },
    { image: image10, title: 'TradeSolutions', details: 'TradeSolutionsDetails', path: '/tradeSolutions' },
    { image: image11, title: 'RawMaterials', details: 'RawMaterialsDetails', path: '/rawMaterials' },
    { image: image12, title: 'SmartLogistics', details: 'SmartLogisticsDetails', path: '/smartLogistics' },
    { image: image13, title: 'EnergyandPowerSolutions', details: 'EnergyandPowerSolutionsDetails', path: '/energyAndPowerSolutions' },
    { image: image14, title: 'itSolutions', details: 'itSolutionsDetails', path: '/itSolutions' },
];

const AllServices = ({ isBg }) => {
    const { t } = useTranslation();

    return (
        <section
            id="achievements"
            className={`section-padding achievement site_bg`}
            style={{ paddingTop: '150px' }}
        >
            <AnimatedBackground />
            <div className="container">
                <div className="section-title-center text-center">
                    <h2 className="display-6 heading">{t('Services and Products we offer')}</h2>
                    <div
                        style={{
                            padding: '8px 3px 3px 3px',
                            display: 'flex',
                            margin: 'auto',
                            backgroundColor: '#616cb2',
                            borderRadius: '8px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}
                        className="col-lg-2"
                    >
                        <h4 className="heading" style={{ textAlign: 'center' }}>{t('But not limited to')}</h4>
                    </div>
                    <span style={{ color: "#f3f3f3", marginTop: '8px' }}>{t('ourServicesDetails')}</span>
                    <div className="section-divider divider-traingle_color"></div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="col m-15px-tb"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay={index * 50 + 50}
                        >
                            <PageLink to={service.path}>
                                <div className="card h-100 translateEffectServices card_style">
                                    <img src={service.image} className="card-img-top" alt="Service" />
                                    <div className="card-body">
                                        <div className="achievement__content">
                                            <p
                                                style={{ fontFamily: 'Philosopher, sans-serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px', lineHeight: 1 }}
                                                className="heading_bg_none"
                                            >
                                                {t(service.title)}
                                            </p>
                                            <p className="card_text" style={{ fontSize: '14px', lineHeight: 'normal' }}>{t(service.details)}</p>
                                        </div>
                                    </div>
                                </div>
                            </PageLink>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllServices;
