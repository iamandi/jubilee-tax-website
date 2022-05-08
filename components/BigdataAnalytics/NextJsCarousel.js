import React from 'react';
import "node_modules/react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import taxPlanning from '../../public/images/bigdata-analytics/carousel-images/tax-planning.jpg'
import insuranceServices from '../../public/images/bigdata-analytics/carousel-images/insurance-services.jpg'
// import livingBenefits from '../../public/images/bigdata-analytics/carousel-images/living-benefits.jpg'
import retirementPlanning from '../../public/images/bigdata-analytics/carousel-images/retirement-planning.jpg'

export default function NextJsCarousel(props) {
  return (
    <Carousel
      autoPlay={false}
      infiniteLoop
      emulateTouch
      stopOnHover
      useKeyboardArrows
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            title={label}
            className="embla__button embla__button--prev"
            onClick={onClickHandler}
          >
            <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
              <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
            </svg>
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            title={label}
            className="embla__button embla__button--next"
            onClick={onClickHandler}
          >
            <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
              <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
            </svg>
          </button>
        )
      }
      showThumbs={false}
    >
      <div className='bigdata-analytics-content'>
        <img src={taxPlanning.src} alt="image1" />
        <div className="legend-override">
          <h1>Tax Planning</h1>
          <h6>Maximize your return</h6>
          <button className='btn btn-primary legend-override-btn'>Learn More</button>
        </div>
      </div>
      <div className='bigdata-analytics-content'>
        <img src={insuranceServices.src} alt="image2" />
        <div className="legend-override">
          <h1>Insurance Services</h1>
          <h6>Did you know that insurance services can be your best financial partner</h6>
          <button className='btn btn-primary legend-override-btn'>Know More</button>
        </div>
      </div>
      {/* <div className='bigdata-analytics-content'>
            <img src={livingBenefits.src} alt="image3"/>
            <p className="legend legend-override-h1">Image 3</p>
          </div> */}
      <div className='bigdata-analytics-content'>
        <img src={retirementPlanning.src} alt="image4" />
        <div className="legend-override">
          <h1>Retirement Planning</h1>
          <h6>It's about preserving your legacy</h6>
          <button className='btn btn-primary legend-override-btn'>Know More</button>
        </div>
      </div>
    </Carousel>
  );
};