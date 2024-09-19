import React, { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import './CustomSwiper.css';

// Import all data files
import healthData from '../../data/health.json';
import energyData from '../../data/energy.json';
import automationData from '../../data/automation.json';
import machinesData from '../../data/machines.json';
import safetyData from '../../data/safety.json';
import solutionsData from '../../data/solutions.json';
import infrastructuralData from '../../data/infrastructural.json';
import oilData from '../../data/oil.json';
import rawData from '../../data/raw.json';
import smartData from '../../data/smart.json';
import surveillanceData from '../../data/surveillance.json';
import tradeData from '../../data/trade.json';

const CustomSwiper = ({ dataType }) => {
    const dataMap = {
        health: healthData.health,
        energy: energyData.energy,
        automation: automationData.automation,
        machines: machinesData.machines,
        safety: safetyData.safety,
        solutions: solutionsData.solutions,
        infrastructural: infrastructuralData.infrastructural,
        oil: oilData.oil,
        raw: rawData.raw,
        smart: smartData.smart,
        surveillance: surveillanceData.surveillance,
        trade: tradeData.trade
    };

    const currentData = dataMap[dataType] || [];
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex + 2);
        console.log(swiper.realIndex)
        console.log(swiper.realIndex + 1)
    };

    return (
        <section id="reviews" className={`section-padding testimonial`}>
            <div className="container" style={{ marginTop: '50px' }}>
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
                        {currentData.item?.map((data, index) => (
                            <SwiperSlide key={data.id} style={{ alignItems: 'center' }}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                    }}
                                >
                                    <img
                                        src={data.image}
                                        alt={data.name}
                                        style={{
                                            height: index + 1 === currentSlide ? "500px" : "400px",
                                            maxWidth: "100%",
                                            objectFit: "contain",
                                            boxShadow: "3px 3px 5px rgba(243, 243, 243, 0.5)",
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
    );
};

export default CustomSwiper;
