import React from "react";
import Breadcrumb from "@/components/components/common/Breadcrumb";
// import QuantityCounter from "@/uitils/QuantityCounter";
import Link from "next/link";
import Topbar from "@/components/components/topbar/Topbar";
import Header from "@/components/components/header/Header2";
import Newslatter from "@/components/components/common/Newslatter";
import Footer from "@/components/components/footer/Footer";
import useVisas from "@/hooks/useVisas";
import { ImageEndpoint } from "../../utils/global";
import { useState } from "react";
import { Pagination } from "@material-ui/lab";
import { useLanguageContext } from "@/context/languageContext";

import AnimateHeight from "react-animate-height";
import ProjectCard from "../../components/Site/ProjectCard"
import useProducts from "../../hooks/useProducts";
import ContactModal from "../../components/Site/ContactModal";


import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Suspense, lazy } from "react";

export const metadata = {
  title: "TripRex - Tour & Travel Agency  NextJs Template",
  description:
    "TripRex is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const page = () => {
  const { language } = useLanguageContext();
  const [page, setPage] = useState(1);

  const { data, isLoading, error, mutate } = useVisas({
    page,

    search: "",
  });

  const handlePageChange = (event, value) => {
    if (value === page) return;
    setPage(value);
    //   window.scrollTo(0, 0);
  };

  const [active, setActive] = useState("1");
  const togglePara = (value) => {
    setActive((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  const [active1, setActive1] = useState("");
  const togglePara1 = (value) => {
    setActive1((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  const [active2, setActive2] = useState("");
  const togglePara2 = (value) => {
    setActive2((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  const [active3, setActive3] = useState("");
  const togglePara3 = (value) => {
    setActive3((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };


  
  const [active4, setActive4] = useState("");
  const togglePara4 = (value) => {
    setActive4((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };


  
  const [active5, setActive5] = useState("");
  const togglePara5 = (value) => {
    setActive5((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  
  const [active6, setActive6] = useState("");
  const togglePara6 = (value) => {
    setActive6((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  const { data: products } = useProducts({
    page: 1,
    isfeatured: true,
  });



  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }




  const renderPagination = () => {
    const totalPages = data?.pages || 1;
    const maxVisiblePages = 4;
    const pages = [];

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page <= maxVisiblePages - 1) {
        for (let i = 1; i <= maxVisiblePages; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (page > totalPages - maxVisiblePages + 1) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = page - 1; i <= page + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return (
      <Suspense fallback={<div>
         <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    </div>
      }>
     
      <div className="flex justify-center items-center space-x-2" style={{ maxWidth: '300px', margin: '0 auto' }}>
        <button
          onClick={() => handlePageChange(null, Math.max(1, page - 1))}
          className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 ${
            page === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-green-500 hover:bg-green-100'
          }`}
          disabled={page === 1}
        >
          <ArrowBackIcon />
        </button>
        {pages.map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => typeof pageNumber === 'number' && handlePageChange(null, pageNumber)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 ${
              pageNumber === page ? 'bg-green-500 text-white' : 'text-green-500 hover:bg-green-100'
            } ${pageNumber === '...' ? 'cursor-default' : ''}`}
            disabled={pageNumber === '...'}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(null, Math.min(totalPages, page + 1))}
          className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 ${
            page === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-green-500 hover:bg-green-100'
          }`}
          disabled={page === totalPages}
        >
          <ArrowForwardIcon />
        </button>
      </div>
      </Suspense>
    );
  };



  return (
    <div dir="ltr">
      {/* <Topbar /> */}
      <Header />
      <Breadcrumb
        pagename={language === "en" ? "Cross-Border Property & Fund Investments" : "Investissements Immobiliers Et De Fonds Transfrontaliers"}
        pagetitle={language === "en" ? "Invest" : "Investir"}
      />
      <div className="package-search-filter-wrapper">
      
        <div className="container"></div>
       
      </div>

      <div className="visa-with-sidebar-section pt-120 mb-24">
        <div className="container">
        {/* <img src="/3.png" alt="logo" className="w-[220px] sm:w-[260px] 1-mt-10 mb-10" /> */}
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="list-grid-product-wrap mb-70">
                <div className="row gy-4">
                  {data?.books?.map((blog) => {
                    const {
                      _id,

                      createdAt,

                      image,
                      title,
                      titlefr,

                      story,
                      storyfr,
                      category,
                      // read_time,
                    } = blog;
                    return (
                      <div className="col-md-12 item">
                        <div className="package-card4 four">
                          <Link
                            href={`/invest/${_id}`}
                            className="package-card-img"
                          >
                            <img
                              src={`${ImageEndpoint}/${image[0]}`}
                              //src="/assets/img/home4/package-card4-img1.jpg"
                              alt=""
                              className=" !object-center"
                            />
                          </Link>
                          <div className="package-card-content">
                            <div className="card-content-top">
                              <h5>{language === "en" ? title : titlefr}</h5>
             
                            </div>
                            <div className="card-content-bottom -mt-10">
             
                              <Link
                                href={`/invest/${_id}`}
                                className="apply-btn"
                              >
                                {language === "en"
                                  ? "Invest Now"
                                  : "Investissez maintenant"}
                                <div className="arrow">
                                  <i className="bi bi-arrow-right" />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">


                <nav className="inner-pagination-area text-center">
                {renderPagination()}
              </nav>


                  {/* <nav className="inner-pagination-area   flex justify-center">
                    <Pagination
                      dir="rtl"
                      className=" text-center mx-auto"
                      onChange={(e, i) => {
                        handlePageChange(e, i);
                      }}
                      count={data?.pages}
                      defaultPage={page}
                      page={page}
                      siblingCount={0}
                      shape="rounded"
                      color="primary"
                      showFirstButton
                      showLastButton
                    />
                  </nav> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar-area">
                <h5 className="widget-title mb-30">
                  FAQ - {language === "en" ?  "General Information"  :"General Information"}
                </h5>
                <div className="faq-content mb-50">
                  <div className="accordion" id="accordionTravel">
                    <div className="accordion-item">
                      <h6
                        className="accordion-header111 text-[15px] !border-1 border-b-2 border-gray-500 my-2 "
                        id="travelheadingOne"
                      >
                        <button
                          onClick={() => togglePara("1")}
                          className="accordion-button- collapsed mb-2 text-start flex"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseOne"
                          aria-expanded="false"
                          aria-controls="travelcollapseOne"
                        >
                         {language === "en" ?  "1. What are the different real estate investment strategies?":"1. Quelles sont les différentes stratégies d'investissement immobilier ?"}
                          <div
                            className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end   ${
                              active === "1" ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              className="h-4 w-4 flex justify-end text-end "
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 9L12 15L5 9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </button>
                      </h6>

                      <AnimateHeight
                        duration={300}
                        height={active === "1" ? "auto" : 0}
                      >
                        <div className=" text-white-dark text-[13px] text-start">
                          <div className="accordion-body !text-start !w-auto !mx-auto">
                          {language === "en" ? 
                          "Strategies include buying for rental, flipping properties, investing in commercial real estate, and purchasing land."
                          :
                          "Les stratégies incluent l'achat pour la location, l'achat-revente, l'investissement dans des biens commerciaux, et l'achat de terrains."
                          }
                          </div>
                        </div>
                      </AnimateHeight>
                    </div>

                    <div className="accordion-item">
                      <h6
                        className="accordion-header111 text-[15px] !border-1 border-b-2 border-gray-500 my-2 "
                        id="travelheadingOne"
                      >
                        <button
                          onClick={() => togglePara1("1")}
                          className="accordion-button- collapsed mb-2 text-start flex"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseOne"
                          aria-expanded="false"
                          aria-controls="travelcollapseOne"
                        >
                          {language === "en" ? 
                          "2. How to get started in real estate investing ?"
                          :
                          "2. Comment débuter dans l'investissement immobilier ?"
                          }
                          <div
                            className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end   ${
                              active1 === "1" ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              className="h-4 w-4 flex justify-end text-end "
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 9L12 15L5 9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </button>
                      </h6>

                      <AnimateHeight
                        duration={300}
                        height={active1 === "1" ? "auto" : 0}
                      >
                        <div className=" text-white-dark text-[13px] text-start">
                          <div className="accordion-body !text-start !w-auto !mx-auto">
                          {language === "en" ? 
                            "Start by educating yourself about the market, setting a budget, and considering consulting a real estate advisor."
                            :
                            "Commencez par vous informer sur le marché, établir un budget, et envisager de consulter un conseiller immobilier."
                              }
                          </div>
                        </div>
                      </AnimateHeight>
                    </div>

                    <div className="accordion-item">
                      <h6
                        className="accordion-header111 text-[15px] !border-1 border-b-2 border-gray-500 my-2 "
                        id="travelheadingOne"
                      >
                        <button
                          onClick={() => togglePara2("1")}
                          className="accordion-button- collapsed mb-2 text-start flex"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseOne"
                          aria-expanded="false"
                          aria-controls="travelcollapseOne"
                        >
                           {language === "en" ? 
                          "3. What are the main risks associated with real estate investing ?"
                          :
                          "3. Quels sont les principaux risques liés à l'investissement immobilier ?"
                           }
                          <div
                            className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end   ${
                              active2 === "1" ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              className="h-4 w-4 flex justify-end text-end "
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 9L12 15L5 9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </button>
                      </h6>

                      <AnimateHeight
                        duration={300}
                        height={active2 === "1" ? "auto" : 0}
                      >
                        <div className=" text-white-dark text-[13px] text-start">
                          <div className="accordion-body !text-start !w-auto !mx-auto">
                          {language === "en" ? 
                            "Risks include vacancy rates, market fluctuations, and unexpected maintenance costs."
                            :
                            "Les risques incluent la vacance locative, les fluctuations du marché, et les coûts imprévus de maintenance."
                            }
                          </div>
                        </div>
                      </AnimateHeight>
                    </div>

                    <div className="accordion-item">
                      <h6
                        className="accordion-header111 text-[15px] !border-1 border-b-2 border-gray-500 my-2 "
                        id="travelheadingOne"
                      >
                        <button
                          onClick={() => togglePara3("1")}
                          className="accordion-button- collapsed mb-2 text-start flex"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseOne"
                          aria-expanded="false"
                          aria-controls="travelcollapseOne"
                        >
                          {language === "en" ? 
                          "4. How to finance a real estate investment ?"
                          :
                          "4. Comment financer un investissement immobilier ?"
                          }
                          <div
                            className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end   ${
                              active3 === "1" ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              className="h-4 w-4 flex justify-end text-end "
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 9L12 15L5 9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </button>
                      </h6>

                      <AnimateHeight
                        duration={300}
                        height={active3 === "1" ? "auto" : 0}
                      >
                        <div className=" text-white-dark text-[13px] text-start">
                          <div className="accordion-body !text-start !w-auto !mx-auto">
                          {language === "en" ? 
                          "You can use mortgages, personal savings, or investment partnerships."
                          :
                          "Vous pouvez utiliser des prêts hypothécaires, des économies personnelles, ou des partenariats d'investissement."
                          }
                          </div>
                        </div>
                      </AnimateHeight>
                    </div>


                    <div className="accordion-item">
                      <h6
                        className="accordion-header111 text-[15px] !border-1 border-b-2 border-gray-500 my-2 "
                        id="travelheadingOne"
                      >
                        <button
                          onClick={() => togglePara4("1")}
                          className="accordion-button- collapsed mb-2 text-start flex"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseOne"
                          aria-expanded="false"
                          aria-controls="travelcollapseOne"
                        >
                          {language === "en" ? 
                          "5. What are common mistakes to avoid when investing in real estate ?"
                          :
                          "5. Quelles sont les erreurs courantes à éviter lors de l'investissement immobilier ?"
                          }
                          <div
                            className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end   ${
                              active4 === "1" ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              className="h-4 w-4 flex justify-end text-end "
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 9L12 15L5 9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </button>
                      </h6>

                      <AnimateHeight
                        duration={300}
                        height={active4 === "1" ? "auto" : 0}
                      >
                        <div className=" text-white-dark text-[13px] text-start">
                          <div className="accordion-body !text-start !w-auto !mx-auto">
                          {language === "en" ? 
                          "Avoid neglecting market research, underestimating costs, and failing to diversify your portfolio."
                          :
                          "Évitez de négliger la recherche de marché, de sous-estimer les coûts , et de ne pas diversifier votre portefeuille."
                          }
                          </div>
                        </div>
                      </AnimateHeight>
                    </div>




                    <div className="accordion-item">
                      <h6
                        className="accordion-header111 text-[15px] !border-1 border-b-2 border-gray-500 my-2 "
                        id="travelheadingOne"
                      >
                        <button
                          onClick={() => togglePara5("1")}
                          className="accordion-button- collapsed mb-2 text-start flex"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseOne"
                          aria-expanded="false"
                          aria-controls="travelcollapseOne"
                        >
                          {language === "en" ? 
                          "6. How to evaluate the real estate market before investing ?"
                          :
                          "6. Comment évaluer le marché immobilier avant d'investir ?"
                          }
                          <div
                            className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end   ${
                              active5 === "1" ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              className="h-4 w-4 flex justify-end text-end "
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 9L12 15L5 9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </button>
                      </h6>

                      <AnimateHeight
                        duration={300}
                        height={active5 === "1" ? "auto" : 0}
                      >
                        <div className=" text-white-dark text-[13px] text-start">
                          <div className="accordion-body !text-start !w-auto !mx-auto">
                          {language === "en" ? 
                          "Analyze price trends, rental demand, and development projects in the area."
                          :
                          "Analysez les tendances des prix, la demande locative, et les projets de développement dans la région."
                          }
                          </div>
                        </div>
                      </AnimateHeight>
                    </div>



                    <div className="accordion-item">
                      <h6
                        className="accordion-header111 text-[15px] !border-1 border-b-2 border-gray-500 my-2 "
                        id="travelheadingOne"
                      >
                        <button
                          onClick={() => togglePara6("1")}
                          className="accordion-button- collapsed mb-2 text-start flex"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseOne"
                          aria-expanded="false"
                          aria-controls="travelcollapseOne"
                        >
                          {language === "en" ? 
                          "7. Quels outils ou ressources peuvent aider à l'investissement immobilier ?"
                          :
                          "7. What tools or resources can assist with real estate investing?"
                          }
                          <div
                            className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end   ${
                              active6 === "1" ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              className="h-4 w-4 flex justify-end text-end "
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 9L12 15L5 9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </button>
                      </h6>

                      <AnimateHeight
                        duration={300}
                        height={active6 === "1" ? "auto" : 0}
                      >
                        <div className=" text-white-dark text-[13px] text-start">
                          <div className="accordion-body !text-start !w-auto !mx-auto">
                          {language === "en" ? 
                          "Utilize platforms for property searches, property management software, and books or courses on real estate investing."
                          :
                          "Utilisez des plateformes pour la recherche de biens, des logiciels de gestion immobilière, et des livres ou cours sur l'investissement immobilier."
                          }
                          </div>
                        </div>
                      </AnimateHeight>
                    </div>



                    {/* <div className="accordion-item">
                      <h6
                        className="accordion-header111 text-[15px] !border-1 border-b-2 border-gray-500 my-2 "
                        id="travelheadingOne"
                      >
                        <button
                          onClick={() => togglePara3("1")}
                          className="accordion-button- collapsed mb-2 text-start flex"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#travelcollapseOne"
                          aria-expanded="false"
                          aria-controls="travelcollapseOne"
                        >
                          {language === "en" ? 
                          "4. How to finance a real estate investment ?"
                          :
                          "4. Comment financer un investissement immobilier ?"
                          }
                          <div
                            className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end   ${
                              active3 === "1" ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              className="h-4 w-4 flex justify-end text-end "
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 9L12 15L5 9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </button>
                      </h6>

                      <AnimateHeight
                        duration={300}
                        height={active3 === "1" ? "auto" : 0}
                      >
                        <div className=" text-white-dark text-[13px] text-start">
                          <div className="accordion-body !text-start !w-auto !mx-auto">
                          {language === "en" ? 
                          "You can use mortgages, personal savings, or investment partnerships."
                          :
                          "Vous pouvez utiliser des prêts hypothécaires, des économies personnelles, ou des partenariats d'investissement."
                          }
                          </div>
                        </div>
                      </AnimateHeight>
                    </div> */}



                  </div>
                </div>
                <div className="banner2-card">
                  <img src="/assets/img/innerpage/support-img.jpg" alt="" />
                  <div className="banner2-content-wrap">
                    <div className="banner2-content">
                      <div className="hotline-area">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            viewBox="0 0 28 28"
                          >
                            <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z" />
                            <path d="M15.865 7.46746C18.6983 7.4708 20.9943 9.76678 20.9976 12.6001C20.9976 12.7238 21.0468 12.8425 21.1343 12.93C21.2218 13.0175 21.3404 13.0666 21.4642 13.0666C21.5879 13.0666 21.7066 13.0175 21.7941 12.93C21.8816 12.8425 21.9308 12.7238 21.9308 12.6001C21.9269 9.2516 19.2134 6.53813 15.865 6.5343C15.6073 6.5343 15.3984 6.74318 15.3984 7.00088C15.3984 7.25859 15.6073 7.46746 15.865 7.46746Z" />
                            <path d="M15.865 10.267C17.1528 10.2686 18.1964 11.3122 18.198 12.6C18.198 12.7238 18.2472 12.8424 18.3347 12.9299C18.4222 13.0174 18.5409 13.0666 18.6646 13.0666C18.7883 13.0666 18.907 13.0174 18.9945 12.9299C19.082 12.8424 19.1312 12.7238 19.1312 12.6C19.1291 10.797 17.668 9.33589 15.865 9.33386C15.6073 9.33386 15.3984 9.54274 15.3984 9.80044C15.3984 10.0581 15.6073 10.267 15.865 10.267Z" />
                          </svg>
                        </div>
                        <div className="content">
                        {language === 'en' ? <span>To More Inquiry</span> : <span>Pour plus d'enquête</span>}
                          <h6>
                            <a href="tel:+96170707627">+96170707627</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ContactModal isOpen={isOpen} closeModal={closeModal} />
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
            </div>
          </div>
        </div>
      </div>
      <Newslatter />
      <Footer />
    </div>
  );
};

export default page;
