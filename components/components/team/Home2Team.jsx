"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { teamData } from "@/data/team";
import { MdEmail } from "react-icons/md";
import TeamCard from "@/components/Site/TeamCard";
import { useLanguageContext } from "@/context/languageContext";

import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home2Team = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      // autoplay: {
      // 	delay: 2500, // Autoplay duration in milliseconds
      // 	disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".teams-card-next",
        prevEl: ".teams-card-prev",
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
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
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

  return (
    <>
      <div className="teams-section mb-120 xl:mr-16">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="section-title2 text-center">
                <div className="eg-section-tag">
                  <span>
                    {language === "en"
                      ? "International Guide"
                      : "Guide international"}
                  </span>
                </div>
                <h1 className="lg:text-[60px]">
                  {language === "en"
                    ? "Meet Our Team"
                    : "Rencontrez notre équipe"}{" "}
                </h1>
              </div>
            </div>
          </div>
          <div className="teams-slider-area">
            <div className="row mb-12">
              <div className="col-lg-12 ">
                <Swiper {...settings} className="swiper teams-card-slider">
                  <div className="swiper-wrapper">
                    {teamData.map((member, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <TeamCard member={member} />
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="slide-and-view-btn-grp style-4">
                  <div className="slider-btn-grp3">
                    <div className="slider-btn teams-card-prev">
                      <i className="bi bi-arrow-left" />
                      <span>{language === "en" ? "PREV" : "PREC"} </span>
                    </div>
                    <div className="slider-btn teams-card-next xl:-mr-20">
                      <span>{language === "en" ? "NEXT" : "SUIVANTE"}</span>
                      <i className="bi bi-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2Team;
