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
  title: "SAND N SEA REALTY FAQS",
  description:
    "SAND N SEA REALTY FAQS",
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
  


// ---------------------------program to select country--------------------------
  const [selectedCountry, setSelectedCountry] = useState('');


   // Function to handle country selection
   const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };


  // Function to render the selected country component
  const renderCountryComponent = () => {
    switch (selectedCountry) {
      case 'UAE':
        return <Uae />;
      case 'Dominican':
        return <Dominican />;
      case 'Mexico':
        return <Mexico />;
      case 'Spain':
        return <Spain />;
      case 'Cyprus':
        return <Cyprus />;
      case 'Portugal':
        return <Portugal />;
      default:
        return <div>  
         <Uae/>
        <Dominican />
          <Mexico />
          <Spain />
      <Cyprus/>
      <Portugal />
      </div>;
    }
  };


  return (
    <div dir="ltr">
      <Header />
      <Breadcrumb pagename={language === "en" ? "A World Of Real Estate Possibilities At Your Fingertips!" : "Un Monde De Possibilités Immobilières À Portée De Clic !"} pagetitle="FAQ" />
     
     




      <div className="faq-section pt-20 mb-120 hidden1">
       
{/* ------------------search----- at small size screen----------- */}
      <div className="single-widget mb-12 lg:hidden  pl-5 sm:pl-20 ">
      <h5 className="widget-title">
                    {language === "en" ? "Search Here" : "Rechercher ici"}
                  </h5>
                  <form onSubmit={handleCountryChange} className="w-64">
                    <div className="search-box mx-auto hover:cursor-pointer text-xl font-bold bg-white1  mt-1 p-2 block --ml-20    focus:outline-none  md:text-base">
                    <select className="hover:cursor-pointer" onChange={handleCountryChange} value={selectedCountry}>
       
         <option value="">{language === "en" ? "Select A Country":"Sélectionnez Un Pays"}</option>
        <option value="UAE">{language === "en" ? "U.A.E.":"E.A.U."}</option>
        <option value="Dominican">{language === "en" ? "Dominican Republic":"République Dominicaine"}</option>
        <option value="Mexico">{language === "en" ? "Mexico":"Mexique"}</option>
        <option value="Spain">{language === "en" ? "Spain":"Espagne"}</option>
        <option value="Cyprus">{language === "en" ? "Northern Cyprus":"Chypre Nord"}</option>
        <option value="Portugal">{language === "en" ? "Portugal":"Portugal"}</option>
      </select>
                    </div>
                  </form>
                </div>
       
        <div className="container">
          <div className="lg:flex lg:flex-row lg:space-x-4 g-lg-4 gy-5 flex flex-col-reverse">
            <div className="col-lg-4">
              

                              {/* -------------search----- at large size screen--------- */}
            <div className="single-widget mb-30 hidden lg:block">
                  <h5 className="widget-title">
                    {language === "en" ? "Search Here" : "Rechercher ici"}
                  </h5>
                  <form onSubmit={handleCountryChange} className="w-56 py-1 bg-white">
                    <div className="search-box mx-auto hover:cursor-pointer text-xl font-bold bg-white1  mt-1 p-2 block --ml-20    focus:outline-none  md:text-base">
                    <select className="hover:cursor-pointer" onChange={handleCountryChange} value={selectedCountry}>
         <option value="">{language === "en" ? "Select A Country":"Sélectionnez Un Pays"}</option>
        <option value="UAE">{language === "en" ? "U.A.E.":"E.A.U."}</option>
        <option value="Dominican">{language === "en" ? "Dominican Republic":"République Dominicaine"}</option>
        <option value="Mexico">{language === "en" ? "Mexico":"Mexique"}</option>
        <option value="Spain">{language === "en" ? "Spain":"Espagne"}</option>
        <option value="Cyprus">{language === "en" ? "Cyprus":"Chypre"}</option>
        <option value="Portugal">{language === "en" ? "Portugal":"Portugal"}</option>
      </select>
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
                    <button onClick={openModal} className="primary-btn1 w-full flex  justify-center">
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

               
                {/* <div>
                  <Uae/>
                <Dominican />
                  <Mexico />
                  <Spain />
              <Cyprus/>
              <Portugal />
              </div> */}

        <div>
        {renderCountryComponent()}
      </div>


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
