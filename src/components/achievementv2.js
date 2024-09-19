import React from "react";
import { Link as PageLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
// import image1 from '../assets/images/moreServices/1.jpg';
// import image2 from '../assets/images/moreServices/2.jpg';
// import image3 from '../assets/images/moreServices/3.jpg';
// import image4 from '../assets/images/moreServices/6.jpg';
// import image5 from '../assets/images/moreServices/4.jpg';
// import image6 from '../assets/images/moreServices/8.jpg';
import image1 from '../assets/images/moreServices/health1.png';
import image2 from '../assets/images/moreServices/InfrastructuralSolutions1.png';
import image3 from '../assets/images/moreServices/industrialAutomation1.png';
import image4 from '../assets/images/moreServices/industrialMachines1.png';
import image5 from '../assets/images/moreServices/industrialSafety.png';
import image6 from '../assets/images/moreServices/8.jpg';

const services = [
  { image: image1, title: 'HealthSafetyAndRescue', details: 'HealthSafetyAndRescueDetails' },
  { image: image2, title: 'Infrastructural', details: 'InfrastructuralDetails' },
  { image: image3, title: 'IndustrialAutomation', details: 'IndustrialAutomationDetails' },
  { image: image4, title: 'IndustrialMachines', details: 'IndustrialMachinesDetails' },
  { image: image5, title: 'IndustrialSafety', details: 'IndustrialSafetyDetails' },
  { image: image6, title: 'ExploreMore', details: 'ExploreMoreDetails' },
];

const Achievementv2 = ({ isBg }) => {
  const { t } = useTranslation();

  return (
    <section
      id="achievements"
      className={`section-padding achievement site_bg_none ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span className="subheading_bg_none">{t('services')}</span>
              <h2 className="display-6 heading_bg_none">{t('ourServices')}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="col m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100 + 100}
            >
              <PageLink to={'/services'}>
                <div className="card h-100 translateEffectServices card_style">
                  <img src={service.image} className="card-img-top" alt="Service" />
                  <div className="card-body">
                    <div className="achievement__content">
                      <p
                        style={{ fontFamily: 'Philosopher, sans-serif', fontSize: '1.75rem', fontWeight: 700, marginBottom: '15px' }}
                        className="heading_bg_none"
                      >
                        {t(service.title)}
                      </p>
                      <p className="card_text">{t(service.details)}</p>
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

export default Achievementv2;
