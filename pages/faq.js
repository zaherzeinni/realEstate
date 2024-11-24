import Breadcrumb from "@/components/components/common/Breadcrumb";
import Newslatter from "@/components/components/common/Newslatter";
import Footer from "@/components/components/footer/Footer";
import Header from "@/components/components/header/Header2";
import Link from "next/link";
import React from "react";
import { useLanguageContext } from "@/context/languageContext";
import Accord from "@/components/components/accordion/Accord";
import ContactModal from "../components/Site/ContactModal";
import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProjectCard from "../components/Site/ProjectCard";
import Uae from "../components/components/accordion/faq/Uae"
import Dominican from "../components/components/accordion/faq/Dominican"
import Mexico from "../components/components/accordion/faq/Mexico"
import Cyprus from "../components/components/accordion/faq/Cyprus"
import Spain from "../components/components/accordion/faq/Spain"
import Portugal from "../components/components/accordion/faq/Portugal"


import { useRouter } from "next/router";

export const metadata = {
  title: "TripRex - Tour & Travel Agency  NextJs Template",
  description:
    "TripRex is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const Faq = () => {
  const { language } = useLanguageContext();

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const { data: products } = useProducts({
    page: 1,
    isfeatured: true,
  });




  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/faq?search=#${search}`);
  };

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };


  const router = useRouter();

  return (
    <div dir="ltr">
      <Header />
      <Breadcrumb pagename={language === "en" ? "A WORLD OF REAL ESTATE POSSIBILITIES AT YOUR FINGERTIPS!" : "UN MONDE DE POSSIBILITÉS IMMOBILIÈRES À PORTÉE DE CLIC !"} pagetitle="FAQ" />
     
     



      <div className="faq-section pt-20 mb-120 hidden1">
        <div className="container">
          <div className="lg:flex lg:flex-row lg:space-x-4 g-lg-4 gy-5 flex flex-col-reverse">
            <div className="col-lg-4">
              


            <div className="single-widget mb-30">
                  <h5 className="widget-title">
                    {language === "en" ? "Search Here" : "Rechercher ici"}
                  </h5>
                  <form onSubmit={handleSearch}>
                    <div className="search-box">
                      <input
                        placeholder={
                          language === "en" ? "country" : "pays"
                        }
                        value={search}
                        onChange={handleSearchInputChange}
                        type="text"
                      />
                      <button type="submit">
                        <i className="bx bx-search" />
                      </button>
                    </div>
                  </form>
                </div>




              <div className="banner-and-inquiry-form">
                <div className="banner2-card four">
                  <img src="/images/banner2-card-img2.png" alt="" />
                  <div className="banner2-content-wrap">
                    <div className="banner2-content">
                      <span>
                        {language === "en"
                          ? "Savings worldwide"
                          : "Des économies dans le monde entier"}
                      </span>
                      <h3>
                        {language === "en" ? "50% Off" : "50% de réduction"}
                      </h3>
                      <p>
                        {language === "en"
                          ? "For Your First Book"
                          : "Pour votre premier livre"}
                      </p>
                    </div>
                    <ContactModal isOpen={isOpen} closeModal={closeModal} />
                    <button onClick={openModal} className="primary-btn1">
                      {language === "en" ? "Book Now" : "Réservez maintenant"}
                    </button>
                  </div>
                </div>
              </div>
              <section className="projectcard mt-10">
                {products?.books && products?.books[0] && (
                  <ProjectCard
                    openModal={openModal}
                    isfeaturepage={true}
                    hieght={300}
                    blog={products?.books[0]}
                    language={language}
                  />
                )}
              </section>
            </div>

            <div className="col-lg-8">
              <div className="faq-content-wrap">

                  <Uae/>
                <Dominican />
                  <Mexico />
                  <Spain />
              <Cyprus/>
              <Portugal />

              </div>
            </div>
          </div>
        </div>
      </div>
      <Newslatter />
      <Footer />
    </div>
  );
};

export default Faq;
