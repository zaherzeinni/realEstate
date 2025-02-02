import Link from "next/link";
import Breadcrumb from "@/components/components/common/Breadcrumb";
import Newslatter from "@/components/components/common/Newslatter";
import Footer from "@/components/components/footer/Footer";
import Header from "@/components/components/header/Header2";
import Topbar from "@/components/components/topbar/Topbar";
import useBlog from "../../hooks/useService";
import { useRouter } from "next/router";
import { ImageEndpoint } from "../../utils/global";
import { useLanguageContext } from "@/context/languageContext";
import moment from "moment/moment"
import ProjectForm from "../../components/Site/ProjectForm";


import ContactModal from "../../components/Site/ContactModal";
import ProjectCard from "../../components/Site/ProjectCard";
import { useState } from "react";
import useProducts from "@/hooks/useProducts"

import ServicesBuying from "../../components/components/accordion/ServicesBuying";
import ServicesSelling from "../../components/components/accordion/ServicesSelling";
import ServicesBankF from "../../components/components/accordion/ServicesBankF";
import ServicesLegal from "../../components/components/accordion/ServicesLegal";
import ServicesFurniture from "../../components/components/accordion/ServicesFurniture";
import ServicesManagement from "../../components/components/accordion/ServicesManagement";
import ServicesTranslation from "../../components/components/accordion/ServicesTranslation";
import ServicesResidence from "../../components/components/accordion/ServicesResidence";
import ServicesUnder from "../../components/components/accordion/ServicesUnder";
import ServicesFinancial from "../../components/components/accordion/ServicesFinancial";

export const metadata = {
  title: "TripRex - Tour & Travel Agency  NextJs Template",
  description:
    "TripRex is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const BlogDetailsPage = () => {
  const { language,setReference } = useLanguageContext();
  const router = useRouter();
  const { id } = router.query;
  const { data } = useBlog({ id });
  console.log("data-->", data?.book);

  const { data: products } = useProducts({
    page: 1,
    isfeatured: true,
  });


  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setReference("");
  }

  function openModal(referenceid) {
    setIsOpen(true);
    setReference(referenceid);
  }



  
  return (
    <div dir="ltr">
      {/* <Topbar /> */}
      <Header />
      <Breadcrumb pagename={language === 'en' ? "Service Details" : "Détails des services"} pagetitle={language === 'en' ? "Service Details" : "Détails des services"} />

      <div className="blog-details-section pt-120 mb-120 flex flex-col-reverse xl:flex1 xl:flex-row-reverse1">


             
   


   {/* ----------------- here was the ProjectForm--------------------------- */}

        <div className="container  ">
     
          <div className="row g-lg-4 gy-5 justify-content-center">
            <div className="col-lg-8">
              

              
              <div className="post-thumb mb-6">
                <img
                className=" !w-full  !h-[360px] object-contai"
                  src={`${ImageEndpoint}/${data?.book?.image[0]}`}
                 //  src="/assets/img/innerpage/blog-standard-img2.jpg"
                  alt=""
                />
              </div>

           



              <div className="post-title mb-10">

              {/* style={{fontFamily:'Jost, sans-serif'}} */}
                <h2 className=" !text-[23px] sm:!text-[30px] md:!text-[35px]">
                {language === 'en' ? data?.book?.title : data?.book?.titlefr}

                </h2>
                <h3 className="!text-[#63ab45] !text-[18px] sm:!text-[25px] md:!text-[30px]">
                  
                  
                  
                  {language === 'en' ? data?.book?.subtitle : data?.book?.subtitlefr}
                   </h3>
              </div>

              <div className="blog-meta two mb-6 ">
                <div className="author-area ">
                  {/* <div className="author-img">
                    <img src={`${ImageEndpoint}/${data?.book?.image[0]}`}
                    // "/assets/img/innerpage/blog-meta-author-img.png"
                     alt="" />
                  </div> */}
                  <div className="author-content !text-md !font-semibold sm:!text-lg !text-[#63ab45]">
                    {/* <h6>By, <Link href="/blog">Admin</Link></h6> */}
                    
             
                    <div>
                    {data?.book?.category}      
                    </div>
                    
                  </div>
                </div>
                <ul>
                  <li className="!text-[#63ab45]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={16}
                      viewBox="0 0 12 16"
                    >
                      <path d="M7.80968 15.0679C9.5273 12.1176 8.80817 8.40483 6.09966 6.24033C6.09808 6.23911 6.0965 6.23758 6.09523 6.23666L6.10694 6.26482L6.10504 6.28594C6.63276 7.63466 6.55873 9.11531 5.91047 10.3857L5.45362 11.2813L5.31347 10.2917C5.21824 9.62039 4.95659 8.98001 4.55353 8.43177H4.48994L4.4564 8.33993C4.46115 9.3657 4.23778 10.3762 3.7996 11.3294C3.22474 12.5768 3.30922 14.0152 4.02581 15.1778L4.52031 15.9804L3.63066 15.6168C2.16361 15.0171 0.990804 13.8618 0.412783 12.4473C-0.234842 10.8678 -0.114934 9.03633 0.733906 7.54925C1.17652 6.77572 1.48657 5.95443 1.65583 5.10773L1.82129 4.27787L2.24334 5.01804C2.44487 5.37098 2.59326 5.75301 2.68532 6.15432L2.69481 6.16381L2.70462 6.22809L2.71379 6.22533C3.97804 4.6002 4.73545 2.57805 4.84586 0.530486L4.87434 0L5.33435 0.290191C7.21173 1.47391 8.51552 3.37301 8.91827 5.5069L8.92744 5.55067L8.93219 5.5574L8.95275 5.52924C9.3207 5.05906 9.51496 4.4998 9.51496 3.91115V2.99956L10.0835 3.72626C11.4053 5.41537 12.083 7.51068 11.9919 9.62651C11.8799 12.117 10.4761 14.3029 8.23648 15.4873L7.26678 16L7.80968 15.0679Z" />
                    </svg>
                  {/* {data?.book?.category} */}
                  3.9K {language === "en" ? "View" : "Voir" }
                  </li>
                  <li className="!text-[#63ab45]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <g>
                        <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z" />
                      </g>
                    </svg>
                    5 {language === "en" ? "Min Read" : "min de lecture" }
                    {/* {moment(data?.book?.createdAt).format('YYYY-MM-DD')} */}
                  </li>
                  {/* <li>
                    <a href="#comment-area">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                        <g>
                          <path d="M14.5672 14.9619C14.5917 15.0728 14.5913 15.1878 14.5658 15.2986C14.5403 15.4093 14.4905 15.513 14.42 15.6021C14.3494 15.6912 14.2599 15.7635 14.158 15.8136C14.056 15.8638 13.9441 15.8906 13.8305 15.8922C13.7133 15.8916 13.5977 15.8643 13.4925 15.8124L12.1483 15.1555C10.8921 15.6143 9.51644 15.6277 8.2515 15.1936C6.98655 14.7595 5.90904 13.9042 5.19922 12.7708C6.15026 12.8941 7.11661 12.8159 8.03545 12.5413C8.95429 12.2667 9.80505 11.8018 10.5324 11.1768C11.2598 10.5518 11.8476 9.78079 12.2575 8.91379C12.6674 8.0468 12.8902 7.10326 12.9116 6.14449C12.9119 5.70944 12.8674 5.27551 12.7787 4.84961C13.6879 5.29062 14.4611 5.96909 15.0165 6.81329C15.572 7.65749 15.8891 8.63608 15.9342 9.64561C15.9643 10.4111 15.8346 11.1744 15.5535 11.887C15.2724 12.5996 14.846 13.2459 14.3014 13.7847L14.5672 14.9619Z" />
                          <path d="M6.0757 0.216195C4.48484 0.198449 2.95187 0.812289 1.81293 1.92312C0.673981 3.03395 0.0220199 4.5511 1.29169e-06 6.1419C-0.000538167 6.94954 0.167902 7.74837 0.494497 8.48703C0.821091 9.22569 1.29861 9.88786 1.89638 10.431L1.65183 11.7365C1.63148 11.8461 1.63545 11.9588 1.66346 12.0668C1.69147 12.1747 1.74285 12.2751 1.81395 12.361C1.88505 12.4469 1.97414 12.5161 2.07493 12.5638C2.17572 12.6114 2.28575 12.6364 2.39724 12.6368C2.52333 12.6366 2.64739 12.6052 2.75837 12.5453L4.19679 11.7726C4.8041 11.9674 5.43791 12.067 6.0757 12.068C7.66662 12.0857 9.19965 11.4718 10.3386 10.3609C11.4776 9.25002 12.1295 7.73277 12.1514 6.1419C12.1294 4.5511 11.4774 3.03395 10.3385 1.92312C9.19953 0.812289 7.66656 0.198449 6.0757 0.216195ZM3.79731 7.05136C3.64711 7.05136 3.50027 7.00681 3.37538 6.92336C3.25049 6.83991 3.15314 6.7213 3.09566 6.58253C3.03818 6.44375 3.02314 6.29105 3.05244 6.14373C3.08175 5.99641 3.15408 5.86109 3.26029 5.75487C3.36651 5.64866 3.50183 5.57633 3.64915 5.54702C3.79647 5.51772 3.94917 5.53276 4.08795 5.59024C4.22672 5.64772 4.34533 5.74507 4.42878 5.86996C4.51223 5.99485 4.55678 6.14169 4.55678 6.29189C4.55678 6.49332 4.47676 6.68649 4.33433 6.82891C4.19191 6.97134 3.99874 7.05136 3.79731 7.05136ZM6.0757 7.05136C5.92549 7.05136 5.77866 7.00681 5.65377 6.92336C5.52887 6.83991 5.43153 6.7213 5.37405 6.58253C5.31657 6.44375 5.30153 6.29105 5.33083 6.14373C5.36013 5.99641 5.43247 5.86109 5.53868 5.75487C5.64489 5.64866 5.78022 5.57633 5.92754 5.54702C6.07486 5.51772 6.22756 5.53276 6.36633 5.59024C6.50511 5.64772 6.62372 5.74507 6.70717 5.86996C6.79062 5.99485 6.83516 6.14169 6.83516 6.29189C6.83516 6.49332 6.75515 6.68649 6.61272 6.82891C6.47029 6.97134 6.27712 7.05136 6.0757 7.05136ZM8.35409 7.05136C8.20388 7.05136 8.05704 7.00681 7.93215 6.92336C7.80726 6.83991 7.70992 6.7213 7.65244 6.58253C7.59495 6.44375 7.57991 6.29105 7.60922 6.14373C7.63852 5.99641 7.71085 5.86109 7.81707 5.75487C7.92328 5.64866 8.0586 5.57633 8.20592 5.54702C8.35324 5.51772 8.50595 5.53276 8.64472 5.59024C8.78349 5.64772 8.90211 5.74507 8.98556 5.86996C9.06901 5.99485 9.11355 6.14169 9.11355 6.29189C9.11355 6.49332 9.03354 6.68649 8.89111 6.82891C8.74868 6.97134 8.55551 7.05136 8.35409 7.05136Z" />
                        </g>
                      </svg>
                      840 Comment
                    </a>
                  </li> */}
                </ul>
              </div>
              
              
              <p
      className="first-para"
      dangerouslySetInnerHTML={{
        __html: language === 'en' ? data?.book?.story : data?.book?.storyfr,
      }}
    />

  
              


{/* -------------------FREQUENTLY ASKED & QUESTION-------------------------- */}

{data?.book?.title === 'BUYING' ? <ServicesBuying /> : 
              data?.book?.title === 'SELL YOUR HOME' ? <ServicesSelling /> : 
              data?.book?.title === 'BANK FINANCING' ? <ServicesBankF /> : 
              data?.book?.title === 'LEGAL' ? <ServicesLegal /> : 
              data?.book?.title === 'FURNITURE' ? <ServicesFurniture /> : 
              data?.book?.title === 'REAL ESTATE MANAGEMENT' ? <ServicesManagement /> : 
              data?.book?.title === 'TRANSLATION SERVICES' ? <ServicesTranslation /> : 
              data?.book?.title === 'RESIDENCE PERMIT' ? <ServicesResidence /> :
              data?.book?.title === 'UNDER CONSTRUCTION PROPERTY' ? <ServicesUnder /> :
              data?.book?.title === 'FINANCIAL OPTION' && <ServicesFinancial />  }




            </div>
            
<div className="col-lg-4 ">



                {/* ------TELEPHONE WOMEN CALLING------------ */}
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



{/* ---------------OFFER---------------- */}
<div className="mt-5">
<ContactModal isOpen={isOpen} closeModal={closeModal} />

                {products?.books && products?.books[0] && (
                  <ProjectCard
                    openModal={openModal}
                    isfeaturepage={true}
                    hieght={300}
                    blog={products?.books[0]}
                    language={language}
                  />
                )}
</div>
                  {/* -----------PROJECT FORM CONTACT US FORM---------  */}
              <div className="mx-auto  justify-start1 flex1 h-dvh1">
      <div className="justify-center flex mx-auto  w-full mt-3 sm:w-[350px]   shadow-2xl p-4 rounded-xl h-[450px] text-center mb-4 font-rubik text-md ">
        
         
        <ProjectForm/>
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

export default BlogDetailsPage;
