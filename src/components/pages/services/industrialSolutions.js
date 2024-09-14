import React from "react";
import coverImg from "../../../assets/images/books2.png"
import book from "../../../assets/images/services/ghost/9.jpg"
import { useTranslation } from 'react-i18next';

const IndustrialSolutions = ({ isBg }) => {
    const { t } = useTranslation();

    return (
        <>
            <section style={{ marginTop: '40px', position: 'relative' }}>
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    <h2 className="display-6">{t('IndustrialSolutions')}</h2>
                    <div className="section-divider divider-traingle" style={{ display: 'flex', margin: '50px auto 50px auto' }}></div>
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
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="hero__content position-relative">

                                <h3 className="display-7 m-30px-b">
                                    {t('AutomotiveIndustrialSolutions')}
                                </h3>
                                <p className="mb-5 fs-5">
                                    <ul>
                                        <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                            <b>{t('Technologies')}:</b> {t('TechnologiesDetails')}
                                        </li>
                                        <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                            <b>{t('SupplyChainManagement')}:</b> {t('SupplyChainManagementDetails')}
                                        </li>
                                    </ul>
                                </p>

                                <h3 className="display-7 m-30px-b">
                                    {t('PetrochemicalIndustrialSolutions')}
                                </h3>
                                <p className="mb-5 fs-5">
                                    <ul>
                                        <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                            <b>{t('Instrumentation')}:</b> {t('InstrumentationDetails')}
                                        </li>
                                        <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                            <b>{t('ProductionOptimization')}:</b> {t('ProductionOptimizationDetails')}
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
                                            src={book}
                                            alt="Mobius Technology Solutions"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="display-7 m-30px-b">
                                {t('ManufacturingPlantSolutions')}
                            </h3>
                            <p className="mb-5 fs-5">
                                <ul>
                                    <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                        <b>{t('PlantOptimization')}:</b> {t('PlantOptimizationDetails')}
                                    </li>
                                    <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                        <b>{t('ERPSolutions')}:</b> {t('ERPSolutionsDetails')}
                                    </li>
                                </ul>
                            </p>

                            <h3 className="display-7 m-30px-b">
                                {t('VigilanceMonitoringforFactories')}
                            </h3>
                            <p className="mb-5 fs-5">
                                <ul>
                                    <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                        <b>{t('SecurityandMonitoring')}:</b> {t('SecurityandMonitoringDetails')}
                                    </li>
                                    <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                        <b>{t('ProductionEfficiency')}:</b> {t('ProductionEfficiencyDetails')}
                                    </li>
                                </ul>
                            </p>

                            <h3 className="display-7 m-30px-b">
                                {t('AdditiveManufacturing')}
                            </h3>
                            <p className="mb-5 fs-5">
                                <ul>
                                    <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                        <b>{t('AdvancedTechniques')}:</b> {t('AdvancedTechniquesDetails')}
                                    </li>
                                    <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                        <b>{t('Applications')}:</b> {t('ApplicationsDetails')}
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndustrialSolutions;
