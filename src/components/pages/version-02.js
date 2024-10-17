import React, { useRef, useEffect, useState } from "react";
import AnimatedBackground from "../animatedBackground";
import data from "../../data/hero.json"
import AchievementV2 from "../achievementv2";
import Author from "../author";
import Contact from "../contact";
import Footer from "../global/footer";
import Header from "../global/header";
import Booksv1 from "../booksv1";
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import '../../i18n'
import AboutContent from ".././pages/aboutUs/aboutContent";
import LogoBg from "../../assets/images/bgLogo.png"
import { useMediaQuery } from 'react-responsive';
import MobileMobius from "./mobileMobius";
import DesktopMobius from "./DesktopMobius";

const Version02 = ({ header, footer }) => {
  const { menu } = footer;
  const { herov2 } = data;
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const { t } = useTranslation();
  const [background, setBackground] = useState(LogoBg);
  const isMobile = useMediaQuery({ maxWidth: 768 })

  useEffect(() => {
    const cursor1 = cursorRef.current;
    const trail = trailRef.current;
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      cursor1.style.left = clientX + "px";
      cursor1.style.top = clientY + "px";
      trail.style.left = clientX - 25 + "px"; // Adjust for cursor size
      trail.style.top = clientY - 25 + "px"; // Adjust for cursor size
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Mobius Technology Solutions</title>
        <meta name="description" content="Mobius Technology Solutions offers top-notch eBook services: publishing, creation, author websites, illustrations, and more." />
        <meta name="keywords" content="Mobius Technology Solutions, eBook publishing, creation, author websites, illustrations." />
      </Helmet>
      <Header header={header} />
      {/* <Herov2 isBg="yes" /> */}

      {/* Herov2 start */}
      <section
        id="hero"
        className={`hero hero__padding overflow-hidden position-relative site_bg_home`}
      >
        {isMobile ? (
          <MobileMobius />
        ) : (
          <DesktopMobius />
        )}
        <AnimatedBackground />
        <div className="circle x1"></div>
        <div className="circle x2"></div>
        <div className="circle x3"></div>
        <div className="circle x4"></div>
        <div className="circle x5"></div>
        <div
          ref={cursorRef}
          className="cursor1"
          style={{ position: "fixed", background: "transparent" }}
        ></div>
        <div
          ref={trailRef}
          className="trail"
          style={{
            position: "fixed",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.5)", // Adjust the opacity and color as needed
            pointerEvents: "none", // Ensure the trail doesn't interfere with mouse events
            display: isMobile ? "none" : "flex"
          }}
        ></div>
        <div className="container d-flex justify-content-center" style={{ height: '450px' }}>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 col-lg-11 m-0px-b md-m-40px-b">
              <div className="hero__content position-relative" >
                <h1
                  className="display-4 mb-4 text-capitalize heading"
                  style={{
                    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
                    fontSize: '60px',
                    textAlign: 'center'
                  }}
                >
                  {t('welcome')}
                </h1>
                <p className="mb-5 fs-5" style={{
                  color: "#f3f3f3",
                  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.1)",
                  textAlign: 'center'
                }}>
                  {t('Empowering today')}&nbsp;
                  <b>{t('Transformative Solutions provider')}</b>&nbsp;
                  {t('for a')}&nbsp;
                  <b>{t('Future-Forward world')}</b>
                </p>

                {/* <div className="d-flex justify-content-center">
                  <PageLink
                    activeClass="active"
                    className="smooth button button__primary me-3"
                    to={`${herov2.contactLink}`}
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    <span style={{ color: '#fff' }}>{t('contactUs')}</span>
                  </PageLink>
                  <PageLink
                    activeClass="active"
                    className="glightbox3 btn__secondary"
                    to={`${herov2.servicesLink}`}
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    <span style={{ color: '#fff' }}>{t('ourServices')}</span>
                  </PageLink>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Landing cover end */}

      {/* <Brands isBg="" /> */}
      {/* <Chapter isBg="yes" /> */}

      {/* Vision mission goals */}
      <AboutContent isBg="" />

      {/* Who we are */}
      <Author isBg="yes" />

      {/* services */}
      <AchievementV2 isBg="" />

      {/* Industrial Solutions */}
      <Booksv1 isBg="" />

      <Contact isBg="" />
      <Footer isBg="yes" menu={menu} />
    </>
  );
};

export default Version02;
