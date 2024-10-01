/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import data from "../../data/footer.json";
import { siteLogo, socialLink } from "../../global";
import { Link as PageLink } from "react-router-dom";
import heartIcon from '../../assets/icons/heart.svg';
import { useTranslation } from 'react-i18next';
import Logo from "../../assets/images/logo.png"

const Footer = ({ menu, isBg }) => {
  const { footer } = data;
  const { t } = useTranslation();

  return (
    <>
      {/* <CtaV3 /> */}
      <footer
        className={`footer overflow-hidden site_bg ${isBg === "yes" ? "bg-one-old" : ""}`}
      >
        <div className="container">
          <div className="footer__top m-50px-t m-50px-b">
            <div className="row">
              <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center mb-3 mb-lg-0">
                {/* <a href="/" className="align-self-start"> */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <a href="/" style={{ zIndex: 1 }}>
                    <img src={Logo} alt={"Mobius"} style={{ width: '80px' }} />
                  </a>
                  <a href="/" style={{ zIndex: 1 }}>
                    <h1 className="m-0 heading" style={{ textAlign: 'center', marginTop: '5px' }}>Mobius</h1>
                  </a>
                </div>
                <p style={{ marginTop: '10px', fontSize: '15px', textAlign: 'center' }} className="heading">
                  {t('Empowering today')}<br />{t('Your')} {t('Transformative Solutions')} {t('For a Future-Forward world')}
                </p>
              </div>

              <div className="col-lg-6 d-flex justify-content-center align-items-center mb-3 mb-lg-0">
                <ul className="footer__menu">
                  {menu?.map((data, i) => (
                    <li key={i}>
                      <PageLink
                        activeClass="active"
                        className="benefits"
                        style={{ color: '#fff' }}
                        to={`${data.link}`}
                        spy={true}
                        smooth={true}
                        duration={500}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        offset={-60}
                      >
                        {t(data.title)}
                      </PageLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-3 d-flex justify-content-center align-items-center mb-3 mb-lg-0 justify-content-lg-end">
                <ul className="social-icon">
                  {socialLink.facebook === "" ? (
                    ""
                  ) : (
                    <li>
                      <a href={socialLink.facebook} className="card_icon_bg">
                        <img
                          className="img-fluid"
                          src="assets/icons/facebook.svg"
                          alt="icon"
                          width="25"
                          height="25"
                        />
                      </a>
                    </li>
                  )}
                  {socialLink.twitter === "" ? (
                    ""
                  ) : (
                    <li>
                      <a href={socialLink.twitter} className="card_icon_bg">
                        <img
                          className="img-fluid "
                          src="assets/icons/twitter.svg"
                          alt="icon"
                          width="25"
                          height="25"
                        />
                      </a>
                    </li>
                  )}
                  {socialLink.linkedin === "" ? (
                    ""
                  ) : (
                    <li>
                      <a href={socialLink.linkedin} className="card_icon_bg">
                        <img
                          className="img-fluid"
                          src="assets/icons/linkedin.svg"
                          alt="icon"
                          width="25"
                          height="25"
                        />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <hr className="heading" />
          <div className="footer__copyright m-20px-t m-20px-b">
            <div className="row">
              <div className="col-12">
                <p className="m-0 text-center heading" >
                  &copy; {footer.copyright}
                  by <a href="#" style={{ color: '#fff' }}>{footer.name}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
    // <!-- ========== Footer section End ========== -->
  );
};

export default Footer;
