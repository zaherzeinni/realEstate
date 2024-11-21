

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
import Accord from "../components/components/accordion/Accord";
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
        
        {/* <div className="row">
          <div className="co-lg-12">
            <div className="package-img-group mb-50">
              <div className="row align-items-center g-3">
                
                <div className="col-lg-6 hidden">
                  <div className="gallery-img-wrap">
                  <div className="col-6">
                      <div className="gallery-img-wrap active">
                        <img src="/assets/img/innerpage/ski-touring-05.jpg" alt="" />
                        <a data-fancybox="gallery-01" style={{ cursor: "pointer" }}
onClick={() => setOpenModalVideo(true)}><i className="bi bi-play-circle" /> Watch Video</a>
                      </div>
                    </div>

                    <a ><i className="bi bi-eye"  onClick={() =>setOpenimg({ openingState: true, openingIndex: 0 }) }/></a>
                  </div>
                  
                </div>
         
              
              </div>
            </div>
          </div>
        </div> */}
        <div className="row g-xl-4 gy-5">
        {/* <img src="/3.png" alt="logo" className="w-[220px] sm:w-[260px] mb-10" /> */}
          <div className="col-xl-8">
            <div className="eg-tag2">
              <span>Ski touring</span>
            </div>
            <h2>Powder Quest: Exploring Snow-Covered Landscapes on Skis</h2>
            <div className="tour-price">
              <h3>$175/</h3><span>per person</span>
            </div>
            <ul className="tour-info-metalist">
              <li>
                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7ZM7 3.0625C7 2.94647 6.95391 2.83519 6.87186 2.75314C6.78981 2.67109 6.67853 2.625 6.5625 2.625C6.44647 2.625 6.33519 2.67109 6.25314 2.75314C6.17109 2.83519 6.125 2.94647 6.125 3.0625V7.875C6.12502 7.95212 6.14543 8.02785 6.18415 8.09454C6.22288 8.16123 6.27854 8.2165 6.3455 8.25475L9.408 10.0048C9.5085 10.0591 9.62626 10.0719 9.73611 10.0406C9.84596 10.0092 9.93919 9.93611 9.99587 9.83692C10.0525 9.73774 10.0682 9.62031 10.0394 9.50975C10.0107 9.39919 9.93982 9.30426 9.842 9.24525L7 7.62125V3.0625Z">
                  </path>
                </svg>
                4 Days / 5 Night
              </li>
              <li>
                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 7C7.92826 7 8.8185 6.63125 9.47487 5.97487C10.1313 5.3185 10.5 4.42826 10.5 3.5C10.5 2.57174 10.1313 1.6815 9.47487 1.02513C8.8185 0.368749 7.92826 0 7 0C6.07174 0 5.1815 0.368749 4.52513 1.02513C3.86875 1.6815 3.5 2.57174 3.5 3.5C3.5 4.42826 3.86875 5.3185 4.52513 5.97487C5.1815 6.63125 6.07174 7 7 7ZM14 12.8333C14 14 12.8333 14 12.8333 14H1.16667C1.16667 14 0 14 0 12.8333C0 11.6667 1.16667 8.16667 7 8.16667C12.8333 8.16667 14 11.6667 14 12.8333Z">
                  </path>
                </svg>
                Max People : 13
              </li>
              <li>
                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14 0.43748C14 0.372778 13.9856 0.308889 13.9579 0.250418C13.9302 0.191947 13.8898 0.140348 13.8398 0.0993396C13.7897 0.0583312 13.7312 0.0289339 13.6684 0.0132656C13.6057 -0.00240264 13.5402 -0.00395173 13.4768 0.00872996L9.1875 0.86623L4.89825 0.00872996C4.84164 -0.00258444 4.78336 -0.00258444 4.72675 0.00872996L0.35175 0.88373C0.252608 0.903546 0.163389 0.957088 0.099263 1.03525C0.0351366 1.11342 6.10593e-05 1.21138 0 1.31248L0 13.5625C3.90711e-05 13.6272 0.0144289 13.6911 0.0421328 13.7495C0.0698367 13.808 0.110165 13.8596 0.160212 13.9006C0.210259 13.9416 0.268779 13.971 0.331556 13.9867C0.394332 14.0024 0.459803 14.0039 0.52325 13.9912L4.8125 13.1337L9.10175 13.9912C9.15836 14.0025 9.21664 14.0025 9.27325 13.9912L13.6482 13.1162C13.7474 13.0964 13.8366 13.0429 13.9007 12.9647C13.9649 12.8865 13.9999 12.7886 14 12.6875V0.43748ZM4.375 12.3287V0.97123L4.8125 0.88373L5.25 0.97123V12.3287L4.89825 12.2587C4.84165 12.2474 4.78335 12.2474 4.72675 12.2587L4.375 12.3287ZM8.75 13.0287V1.67123L9.10175 1.74123C9.15836 1.75254 9.21664 1.75254 9.27325 1.74123L9.625 1.67123V13.0287L9.1875 13.1162L8.75 13.0287Z">
                  </path>
                </svg>
                Italy &amp; France.
              </li>
            </ul>
            <p>Ski touring, also known as backcountry skiing, involves traveling across snow-covered terrain using skis. It's a blend of skiing and hiking, allowing access to remote areas not reachable by ski lifts. Skiers ascend slopes using climbing skins on their skis or specialized equipment like splitboards, then descend using skis. This activity offers a unique opportunity to explore untouched wilderness, experience serene landscapes, and challenge oneself physically and mentally while embracing the thrill of the mountains. Safety measures, including avalanche awareness and carrying appropriate gear, are paramount in ski touring due to the inherent risks of backcountry environments.</p>
            <h4>Included and Excluded</h4>
            <div className="includ-and-exclud-area mb-20">
              <ul>
                <li><i className="bi bi-check-lg" /> Ski touring involves exploring remote, off-piste terrains away from ski resorts.</li>
                <li><i className="bi bi-check-lg" /> A full-body workout combining skiing, hiking, and endurance.</li>
                <li><i className="bi bi-check-lg" /> Engaging in challenging ascents and thrilling descents on various terrains.</li>
                <li><i className="bi bi-check-lg" /> Enjoying pristine landscapes and serene natural environments.</li>
                <li><i className="bi bi-check-lg" /> Carrying safety gear (avalanche transceivers, shovels, probes) and knowledge of rescue procedures.</li>
              </ul>
              <ul className="exclud">
                <li><i className="bi bi-x-lg" /> Ski touring typically avoids the amenities and maintained slopes found in ski resorts.</li>
                <li><i className="bi bi-x-lg" /> It steers clear of crowded slopes and lift systems.</li>
                <li><i className="bi bi-x-lg" /> Ski touring often involves more challenging and varied terrains, less suitable for beginners.</li>
                <li><i className="bi bi-x-lg" /> In case of emergencies, immediate assistance may not be readily available compared to ski resorts.</li>
                <li><i className="bi bi-x-lg" />  Unlike ski resorts, conditions in backcountry areas can vary significantly and may not be groomed or controlled.</li>
              </ul>
            </div>
            <div className="highlight-tour mb-20">
              <h4>Highlights of the Tour</h4>
              <ul>
                <li><span><i className="bi bi-check" /></span> Immersion in breathtaking, untouched landscapes away from crowded ski resorts.</li>
                <li><span><i className="bi bi-check" /></span> Combining endurance and skill while exploring diverse terrains.</li>
                <li><span><i className="bi bi-check" /></span> Accessing pristine, less-traveled areas for a unique adventure.</li>
                <li><span><i className="bi bi-check" /></span> Strengthening camaraderie among fellow skiers in a shared outdoor experience.</li>
                <li><span><i className="bi bi-check" /></span> Accomplishing challenging ascents and thrilling descents in natural settings.</li>
                <li><span><i className="bi bi-check" /></span> Feeling the elements and connecting with the mountains in a profound way.</li>
                <li><span><i className="bi bi-check" /></span> Experiencing the freedom of traveling through snowy wilderness on skis.</li>
              </ul>
            </div>

        <ActivitiesPlan/>
     


            <div className="faq-content-wrap mb-80">
 <Accord/>
            </div>
     
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
                  <div className="banner2-content-wrap">
                    <div className="banner2-content">
                      <span>{language=== "en" ? "Savings worldwide" :"Des économies dans le monde entier"}</span>
                      <h3>{language=== "en" ? "50% Off":"50% de réduction"}</h3>
                      <p>{language=== "en" ? "For Your First Book" :"Pour votre premier livre"}</p>
                    </div>
                    <ContactModal isOpen={isOpen} closeModal={closeModal} />
                    <button onClick={openModal} className="primary-btn1">
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
                      <span>To More Inquiry</span>
                      <h6><a href="tel:+990737621432">+990-737 621 432</a></h6>
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
