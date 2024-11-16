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

  return (
    <div dir="ltr">
      <Header />
      <Breadcrumb pagename="FAQ" pagetitle="FAQ" />
      <div className="faq-section pt-120 mb-120">
        <div className="container">
          <div className="lg:flex lg:flex-row lg:space-x-4 g-lg-4 gy-5 flex flex-col-reverse">
            <div className="col-lg-4">
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
              <div className="faq-content-wrap mb-80">
                <div className="faq-content-title mb-50">
                  <h3>
                    {language === "en" ? "General" : "Générale"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={23}
                      height={23}
                      viewBox="0 0 23 23"
                    >
                      <path
                        opacity="0.2"
                        d="M12.1406 3.31569L13.6613 1.28328C14.2277 0.526342 15.4311 0.905329 15.4615 1.85022L15.5502 4.60677C15.5714 5.26711 16.2158 5.72572 16.8467 5.52947L19.16 4.80985C20.0802 4.52359 20.8331 5.57662 20.2644 6.35473L18.8298 8.3179C18.4362 8.85663 18.6705 9.62248 19.2982 9.84869L21.6962 10.7128C22.5984 11.038 22.5699 12.3236 21.6542 12.6085L19.3662 13.3202C18.7146 13.5229 18.453 14.3043 18.8511 14.8585L20.246 16.8005C20.8121 17.5885 20.0372 18.6398 19.117 18.3324L16.6866 17.5204C16.039 17.304 15.3697 17.786 15.3697 18.4688V21.026C15.3697 21.9843 14.1519 22.3938 13.5729 21.6301L11.9573 19.4993C11.5506 18.9629 10.7409 18.9734 10.3482 19.5201L8.84725 21.6096C8.29002 22.3854 7.06631 22.0131 7.03559 21.0584L6.94981 18.3932C6.92856 17.7329 6.28416 17.2743 5.65329 17.4705L3.39578 18.1728C2.47005 18.4608 1.71725 17.3951 2.29806 16.6188L3.63735 14.8289C4.04321 14.2865 3.80363 13.506 3.16335 13.2847L0.734445 12.4451C-0.163318 12.1348 -0.163315 10.8652 0.734448 10.5549L3.16335 9.71533C3.80363 9.49403 4.04321 8.71352 3.63735 8.1711L2.17821 6.22099C1.60964 5.46111 2.32026 4.41074 3.23712 4.65581L5.87202 5.36011C6.507 5.52984 7.13025 5.0513 7.13025 4.39403V1.87955C7.13025 0.93114 8.32718 0.515473 8.91501 1.25974L10.5552 3.3364C10.9622 3.85179 11.7471 3.84154 12.1406 3.31569Z"
                      />
                    </svg>
                  </h3>
                </div>
                <Accord />
              </div>
              <div className="faq-content-wrap">
                <div className="faq-content-title mb-50">
                  <h3>
                    Travel Tips
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={23}
                      height={23}
                      viewBox="0 0 23 23"
                    >
                      <path
                        opacity="0.2"
                        d="M12.1406 3.31569L13.6613 1.28328C14.2277 0.526342 15.4311 0.905329 15.4615 1.85022L15.5502 4.60677C15.5714 5.26711 16.2158 5.72572 16.8467 5.52947L19.16 4.80985C20.0802 4.52359 20.8331 5.57662 20.2644 6.35473L18.8298 8.3179C18.4362 8.85663 18.6705 9.62248 19.2982 9.84869L21.6962 10.7128C22.5984 11.038 22.5699 12.3236 21.6542 12.6085L19.3662 13.3202C18.7146 13.5229 18.453 14.3043 18.8511 14.8585L20.246 16.8005C20.8121 17.5885 20.0372 18.6398 19.117 18.3324L16.6866 17.5204C16.039 17.304 15.3697 17.786 15.3697 18.4688V21.026C15.3697 21.9843 14.1519 22.3938 13.5729 21.6301L11.9573 19.4993C11.5506 18.9629 10.7409 18.9734 10.3482 19.5201L8.84725 21.6096C8.29002 22.3854 7.06631 22.0131 7.03559 21.0584L6.94981 18.3932C6.92856 17.7329 6.28416 17.2743 5.65329 17.4705L3.39578 18.1728C2.47005 18.4608 1.71725 17.3951 2.29806 16.6188L3.63735 14.8289C4.04321 14.2865 3.80363 13.506 3.16335 13.2847L0.734445 12.4451C-0.163318 12.1348 -0.163315 10.8652 0.734448 10.5549L3.16335 9.71533C3.80363 9.49403 4.04321 8.71352 3.63735 8.1711L2.17821 6.22099C1.60964 5.46111 2.32026 4.41074 3.23712 4.65581L5.87202 5.36011C6.507 5.52984 7.13025 5.0513 7.13025 4.39403V1.87955C7.13025 0.93114 8.32718 0.515473 8.91501 1.25974L10.5552 3.3364C10.9622 3.85179 11.7471 3.84154 12.1406 3.31569Z"
                      />
                    </svg>
                  </h3>
                </div>

                <Accord />
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
