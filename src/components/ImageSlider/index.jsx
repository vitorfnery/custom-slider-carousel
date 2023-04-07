import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const gotoNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider__container">
      <div className="left__arrow" onClick={goToPrevious}>
        ❰
      </div>
      <div className="right__arrow" onClick={gotoNext}>
        ❱
      </div>
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
      ></div>
      <div className="dots__container">
        {slides.map((slide, slideIndex) => (
          <div
            className="dot"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
