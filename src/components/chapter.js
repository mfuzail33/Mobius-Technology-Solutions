import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import data from "../data/chapter.json";

const Chapter = ({ isBg }) => {
  const { chapter } = data;
  const [selectedImage, setSelectedImage] = useState(chapter.chapterItem[0].image);

  const handleAccordionChange = (selectedId) => {
    const selectedChapter = chapter.chapterItem.find(item => item.id.toString() === selectedId);
    console.log("Selected Chapter:", selectedChapter);
    if (selectedChapter) {
      setSelectedImage(selectedChapter.image);
    }
  };

  return (
    <section
      id="chapters"
      className={`section-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span style={{ color: "#fff" }}>{chapter.subtitle}</span>
              <h2 className="display-6" style={{ color: "#fff" }}>{chapter.title}</h2>
              <div className="section-divider divider-traingle-white"></div>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div
            className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center align-items-center"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img src={selectedImage} alt="Mobius Technology Solutions" className="img-fluid d-block" style={{ zIndex: 1, maxHeight: '562px', borderRadius: '8px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)' }} />
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <Accordion
              className="accordion-flush faqs-accordion mt-4 mt-lg-0"
              onSelect={handleAccordionChange}
            >
              {/* accordion start */}
              {chapter.chapterItem?.map((data) => (
                <Accordion.Item eventKey={data.id.toString()} key={data.id}>
                  <Accordion.Header>
                    <span>{data.title}</span> <IoIosArrowDown />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordion-body text-secondary">{data.description}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapter;
