import React from "react";
import data from "../data/cta.json";
import { Link as PageLink } from "react-router-dom";

const CtaV3 = () => {
  const { ctav3 } = data;
  return (
    // <!-- ========== CTA v3 section start ========== -->
    <section id="ctav3" className="ctav3 bg-one-old p-80px-t">
      <div className="container bg-one-old">
        <div className="row">
          <div className="ctav3__content">
            <h2 className="m-25px-b">
              {ctav3.title1} <br />
              {ctav3.title2}
            </h2>
            <h2 className="display-4 m-25px-b">
              <a href="tel:+1(512)5184366">{ctav3.number}</a>
            </h2>
            <PageLink
              activeClass="active"
              className="smooth button button__primary me-3"
              to={`${ctav3.contactLink}`}
              spy={true}
              isDynamic={false}
              hashSpy={false}
              spyThrottle={500}
              smooth={true}
              duration={500}
              offset={-60}
            >
              <span style={{ color: '#fff' }}>{ctav3.btnText}</span>
            </PageLink>
            <div className="ctav3__content__icon">
              <i className="icofont-read-book"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== CTA v3 section end ========== -->
  );
};

export default CtaV3;
