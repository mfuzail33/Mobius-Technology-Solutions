import React, { useEffect, useState } from "react";
import data from "../data/chapterPreview.json";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from 'react-responsive';

const ChapterPreviewV2 = ({ isBg }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 })

  useEffect(() => {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel, index) => {
      panel.addEventListener("click", () => {
        setActiveIndex(index);
        removeActiveClasses();
        panel.classList.add("active");
      });
    });

    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }
  }, []);

  const { chapterPreviewv2 } = data;

  return (
    // <!-- ========== Chapter preview section start ========== -->
    <section
      id="preview"
      className={`section-padding chapter-preview ${isBg === "yes" ? "bg-one" : ""
        }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span style={{ color: '#fff' }}>{chapterPreviewv2.title}</span>
              <h2 className="display-6" style={{ color: '#fff' }}>{chapterPreviewv2.subtitle}</h2>
              <div className="section-divider divider-traingle-white"></div>
            </div>
          </div>
        </div>
        <div
          className="chapter__preview2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div className="chapter__preview2-content">
            <div className="chapter__preview2-container">
              {chapterPreviewv2.chapters.map((data, i) => (
                <div
                  key={i}
                  className={`panel ${i === activeIndex ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(${isMobile ? data.mobImage : data.image})`,
                  }}
                >
                  <div
                    style={{
                      display: i === activeIndex ? "none" : "block",
                    }}
                  >
                    {/* <h3>{data.title}</h3> */}
                    <img src={data.spineImage} alt="Mobius Technology Solutions" className="imgStyle" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Chapter preview section end ========== -->
  );
};

export default ChapterPreviewV2;
