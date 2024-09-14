import React from 'react';
import amazon from '../assets/images/brands/amazon.png';
import apple from '../assets/images/brands/apple.jfif';
import google from '../assets/images/brands/google.png';
import smash from '../assets/images/brands/smash.png';
import draftDigitallogo from '../assets/images/brands/draftDigitallogo.png';
import blurbLogo from '../assets/images/brands/blurbLogo.png';
import koboLogo from '../assets/images/brands/koboLogo.png';
import barnesAndnobles from '../assets/images/brands/barnesAndnobles.png';
import './Brands.css';

const Brands2 = () => {

    return (
        <div className="brand-section section-space-bottom">
            <div className="small-container">
                <div className="swiper brand-active">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <span><a href="#"><img src={amazon} alt="Amazon" /></a></span>
                        </div>
                        <div className="swiper-slide">
                            <span><a href="#"><img src={apple} alt="Apple" /></a></span>
                        </div>
                        <div className="swiper-slide">
                            <span><a href="#"><img src={google} alt="Google" /></a></span>
                        </div>
                        <div className="swiper-slide">
                            <span><a href="#"><img src={smash} alt="Smashwords" /></a></span>
                        </div>
                        <div className="swiper-slide">
                            <span><a href="#"><img src={draftDigitallogo} alt="Draft Digital" /></a></span>
                        </div>
                        <div className="swiper-slide">
                            <span><a href="#"><img src={blurbLogo} alt="Blurb" /></a></span>
                        </div>
                        <div className="swiper-slide">
                            <span><a href="#"><img src={koboLogo} alt="Kobo" /></a></span>
                        </div>
                        <div className="swiper-slide">
                            <span><a href="#"><img src={barnesAndnobles} alt="Barnes and Nobles" /></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands2;