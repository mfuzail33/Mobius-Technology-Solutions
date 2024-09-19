import React from "react";
import { useTranslation } from 'react-i18next';
import missionIcon from "../../../assets/icons/ebook.svg"
import visionIcon from "../../../assets/icons/dice-multiple.svg"
import goalIcon from "../../../assets/icons/goal.svg"

const AboutContent = ({ isBg }) => {
  const { t } = useTranslation();
  const icons = [missionIcon, visionIcon, goalIcon];

  return (
    <section
      id="benefits"
      className={`achivev2 section-padding site_bg_none ${isBg === "yes" ? "bg-one" : ""}`}
      style={{
        paddingTop: '80px'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title-left text-center text-lg-start">
              <h2 className="display-7 heading_bg_none">{t('visionMissionHeading')}</h2>
              <p className="mb-5 fs-5 subheading_bg_none">{t('visionMissionSubHeading')}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 mb-4 mb-lg-0 achivev2__items"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="achivev2__item h-100 translateEffect1 card_style">
                <div className="achieve__icon card_icon_bg m-20px-b">
                  <img
                    className="img-fluid"
                    src={icons[index]}
                    alt="icon"
                    width="40"
                    height="40"
                  />
                </div>
                <h3 className="m-15px-b heading_bg_none">{[t('mission'), t('vision'), t('goals')][index]}</h3>
                <p>{[t('missionStatement'), t('visionStatement'), t('goalsStatement')][index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default AboutContent;
