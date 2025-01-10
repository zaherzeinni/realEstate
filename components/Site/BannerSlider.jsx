"use client";

import React, {
  useMemo,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper core and required modules
import SwiperCore, { Navigation, EffectCreative } from "swiper";

import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import { useLanguageContext } from "@/context/languageContext";
import ContactModal from "./ContactModal";

// Install Swiper modules
SwiperCore.use([Navigation, EffectCreative]);

const BannerSlider = () => {
  const leftSwiperRef = useRef(null);
  const rightSwiperRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const bothSwipersReady = useRef(false);

  const settings = useMemo(
    () => ({
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".banner4-slider-next",
        prevEl: ".banner4-slider-prev",
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
      allowTouchMove: false,
    }),
    []
  );

  const syncSlides = useCallback(
    (sourceSwiper, targetSwiper) => {
      if (
        !sourceSwiper ||
        !targetSwiper ||
        isAnimating ||
        !bothSwipersReady.current
      )
        return;

      setIsAnimating(true);
      const newIndex = sourceSwiper.realIndex;

      targetSwiper.slideToLoop(newIndex, 1000, false);

      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    },
    [isAnimating]
  );

  const handleSlideChange = useCallback(
    (swiper) => {
      if (
        leftSwiperRef.current &&
        swiper === leftSwiperRef.current.swiper &&
        rightSwiperRef.current
      ) {
        syncSlides(swiper, rightSwiperRef.current.swiper);
      } else if (
        rightSwiperRef.current &&
        swiper === rightSwiperRef.current.swiper &&
        leftSwiperRef.current
      ) {
        syncSlides(swiper, leftSwiperRef.current.swiper);
      }
    },
    [syncSlides]
  );

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
    "https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home2/banner4-card-img2.png",
    // 'https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home2/banner4-card-img1.png',
    // 'https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home2/banner4-card-img3.png'
  ];

  const rightSliderImages = [
    "https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home2/package-card3-img5.png",
    // 'https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home2/package-card3-img6.png',
    // 'https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home2/package-card3-img4.png'
  ];

  const { language } = useLanguageContext();

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="banner4-slider-wrapper container1 lg:mx-20 sm:mx-44 mx-10 xl:px-1 ">
      <div className="row g-xl-2 gy-5 mb-12 mt-12 ">
        <div className="col-xl-5 md:w-[600px] mx-auto lg:w-auto">
          <Swiper
            {...settings}
            onSwiper={(swiper) => {
              leftSwiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange}
            className="banner4-card-slide lg:w-[450px]  "
          >
            <ContactModal isOpen={isOpen} closeModal={closeModal} />

            {leftSliderImages.map((image, index) => (
              <SwiperSlide key={`thumb-${index}`}>
                <div
                  className={`banner4-card ${
                    index === 1 ? "two" : index === 2 ? "three" : ""
                  } md:!h-[282px]`}
                >
                  <Image
                    src={image}
                    alt={`banner image ${index + 1}`}
                    width={526}
                    height={300}
                  />
                  <div className="banner4-content-wrapper">
                    <div className="banner4-content">
                      <span>
                        {language === "en"
                          ? "Savings worldwide"
                          : "Des économies dans le monde entier"}
                      </span>
                      <h3>
                        {language === "en" ? "50% Off" : "50% de réduction"}
                      </h3>
                      <Link href="/contact" className="text">
                        {language === "en"
                          ? "Discover Great Deal"
                          : "Découvrez une bonne affaire"}
                      </Link>

                      <button onClick={openModal} className="primary-btn1">
                        {language === "en"
                          ? "View This Trip"
                          : "Voir ce voyage"}
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
            onSwiper={(swiper) => {
              rightSwiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange}
            className="package-card3-slide "
          >
            {rightSliderImages.map((image, index) => (
              <SwiperSlide key={`package-${index}`}>
                <div className="package-card3 style-2">
                  <Link
                    href="/projects?city=&country=&baths=0=&beds=0&minPrice=0&maxPrice=10000000000000&type=&rooms=0&beds=0"
                    className="package-card-img sm:w-[430px]"
                  >
                    <Image
                      src={image}
                      alt={`package image ${index + 1}`}
                      width={500}
                      height={400}
                    />
                    <div className="eg-tag">
                      <span>
                        {language === "en" ? "Featured" : "En vedette"}
                      </span>
                    </div>
                  </Link>
                  <div className="package-card-content 2xl:h-[180px] 2xl:mb-[100px] xl:mx-auto">
                    <div className="card-content-top xl:w-[120px] xl:mx-auto -mx-20 sm:mx-auto xl:p-0  ">
                      <div className="rating-area lg:mt-6">
                        <ul className="rating">
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <i className="bi bi-star-fill"></i>
                            </li>
                          ))}
                        </ul>
                        <span>
                          {language === "en" ? "(28 Review)" : "(28 Revoir)"}
                        </span>
                      </div>
                      <h6>
                        {language === "en"
                          ? "A Journey through Historical and Culture."
                          : "Un voyage à travers l'histoire et la culture."}
                      </h6>

                      <ul className="feature-list xl:mx-auto xl:-ml-5 xl:-space-x-4">
                        <li className="projectcard">
                          <svg
                            className="with-stroke"
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                          >
                            <g clipPath="url(#clip0_1225_49)">
                              <path
                                d="M6.99999 13.5898C5.35937 11.1289 2.48828 7.79299 2.48828 4.9219C2.48828 2.43415 4.51223 0.410197 6.99999 0.410197C9.48774 0.410197 11.5117 2.43415 11.5117 4.9219C11.5117 7.79299 8.64061 11.1289 6.99999 13.5898Z"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6.99999 6.97266C5.86925 6.97266 4.94922 6.05262 4.94922 4.92188C4.94922 3.79114 5.86925 2.87111 6.99999 2.87111C8.13074 2.87111 9.05077 3.79114 9.05077 4.92188C9.05077 6.05262 8.13074 6.97266 6.99999 6.97266Z"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                          {language === "en"
                            ? "DEST:"
                            : "DEST:"}
                          <b className="text-black block">{language === "en" ? "U.A.E.":"E.A.U."}</b>
                        </li>
                        <li className="projectcard">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M478.609,225.48v-86.35c0-46.03-37.448-83.478-83.478-83.478H116.87c-46.03,0-83.478,37.448-83.478,83.478v86.35
			C13.959,232.372,0,250.93,0,272.696c0,12.589,0,89.885,0,100.174c0,9.22,7.475,16.696,16.696,16.696h16.696v50.087
			c0,9.22,7.475,16.696,16.696,16.696h66.783c9.22,0,16.696-7.475,16.696-16.696v-50.087h244.87v50.087
			c0,9.22,7.475,16.696,16.696,16.696h66.783c9.22,0,16.696-7.475,16.696-16.696v-50.087h16.696c9.22,0,16.696-7.475,16.696-16.696
			c0-9.493,0-86.461,0-100.174C512,250.93,498.041,232.372,478.609,225.48z M66.783,139.13c0-27.618,22.469-50.087,50.087-50.087
			H395.13c27.618,0,50.087,22.469,50.087,50.087v83.478h-33.391v-16.696c0-27.618-22.469-50.087-50.087-50.087h-72.348
			c-12.819,0-24.523,4.846-33.391,12.794c-8.869-7.948-20.572-12.794-33.391-12.794h-72.348c-27.618,0-50.087,22.469-50.087,50.087
			v16.696H66.783V139.13z M378.435,205.913v16.696H272.696v-16.696c0-9.206,7.49-16.696,16.696-16.696h72.348
			C370.945,189.217,378.435,196.707,378.435,205.913z M239.304,205.913v16.696H133.565v-16.696c0-9.206,7.49-16.696,16.696-16.696
			h72.348C231.815,189.217,239.304,196.707,239.304,205.913z M100.174,422.957H66.783v-33.391h33.391V422.957z M445.217,422.957
			h-33.391v-33.391h33.391V422.957z M478.609,356.174c-14.401,0-412.865,0-445.217,0v-33.391h445.217V356.174z M478.609,289.391
			H33.391v-16.696c0-9.206,7.49-16.696,16.696-16.696c12.832,0,401.17,0,411.826,0c9.206,0,16.696,7.49,16.696,16.696V289.391z"
                            />
                          </svg>
                          {language === "en" ? "Beds" : "Lits"}
                          <b className="text-black block"> 3</b>
                        </li>

                        <li className="projectcard">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z"
                              class="ci-primary"
                            />
                          </svg>
                          {language === "en"
                            ? "Bathrooms"
                            : "S.D.B."}
                          <b className="text-black block">4</b>
                        </li>
                      </ul>
                    </div>

                    <div className="card-content-bottom xl:p-0 flex flex-col">
                      <div className="price-area -mx-4">
                        <span>
                          {language === "en"
                            ? "Starting Form:"
                            : "Formulaire de départ:"}
                        </span>
                        <h6>
                          <sub>$</sub>170.00 <span> </span>
                        </h6>
                      </div>
                      <button
                        onClick={openModal}
                        className="primary-btn1 text-[13px] h-2 -mt-3"
                      >
                        {language === "en" ? "Explore" : "Explorer"}
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
