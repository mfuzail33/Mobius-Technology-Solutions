import React, { useRef, useEffect} from "react";
import data from "../data/hero.json";
import AnimatedBackground from "./animatedBackground";
import { Link as PageLink } from "react-router-dom";

const Herov2 = ({ isBg }) => {
  const { herov2 } = data;
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

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
    <section
      id="hero"
      className={`hero hero__padding overflow-hidden position-relative ${isBg === "yes" ? "bg-one" : ""
        }`}
      style={{
        background:
          "linear-gradient(45deg, #aea2ff, #472e7b)",
        // Add your desired gradient colors
      }}
    >
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
        }}
      ></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-6 m-0px-b md-m-40px-b">
            <div className="hero__content position-relative">
              <h1
                className="display-4 mb-4 text-capitalize"
                style={{
                  color: "#fff",
                  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" // Add 3D text effect
                }}
              >
                {herov2.title}
              </h1>
              <p className="mb-5 fs-5" style={{
                color: "#f3f3f3",
                textShadow: "2px 2px 2px rgba(0, 0, 0, 0.1)" // Add 3D text effect
              }}>
                {herov2.description}
              </p>
              <div>
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
                  <span style={{ color: '#fff' }}>{herov2.buyBtn}</span>
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
                  <span >{herov2.aboutBtn}</span>
                </PageLink>
              </div>
            </div>
          </div>
          <div className="col-md-5 offset-lg-1 text-center">
            <div className="hero__images3">
              <img
                width="400"
                className="img-fluid"
                src={herov2.image}
                alt="Mobius Technology Solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herov2;
