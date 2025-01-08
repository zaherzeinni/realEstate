import Link from "next/link";
import React from "react";
import { useLanguageContext } from "@/context/languageContext";
import { WhatsApp as WhatsAppIcon } from "@mui/icons-material";

import ContactModal from "../../../components/Site/ContactModal"
import { useState, useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

import Modal from "../../components/Modal"
const Footer = ({ style }) => {


  const { language } = useLanguageContext();







// --------------------for whatsAPP text robot MODAL-------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simulate user login for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoggedIn(true); // Simulate login after 2 seconds
      setIsModalOpen(true); // Open modal after login
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  
  const [isOpenW, setIsOpenW] = useState(false);

  function closeModalW() {
    setIsOpenW(false);
  }

  function openModalW() {
    setIsOpenW(true);
  }
// --------------------------------------end of whatsApp code-------------------------


  
  let [isOpen, setIsOpen] = useState(false);


  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }



  const TopButton = () => {
    window.scrollTo({ top: 0, behavior: 
      'smooth' 
    })}


  
  return (
    <footer className={`footer-section ${style}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            fill="currentColor"
            className="bi bi-arrow-up-circle mb-2 pt-1 mr-2 ml-auto hover:cursor-pointer text-white  hover:scale-125 duration-500" 
            viewBox="0 0 16 16"
            onClick={TopButton}
            > 
            
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" fill=""></path> 
            </svg>

      <div className="container">
        <div className="footer-top">
          <div className="row g-lg-4 gy-5 justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link href="/">
                    <img src="/1.png" alt="logo" className="w-[240px]" />
                  </Link>
                </div>
                <h3>
                {language === "en" ? "would you like to" : "Aimeriez-Vous"} 
                  <span>
                   <span className="mr-2"></span>{language === "en" ? "Speak With" : "Parler Avec"}  <br></br>
                  </span>
                  {language === "en" ?   "An Expert" : "Un Expert"}<span>?</span>
                </h3>
                <ContactModal isOpen={isOpen} closeModal={closeModal} />
                <button onClick={openModal} className="primary-btn1 mt-3">
                 {language === "en" ? "Consult Us":"Consulter Nous"} 
                </button>
      
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
              <div className="footer-widget">
                <div className="widget-title">
                  <h5>{language === "en" ? "Quick Link" : "Lien rapide"}</h5>
                </div>
                <ul className="widget-list">
                  <li>
                    <Link href="/about">
                      {language === "en" ? " About Us" : "À propos de nous"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects?city=&country=&baths=0=&beds=0&minPrice=0&maxPrice=10000000000000&type=&rooms=0&beds=0">
                      Destinations
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/meet-the-team">
                      {language === "en"
                        ? "Meet Our Guide"
                        : "Rencontrez notre guide"}
                    </Link>
                  </li>
                  <li>
                    {/* contact#map */}


                  
                  <Link href="https://www.google.com/maps/place/33%C2%B046'53.7%22N+35%C2%B029'26.7%22E/@33.7816518,35.481065,4138m/data=!3m1!1e3!4m4!3m3!8m2!3d33.781574!4d35.490757?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="primary-btn1 !text-white !text-md !font-semibold mt-2">
                  {language === "en" ? "Go To Map" :"Aller à la carte"}
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-md-start">
              <div className="footer-widget">
                <div className="single-contact mb-30">
                  <div className="widget-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <g clipPath="url(#clip0_1139_225)">
                        <path d="M17.5107 13.2102L14.9988 10.6982C14.1016 9.80111 12.5765 10.16 12.2177 11.3262C11.9485 12.1337 11.0514 12.5822 10.244 12.4028C8.44974 11.9542 6.0275 9.62168 5.57894 7.73772C5.3098 6.93027 5.84808 6.03314 6.65549 5.76404C7.82176 5.40519 8.18061 3.88007 7.28348 2.98295L4.77153 0.470991C4.05382 -0.156997 2.97727 -0.156997 2.34929 0.470991L0.644745 2.17553C-1.0598 3.96978 0.82417 8.72455 5.04066 12.941C9.25716 17.1575 14.0119 19.1313 15.8062 17.337L17.5107 15.6324C18.1387 14.9147 18.1387 13.8382 17.5107 13.2102Z" />
                      </g>
                    </svg>
                    <h5 className="mr-20">
                      {language === "en" ? "More Inquiry" : "Plus de demande"}
                    </h5>
                  </div>
                  <a href="tel:+96170707627">+96170707627</a>
                </div>
                <div className="single-contact mb-35">
                  <div className="widget-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <g clipPath="url(#clip0_1139_218)">
                        <path d="M6.56266 13.2091V16.6876C6.56324 16.8058 6.60099 16.9208 6.67058 17.0164C6.74017 17.112 6.83807 17.1832 6.9504 17.22C7.06274 17.2569 7.18382 17.2574 7.29648 17.2216C7.40915 17.1858 7.5077 17.1155 7.57817 17.0206L9.61292 14.2516L6.56266 13.2091ZM17.7639 0.104306C17.6794 0.044121 17.5799 0.00848417 17.4764 0.00133654C17.3729 -0.00581108 17.2694 0.015809 17.1774 0.0638058L0.302415 8.87631C0.205322 8.92762 0.125322 9.00617 0.0722333 9.1023C0.0191447 9.19844 -0.00472288 9.30798 0.00355981 9.41749C0.0118425 9.52699 0.0519151 9.6317 0.11886 9.71875C0.185804 9.80581 0.276708 9.87143 0.380415 9.90756L5.07166 11.5111L15.0624 2.96856L7.33141 12.2828L15.1937 14.9701C15.2717 14.9963 15.3545 15.0051 15.4363 14.996C15.5181 14.9868 15.5969 14.9599 15.6672 14.9171C15.7375 14.8743 15.7976 14.8167 15.8433 14.7482C15.8889 14.6798 15.9191 14.6021 15.9317 14.5208L17.9942 0.645806C18.0094 0.543093 17.996 0.438159 17.9554 0.342598C17.9147 0.247038 17.8485 0.164569 17.7639 0.104306Z" />
                      </g>
                    </svg>
                    <h5>
                      {language === "en" ? "Send Mail" : "Envoyer un courrier"}
                    </h5>
                  </div>
                  <a href="mailto:info@sandnsearealty.ca">info@sandnsearealty.ca</a>
                </div>
                <div className="single-contact">
                  <div className="widget-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <g clipPath="url(#clip0_1137_183)">
                        <path d="M14.3281 3.08241C13.2357 1.19719 11.2954 0.0454395 9.13767 0.00142383C9.04556 -0.000474609 8.95285 -0.000474609 8.86071 0.00142383C6.70303 0.0454395 4.76268 1.19719 3.67024 3.08241C2.5536 5.0094 2.52305 7.32408 3.5885 9.27424L8.05204 17.4441C8.05405 17.4477 8.05605 17.4513 8.05812 17.4549C8.25451 17.7963 8.60632 18 8.99926 18C9.39216 18 9.74397 17.7962 9.94032 17.4549C9.94239 17.4513 9.9444 17.4477 9.9464 17.4441L14.4099 9.27424C15.4753 7.32408 15.4448 5.0094 14.3281 3.08241ZM8.99919 8.15627C7.60345 8.15627 6.46794 7.02076 6.46794 5.62502C6.46794 4.22928 7.60345 3.09377 8.99919 3.09377C10.3949 3.09377 11.5304 4.22928 11.5304 5.62502C11.5304 7.02076 10.395 8.15627 8.99919 8.15627Z" />
                      </g>
                    </svg>
                    <h5>{language === "en" ? "Address" : "Adresse"}</h5>
                  </div>
                  <a target="_blank" href="https://www.google.com/maps/place/33%C2%B046'53.7%22N+35%C2%B029'26.7%22E/@33.7816518,35.481065,4138m/data=!3m1!1e3!4m4!3m3!8m2!3d33.781574!4d35.490757?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D">
                  Dar Aytam , Aramon chwouaifat  <br /> 
                  El Quobbeh Aalay, {language === "en" ? "Lebanon ":"Liban"}
                  </a>
                </div>
              </div>              
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-end justify-content-sm-end">
              <div className="footer-widget -mr-20">
                <div className="widget-title">
                  <h5>
                    {language === "en" ? "We Are Here" : "Nous sommes là"}
                  </h5>
                </div>
               
                <div className="payment-partner">
                  <div className="widget-title">
                    <h5>{language === "en" ? "Follow Us":"Suivez-nous"}</h5>
                  </div>
                  <div className="1icons">
                    <ul>
                      <li>


                  {/* ------------------Social Media Icons------------------ */}

                  <div className="my-2  mt-">
                    <div className="justify-start flex  items-start mx-auto">
                      <div className=" flex space-x-1">
                      <Link
                        href={`https://api.whatsapp.com/send?phone=&text=Salam`}
                        target="_blank"
                      >
                        <WhatsappIcon className="w-[35px] h-[35px] hover:scale-110 duration-500" />
                      </Link>

                      <FacebookShareButton
                        url='#' //eg. https://www.example.com
                        quotes="qoutess" //"Your Quotes"
                        hashtag="@" // #hashTag
                      >
                        <FacebookIcon className="w-[35px] h-[35px] hover:scale-110 duration-500" />
                      </FacebookShareButton>

                      <a
                        href="https://www.tiktok.com/share?url=https://www.example.com/my-page"
                        target="_blank"
                      >
                        <img
                          src="/tiktok.png"
                          className="w-[35px] h-[35px] hover:scale-110 duration-500"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/share?url=https://www.example.com/my-page"
                        target="_blank"
                      >
                        <img
                          src="/linkedin.png"
                          className="w-[35px] h-[35px] hover:scale-110 duration-500"
                        />
                      </a>

                      <a
                        href="https://www.youtube.com/share?url=https://www.example.com/my-page"
                        target="_blank"
                      >
                        <img
                          src="/youtube.png"
                          className="w-[35px] h-[35px] hover:scale-110 duration-500"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/share?url=https://www.example.com/my-page"
                        target="_blank"
                      >
                        <img
                          src="/insta.png"
                          className="w-[35px] h-[35px] hover:scale-110 duration-500"
                        />
                      </a>


                      </div>

                    </div>


                  </div>


                        {/* <img
                          src="/assets/img/home1/icon/visa-logo.svg"
                          alt=""
                        /> */}
                      </li>
                      <li className="-mb-5 mt-20">
                        {/* <img
                          src="/assets/img/home1/icon/stripe-logo.svg"
                          alt=""
                        /> */}
  {language === "en" ? 
      <p><b className="text-white opacity-80">Your Dream Property Awaits You!</b><br></br>Find a high-quality real estate development personalized for your needs in your ideal location!</p>
      :
      <p><b className="text-white opacity-80">Votre Propriété De Rêve Vous Attend!</b><br></br>trouvez un développement immobilier de haute qualité personnalisé en fonction de vos besoins dans votre emplacement idéal!</p>
      }

                      </li>
                      <li>
                     
                        <button onClick={openModal} className="primary-btn1 -mt-5">{language === "en" ? "Request Our Brochure" : "Demandez Notre Brochure"}</button>

                      </li>
                      <li>
                      </li>
                      <li>

                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center">
                  {language === "en"
                    ? "Disclaimer: While every care has been taken in the preparation of this website, the particulars and information in it are not to be construed as containing any representations upon which any interested party is entitled to rely. All illustrations, drawings and photographs are for professional presentation purposes, are indicative only and are not necessarily to scale. All information and material is subject to change without notice."
                    : "Avertissement : Bien que tous les soins aient été apportés à la préparation de ce site web, les détails et les informations qu'il contient ne doivent pas être interprétés comme des représentations sur lesquelles toute partie intéressée est en droit de se fier. Toutes les illustrations, dessins et photographies sont destinés à des fins de présentation professionnelle, sont indicatifs uniquement et ne sont pas nécessairement à l'échelle. Toutes les informations et matériaux sont susceptibles de changer sans préavis."}
                </p>

        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-12 d-flex flex-md-row flex-column align-items-center justify-content-md-between justify-content-center flex-wrap gap-3">
              {/* <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      fill="currentColor"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/">
                    <i className="bx bxl-pinterest-alt" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
              </ul> */}
              {/* <p>
                ©Copyright 2023 TripRex | Design By{" "}
                <a href="https://www.egenslab.com/">Egens Lab</a>
              </p> */}

<p className="flex text-center mx-auto">
   {language==="en" ? <span>   Do you want to buy a <b>&nbsp;PROPERTY</b>&nbsp;with <b>&nbsp;CRYPTOCURRENCY ?&nbsp;</b> </span> 
   :
   <span>   Vous voulez acheter une <b>&nbsp;PROPRIÉTÉ </b>&nbsp;avec des <b>&nbsp;CRYPTOMONNAIE ?</b> </span> 
  }
      
      <span onClick={openModal} className=" text-primary2 hover:underline hover:text-primary hover:cursor-pointer">{language==="en" ? "CONTACT US NOW!!" : "CONTACTEZ-NOUS MAINTENANT !!"}</span>
        </p>
              <div className="footer-right text-center mx-auto lg:mx-0 lg:text-justify">
                <ul>
                  <li >
                    <a href="/privacy">{language === "en" ? "Privacy Policy" :"politique"}</a>
                  </li>
                  <li>
                    <a href="/terms"> {language === "en" ? "Terms & Condition" :"Conditions & générales"}</a>
                  </li>
                  <li>
                    <a href="/policygdpr"> {language === "en" ? "Policy & GDPR":"Politique & GDPR"}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* ---------------whatsAPP with text automated------------------ */}
      <a
        href="https://wa.me/+96170707627" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
       
      </a>
  <div className="fixed z-50">
      <Modal
        isOpenW={isModalOpen}
        onCloseW={handleCloseModal}
        message={language=== "en" ? "Welcome to our website! If you require assistance, please feel free to respond to this message. Our team is here and ready to assist you." : "Bienvenue sur notre site ! Si vous avez besoin d'aide, n'hésitez pas à répondre à ce message. Notre équipe est à votre disposition et prête à vous assister." }
      />
</div>


{/* 

    <div className="flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to My Website</h1>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        message="You have successfully logged in!"
      />
    </div> */}




    </footer>
  );
};

export default Footer;
