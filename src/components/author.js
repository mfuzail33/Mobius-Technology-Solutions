import GLightbox from "glightbox";
import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import checkIcon from '../assets/icons/check.svg';
import video from '../assets/images/serviceVideo2.mp4'

const Author = ({ isBg }) => {
  const { t } = useTranslation();

  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);

  return (
    // <!-- ========== Author section start ========== -->
    <section
      id="author"
      className={`section-padding author ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{t('whoWeAreHeading')}</span>
              <h2 className="display-6">{t('whoWeAre')}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- author image --> */}
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="author__image">
              <video className="img-fluid img" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* <!-- author image end --> */}
          {/* <!-- author content start --> */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="author__content">
              <h2 className="m-20px-b">{t('whoWeAreSubHeading')}</h2>
              <p>
                {t('whoWeAreDetails')}
              </p>
              <ul className="author__content__desc m-30px-b">
                <li>
                  <img
                    className="img-fluid"
                    src={checkIcon}
                    alt="icon"
                    width="25"
                    height="25"
                  />
                  {t('InnovativeSolutionProviders')}
                </li>
                <li>
                  <img
                    className="img-fluid"
                    src={checkIcon}
                    alt="icon"
                    width="25"
                    height="25"
                  />
                  {t('IndustryInsightExperts')}
                </li>
                <li>
                  <img
                    className="img-fluid"
                    src={checkIcon}
                    alt="icon"
                    width="25"
                    height="25"
                  />
                  {t('EfficiencyEnhancementFocus')}
                </li>
                <li>
                  <img
                    className="img-fluid"
                    src={checkIcon}
                    alt="icon"
                    width="25"
                    height="25"
                  />
                  {t('LongTermSuccess')}
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- author content start --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Author section end ========== -->
  );
};

export default Author;
