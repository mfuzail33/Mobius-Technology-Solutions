import React from "react";
import { Link as PageLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import image1 from '../assets/images/moreServices/1.jpg';
import image2 from '../assets/images/moreServices/2.jpg';
import image3 from '../assets/images/moreServices/3.jpg';
import image4 from '../assets/images/moreServices/6.jpg';
import image5 from '../assets/images/moreServices/4.jpg';
import image7 from '../assets/images/moreServices/9.jpg';
import image8 from '../assets/images/moreServices/10.jpg';
import image9 from '../assets/images/moreServices/11.jpg';
import image10 from '../assets/images/moreServices/12.jpg';
import image11 from '../assets/images/moreServices/13.jpg';
import image12 from '../assets/images/moreServices/14.jpg';
import image13 from '../assets/images/moreServices/15.jpg';

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
];

const AllServices = ({ isBg }) => {
    const { t } = useTranslation();

    return (
        <section
            id="achievements"
            className={`section-padding achievement ${isBg === "yes" ? "bg-one" : ""}`}
            style={{ marginTop: '50px' }}
        >
            <div className="container">
                <div className="section-title-center text-center">
                    <h2 className="display-6">{t('ourServices')}</h2>
                    <span>{t('ourServicesDetails')}</span>
                    <div className="section-divider divider-traingle"></div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="col m-15px-tb"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay={index * 100 + 100}
                        >
                            <PageLink to={service.path}>
                                <div className="card h-100 translateEffectServices">
                                    <img src={service.image} className="card-img-top" alt="Service" />
                                    <div className="card-body">
                                        <div className="achievement__content">
                                            <p style={{ fontFamily: 'Philosopher, sans-serif', fontSize: '1.75rem', fontWeight: 700, marginBottom: '15px', lineHeight: 1 }}>{t(service.title)}</p>
                                            <p>{t(service.details)}</p>
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
