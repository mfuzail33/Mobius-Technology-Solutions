import React, { useState, useEffect } from 'react';

const Carousel = ({ images, autoplayInterval }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrollPosition((prevPosition) =>
        prevPosition >= (images.length - 1) * 25 ? 0 : prevPosition + 25
      );
    }, autoplayInterval);

    return () => clearInterval(intervalId);
  }, [images, autoplayInterval]);

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt="Brand" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
