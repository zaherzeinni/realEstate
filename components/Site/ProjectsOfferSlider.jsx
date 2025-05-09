// ----------------HOME BANNER 4-----------------

"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
import { useState } from "react";
import { useRouter } from "next/router";
import { useLanguageContext } from "@/context/languageContext";
import ProjectCard from '@/components/Site/ProjectCard'
import useProducts from "@/hooks/useProducts";

const  ProjectsOfferSlider = () => {

  const router = useRouter;
  const { query } = router;

  const { language } = useLanguageContext();

  console.log(query, "Query data");

  const [page, setPage] = useState(1);

  const {  data } = useProducts({
    page,
    isfeatured:true,
  });
 
  console.log(data,"dataaa")


  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2000,
      spaceBetween: 25,
      navigation: {
        nextEl: ".package-card-slider-next",
        prevEl: ".package-card-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="tour-pack-section">
        <div className="mx-auto lg:max-w-screen-md lg1:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-4">
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="section-title2 text-center">
                <div className="eg-section-tag two my-3">
                {language === "en" ?<span>Featured Projects</span> : <span>Projets En Vendette</span> }
                </div>
                {language === "en" ? <h1 className="text-[20px]  text-white sm:text-4xl lg:text-[40px] font-extrabold">Discover Our <b className="text-primary text-[20px] sm:text-4xl lg:text-[40px] font-extrabold">Real Estate</b> Projects Here </h1> : <h1 className="  text-white text-[20px] sm:text-4xl lg:text-[40px] ">Découvrez nos <b className="text-primary text-[20px]  sm:text-4xl lg:text-[40px] font-extrabold">Projets Immobiliers</b> ici</h1>} 
              </div>
            </div>
          </div>
          <div className="package-card-slider-wrap">
            <div className="row lg:-mx-16">
              <div className="col-lg-12">
                <Swiper
                  {...settings}
                  className="swiper package-card-slider mb-16"
                >
                  <div className="swiper-wrapper">



                  {data?.books?.map((blog) => {
                    return (
                    <SwiperSlide className="swiper-slide">
                    <ProjectCard blog={blog} language={language} isProjectsPage={false} />
                    </SwiperSlide>
                    )})}

                  </div>

                </Swiper>
                <div className="slide-and-view-btn-grp style-2">
                  <div className="slider-btn-grp3">
                    <div className="slider-btn package-card-slider-prev">
                      <i className="bi bi-arrow-left" />
                      <span> {language === 'en' ?  'PREV' : 'Précédent'} </span>
                    </div>
                    <Link href="/projects?city=&country=&baths=0=&beds=0&minPrice=0&maxPrice=10000000000000&type=&rooms=0&beds=0" className="secondary-btn2">
                     {language === "en" ? "View All Package" : "Afficher tous les forfaits"} 
                    </Link>
                    <div className="slider-btn package-card-slider-next">
                    <span> {language === 'en' ?  'NEXT' : 'Suivante'}  </span>
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

export default ProjectsOfferSlider;
