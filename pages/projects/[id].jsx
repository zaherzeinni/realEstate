"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "@//components/components/common/Breadcrumb";
import RecommendatedPackage from "@/components/components/tourPackage/RecommendatedPackage";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Link from "next/link";
import DestinationActivitis from "@/components/components/destinationSlider/DestinationActivitis";
import DestinationLocationGallery from "@//components/components/destinationSlider/DestinationLocationGallery";

import Header from "@/components/components/header/Header2";
import Topbar from "@/components/components/topbar/Topbar";
import useProduct from "../../hooks/useProductDetails";
import useBlogs from "../../hooks/useBlogs";
import useProducts from "../../hooks/useProducts";
import ProjectCard from "@/components/Site/ProjectCard";

import { useRouter } from "next/router";
import { ImageEndpoint } from "../../utils/global";
import { handleChange } from "../../utils/handleLanguage";
import { useLanguageContext } from "@/context/languageContext";

import moment from "moment/moment";
import ProjectForm from "../../components/Site/ProjectForm";
import ContactModal from "../../components/Site/ContactModal";

import ActivitiesPlan from "../../components/components/accordion/ActivitiesPlan";
import Galary from "./galary";
import Accord from "../../components/components/accordion/Accord";
import Calc from "./calc";
import Footer from "../../components/components/footer/Footer";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";


const ProjectDetails = () => {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });

  const router = useRouter();
  const { language, reference, setReference } = useLanguageContext();
  const { id } = router.query;
  const { data } = useProduct({ id });
  const { data: blogs } = useBlogs({
    country: data?.book?.country,
  });

  const { data: products } = useProducts({
    page: 1,
    isfeatured: true,
  });

  // Set the reference when the project loads
  useEffect(() => {
    if (data) {
      setReference(data.book.reference); // Adjust according to your data structure
    }
  }, [data, setReference]);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setReference(data?.book?.reference);
  }

  function openModal(referenceid) {
    setReference(referenceid);
    setIsOpen(true);
  }

  const images2 = [
    {
      id: 6,
      imageBig: "/assets/img/innerpage/gallery-06.jpg",
    },
    {
      id: 1,
      imageBig: "/assets/img/innerpage/gallery-01.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/innerpage/gallery-02.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/innerpage/gallery-03.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/innerpage/gallery-04.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/innerpage/gallery-05.jpg",
    },
  ];

  const images = data?.book?.image?.map((img, index) => {
    return {
      id: index + 1,
      imageBig: `${ImageEndpoint}/${img}`,
      // Add more properties if needed
    };
  });

  console.log("images22", images2, "imagess", images);


  const [getUrl, setGetUrl] = useState();
  useEffect(() => {
    const currentUrl = window.parent.location.href;
    console.log(currentUrl, "urlllllllll");
    setGetUrl(currentUrl);
  });

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(window.location.toString());
    // message.info("URL copied to clipboard successfully")
  };




  // ---------------for language change country and type-------------------



  // const {
  //   country,
  //   type,
  //   // read_time,
  // } = data?.book;

   const country = data?.book?.country
   const type = data?.book?.type

  const [langCountry, setLangCountry] = useState();
  const [typeProper, setTypeProper] = useState();


  useEffect(() => {
    const languageMap = {
      en: {
        "Spain": "Spain",
        "Mexico": "Mexico",
        "North Cyprus": "North Cyprus",
        "Cyprus": "Chypre",
        "Republic Dominica": "Dominican Republic",
        "Portugal": "Portugal",
        "Canada": "Canada" ,
        "United Arab Emirates":"United Arab Emirates",
        "house":"house"
      },
      fr: {
        "Spain": "Espagne",
        "Mexico": "Mexique",
        "North Cyprus": "Chypre du Nord",
        "CYPRUS": "Chypre",
        "Republic Dominica": "République Dominique",
        "Portugal": "Portugal",
        "Canada": "Canada",
        "United Arab Emirates" : "Émirats arabes unis",
        "house":"maison"
      }
    };
  
    if (languageMap[language] && languageMap[language][country]) {
      setLangCountry(languageMap[language][country]);
    } else {
      setLangCountry(languageMap.en[country] || country); // Default to English name if not found
    }
  }, [country, language]); // Dependencies to re-run effect when country or language changes


  useEffect(() => {
    const TypePropertyMap = {
      en: {
        "house":"house"
      },
      fr: {
        "house":"maison"
      }
    };
  
    if (TypePropertyMap[language] && TypePropertyMap[language][type]) {
      setTypeProper(TypePropertyMap[language][type]);
    } else {
      setTypeProper(TypePropertyMap.en[type] || type); // Default to English name if not found
    }
  }, [type, language]); // Dependencies to re-run effect when type or language changes
  




  return (
    <div dir="ltr">
      <Header />

      <Breadcrumb
        pagename={
          language === "en"
            ? "Destination Details"
            : "Détails de la destination"
        }
        pagetitle={
          language === "en"
            ? "Destination Details"
            : "Détails de la destination"
        }
      />

      <Galary images={images} />
      <div className="destination-details-wrap mb-120 pt-1">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-7">
              <h2>
                {language === "en" ? data?.book?.title : data?.book?.titlefr}
              </h2>
              {/* <p>

                {language === "en" ? data?.book?.title : data?.book?.titlefr}
              </p> */}
              <div className="destination-gallery mb-20 mt-20 hidden">
                <div className="row g-4">
                  {images?.map((img, index) => {
                    return (
                      <div key={index} className="col-lg-5 col-sm-6">
                        <div className="gallery-img-wrap">
                          <img
                            className=" h-[700px] w-[900px] md:w-[300px] object-cover md:h-[300px]"
                            src={img?.imageBig}
                            alt=""
                          />
                          <a
                            data-fancybox="gallery-01"
                            onClick={() =>
                              setOpenimg({
                                openingState: true,
                                openingIndex: 1,
                              })
                            }
                          >
                            <i className="bi bi-eye" /> Discover Island
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p
                dangerouslySetInnerHTML={{
                  __html:
                    language === "en" ? data?.book?.story : data?.book?.storyfr,
                }}
              ></p>
              {language === "en" ? (
                <h2 className="!font-jost">Features</h2>
              ) : (
                <h2 className="!font-jost">Caractéristiques</h2>
              )}
              <ul className="">
                {data?.book?.services &&
                  Object.keys(data?.book?.services)?.map((feature, index) => {
                    if (data?.book?.services[feature]) {
                      return (
                        <li className="!font-jost" key={index}>
                          {feature}
                        </li>
                      );
                    }
                  })}
                {/* </ul> */}

                {/* <ul> */}
                {data?.book?.features &&
                  Object.keys(data?.book?.features)?.map((feature, index) => {
                    if (data?.book?.features[feature]) {
                      return (
                        <li className=" !font-jost" key={index}>
                          {feature}
                        </li>
                      );
                    }
                  })}
              </ul>

              <ActivitiesPlan />
              <Accord />
            </div>
            <div className="col-lg-5">
              <div className="destination-sidebar">
                <div className="destination-info mb-30">
                  <div className="single-info flex">
                    <span className="text-[17px]">
                      {language === "en" ? "Starting From:" : "À partir de:"}
                    </span>

                    <h5 className="ml-2 font-semibold text-[19px]">
                      {data?.book?.price}$
                    </h5>
                  </div>

                  <div className="single-info flex">
                    <span className="text-[17px]">Destination:</span>
                    
                      <h5 className="ml-2 font-semibold text-[19px]">
                        {langCountry} 
                        {/* {data?.book?.country} */}
                      </h5>
                   
        
                  </div>
                  <div className="single-info flex">
                    <span className="text-[17px]">
                      {language === "en" ? "City:" : "Ville:"}
                    </span>
                    {language === "en" ? (
                      <h5 className="ml-2 font-semibold text-[20px]">
                        {data?.book?.city}
                      </h5>
                    ) : (
                      <h5 className="ml-2 font-semibold text-[19px]">
                        {data?.book?.cityFr}
                      </h5>
                    )}
                  </div>
                  <div className="single-info flex">
                    <span className="text-[17px]">
                      {language === "en" ? "Type:" : "Taper:"}
                    </span>
                    {language === "en" ? (
                      <h5 className="ml-2 font-semibold text-[19px]">
                        {data?.book?.type}
                      </h5>
                    ) : (
                      <h5 className="ml-2 font-semibold text-[20px]">
                       {typeProper}
                       {/* {data?.book?.type} */}
                      </h5>
                    )}
                  </div>
                  <div className="single-info flex">
                    <span className="text-[17px]">
                      {language === "en" ? "Resale:" : "Revente:"}{" "}
                    </span>
                    <h5 className="ml-2 font-semibold text-[19px]">
                      {data?.book?.services?.resale
                        ? language === "en"
                          ? "True"
                          : "Vrai"
                        : language === "en"
                        ? "False"
                        : "Faux"}
                    </h5>
                  </div>
                  <div className="single-info flex">
                    <span className="text-[17px]">
                      {language === "en" ? "Lock off:" : "Verrouillage:"}
                    </span>
                    <h5 className="ml-2 font-semibold text-[19px]">
                      {data?.book?.services
                        ? language === "en"
                          ? "True"
                          : "Vrai"
                        : language === "en"
                        ? "False"
                        : "Faux"}
                    </h5>
                  </div>
                  <div className="single-info flex">
                    <span className="text-[17px]">
                      {language === "en" ? "Bathrooms:" : "Salles de bains:"}
                    </span>
                    <h5 className="ml-2 font-semibold text-[19px]">
                      {data?.book?.details?.baths}
                    </h5>
                  </div>
                  <div className="single-info flex">
                    <span className="text-[17px]">
                      {language === "en" ? "Rooms:" : "Chambres:"}
                    </span>
                    <h5 className="ml-2 font-semibold text-[19px]">
                      {data?.book?.details?.rooms}
                    </h5>
                  </div>
                  <div className="single-info flex">
                    <span className="text-[17px]">
                      {language === "en" ? "Beds:" : "Lits:"}{" "}
                    </span>
                    <h5 className="ml-2 font-semibold text-[19px]">
                      {data?.book?.details?.beds}
                    </h5>
                  </div>

                  <div className="single-info flex">
                    <span className="text-[17px]">
                      {language === "en" ? "Furnished:" : "Meublée:"}
                    </span>
                    <h5 className="ml-2 font-semibold text-[19px]">
                      {data?.book?.services?.Furnished
                        ? language === "en"
                          ? "True"
                          : "Vrai"
                        : language === "en"
                        ? "False"
                        : "Faux"}
                    </h5>
                  </div>

                  <div className="single-info flex">
                    <span className="text-[17px]">
                      {language === "en"
                        ? "Parking Lots:"
                        : "Parcs de stationnement:"}{" "}
                    </span>
                    <h5 className="ml-2 font-semibold text-[19px]">
                      {data?.book?.details?.parkings}
                    </h5>
                  </div>

                  <div className="single-info flex">
                    <span className="text-[17px]">
                      {" "}
                      {language === "en"
                        ? "Reference:"
                        : "Parcs de stationnement:"}
                    </span>
                    <h5 className="ml-2 font-semibold text-[19px]">
                      {data?.book?.reference}
                    </h5>
                  </div>

                  <div className="single-info flex">
                    <span className="text-[17px]">Condition:</span>
                    <h5 className="ml-2 font-semibold text-[19px]">
                      {language === "en"
                        ? data?.book?.condition
                        : "Ready"
                        ? "Prêt"
                        : "Construction"}
                    </h5>
                  </div>

                  {/* ------------------Social Media Icons------------------ */}

                  <div className="my-2 mt-">
                    <div className="mx-1 my-1">
                      {language === "en"
                        ? "Share this property"
                        : "Partager cette propriété"}
                    </div>
                    <div className="justify-center flex  flex-col items-start space-y-1 mx-auto">
                      <div className=" flex">
                      <Link
                        href={`https://api.whatsapp.com/send?phone=&text=Salam, please check this product. %0D%0A *${data?.book?.reference}* %0D%0A *Price:* ${data?.book?.price} $ %0D%0A *URL:* ${getUrl} %0D%0A Thank you!   `}
                        target="_blank"
                      >
                        <WhatsappIcon className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500" />
                      </Link>

                      <FacebookShareButton
                        url={getUrl} //eg. https://www.example.com
                        quotes="qoutess" //"Your Quotes"
                        hashtag="@" // #hashTag
                      >
                        <FacebookIcon className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500" />
                      </FacebookShareButton>

                      <FacebookMessengerShareButton
                        url={getUrl} //eg. https://www.example.com
                        quotes="qoutess" //"Your Quotes"
                        hashtag="@" // #hashTag
                      >
                        <FacebookMessengerIcon className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500" />
                      </FacebookMessengerShareButton>

                      <EmailShareButton
                        url={getUrl} //eg. https://www.example.com
                        quotes="qoutess" //"Your Quotes"
                        hashtag="@" // #hashTag
                      >
                        <EmailIcon className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500" />
                      </EmailShareButton>

                      <TelegramShareButton
                        url={getUrl} //eg. https://www.example.com
                        quotes="qoutess" //"Your Quotes"
                        hashtag="@" // #hashTag
                      >
                        <TelegramIcon className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500" />
                      </TelegramShareButton>
                      </div>

                      <div className="flex">
                      <a
                        href="https://www.linkedin.com/share?url=https://www.example.com/my-page"
                        target="_blank"
                      >
                        <img
                          src="/linkedin.png"
                          className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500"
                        />
                      </a>

                      <a
                        href="https://www.youtube.com/share?url=https://www.example.com/my-page"
                        target="_blank"
                      >
                        <img
                          src="/youtube.png"
                          className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/share?url=https://www.example.com/my-page"
                        target="_blank"
                      >
                        <img
                          src="/insta.png"
                          className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500"
                        />
                      </a>

                      <a
                        href="https://www.tiktok.com/share?url=https://www.example.com/my-page"
                        target="_blank"
                      >
                        <img
                          src="/tiktok.png"
                          className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500"
                        />
                      </a>

                      <button
                        onClick={copyToClipboard}
                        className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500"
                      >
                        <img src="/copylink-s.jpg" alt="copylink" />
                      </button>
                    </div>
                    </div>


                  </div>

                  <Calc price={data?.book?.price} />
                  <div className="mt-3">
                    <ProjectForm reference={data?.book?.reference} />
                  </div>

                  <div className="single-widget mb-30 mt-5">
                    {blogs?.books?.length > 0 && (
                      <h5 className="widget-title">
                        {language === "en" ? "Recent Post" : "Article récent"}
                      </h5>
                    )}

                    {blogs?.books?.map((blog) => {
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
                        <div className="recent-post-widget mb-20">
                          <div className="recent-post-img mb-1">
                            <Link href={`/blogs/${_id}`}>
                              <img
                                src={`${ImageEndpoint}/${image[0]}`}
                                // src="/assets/img/innerpage/recent-post-img1.png"
                                alt=""
                                className="w-[300px] h-[200px]"
                              />
                            </Link>
                          </div>

                          <div className="recent-post-content font-rubik ">
                            <Link
                              className=" px-2 text-black"
                              href={`/blogs/${_id}`}
                            >
                              {/* 20 July, 2023 */}
                            </Link>
                            <Link
                              className=" -ml-4  text-[#100c08] text-opacity-50 hover:text-primary"
                              href={`/blogs?country=${category}`}
                            >
                              {/* {language === "en"
                                ? `${category}`
                                : handleChange(category)} */}
                                {langCountry}
                            </Link>

                            <h5>
                              <Link
                                href={`/blogs/${_id}`}
                                className="!text-black hover:text-primary"
                              >
                                {language === "en"
                                  ? title?.slice(0, 30)
                                  : titlefr?.slice(0, 30)}
                                ....
                              </Link>
                            </h5>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <section className="projectcard">
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

            <ContactModal isOpen={isOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>

      {images && images?.length && (
        <Lightbox
          className="img-fluid"
          open={isOpenimg.openingState}
          plugins={[Fullscreen]}
          index={isOpenimg.openingIndex}
          close={() => setOpenimg(false)}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
          slides={images?.map(function (elem) {
            return { src: elem.imageBig };
          })}
        />
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetails;
