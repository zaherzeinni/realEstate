"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useCountries from "@/hooks/useCountries";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import { ImageEndpoint } from "@/utils/global";

import { useLanguageContext } from "@/context/languageContext";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Countriesslide = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      navigation: {
        nextEl: ".destination-card2-next",
        prevEl: ".destination-card2-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);

  const { language } = useLanguageContext();

  const { data, isLoading, error } = useCountries();

  return (
    <>
      <div className="destination-card2-slider-section mb-120 mt-20 sm:mt-[470px] md:mt-32  ">
        <div className="container mx-auto">
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="section-title2 text-center">
                <div className="eg-section-tag">
                {language === "en" ? <span>Our projects</span> : <span>Nos projets</span>}  
                </div>
                {language === "en" ? <h1 className="lg:text-[60px]"> Countries</h1> : <h1 className="lg:text-[60px]">Pays</h1>}
              </div>
            </div>
          </div>
          <div className="row lg:-mx-10 xl:-mx-20 2xl:-mx-32">
            <div className="col-lg-12">
              <Swiper
                {...settings}
                className="swiper destination-card2-slider mb-50"
              >
                <div className="swiper-wrapper">
                  {data?.map((country, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div className="destination-card2">
                        <Link
                          href={`/projects/?country=${
                            country?.title
                          }&city=${""}&baths=${0}&beds=${0}&minPrice=${0}&maxPrice=${1000000000000}&type=${""}&rooms=${0}&beds=${0}`}
                          className="destination-card-img"
                        >
                          <img
                            src={`${ImageEndpoint}/${country?.cover}`}
                            //   src="/assets/img/home2/destination-card2-img1.jpg"
                            alt=""
                            className="h-96"
                          />
                        </Link>
                        <div className="batch">
                        {language === "en" ? <span>Projects</span> : <span>Projets</span>}  
                        </div>
                        <div className="destination-card2-content">
                          {/* <span>Travel To</span> */}
                          <h4>
                            {/* 
                        router.push(
      `/projects/?country=${formData?.country?.value}&city=${formData.city.value}&baths=${formData.baths?.value}&beds=${formData.beds?.value}&minPrice=${formData.minPrice?.value}&maxPrice=${formData.maxPrice?.value}&type=${formData.type?.value}&rooms=${formData.rooms.value}&beds=${formData.beds.value}`
    ); */}

                            <Link
                              href={`/projects/?country=${
                                country?.title
                              }&city=${""}&baths=${0}=&beds=${0}&minPrice=${0}&maxPrice=${10000000000000}&type=${""}&rooms=${0}&beds=${0}`}
                            >
                              {language === 'en' ? country?.title : country?.titlefr}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
              <div className="slide-and-view-btn-grp">
                <div className="slider-btn-grp3 two">
                  <div className="slider-btn destination-card2-prev">
                    <i className="bi bi-arrow-left" />
                    <span> {language === 'en' ?  'PREV' : 'Précédent'} </span>
                  </div>
                  <div className="slider-btn destination-card2-next">
                    <span> {language === 'en' ?  'NEXT' : 'Suivante'}  </span>
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
                <Link href="/projects?city=&country=&baths=0=&beds=0&minPrice=0&maxPrice=10000000000000&type=&rooms=0&beds=0" className="secondary-btn2">
                {language === "en" ? "View All Destination" : "Afficher toutes les destinations"}  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countriesslide;
