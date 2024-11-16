"use client";

import React, { useMemo, useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import useServices from "@/hooks/useServices";
import { useLanguageContext } from "@/context/languageContext";
import { ImageEndpoint } from "../../utils/global";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";

import "swiper/swiper-bundle.css"; // Ensure you have the correct CSS imported

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const ServicesTabs = () => {
  const [isOpen, setOpen] = useState(false);
  const { language } = useLanguageContext();
  const [activeTab, setActiveTab] = useState(0);
  const { data, isLoading, error } = useServices({
    page: 1,
    search: "",
  });

  // console.log(data);
  // console.log(activeTab);
  // console.log(data?.books[activeTab]?.image);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (data?.books?.length) {
        setActiveTab((prevTab) => (prevTab + 1) % data.books.length);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [data?.books]);

  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2000,
      spaceBetween: 25,
      effect: "fade",
      loop: true,
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination5",
        clickable: true,
      },
    };
  }, []);

  const images = [
    {
      id: 1,
      url: "/images/buy-home.png",
    },
    {
      id: 2,
      url: "/images/book.png",
    },
  ];

  return (
    <div className="slider-and-tab-section mb-120">
      <div className="row g-0 ">
        <div className="col-lg-5    xl:h-[620px]">
          <ul className="activities-slider-group">
            <li className="active ">
              <div className="slider-area ">
                {/* <Swiper {...settings} className="swiper activities-img-slider">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="slide-img"
                        style={{
                          backgroundImage: `linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(${`${ImageEndpoint}/${data?.books[activeTab]?.image[0]}`})`,
                        }}
                      />
                    </SwiperSlide>
                  </div>
                </Swiper> */}

                <>
                  {data && data.books[activeTab]?.image ? (
                    <Swiper
                      {...settings}
                      className="swiper activities-img-slider   "
                    >
                      <div className="swiper-wrapper ">
                        {data.books[activeTab].image.map((image, index) => (
                          <SwiperSlide key={index} className="swiper-slide    ">
                            <div
                              className="slide-img   "
                              style={{
                                backgroundImage: `linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(${`${ImageEndpoint}/${image}`})`,
                              }}
                            />
                          </SwiperSlide>
                        ))}
                      </div>
                    </Swiper>
                  ) : (
                    <p>Loading images...</p>
                  )}
                </>

                <div className="swiper-pagination5 pagination1   " />
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-7       ">
          <div className="tab-area     xl:h-[620px]    ">
            <div className="section-title2 text-center xl:-mt-20 xl:mb-20   ">
              <div className="eg-section-tag xl:mt-5 xl:-mb-2">
                <span>
                  {language === "en" ? "What We Do" : "Ce que nous faisons"}
                </span>
              </div>
              <h1 className="lg:text-[60px] xl:-mb-12 ">
                {language === "en" ? "Our Services" : "Nos services"}
              </h1>
            </div>
            {data?.books?.length && (
              <div className="tab-content-area   ">
                <div className="row g-xl-4 gy-5   ">
                  <div className="col-xl-5   ">
                    <div className="tab-sidebar       xl:-mt-[50px]        ">
                      <ul
                        className="nav nav-pills !bg-transparent"
                        id="pills-tab3"
                        role="tablist"
                      >
                        {data?.books?.map((service, index) => (
                          <li
                            key={index}
                            className="nav-item xl:my-2"
                            role="presentation"
                          >
                            <div
                              onClick={() => handleTabClick(index)}
                              className={`nav-link ${
                                activeTab === index ? "active" : ""
                              }`}
                            >
                              <div className="icon">
                                {/* <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={33}
                                  height={33}
                                  viewBox="0 0 54 54"
                                >
                                 
                                </svg> */}
                              
                                {/* <img className="!rounded-full " src={`${ImageEndpoint}/${service?.image[0]}`} alt={service?.title} /> */}
                              
                              <img src="/shakehand.jpg" alt="shakehand" className="rounded-full" />
                              </div>
                              <h6 className="!text-[14px]">
                                {language === "en"
                                  ? service?.title
                                  : service?.titlefr}
                              </h6>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-7 d-flex justify-content-xl-start justify-content-center     xl:-mt-[100px] ">
                    <div className="tab-content" id="pills-tab3Content">
                      {data?.books?.map((service, index) => (
                        <div
                          key={index}
                          className={`${
                            activeTab === index ? "block" : "hidden"
                          }`}
                        >
                          <div className="tab-content-wrap">
                            <h3 className="xl:-mb-2 xl:mt-20 font-semibold">
                              {language === "en"
                                ? service?.title
                                : service?.titlefr}
                            </h3>
                            <h4 className="text-primary">
                              {language === "en"
                                ? service?.subtitle
                                : service?.subtitlefr}
                            </h4>
                            <p className=" font-rubik text-gray-500 lg:w-[90%]">
                              {language === "en"
                                ? service?.subdesc
                                : service?.subdescfr}
                            </p>
                            <ul>{/* List items if needed */}</ul>
                            <div className="content-bottom-area xl:flex xl:flex-col 2xl:-space-y-3 xl:items-start xl:-mt-10">
                              <Link
                                href={`/services/${service?._id}`}
                                className="primary-btn3"
                              >
                                {language === "en"
                                  ? "Check Service details"
                                  : "Vérifier les détails du service"}
                              </Link>

                              {/* VIDEO SERVICES */}
                              <a
                                data-fancybox="popup-video"
                                style={{ cursor: "pointer" }}
                                onClick={() => setOpen(true)}
                                className="video-area"
                              >
                                <div className="icon">
                                  <svg
                                    className="video-circle"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    width="51px"
                                    viewBox="0 0 206 206"
                                    style={{
                                      enableBackground: "new 0 0 206 206",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <circle
                                      className="circle"
                                      strokeMiterlimit={10}
                                      cx={103}
                                      cy={103}
                                      r={100}
                                    />
                                    <path
                                      className="circle-half top-half"
                                      strokeWidth={4}
                                      strokeMiterlimit={10}
                                      d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"
                                    />
                                    <path
                                      className="circle-half bottom-half"
                                      strokeWidth={4}
                                      strokeMiterlimit={10}
                                      d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"
                                    />
                                  </svg>
                                  <i className="bi bi-play" />
                                </div>
                                {language === "en" ? (
                                  <h6>Watch The Video</h6>
                                ) : (
                                  <h6>Regardez la vidéo</h6>
                                )}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        onClick={() => setOpen(true)}
        isOpen={isOpen}
        animationSpeed="350"
        videoId="r4KpWiK08vM"
        ratio="16:9"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default ServicesTabs;
