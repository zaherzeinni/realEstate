'use client'

import React, { useMemo, useState, useCallback, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper core and required modules
import SwiperCore, { Navigation, EffectCreative } from 'swiper';

import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import { useLanguageContext } from '@/context/languageContext';
import ContactModal from './ContactModal';

// Install Swiper modules
SwiperCore.use([Navigation, EffectCreative]);

const BannerSlider = () => {
  const leftSwiperRef = useRef(null);
  const rightSwiperRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const bothSwipersReady = useRef(false);

  const settings = useMemo(() => ({
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.banner4-slider-next',
      prevEl: '.banner4-slider-prev',
    },
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    allowTouchMove: true,
  }), []);

  const syncSlides = useCallback((sourceSwiper, targetSwiper) => {
    if (!sourceSwiper || !targetSwiper || isAnimating || !bothSwipersReady.current) return;

    setIsAnimating(true);
    const newIndex = sourceSwiper.realIndex;

    targetSwiper.slideToLoop(newIndex, 1000, false);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }, [isAnimating]);

  const handleSlideChange = useCallback((swiper) => {
    if (leftSwiperRef.current && swiper === leftSwiperRef.current.swiper && rightSwiperRef.current) {
      syncSlides(swiper, rightSwiperRef.current.swiper);
    } else if (rightSwiperRef.current && swiper === rightSwiperRef.current.swiper && leftSwiperRef.current) {
      syncSlides(swiper, leftSwiperRef.current.swiper);
    }
  }, [syncSlides]);

  useEffect(() => {
    if (leftSwiperRef.current && rightSwiperRef.current) {
      bothSwipersReady.current = true;
    }

    return () => {
      // Ensure swiper instance exists and has a destroy method before calling it
      if (leftSwiperRef.current?.swiper?.destroy) {
        leftSwiperRef.current.swiper.destroy(true, true);
      }
      if (rightSwiperRef.current?.swiper?.destroy) {
        rightSwiperRef.current.swiper.destroy(true, true);
      }
      bothSwipersReady.current = false;
    };
  }, []);

  const leftSliderImages = [
    'https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home2/banner4-card-img2.png',
    'https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home2/banner4-card-img1.png',
    'https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home2/banner4-card-img3.png'
  ];

  const rightSliderImages = [
    'https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home2/package-card3-img5.png',
    'https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home2/package-card3-img6.png',
    'https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home2/package-card3-img4.png'
  ];


const {language} = useLanguageContext()

  
let [isOpen, setIsOpen] = useState(false);


function closeModal() {
  setIsOpen(false);
}

function openModal() {
  setIsOpen(true);
}


  return (
    <div className="banner4-slider-wrapper container ">
      <div className="row g-xl-2 gy-5 mb-12 mt-12 ">
        <div className="col-xl-5 md:w-[600px] mx-auto lg:w-auto">
          <Swiper
            {...settings}
            onSwiper={(swiper) => { leftSwiperRef.current = swiper }}
            onSlideChange={handleSlideChange}
            className="banner4-card-slide lg:w-[450px]  "
          >
            
            
             <ContactModal isOpen={isOpen} closeModal={closeModal} />
            
            
            {leftSliderImages.map((image, index) => (
              <SwiperSlide key={`thumb-${index}`}>
                <div className={`banner4-card ${index === 1 ? 'two' : index === 2 ? 'three' : ''} md:!h-[282px]`}>
                  <Image 
                    src={image}
                    alt={`banner image ${index + 1}`}
                    width={526}
                    height={300}
                  />
                  <div className="banner4-content-wrapper">
                    <div className="banner4-content">
                      <span>{language === "en" ? "Savings worldwide" : "Des économies dans le monde entier"}</span>
                      <h3>{language === "en" ? "50% Off" : "50% de réduction"}</h3>
                      <Link href="/contact" className="text">
                        {language === "en" ? "Discover Great Deal":"Découvrez une bonne affaire"}
                      </Link>
                     
                      <button onClick={openModal} className="primary-btn1">
                      {language === "en" ? "View This Trip":"Voir ce voyage"}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="col-xl-7 md:w-[600px] mx-auto lg:w-[640px] p-0">
          <Swiper
            {...settings}
            onSwiper={(swiper) => { rightSwiperRef.current = swiper }}
            onSlideChange={handleSlideChange}
            className="package-card3-slide "
          >
            {rightSliderImages.map((image, index) => (
              <SwiperSlide key={`package-${index}`}>
                <div className="package-card3 style-2">
                  <Link href="/projects?city=&country=&baths=0=&beds=0&minPrice=0&maxPrice=10000000000000&type=&rooms=0&beds=0" className="package-card-img sm:w-[430px]">
                    <Image 
                      src={image}
                      alt={`package image ${index + 1}`}
                      width={500}
                      height={400}
                      
                    />
                    <div className="eg-tag">
                      <span>{language==="en" ? "Featured":"En vedette"}</span>
                    </div>
                  </Link>
                  <div className="package-card-content 2xl:h-[180px] 2xl:mb-[100px] xl:mx-auto">
                    <div className="card-content-top xl:w-[120px] xl:mx-auto -mx-20 sm:mx-auto xl:p-0  ">
                      <div className="rating-area lg:mt-6">
                        <ul className="rating">
                          {[...Array(5)].map((_, i) => (
                            <li key={i}><i className="bi bi-star-fill"></i></li>
                          ))}
                        </ul>
                        <span>{language==="en" ? "(28 Review)":"(28 Revoir)"}</span>
                      </div>
                      <h6>{language==="en" ? "A Journey through Historical and Culture.":"Un voyage à travers l'histoire et la culture."}</h6>
                      <ul className="flex gap-2">
                        <li>
                          <i className="bi bi-calendar3"></i> {language === "en" ? "4 Days":"4 jours"}
                        </li>
                        {/* <li>
                          <i className="bi bi-geo-alt"></i> {language === "en" ? "6 Location":"6 Emplacement"}
                        </li> */}
                        <li>
                          <i className="bi bi-flag"></i>{language === "en" ? "2 Countries":"2 pays"} 
                        </li>
                      </ul>
                    </div>


                    <div className="card-content-bottom xl:p-0 flex flex-col">
                      <div className="price-area -mx-4">
                        <span>{language === "en" ? "Starting Form:":"Formulaire de départ:"}</span>
                        <h6><sub>$</sub>170.00 <span>{language === "en" ? "Per Person":"Par personne"} </span></h6>
                      </div>
                      <button onClick={openModal} className="primary-btn1 text-[13px] h-2 -mt-3">
                        {language === "en" ? "Book now":"Réservez maintenant"} 
                        <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="row mb-12">
        <div className="col-lg-12">
          <div className="slide-and-view-btn-grp">
            <div className="slider-btn-grp3">
              <div className="slider-btn banner4-slider-prev">
                <i className="bi bi-arrow-left"></i>
                <span>{language === "en" ? "PREV" : "PREC"} </span>
              </div>
              <div className="slider-btn banner4-slider-next">
              <span>{language === "en" ? "NEXT" : "SUIVANTE"}</span>
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
