"use client";

// -------------------HOME PAGE FIRST BANNER----------------

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

// import { Empty, Select, Slider } from 'antd';
import Select from "react-select";
import useCountries from "@/hooks/useCountries";
import useCities from "@/hooks/useCities";
import FilterForm from '@/components/Site/dashboardLayout/FilterForm'
import { Language } from "@mui/icons-material";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
import { useLanguageContext } from "@/context/languageContext";

const Home2Banner = () => {





  const [index, setIndex] = useState(0);
  const animateTextContainerRef = useRef(null);
 

  useEffect(() => {
    const animateText = () => {
      const animateTextContainer = animateTextContainerRef.current;
      if (!animateTextContainer) return;

      const txts = animateTextContainer.children;
      const txtslen = txts.length;

      for (let i = 0; i < txtslen; i++) {
        txts[i].classList.remove("text-in");
      }
      // txts[index].classList.add("text-in");

      if (index === txtslen - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };
    // -------------------------change this time with time of animation down change title--------------
    const timeoutId = setTimeout(animateText, 4000);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, [index]);

  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2000,
      spaceBetween: 25,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".home1-banner-next",
        prevEl: ".home1-banner-prev",
      },
    };
  });
  


// ------------------------FOR ANIMATION TEXT-------------------
  const titles = [
    'EXPERIENCE THE BEST IN REAL ESTATE',
    'DISCOVER THE CHARM OF',
    'IN OUR',
    'DESTINATIONS:',
  ];

  const subtitles = [
    'WITH US!',
    'PARADISE',
    'AMAZING',
    'DUBAI - DOMINICAN REPUBLIC - MEXICO - SPAIN - PORTUGAL - CYPRUS',
  ];

  const titlesfr = [
    "VIVEZ L'EXCELLENCE EN IMMOBILIER",
    'DÉCOUVREZ LE CHARME DU',
    'DANS NOS',
    'DESTINATIONS',
  ];

  const subtitlesfr = [
    'AVEC NOUS!',
    'PARADIS',
    'INCROYABLES',
    'DUBAÏ- RÉPUBLIQUE DOMINICAINE - MEXIQUE - ESPAGNE -PORTUGAL - CHYPRE',
  ];





  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000); // Change title every 2 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  const { language } = useLanguageContext();

  return (
    <>
      <div className="">
        <div className="home2-banner-area">
          <Swiper {...settings} className="swiper home1-banner-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div
                  className="home2-banner-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/home2-banner-img1.jpg)",
                  }}
                ></div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="home2-banner-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/home2-banner-img2.jpg)",
                  }}
                ></div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="home2-banner-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/home2-banner-img3.jpg)",
                  }}
                ></div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="home2-banner-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/home2-banner-img4.jpg)",
                  }}
                ></div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="home2-banner-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/slide5.jpg)",
                  }}
                ></div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="home2-banner-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/slide6.jpg)",
                  }}
                ></div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="home2-banner-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/slide7.jpg)",
                  }}
                ></div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="home2-banner-wrapper"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/slide8.jpg)",
                  }}
                ></div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="home2-banner-content-wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="home2-banner-content">
                    <div className="eg-tag">
                      <span className=" font-rubik font-semibold  leading-tight">SAND N SEA REALTY</span>
                    </div>
                    {/* <h1 className="animate-text text-[32px] sm:text-[55px] lg:text-[70px]" ref={animateTextContainerRef}>
                      Let’s Explore Your
                      <span>Holiday</span>
                      <span>Family</span>
                      <span>Honeymoon</span>
                      Trip.
                    </h1> */}

<div className="flex flex-col justify-center items-center ">
      <h1 className="text-4xl font-bold transition-opacity duration-1000 ease-in-out text-[32px] sm:text-[33px] md:text-[34px] lg:text-[50px] xl:text-[55px] z1lg:w-[900px] xl:w-[1200px] my-2">
        {/* {titles[currentTitleIndex]}  */}
        {language === "en" ? titles[currentTitleIndex] : titlesfr[currentTitleIndex]}
      </h1>

      <h1 className="text-[#63AB45]  animate-text text-[28px] sm:text-[33px] md:text-[34px] md:w-[750px] lg:text-[50px] xl:text-[55px] lg:w-[1024px] xl:w-[1200px]" ref={animateTextContainerRef}> 
                     
                      <h1 className="text-[#63AB45] font-bold text-[28px] sm:text-[33px] md:text-[34px] lg:text-[50px] xl:text-[55px] "> {language === "en" ? subtitles[currentTitleIndex] : subtitlesfr[currentTitleIndex]} </h1>
                      {/* <span className="!no-underline  "> {language === "en" ? subtitles[currentTitleIndex] : subtitlesfr[currentTitleIndex]} </span>
                      <span className="!no-underline  "> {language === "en" ? subtitles[currentTitleIndex] : subtitlesfr[currentTitleIndex]} </span>
                      <span className="!no-underline   "> {language === "en" ? subtitles[currentTitleIndex] : subtitlesfr[currentTitleIndex]} </span>
                       */}
                      
              
                      
                      </h1>
    </div>



                  </div>
                </div>
              </div>
            </div>
            <div className="home1-banner-bottom style-2">
              <div className="container-md container-flui">
                <div className="filter-wrappe">
                  <div className="filter-grou">
                    <div className="tab-content" id="pills-tab2Content">
                      <div
                        className="tab-pane fade show active"
                        id="tour"
                        role="tabpanel"
                      >
                        <div className="home2-banner-content-wrapper">
                     <FilterForm home={true}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-btn-grp">
            <div className="slider-btn home1-banner-prev">
              <i className="bi bi-arrow-left" />
            </div>
            <div className="slider-btn home1-banner-next">
              <i className="bi bi-arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2Banner;
