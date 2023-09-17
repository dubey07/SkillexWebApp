import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import review from "./../Assets/review.webp";
import { useState, useEffect } from 'react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import "./ReviewSlider.css"
// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const reviews = [
    {
        id: 1,
        name: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut labore et dolore magna aliqua.',
        image: review,
        position: "It manager"
    },
    {
        id: 2,
        name: 'Jane Smith',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut labore et dolore magna aliqua.',
        image: review,
        position: "It manager"
    },
    {
        id: 3,
        name: 'Jane Smith',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut labore et dolore magna aliqua.',
        image: review,
        position: "It manager"
    },
    {
        id: 4,
        name: 'Jane Smith',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut labore et dolore magna aliqua.',
        image: review,
        position: "It manager"
    },
    {
        id: 5,
        name: 'Jane Smith',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut labore et dolore magna aliqua.',
        image: review,
        position: "It manager"
    },
    {
        id: 6,
        name: 'Jane Smith',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut labore et dolore magna aliqua.',
        image: review,
        position: "It manager"
    },
    {
        id: 7,
        name: 'Jane Smith',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut labore et dolore magna aliqua.',
        image: review,
        position: "It manager"
    },
    
];

const ReviewSlider = () => {

    const [slidesPerView, setSlidesPerView] = useState(4); // Default to 4 slides

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(2); 
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(3); 
      } else {
        setSlidesPerView(4); 
      }
    };

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);

    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={slidesPerView} // Display 4 slides at once
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
           className='mySwiper'
        >
            {reviews.map((review) => (
                <SwiperSlide key={review.id} className='review-slider'> 
                    <div className="flex flex-col justify-around " style={{ width: '250px', height: '280px' }}>
                        <p className='text-sm text-start'>{review.text}</p>

                        <div className='flex items-center gap-4'>
                            <div className='h-16'> <img src={review.image} alt={review.name} className='rounded-full' /></div>

                            <div className='flex flex-col'>
                                <h2>{review.name}</h2>
                                <p className='text-green-400'>{review.position}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ReviewSlider;
