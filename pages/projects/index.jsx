import Breadcrumb from "@/components/components/common/Breadcrumb";
import Newslatter from "@/components/components/common/Newslatter";
import Footer from "@/components/components/footer/Footer";
import Header from "@/components/components/header/Header2";
import Topbar from "@/components/components/topbar/Topbar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Suspense, lazy } from "react";


import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import useProducts from "@/hooks/useProducts";
import FilterForm from "../../components/Site/dashboardLayout/FilterForm";
import ProjectCard from "../../components/Site/ProjectCard";
import { ImageEndpoint } from "../../utils/global";
import { useState , useEffect} from "react";
import { useLanguageContext } from "@/context/languageContext";

import { handleChange } from "../../utils/handleLanguage";

const Projects = ({
  country,
  baths,
  rooms,
  minPrice,
  maxPrice,
  type,
  city,
  beds,
  condition,
  lockoff,
  resale,
}) => {
  const router = useRouter;
  const { query } = router;

  const { language } = useLanguageContext();

  console.log(query, "Query data");

  const [page, setPage] = useState(1);

  const { mutate, data } = useProducts({
    page,
    country,
    baths,
    rooms,
    minPrice,
    maxPrice,
    type,
    city,
    beds,
    condition,
    lockoff,
    resale
  });

  const handlePageChange = (value) => {
    if (value === page) return;
    setPage(value);
    window.scrollTo(0, 0);
  };

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
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => handlePageChange(Math.max(1, page - 1))}
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
            onClick={() => typeof pageNumber === 'number' && handlePageChange(pageNumber)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 ${
              pageNumber === page ? 'bg-green-500 text-white' : 'text-green-500 hover:bg-green-100'
            } ${pageNumber === '...' ? 'cursor-default' : ''}`}
            disabled={pageNumber === '...'}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
          className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 ${
            page === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-green-500 hover:bg-green-100'
          }`}
          disabled={page === totalPages}
        >
          <ArrowForwardIcon />
        </button>
      </div>
    );
  };




  // --------------------------change langauge city or country-------------------
  const [lang, setLang] = useState();

  useEffect(() => {
    const languageMap = {
      en: {
        "Spain": "Spain",
        "Mexico": "Mexico",
        "North Cyprus": "North Cyprus",
        "Cyprus": "Chypre",
        "CYPRUS CITY": "Chypre",
        "Republic Dominica": "Dominican Republic",
        "Portugal": "Portugal",
        "Canada": "Canada" ,
        "United Arab Emirates":"United Arab Emirates"
      },
      fr: {
        "Spain": "Espagne",
        "Mexico": "Mexique",
        "North Cyprus": "Chypre du Nord",
        "CYPRUS": "Chypre",
        "CYPRUS CITY": "Chypre",
        "Republic Dominica": "République Dominique",
        "Portugal": "Portugal",
        "Canada": "Canada",
        "United Arab Emirates" : "Émirats arabes unis"
      }
    };
  
    if (languageMap[language] && languageMap[language][city]) {
      setLang(languageMap[language][city]);
    } else {
      setLang(languageMap.en[city] || city); // Default to English name if not found
    }
  }, [city, language]); // Dependencies to re-run effect when country or language changes
  



  return (
    <Suspense fallback={<div>

      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    </div>}>


    <div dir="ltr" className="">
      {/* <Topbar /> */}
      <Header />
      <Breadcrumb  pagename={language === "en" ? "LET'S WRITE YOUR STORY TOGETHER" : "ÉCRIVONS VOTRE HISTOIRE ENSEMBLE"} pagetitle={language === "en" ? city : lang}/>
      {/* <img src="/3.png" alt="logo" className="w-[240px] sm:w-[260px] mt-6 ml-20 " /> */}
      <FilterForm isProjectsPage={true} />
      <div className="package-grid-with-sidebar-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-12">
              <div className="list-grid-product-wrap mb-70 ">
                <div className="row gy-4">
                  {data?.books?.map((blog) => {
                    return <ProjectCard isProjectsPage={true} language={language} blog={blog} />;
                  })}
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <nav className="inner-pagination-area text-center">
                    {renderPagination()}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newslatter />
      <Footer/>
    </div>
    </Suspense>
  );
};

export default Projects;

export const getServerSideProps = async (context) => {
  const { baths, rooms, beds, minPrice, maxPrice, country, type, city } =
    context.query;

   const condition= context?.query?.condition ? context?.query?.condition : "";
   const resale= context?.query?.resale ? context?.query?.resale : "";

   const lockoff= context?.query?.lockoff ? context?.query?.lockoff : "";

  return {
    props: {
      country: country,
      city: city,
      baths: baths,
      rooms: rooms,
      minPrice: minPrice,
      maxPrice: maxPrice,
      type: type,
      beds: beds,
      condition:condition,
      resale,
      lockoff
    },
  };
};