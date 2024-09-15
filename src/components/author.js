import GLightbox from "glightbox";
import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import video from '../assets/images/serviceVideo2.mp4'
import { FaCheck } from "react-icons/fa";

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
      className={`section-padding author site_bg`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="heading text-center">
              <span className="heading">{t('whoWeAreHeading')}</span>
              <h2 className="display-6 heading">{t('whoWeAre')}</h2>
              <div className="section-divider divider-traingle_color"></div>
            </div>
          </div>
        </div>
        <div className="row" style={{paddingTop:'70px'}}>
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
              <h2 className="m-20px-b heading">{t('whoWeAreSubHeading')}</h2>
              <p style={{ color: "#f3f3f3" }}>
                {t('whoWeAreDetails')}
              </p>
              <ul className="author__content__desc m-30px-b">
                <li style={{ color: "#f3f3f3" }}>
                  <FaCheck size={15} style={{ color: "#f3f3f3", marginRight: '10px' }} />
                  {t('InnovativeSolutionProviders')}
                </li>
                <li style={{ color: "#f3f3f3" }}>
                  <FaCheck size={15} style={{ color: "#f3f3f3", marginRight: '10px' }} />
                  {t('IndustryInsightExperts')}
                </li>
                <li style={{ color: "#f3f3f3" }}>
                  <FaCheck size={15} style={{ color: "#f3f3f3", marginRight: '10px' }} />
                  {t('EfficiencyEnhancementFocus')}
                </li>
                <li style={{ color: "#f3f3f3" }}>
                  <FaCheck size={15} style={{ color: "#f3f3f3", marginRight: '10px' }} />
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
