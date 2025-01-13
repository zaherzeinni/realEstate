import React ,{useState} from "react";
import Header from "@/components/components/header/Header2";
import { useLanguageContext } from "@/context/languageContext";
import Breadcrumb from "@/components/components/common/Breadcrumb";
import BreadcrumbContact from "../components/components/common/BreadcrumbContact";
import Footer from "../components/components/footer/Footer";
import Newsletter from "../components/components/common/Newslatter"



const ContactPage = () => {
  const { language } = useLanguageContext();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState('');
  const [languages, setLanguage] = useState("");


  function Submit(e) {
    e.preventDefault();

    if (!name || !email || !phone || !message || !country) {
        setError('All fields are required.');
        return;
      }
  

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        country:country,
        language:languages,

        desc: "ارجو التواصل",

        phone: phone,
        type: "contact",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //setPageLoading(false);
        // console.log(data);
        alert("شكرا لك سنتواصل معكم قريبا");
        // clear the form
        try {
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setLanguage("");
          setCountry("")
        } catch (error) {
          // console.log(error);
        }
      })
      .catch((error) => {
        //	setPageLoading(false);
        // console.log(error);
      });
  }




  return (
    <div dir="ltr">
      {/* <DeveloperSlider/> */}
      <Header />
      <BreadcrumbContact
        pagename={language === "en" ? "Your Key To Smart Investing Starts Here!" : "Votre Clé Pour Un Investissement Intelligent Commence Ici!"}
        pagetitle={language === "en" ? "Contact Us" : "Contactez-Nous"}
      />

      <div className="contact-page mb-16 mt-5 lg:mx-16 mx-10">
        <div className="container1 mx-auto md:mx-10 lg:mx-16 xl:mx-36">
          <div className="row g-lg-5 gy-5 flex flex-row">
            <div className="col-lg-5">
              <div className="single-contact ">
                {/* <div className="title">
                  <h6>Phone</h6>
                </div> */}
                
<div className="relative p-4   border-1 border-solid !border-[#dee2e6] rounded-lg w-[376px]">
      <span className="absolute -top-3 left-1/2 transform -translate-x-32 bg px-2 -mt-1 !text-[17px] font-semibold text-gray-500">
      {language==="en"? "Phone":"Téléphone" }  
      </span>
      <div className="flex  space-x-3">
      <div className="icon mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                  >
                    <path d="M19.4752 15.4282L15.4271 12.7286C14.9134 12.3888 14.2248 12.5006 13.845 12.9856L12.6658 14.5017C12.5925 14.5983 12.4868 14.6653 12.3681 14.6903C12.2494 14.7153 12.1257 14.6966 12.0196 14.6377L11.7953 14.514C11.0518 14.1087 10.1266 13.6042 8.26252 11.7394C6.39846 9.87471 5.89287 8.94884 5.48757 8.20664L5.36458 7.98234C5.30488 7.87632 5.28549 7.75231 5.30998 7.63313C5.33448 7.51395 5.40121 7.40763 5.49789 7.33376L7.01297 6.15495C7.49775 5.77512 7.60972 5.08671 7.27028 4.57284L4.57068 0.524768C4.2228 0.00148647 3.52486 -0.1556 2.9863 0.168141L1.29355 1.18498C0.761668 1.49766 0.371466 2.00408 0.204723 2.59809C-0.404835 4.81909 0.0537292 8.6522 5.70024 14.2994C10.1919 18.7907 13.5358 19.9985 15.8341 19.9985C16.363 20.0008 16.8899 19.932 17.4005 19.7939C17.9947 19.6274 18.5012 19.2371 18.8136 18.7051L19.8315 17.0133C20.1557 16.4747 19.9987 15.7763 19.4752 15.4282ZM19.2572 16.6714L18.2417 18.3641C18.0173 18.7481 17.653 19.0305 17.2252 19.152C15.1748 19.7149 11.5927 19.2487 6.17181 13.8278C0.750931 8.40692 0.284711 4.82511 0.847635 2.77444C0.969353 2.34604 1.25202 1.98132 1.6365 1.75658L3.32926 0.741065C3.56294 0.60046 3.86586 0.668614 4.01682 0.89569L5.48328 3.09736L6.71411 4.94341C6.86151 5.16631 6.81308 5.46505 6.6028 5.62999L5.08736 6.8088C4.62618 7.16144 4.49448 7.79951 4.77842 8.30592L4.89876 8.52456C5.32471 9.30578 5.85428 10.2776 7.78766 12.2107C9.72105 14.1437 10.6926 14.6733 11.4734 15.0993L11.6924 15.2199C12.1988 15.5038 12.8369 15.3721 13.1895 14.911L14.3683 13.3955C14.5333 13.1854 14.8319 13.137 15.0549 13.2842L19.1026 15.9838C19.3299 16.1346 19.398 16.4377 19.2572 16.6714ZM11.3327 3.33435C14.4604 3.33783 16.9951 5.87249 16.9986 9.0002C16.9986 9.18427 17.1478 9.33347 17.3318 9.33347C17.5159 9.33347 17.6651 9.18427 17.6651 9.0002C17.6612 5.5045 14.8284 2.67164 11.3327 2.66781C11.1487 2.66781 10.9995 2.81701 10.9995 3.00108C10.9995 3.18516 11.1487 3.33435 11.3327 3.33435Z" />
                    <path d="M11.3321 5.33353C13.3558 5.33592 14.9958 6.97591 14.9982 8.99967C14.9982 9.08806 15.0333 9.17283 15.0958 9.23533C15.1583 9.29783 15.2431 9.33294 15.3315 9.33294C15.4198 9.33294 15.5046 9.29783 15.5671 9.23533C15.6296 9.17283 15.6647 9.08806 15.6647 8.99967C15.662 6.60792 13.7238 4.66973 11.3321 4.66699C11.148 4.66699 10.9988 4.81619 10.9988 5.00026C10.9988 5.18434 11.148 5.33353 11.3321 5.33353Z" />
                    <path d="M11.3321 7.33353C12.2519 7.33463 12.9974 8.08006 12.9985 8.99997C12.9985 9.08836 13.0336 9.17313 13.0961 9.23563C13.1586 9.29813 13.2434 9.33324 13.3318 9.33324C13.4201 9.33324 13.5049 9.29813 13.5674 9.23563C13.6299 9.17313 13.665 9.08836 13.665 8.99997C13.6635 7.71211 12.6199 6.66844 11.3321 6.66699C11.148 6.66699 10.9988 6.81619 10.9988 7.00026C10.9988 7.18434 11.148 7.33353 11.3321 7.33353Z" />
                  </svg>
                </div>
                <div className="!content ">
                  <h6 className="mt-3" >
                    <a className="!text-black hover:text-primary" href="tel:+96170707627">+96170707627</a>
                  </h6>
                  {/* <h6 >
                    <a className="!text-black hover:text-primary" href="tel:+96170707627">+96170707627</a>
                  </h6> */}
                </div>
              </div>
      </div>
    </div>



              <div className="single-contact">
                {/* <div className="title">
                  <h6>Email Now</h6>
                </div> */}

<div className="relative p-4   border-1 border-solid !border-[#dee2e6] rounded-lg w-[376px] flex">
      <span className="absolute -top-3 left-1/2 transform -translate-x-32 bg px-2 -mt-1 !text-[17px] font-semibold text-gray-500">
      {language==="en"? "Email Now":"E-mail" }  
      </span>
                <div className="icon mr-3 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                  >
                    <path d="M19.9018 8.6153C19.5412 5.99522 18.1517 3.62536 16.0393 2.02707C13.9268 0.428777 11.2643 -0.267025 8.63745 0.0927308C6.01063 0.452486 3.63468 1.83833 2.03228 3.94539C0.42988 6.05245 -0.267711 8.70813 0.0929693 11.3282C0.388972 13.4966 1.38745 15.509 2.9363 17.0589C4.48516 18.6088 6.49948 19.6113 8.67243 19.9136C9.11786 19.9713 9.56656 20.0002 10.0157 20C11.8278 20.0033 13.606 19.5101 15.1563 18.5744C15.2358 18.5318 15.3058 18.4735 15.362 18.4031C15.4182 18.3326 15.4595 18.2516 15.4833 18.1648C15.5072 18.078 15.5131 17.9872 15.5007 17.8981C15.4884 17.8089 15.458 17.7232 15.4114 17.6461C15.3648 17.569 15.303 17.5021 15.2298 17.4496C15.1565 17.397 15.0733 17.3599 14.9853 17.3403C14.8972 17.3208 14.806 17.3193 14.7173 17.336C14.6287 17.3527 14.5443 17.3871 14.4694 17.4373C12.7129 18.4904 10.6392 18.8886 8.61629 18.5613C6.59339 18.2339 4.75224 17.2022 3.4197 15.6492C2.08717 14.0962 1.34948 12.1225 1.3376 10.0784C1.32573 8.03438 2.04043 6.05225 3.35483 4.48397C4.66923 2.91568 6.49828 1.86271 8.51723 1.512C10.5362 1.16129 12.6144 1.53554 14.383 2.56829C16.1515 3.60104 17.4959 5.22548 18.1776 7.1532C18.8592 9.08092 18.8338 11.1872 18.1061 13.0981C17.9873 13.4102 17.7626 13.6709 17.4711 13.8349C17.1795 13.999 16.8396 14.056 16.5104 13.996C16.1811 13.9361 15.8833 13.763 15.6687 13.5068C15.454 13.2506 15.3362 12.9275 15.3356 12.5936V5.37867C15.3356 5.2024 15.2654 5.03336 15.1404 4.90872C15.0155 4.78408 14.846 4.71406 14.6693 4.71406C14.4925 4.71406 14.3231 4.78408 14.1981 4.90872C14.0731 5.03336 14.0029 5.2024 14.0029 5.37867V6.52578C13.2819 5.70734 12.3261 5.12961 11.265 4.8708C10.204 4.61198 9.08877 4.68456 8.0704 5.07873C7.05203 5.47289 6.17966 6.16961 5.57134 7.07458C4.96303 7.97954 4.64814 9.04908 4.66929 10.1384C4.69045 11.2278 5.04663 12.2843 5.68962 13.1651C6.33262 14.0459 7.23139 14.7084 8.2643 15.0629C9.2972 15.4175 10.4144 15.4469 11.4646 15.1473C12.5149 14.8477 13.4475 14.2335 14.1362 13.3878C14.3015 13.9385 14.6358 14.4237 15.092 14.775C15.5482 15.1263 16.1033 15.326 16.6793 15.3461C17.2553 15.3662 17.8231 15.2057 18.3028 14.887C18.7825 14.5684 19.15 14.1078 19.3535 13.5699C19.9483 11.99 20.1368 10.2866 19.9018 8.6153ZM10.0051 14.0185C9.21436 14.0185 8.4414 13.7847 7.78396 13.3465C7.12651 12.9083 6.61409 12.2856 6.3115 11.5569C6.00891 10.8283 5.92974 10.0265 6.08399 9.25296C6.23825 8.47943 6.61902 7.7689 7.17813 7.21122C7.73724 6.65354 8.4496 6.27376 9.22511 6.1199C10.0006 5.96603 10.8045 6.045 11.535 6.34681C12.2655 6.64863 12.8899 7.15973 13.3292 7.8155C13.7685 8.47126 14.0029 9.24223 14.0029 10.0309C14.0019 11.0882 13.5803 12.1018 12.8308 12.8494C12.0813 13.597 11.065 14.0175 10.0051 14.0185Z" />
                  </svg>
                </div>
                <div className="!content">
                  <h6 className="mt-3">
                    <a className="!text-black hover:text-primary" href="mailto:info@sandnsearealty.ca">info@sandnsearealty.ca</a>
                  </h6>
                  {/* <h6>
                    <a className="!text-black hover:text-primary"  href="mailto:info@sandnsearealty.ca">info@sandnsearealty.ca</a>
                  </h6> */}
                </div>
              </div>
              </div>
              
              
              <div className="single-contact">
                {/* <div className="title">
                  <h6>Location</h6>
                </div> */}
                <div className="relative p-4   border-1 border-solid !border-[#dee2e6] rounded-lg w-[376px] flex">
      <span className="absolute -top-3 left-1/2 transform -translate-x-32 bg px-2 -mt-1 !text-[17px] font-semibold text-gray-500">
      {language==="en"? "Location" :"Emplacement"}
      </span>
                <div className="icon mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                  >
                    <path d="M13.1781 11.175C12.4989 12.5025 11.5785 13.825 10.6374 15.0125C9.74465 16.132 8.79005 17.2044 7.77778 18.225C6.76548 17.2044 5.81089 16.132 4.91815 15.0125C3.97704 13.825 3.05667 12.5025 2.37741 11.175C1.69037 9.83375 1.2963 8.5775 1.2963 7.5C1.2963 5.8424 1.97916 4.25269 3.19468 3.08058C4.41019 1.90848 6.05878 1.25 7.77778 1.25C9.49677 1.25 11.1454 1.90848 12.3609 3.08058C13.5764 4.25269 14.2593 5.8424 14.2593 7.5C14.2593 8.5775 13.8639 9.83375 13.1781 11.175ZM7.77778 20C7.77778 20 15.5556 12.8925 15.5556 7.5C15.5556 5.51088 14.7361 3.60322 13.2775 2.1967C11.8189 0.790176 9.84057 0 7.77778 0C5.71498 0 3.73667 0.790176 2.27806 2.1967C0.819442 3.60322 3.0738e-08 5.51088 0 7.5C0 12.8925 7.77778 20 7.77778 20Z" />
                    <path d="M7.77951 10C7.09192 10 6.43248 9.73661 5.94627 9.26777C5.46007 8.79893 5.18692 8.16304 5.18692 7.5C5.18692 6.83696 5.46007 6.20107 5.94627 5.73223C6.43248 5.26339 7.09192 5 7.77951 5C8.46711 5 9.12655 5.26339 9.61275 5.73223C10.099 6.20107 10.3721 6.83696 10.3721 7.5C10.3721 8.16304 10.099 8.79893 9.61275 9.26777C9.12655 9.73661 8.46711 10 7.77951 10ZM7.77951 11.25C8.81091 11.25 9.80007 10.8549 10.5294 10.1517C11.2587 9.44839 11.6684 8.49456 11.6684 7.5C11.6684 6.50544 11.2587 5.55161 10.5294 4.84835C9.80007 4.14509 8.81091 3.75 7.77951 3.75C6.74812 3.75 5.75896 4.14509 5.02965 4.84835C4.30035 5.55161 3.89062 6.50544 3.89062 7.5C3.89062 8.49456 4.30035 9.44839 5.02965 10.1517C5.75896 10.8549 6.74812 11.25 7.77951 11.25V11.25Z" />
                  </svg>
                </div>
                <div className="!content">
                  <h6>
                  <a className="hover:text-primary text-black" target="_blank" href="https://www.google.com/maps/place/33%C2%B046'54.7%22N+35%C2%B029'29.1%22E/@33.7818527,35.488842,733m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d33.7818527!4d35.4914169?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D">
                  Dar Aytam , Aramon chwouaifat  <br /> 
                  El Quobbeh Aalay, {language === "en" ? "Lebanon ":"Liban"}
                  </a>
                  </h6>
                </div>
              </div>
              </div>


              <div className="single-contact">
                {/* <div className="title">
                  <h6>Opening Time</h6>
                </div> */}

<div className="relative p-4   border-1 border-solid !border-[#dee2e6] rounded-lg w-[376px] flex">
      <span className="absolute -top-3 left-1/2 transform -translate-x-32 bg px-2 -mt-1 !text-[17px] font-semibold text-gray-500">
      {language==="en"? "Opening Time" :"Heure d'ouverture"} 
      </span>
                <div className="icon mr-3 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 22.9 23"
                    style={{ enableBackground: "new 0 0 22.9 23" }}
                    xmlSpace="preserve"
                  >
                    <g transform="translate(0 -0.002)">
                      <g>
                        <defs>
                          <rect y={0} width="22.9" height={23} />
                        </defs>
                        <clipPath>
                          <use
                            xlinkHref="#SVGID_1_"
                            style={{ overflow: "visible" }}
                          />
                        </clipPath>
                        <g transform="translate(0 0.002)" className="st0">
                          <path
                            className="st1"
                            d="M6.5,0c0.4,0,0.8,0.2,0.9,0.6c0,0.1,0,0.2,0,0.3c0,0.8,0,1.5,0,2.2c0,0.1,0,0.2,0,0.4    C7.2,4,6.8,4.3,6.3,4.2C6,4.2,5.8,3.9,5.7,3.6c0-0.2,0-0.5,0-0.7c0-0.6,0-1.2,0-1.9c0-0.1,0-0.2,0-0.4c0-0.3,0.2-0.5,0.5-0.6    C6.2,0,6.4,0,6.5,0 M16.1,0.1c-0.3,0.1-0.4,0.3-0.5,0.6c0,0.1,0,0.2,0,0.4c0,0.6,0,1.2,0,1.9c0,0.2,0,0.5,0,0.7    c0.1,0.5,0.6,0.7,1,0.6c0.3-0.1,0.6-0.3,0.6-0.7c0-0.1,0-0.2,0-0.4c0-0.6,0-1.2,0-1.9c0-0.2,0-0.5,0-0.7c0-0.2-0.1-0.3-0.3-0.5    C16.8,0.1,16.6,0,16.4,0C16.3,0,16.2,0,16.1,0.1 M3.9,1.5c-0.5,0-1,0-1.4,0.1C2.1,1.7,1.7,1.8,1.3,2C0.7,2.5,0.2,3.2,0.1,4    C0,4.3,0,4.6,0,5c0,0.7,0,1.4,0,2.1c7.6,0,15.2,0,22.9,0c11.5,0,0,0,0,0c0-0.7,0-1.3,0-1.9c0-0.2,0-0.4,0-0.7    c0-0.7-0.3-1.3-0.7-1.9c-0.4-0.5-1-0.8-1.6-1c-0.8-0.1-1.7-0.1-2.5-0.1v0c0,0.6,0,1.3,0,1.9c0,0.2,0,0.4-0.1,0.5    c-0.1,0.3-0.3,0.6-0.6,0.7c-0.7,0.5-1.8,0.4-2.3-0.3c-0.2-0.3-0.3-0.6-0.3-0.9c0-0.6,0-1.3,0-1.9v0H8.1v1.4c0,0.2,0,0.4,0,0.6    c0,0.2,0,0.4-0.1,0.5C7.9,4.3,7.7,4.6,7.4,4.8C7.2,5,6.8,5.1,6.5,5.1c-0.3,0-0.7-0.1-1-0.3C5.2,4.6,5.1,4.3,5,4    C4.9,3.8,4.9,3.6,4.9,3.5c0-0.6,0-1.3,0-1.9L3.9,1.5z M0,8.3c0,3.8,0,7.6,0,11.4c0,0.3,0,0.5,0.1,0.8c0.1,0.6,0.4,1.2,0.8,1.6    c0.4,0.4,1,0.7,1.6,0.8C2.8,23,3,23,3.3,23h16.3c0.3,0,0.5,0,0.8,0c0.2,0,0.4-0.1,0.6-0.2c0.5-0.2,1-0.6,1.4-1.1    c0.2-0.3,0.4-0.7,0.5-1.1c0-0.3,0.1-0.5,0.1-0.8c0-3.7,0-7.5,0-11.2c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0,0-0.1,0-0.1,0L0,8.3    C0,8.3,0,8.3,0,8.3 M9.2,10.7c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.4,0.4,0.7c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.4,0.3-0.7,0.4    c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.4-0.7c0-0.3,0.1-0.6,0.3-0.8c0.1-0.1,0.2-0.2,0.3-0.2C8.9,10.8,9.1,10.7,9.2,10.7     M13.5,10.7c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.4,0.4,0.7c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.4,0.3-0.7,0.4    c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.4-0.7c0-0.3,0.1-0.6,0.3-0.8c0.1-0.1,0.2-0.2,0.3-0.2C13.2,10.7,13.3,10.7,13.5,10.7     M17.7,10.7c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.4,0.4,0.7c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.4,0.3-0.7,0.4    c-0.3,0-0.6-0.1-0.8-0.3c-0.4-0.4-0.5-1.1-0.1-1.5C17.2,10.8,17.4,10.7,17.7,10.7 M5,14.6c0.6,0,1.1,0.4,1.2,1c0,0,0,0,0,0    c0,0.6-0.4,1.1-1,1.2c-0.3,0-0.6-0.1-0.8-0.3C4.1,16.3,4,16,4,15.7c0-0.3,0.1-0.6,0.3-0.8c0.1-0.1,0.2-0.2,0.3-0.2    C4.7,14.6,4.9,14.6,5,14.6 M9.3,14.6c0.6,0,1.1,0.4,1.2,1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.7,0.4    c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.4-0.7c0-0.3,0.1-0.6,0.3-0.8c0.1-0.1,0.2-0.2,0.3-0.2C9,14.6,9.1,14.6,9.3,14.6     M13.5,14.6c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.4,0.7c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.4,0.3-0.7,0.4    c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.4-0.7c0-0.3,0.1-0.6,0.3-0.8c0.1-0.1,0.2-0.2,0.3-0.2C13.2,14.6,13.3,14.6,13.5,14.6     M17.7,14.6c0.6,0,1.1,0.4,1.2,1c0,0.3-0.1,0.6-0.3,0.8c-0.4,0.4-1.1,0.5-1.5,0.1c-0.2-0.2-0.3-0.4-0.4-0.7    c0-0.3,0.1-0.6,0.3-0.8c0.1-0.1,0.2-0.2,0.3-0.2C17.4,14.6,17.6,14.6,17.7,14.6 M5,18.5c0.6,0,1.1,0.4,1.2,1c0,0,0,0,0,0    c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.7,0.4c-0.3,0-0.6-0.1-0.8-0.3C4.1,20.2,4,19.9,4,19.6c0-0.3,0.1-0.6,0.3-0.8    c0.1-0.1,0.2-0.2,0.3-0.2C4.7,18.5,4.9,18.5,5,18.5 M9.3,18.5c0.6,0,1.1,0.4,1.1,1c0,0.6-0.4,1.1-1,1.1c-0.3,0-0.6-0.1-0.8-0.3    c-0.4-0.4-0.5-1.1-0.1-1.5c0,0,0,0,0,0c0.1-0.1,0.2-0.2,0.3-0.2C9,18.5,9.1,18.5,9.3,18.5 M13.5,18.5c0.3,0,0.6,0.1,0.8,0.3    c0.2,0.2,0.3,0.5,0.3,0.7c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.7,0.4c-0.3,0-0.6-0.1-0.8-0.3c-0.4-0.4-0.5-1.1-0.1-1.5    c0.1-0.1,0.2-0.2,0.3-0.2C13.2,18.5,13.4,18.5,13.5,18.5"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="!content">
                  <h6 className="mt-2">
                    <a className="!text-black hover:text-primary" href="#">
                      8:00AM - 5:00PM, {language === "en" ? "Saturday & Sunday: Closed":"Samedi et Dimanche : Fermé"}
                      </a>
                  </h6>
                </div>
              </div>
           </div>





            </div>

            <div className="col-lg-7 ">
              <div className="contact-form-area">
                <div className="flex flex-col space-y-2">
                <img src="/3.png" alt="logo" className="w-[220px] -mt-7 mb-4" />
           
                {language === "en" ? <h3>Reach Us Anytime</h3> : <h3>Contactez-nous à tout moment</h3> }
               
                </div>
                <form
                 onSubmit={(e) => Submit(e)}
                
                >
                  <div className="row  ">
                    <div className="col-lg-12 mb-4 ">
                      <div className="form-inner !text-lg ">
                        <label className="!text-lg mt-3">{language==="en" ? "Name*" : "Nom*"}</label>
                        <input
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                         
                        }}
                        className="!text-lg"
                        type="text" placeholder={language === "en" ? "Name" : "Nom" } />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="form-inner">
                        <label className="!text-lg">{language === "en" ? "Phone" : "Téléphone" }</label>
                        <input
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                         
                        }}
                        className="!text-lg"
                        type="text" placeholder={language === "en" ? "Phone" : "Téléphone" } />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="form-inner">
                        <label className="!text-lg">{language === "en" ? "Email" : "E-mail" }</label>
                        <input
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        
                        }}
                        className="!text-lg"
                        type="email" placeholder={language === "en" ? "Email" : "E-mail" } />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-4">
                      <div className="form-inner">
                        <label className="!text-lg">
                        {language === "en" ? 
                        "Which country would you like to own your property in?*" :
                        "Dans quel pays souhaiteriez-vous devenir propriétaire de votre propriété?*" }
                        </label>
                        <input className="!text-lg" type="text" placeholder={language === "en" ? "Which country" : "Quel pays"} />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-30">
                      <div className="form-inner">
                        <label className="!text-lg">{language === "en" ? "Write Your Message*" : "Écrivez votre message*" }</label>
                        <textarea
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        
                        }}
                          placeholder={language === "en" ? "Message" : "Message" }
                          defaultValue={""}
                          className="!text-lg"
                        />
                      </div>
                    </div>

           

                    <div className="form-inner col-lg-6 mb-4">
                      <select
                        className="bg-white mt-1 p-2 !text-lg block w-full rounded-md border  border-color   focus:outline-none !border-primary2 focus:!border-primary2 shadow-sm md:text-base"
                         value={languages}
                         
                              onChange={(e) => {
                                setLanguage(e.target.value);
                                
                              }}
                  
                      >
                       <option value="" disabled>
                         {language === "en"? "Select a Language":"Sélectionnez une langue"} 
                        </option>
                        <option value="Arabic">Arabic</option>
                        <option value="English">English</option>
                        <option value="French">French</option>
                        
                      </select>
                      {/* <input type="text" placeholder="Daniel Scoot" /> */}
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner">

                      {error && <div className="text-red-500 mb-3">{error}</div>}
                        <button
                          className="primary-btn1 btn-hover text-lg"
                          type="submit"
                        >
                        {language === "en"?  "Submit Now" :"Soumettre maintenant"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact-map mb-20" id="map">
        <iframe
       src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3190.959548423402!2d35.488841975705!3d33.781852673259976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQ2JzU0LjciTiAzNcKwMjknMjkuMSJF!5e1!3m2!1sen!2slb!4v1736539420562!5m2!1sen!2slb"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default ContactPage;
