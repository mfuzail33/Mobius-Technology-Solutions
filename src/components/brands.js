import React, { useRef, useState } from 'react';
import amazon from '../assets/images/brands/amazon.png';
import apple from '../assets/images/brands/apple.jfif';
import google from '../assets/images/brands/google.png';
import smash from '../assets/images/brands/smash.png';
import draftDigitallogo from '../assets/images/brands/draftDigitallogo.png';
import blurbLogo from '../assets/images/brands/blurbLogo.png';
import koboLogo from '../assets/images/brands/koboLogo.png';
import barnesAndnobles from '../assets/images/brands/barnesAndnobles.png';
import './Brands.css';

const Brands = () => {
    const brandImages = [amazon, apple, google, smash, draftDigitallogo, blurbLogo, koboLogo, barnesAndnobles];
    const slideRef = useRef();
    const numRepetitions = 499; // Set the number of repetitions to 999
    const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered image index

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="brands-container" ref={slideRef}>
            <div className="brands-slider" style={{ width: `${brandImages.length * 220 * numRepetitions}px` }}>
                {/* Repeat the images 999 times */}
                {[...Array(numRepetitions)].map((_, repetitionIndex) => (
                    brandImages.map((image, imageIndex) => (
                        <div
                            key={imageIndex + repetitionIndex * brandImages.length}
                            className="brand-slide"
                            onMouseEnter={() => handleMouseEnter(imageIndex)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={image}
                                alt={`Brand ${imageIndex}`}
                                style={{
                                    filter: hoveredIndex === imageIndex ? 'none' : 'grayscale(100%)'
                                }}
                            />
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
};

export default Brands;
