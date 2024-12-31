

"use client"
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Breadcrumb from "@/components/components/common/Breadcrumb"
import Newslatter from "@/components/components/common/Newslatter";
// import QuantityCounter from "@/uitils/QuantityCounter";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Footer from "@/components/components/footer/Footer";
import Header from "@/components/components/header/Header2";
import useProducts from "../hooks/useProducts";
import ProjectCard from "../components/Site/ProjectCard";
import {useLanguageContext} from "../context/languageContext"
import ContactModal from "../components/Site/ContactModal";
import ActivitiesPlan from "../components/components/accordion/ActivitiesPlan";
import ProjectForm from "../components/Site/ProjectForm";

const Collaborations = () => {
  const [isOpenModalVideo, setOpenModalVideo] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/innerpage/ski-touring-01.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/innerpage/ski-touring-02.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/innerpage/ski-touring-03.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/innerpage/ski-touring-04.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/innerpage/ski-touring-05.jpg",
    },
    {
      id: 6,
      imageBig: "/assets/img/innerpage/ski-touring-06.jpg",
    },
  ];


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

const {language} = useLanguageContext()

  return (
    <div dir="ltr">
    <Header/>
    {/* <Breadcrumb pagename="Collaborations" pagetitle="Collaborations"/> */}
     <div className="package-details-area mb-120">
     <div className="video-section1 mb-20 hidden sm:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          // src="assets/video/production_.mp4"
          src="/Broker.mp4"
        ></video>
      </div>
      <div className="video-section1 mb-20 block sm:hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          // src="assets/video/production_.mp4"
          src="/BrokerSmall.mp4"
        ></video>
      </div>
      <div className="container">
        
        <div className="row g-xl-4 gy-5">
        {/* <img src="/3.png" alt="logo" className="w-[220px] sm:w-[260px] mb-10" /> */}
          <div className="col-xl-8">
            <div className="eg-tag2">
              <span>SAND N SEA REALTY</span>
            </div>
            {language === "en" ? 
            <h2>Join the <i>SAND N SEA REALTY</i> Referral Program</h2>
            :
            <h2>Rejoignez le Programme de Parrainage <i>SAND N SEA REALTY</i></h2>
            }
           
             {language === "en" ? 
            <h4>Seize an Unmatched Partnership Opportunityy</h4>
            :
            <h4>Saisissez une Opportunité de Partenariat Inégalée</h4>
             }
             {language === "en" ? 
            <p>We invite you to discover our exclusive referral program at <i>SAND N SEA REALTY</i>, designed for real estate advisors, agents, brokers, influencers, and investment companies.
            <br></br>This program allows you to leverage lucrative opportunities while expanding your professional network.
            <br></br>By joining our team, you will gain access to a selection of high-quality real estate projects, backed by our expertise and commitment to excellence.</p>
              :
              <p>Nous vous invitons à découvrir notre programme de parrainage exclusif chez <i>SAND N SEA REALTY</i>, conçu pour les conseillers immobiliers, agents, courtiers, influenceurs, et sociétés d'investissement. 
              <br></br>Ce programme vous permet de tirer parti d'opportunités lucratives tout en élargissant votre réseau professionnel. 
              <br></br>En rejoignant notre équipe, vous aurez accès à une sélection de projets immobiliers de haute qualité, soutenus par notre expertise et notre engagement envers l'excellence.
              </p>
             }
             <br></br>
            {language === "en" ? 
            <h2>A Partner of Choice</h2>
            :
            <h2>Un Partenaire de Choix</h2>
            }
           {language === "en" ? 
            <h4>Collaboration with Renowned Developers</h4>
            :
            <h4>Collaboration avec des Développeurs de Renommés</h4>
             }
            <div className="includ-and-exclud-area mb-20">
              <ul>
                <li><i className="bi bi-check-lg text-green-500" />Strategic Partnerships: At SAND N SEA REALTY, we work alongside top developers and builders in the industry to elevate our offerings.
                </li>
                <li><i className="bi bi-check-lg text-green-500" /> offering an impressive portfolio of successful projects</li>
                <li><i className="bi bi-check-lg text-green-500" /> Our specialists focus on premier tourist destinations</li>
                <li><i className="bi bi-check-lg text-green-500" /> such as Northern Cyprus, the Dominican Republic, Spain, Mexico, Portugal, Dubai, and much more</li>
              
              </ul>
              <ul className="exclud">
                <li><i className="bi bi-check-lg text-green-500" />With our unmatched know-how and in-depth market knowledge</li>
                <li><i className="bi bi-check-lg text-green-500" />we provide you with a crucial competitive edge to maximize your potential in the real estate sector.</li>
                <li><i className="bi bi-check-lg text-green-500" />By joining our exclusive referral program, you will receive strategic support to achieve your professional goals.</li>
                <li><i className="bi bi-check-lg text-green-500" />Together, let's make this journey a resounding success!</li>
               
              </ul>
            </div>
            <div className="highlight-tour mb-20">
              <h2>Personalized Support</h2>
              <h4>Dedicated Assistance for Your Success</h4>
              <ul>
                <li><span><i className="bi bi-check" /></span>As a partner in our exclusive referral program</li>
                <li><span><i className="bi bi-check" /></span>you can rely on our team of experts to manage the complex aspects of the sales process.</li>
                <li><span><i className="bi bi-check" /></span>We handle all real estate transactions, allowing you to focus on what you do best: growing your business.</li>
                <li><span><i className="bi bi-check" /></span>We are committed to providing exceptional after-sales service to ensure your clients' satisfaction.</li>
                {/* <li><span><i className="bi bi-check" /></span> Accomplishing challenging ascents and thrilling descents in natural settings.</li>
                <li><span><i className="bi bi-check" /></span> Feeling the elements and connecting with the mountains in a profound way.</li>
                <li><span><i className="bi bi-check" /></span> Experiencing the freedom of traveling through snowy wilderness on skis.</li> */}
              </ul>
            </div>

        <ActivitiesPlan/>
     


     
          </div>

          <div className="col-xl-4">

          <ProjectForm/>

       <section className="projectcard my-4">
        
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

                <div className=" sm:flex md:flex md:flex-row xl:flex xl:flex-col md:!space-x-2">

              <div className="banner-and-inquiry-form mb-10">
                <div className="banner2-card four">
                  <img src="/images/banner2-card-img2.png" alt="" />
                  <div className="banner2-content-wrap flex flex-col">
                    <div className="banner2-content">
                      <span>{language=== "en" ? "Savings worldwide" :"Des économies dans le monde entier"}</span>
                      <h3>{language=== "en" ? "50% Off":"50% de réduction"}</h3>
                      <p>{language=== "en" ? "For Your First Book" :"Pour votre premier livre"}</p>
                    </div>
                    <ContactModal isOpen={isOpen} closeModal={closeModal} />
                    <button onClick={openModal} className="primary-btn1 justify-center w-auto">
                    {language=== "en" ?  "Book Now": "Réservez maintenant"}
                    </button>
                  </div>
                </div>
              </div>


            <div className="banner2-card !mx-auto mb-10">
              <img src="/assets/img/innerpage/support-img.jpg" alt="" />
              <div className="banner2-content-wrap ">
                <div className="banner2-content ">
                  <div className="hotline-area ">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28">
                        <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z" />
                        <path d="M15.865 7.46746C18.6983 7.4708 20.9943 9.76678 20.9976 12.6001C20.9976 12.7238 21.0468 12.8425 21.1343 12.93C21.2218 13.0175 21.3404 13.0666 21.4642 13.0666C21.5879 13.0666 21.7066 13.0175 21.7941 12.93C21.8816 12.8425 21.9308 12.7238 21.9308 12.6001C21.9269 9.2516 19.2134 6.53813 15.865 6.5343C15.6073 6.5343 15.3984 6.74318 15.3984 7.00088C15.3984 7.25859 15.6073 7.46746 15.865 7.46746Z" />
                        <path d="M15.865 10.267C17.1528 10.2686 18.1964 11.3122 18.198 12.6C18.198 12.7238 18.2472 12.8424 18.3347 12.9299C18.4222 13.0174 18.5409 13.0666 18.6646 13.0666C18.7883 13.0666 18.907 13.0174 18.9945 12.9299C19.082 12.8424 19.1312 12.7238 19.1312 12.6C19.1291 10.797 17.668 9.33589 15.865 9.33386C15.6073 9.33386 15.3984 9.54274 15.3984 9.80044C15.3984 10.0581 15.6073 10.267 15.865 10.267Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <span>{language === "en" ? "To More Inquiry" :"Pour plus d'enquête"}  </span>
                      <h6><a className="hover:text-black" href="tel:+96170707627">+96170707627</a></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           



            </div>

          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          onClick={() => setOpenModalVideo(true)}
          isOpen={isOpenModalVideo}
          animationSpeed="350"
          videoId="r4KpWiK08vM"
          ratio="16:9"
          onClose={() => setOpenModalVideo(false)}
        />
      </React.Fragment>
      <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={images.map(function (elem) {
          return { src: elem.imageBig };
        })}
      />
     </div>
     <Newslatter/>
    <Footer/>
    </div>
  )
}

export default Collaborations
