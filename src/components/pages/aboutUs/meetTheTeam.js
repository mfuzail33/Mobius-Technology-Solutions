import React from "react";
import data from "../../../data/meetTheTeam.json";

const MeetTheTeam = ({ isBg }) => {
  const { meetTheTeam } = data;
  return (
    <section
      id="meetTheTeam"
      className={`section-padding achievement ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span style={{ color: '#fff' }}>{meetTheTeam.title}</span>
              <h2 className="display-6" style={{ color: '#fff' }}>{meetTheTeam.subtitle}</h2>
              <div className="section-divider divider-traingle-white"></div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {meetTheTeam?.awards?.map((data, i) => (
            <div
              key={data.id}
              className="m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(i + 2) * 50}
            >
              <div className="card h-100 translateEffect1">
                <div className="card-img-container">
                  <img src={data.image} className="card-img-top" alt="..." />
                  <div className="card-img-overlay">
                    <p className="desc2">{data.desc2}</p>
                  </div>
                </div>
                <div className="card-body">
                  <div className="achievement__content">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
