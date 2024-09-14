import React, { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import portfolioData from "../data/portfolio.json";

const PortfolioHome = ({ isBg }) => {
    const { portfolio } = portfolioData;
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex + 2); // Incrementing by 1 to match the index starting from 1
        console.log(swiper.realIndex)
        console.log(swiper.realIndex + 1)
    };

    return (
        // <!-- ========== Testimonial section start ========== -->
        <section id="reviews" className={`section-padding testimonial`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                        <div className="section-title-center text-center">
                            <span>BEST OF</span>
                            <h2 className="display-6">Noble Books</h2>
                            <div className="section-divider divider-traingle"></div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay
                        onSlideChange={handleSlideChange}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {portfolio.portfolioItem?.map((data, index) => (
                            <SwiperSlide key={data.id} style={{ alignItems: 'center' }}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center", // Align vertically
                                        height: "100%", // Make sure the div takes full height
                                    }}
                                >
                                    <img
                                        src={data.image}
                                        alt="Mobius Technology Solutions"
                                        style={{
                                            height:
                                                index + 1 === currentSlide ? "500px" : "400px",
                                            maxWidth: "100%",
                                            objectFit: "contain",
                                            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
                                            borderRadius: "4px"
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
        // <!-- ========== Testimonial section end ========== -->
    );
};

export default PortfolioHome;
