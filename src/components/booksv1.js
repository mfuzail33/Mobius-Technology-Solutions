import React from "react";
import { useTranslation } from 'react-i18next';
import touchSvg from "../assets/icons/touch.svg"
import image1 from "../assets/images/industry4.jpg"
import image2 from "../assets/images/industry1.jpg"
import image3 from "../assets/images/industry2.jpg"
import image4 from "../assets/images/industry3.jpg"

const Booksv1 = ({ isBg }) => {
  const { t } = useTranslation();

  return (
    // <!-- ========== Books section start ========== -->
    <section
      id="books"
      className={`booksv1 section-padding  ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{t('IndustrialSolutions')}</span>
              <h2 className="display-6">{t('IndustrialSolutionsHeading')}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="row">
              <div className="col-6">
                <div className="booksv1__img--wrap">
                  <div className="booksv1__img">
                    <img
                      className="img-fluid"
                      src={image1}
                      alt="Book name"
                    />
                  </div>
                  <div className="booksv1__img">
                    <img
                      className="img-fluid"
                      src={image2}
                      alt="Book name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="booksv1__img--wrap m-50px-t md-m-0px-t">
                  <div className="booksv1__img">
                    <img
                      className="img-fluid"
                      src={image3}
                      alt="Book name"
                    />
                  </div>
                  <div className="booksv1__img">
                    <img
                      className="img-fluid"
                      src={image4}
                      alt="Book name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="booksv1__contnet">
              <h3 className="display-6 m-30px-b">{t('IndustrialSolutionsHeading2')}</h3>
              <div className="booksv1__item--wrap">
                <div className="booksv1__item">
                  <div className="booksv1__item--icon">
                    <img
                      className="img-fluid"
                      src={touchSvg}
                      alt="Icon"
                      width="30"
                      height="30"
                    />
                  </div>
                  <div className="booksv1__item--text">
                    <h3>{t('AutomotiveIndustrialSolutions')}</h3>
                    <p>{t('AutomotiveIndustrialSolutionsDetails')}</p>
                  </div>
                </div>
                <div className="booksv1__item">
                  <div className="booksv1__item--icon">
                    <img
                      className="img-fluid"
                      src={touchSvg}
                      alt="Icon"
                      width="30"
                      height="30"
                    />
                  </div>
                  <div className="booksv1__item--text">
                    <h3>{t('PetrochemicalIndustrialSolutions')}</h3>
                    <p>{t('PetrochemicalIndustrialSolutionsDetails')}</p>
                  </div>
                </div>
                <div className="booksv1__item">
                  <div className="booksv1__item--icon">
                    <img
                      className="img-fluid"
                      src={touchSvg}
                      alt="Icon"
                      width="30"
                      height="30"
                    />
                  </div>
                  <div className="booksv1__item--text">
                    <h3>{t('ManufacturingPlantSolutions')}</h3>
                    <p>{t('ManufacturingPlantSolutionsDetails')}</p>
                  </div>
                </div>
                <div className="booksv1__item">
                  <div className="booksv1__item--icon">
                    <img
                      className="img-fluid"
                      src={touchSvg}
                      alt="Icon"
                      width="30"
                      height="30"
                    />
                  </div>
                  <div className="booksv1__item--text">
                    <h3>{t('VigilanceMonitoringForFactories')}</h3>
                    <p>{t('VigilanceMonitoringForFactoriesDetails')}</p>
                  </div>
                </div>
                <div className="booksv1__item">
                  <div className="booksv1__item--icon">
                    <img
                      className="img-fluid"
                      src={touchSvg}
                      alt="Icon"
                      width="30"
                      height="30"
                    />
                  </div>
                  <div className="booksv1__item--text">
                    <h3>{t('AdditiveManufacturing')}</h3>
                    <p>{t('AdditiveManufacturingDetails')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Books section end ========== -->
  );
};

export default Booksv1;
