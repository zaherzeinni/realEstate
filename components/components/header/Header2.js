// ------------------ THIS HEADER NAVBAR ----------------------

import { useState } from "react";
import Link from "next/link";
import navData from "../../../data/nav.json";
import destinaiton_sidebar_data from "../../../data/destination-_idebar.json";
import { useEffect, useMemo, useReducer, useRef, useCallback } from "react";
import english2 from "@/public/turkish2.jpg";
import english from "@/public/english2.png";
import arabic from "@/public/arabic2.png";
import french from "@/public/french.png";

import LanguageToggle from "@/context/selectLanguage";
import { useLanguageContext } from "@/context/languageContext";
import { useTranslation } from "@/context/useTranslation";
import useCountries from "@/hooks/useCountries";
import useCities from "@/hooks/useCities";
import useBuyguides from "@/hooks/useBuyguides";

import ContactModal from "../../../components/Site/ContactModal"
import { handleChange } from "../../../utils/handleLanguage";


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

import { ImageEndpoint } from "@/utils/global";

import LoginModal from "../common/LoginModal";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
  isRightSidebar: false,
  isLang: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    case "TOGGLE_LANG":
      return {
        ...state,
        isLang: !state.isLang,
      };
    case "TOGGLE_RIGHTSIDEBAR":
      return {
        ...state,
        isRightSidebar: !state.isRightSidebar,
      };
    default:
      return state;
  }
}
const Header2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);

  const { data: countries} = useCountries();



  const {
    data: cities,
    isLoading: loadCities,
    error: errorCities,
  } = useCities();


  // const { data: buyguides, isLoading: loadBuyguides, error: errorBuyguides } = useBuyguides();
  const { data: buyguides, isLoading: loadBuyguides, error: errorBuyguides } = useBuyguides(undefined, true);

  const buyguidesData = buyguides?.map((guide) => ({
  id: guide._id,
  label: guide.title,
  labelfr: guide.titlefr,
  link: `/buyguide?guide=${guide.title.toLowerCase().replace(/\s+/g, '-')}`
}))

// console.log(buyguides,"dataaaaa buyguidesss")







  const groupedData = countries?.map((country) => ({
    country: country?.title,
    id: 1,
    
    label: country?.title,
    labelfr: country?.titlefr,
    link: `/projects/?country=${
      country?.title
    }&city=${""}&baths=${0}=&beds=${0}&minPrice=${0}&maxPrice=${10000000000000}&type=${""}&rooms=${0}&beds=${0}`,
    countrylink:`/forsale/${country?._id}`,

    subMenu: cities
      ?.filter((city) => city?.country === country?.title)
      .map((city, index) => ({
        id: index,
        label: city?.title,
        labelfr: city?.titlefr,
        link: `/projects/?city=${
          city?.title
        }&country=${""}&baths=${0}=&beds=${0}&minPrice=${0}&maxPrice=${10000000000000}&type=${""}&rooms=${0}&beds=${0}`,
      })),
    icon:
      cities?.filter((city) => city?.country === country?.title)?.length > 0
        ? true
        : false,
  }));

  const projectslink = `/projects/?city=${""}&country=${""}&baths=${0}=&beds=${0}&minPrice=${0}&maxPrice=${10000000000000}&type=${""}&rooms=${0}&beds=${0}`;

  // const projectslink = (type = "") => 
  //   `/projects/?city=${""}&country=${""}&baths=${0}&beds=${0}&minPrice=${0}&maxPrice=${10000000000000}&type=${type}&rooms=${0}`;







    

  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleRightSidebar = () => {
    dispatch({ type: "TOGGLE_RIGHTSIDEBAR" });
  };
  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  // language swither

  const { language, changeLanguage } = useLanguageContext();

  const { translation } = useTranslation();

  const t = useMemo(() => translation ?? {}, [translation]);
  // console.log("HEADER", t);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const selectLanguage = useCallback(
    (language) => {
      switch (language) {
        case "en":
          changeLanguage("en");
          break;
        case "fr":
          changeLanguage("fr");
          break;
        case "tr":
          changeLanguage("tr");
          break;
        default:
          changeLanguage("en");
          break;
      }
    },
    [changeLanguage]
  );

  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".destination-sidebar-next",
        prevEl: ".destination-sidebar-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    };
  });


  



  const propertyTypes = [
    { value: "house", label: language === "en" ? "Houses" : "Maisons" },
    { value: "apartment", label: language === "en" ? "Apartment" : "Appartement" },
    { value: "office", label: language === "en" ? "Offices" : "Bureaux" },
    { value: "town", label: language === "en" ? "Townhome" : "Maison de ville" },
    { value: "villa", label: language === "en" ? "Villa" : "Villa" },
  ];



const { data, isLoading, error } = useCountries();

const [modalOpen, setModalOpen] = useState(false);

const showModal = () => {
  setModalOpen(true);
};

const handleClose = () => {
  setModalOpen(false);
};


  



  return (
    <div dir="ltr">
     
      <header
        ref={headerRef}
        className={`header-area style-2 ${state.scrollY > 10 ? "!m !bg-[#000000cc] lg:-mt-8" : ""}`}
      >
        <div className="hidden">
          <LoginModal open={modalOpen} isOpen={setModalOpen} onClose={handleClose} />
          </div>
        <div className="header-logo">
          <Link href="/">
            <img
              alt="logo header navbar"
              className="img-fluid  w-[200px] 1md1:w-[70px] md1:hidden lg:hidden lg1:block lg1:w-[120px] xl:w-[180px]"
              // src="/assets/img/logo2.svg"
              src="/1.png"
            />
          </Link>
          <Link href="/">
            <img
              alt="logo header navbar"
              className="img-fluid  hidden md1:w-[40px] md1:block lg:w-[40px] lg:h-[40px]  lg1:hidden"
              // src="/assets/img/logo2.svg"
              src="/5.png"
            />
          </Link>
        </div>
        <div className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}>
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap">
              <Link href="/">
                <img alt="logo" src="/1.png" className="w-[180px]" />
              </Link>
            </div>
            <div className="menu-close-btn" onClick={toggleSidebar}>
              <i className="bi bi-x" />
            </div>
          </div>
          <ul className="menu-list">
          {/* COUNTRIES WITH CITIES HERE  */}

  <li key={3} className={`${true ? "menu-item-has-children" : ""}`}>
              <Link href={projectslink} className="drop-down">
                Destinations
              </Link>
              {groupedData?.length > 0 && (
                <i
                  // state.activeMenu === label ? "dash" : "plus"

                  onClick={() => toggleMenu("projects")}
                  className={`bi bi-${"plus"} dropdown-icon`}
                />
              )}

              {groupedData?.length > 0 && (
                <ul
                  className={`sub-menu ${
                    state.activeMenu === "projects" ? "d-block" : ""
                  }`}
                >
                  {groupedData?.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link legacyBehavior href={subItem.link}>
                        <a> {language === "en" ? subItem.label : subItem.labelfr }    </a>
                      </Link>
                      {subItem?.icon && subItem?.icon ? (
                        <>
                          <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                          <i
                            onClick={() => toggleSubMenu(subItem?.label)}
                            className={`d-lg-none d-flex bi bi-${
                              state.activeSubMenu === subItem?.label
                                ? "dash"
                                : "plus"
                            } dropdown-icon `}
                          />
                        </>
                      ) : (
                        ""
                      )}
                      {subItem?.subMenu && (
                        <ul
                          className={`sub-menu ${
                            state.activeSubMenu === subItem.label
                              ? "d-block"
                              : ""
                          }`}
                        >
                          {subItem?.subMenu.map((subItem, subIndex) => (
                            <li key={subItem?.id}>
                              <Link legacyBehavior href={subItem?.link}>
                               
                               
                                <a>{language === "en" ? subItem?.label :subItem?.labelfr } </a>
                             
                             
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>



{/* -----ONLY COUNTRIES HERE----- */}





{/* -----PROPERTY TYPES NAVBAR NEW ITEM HERE same groupedData structure parant is types then map types----- */} 
      

<li key={3} className={`${true ? "menu-item-has-children" : ""}`}>
  <Link href={'/'} className="drop-down">
    {language === "en" ? "For Sale" : "À Vendre"}
  </Link>
  <i
    onClick={() => toggleMenu("types")}
    className={`bi bi-${state.activeMenu === "types" ? "dash" : "plus"} dropdown-icon`}
  />
  {propertyTypes.length > 0 && (
    <ul className={`sub-menu ${state.activeMenu === "types" ? "d-block" : ""}`}>
      {propertyTypes.map((type, index) => (
        <li key={index}>
             <Link legacyBehavior href={`/projects/?city=${""}&country=${""}&baths=${0}=&beds=${0}&minPrice=${0}&maxPrice=${10000000000000}&type=${type.value}&rooms=${0}&beds=${0}`}>
            <a>{type.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  )}
</li>

            {navData.map((data) => {
              const { id, label, link, icon, subMenu, labelfr } = data;
              return (
                <li
                  key={id}
                  className={`${icon === true ? "menu-item-has-children" : ""}`}
                >
                  <Link href={link} className="drop-down">
                    {language === "en" ? label : labelfr}
                  </Link>
                  {icon && (
                    <>
                      <i
                        onClick={() => toggleMenu(label)}
                        className={`bi bi-${
                          state.activeMenu === label ? "dash" : "plus"
                        } dropdown-icon`}
                      />
                      <ul
                        className={`sub-menu ${
                          state.activeMenu === label ? "d-block" : ""
                        }`}
                      >
                        {subMenu?.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link legacyBehavior href={subItem.link}>
                              <a>
                                {language === "en" ? subItem.label : subItem.labelfr}
                              </a>
                            </Link>
                          </li>
                        ))}


{label === "Services"  && groupedData?.length > 0 && (
                          <li className="menu-item-has-children">
                          <Link href="#" className="drop-down">
                          {language === "en" ? "BUYING GUIDE" : "GUIDE D'ACHAT"}

                          </Link>
                          <i
                            onClick={() => toggleSubMenu("countries")}
                            className={

                              `bi bi-${state.activeSubMenu === "countries" ? "dash" : "plus"} 
                              
                               dropdown-icon
                               dropdown-icon d-lg-none d-flex
                              
                              `}
                            // Removed d-lg-none d-flex classes and reordered the classes
                          />
                            <ul
                              className={`sub-menu ${
                                state.activeSubMenu === "countries" ? "d-block" : ""
                              }`}


                            >
                              {buyguidesData?.map((guide, idx) => (
                                <li key={idx}>
                                  <Link legacyBehavior href={guide.link}>
                                    <a>{language === "en" ? guide.label
                        : handleChange(guide.label)}
                                      </a>


                                  </Link>
                   

                                </li>
                              ))}
                            </ul>
                          </li>
                        )}



      
      
      
                      </ul>
                    </>
                  )}
                </li>

              );
            })}



          </ul>
          <div className="topbar-right d-lg-none d-block">
            <Link href="auth/login">
            <button
              type="button"
              className="modal-btn header-cart-btn"
              data-bs-toggle="modal"
              data-bs-target="#user-login"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z"
                ></path>
              </svg>
              REGISTER/ LOGIN
            </button>
            </Link>
          </div>
          <div className="hotline-area d-lg-none d-flex">
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
              <span>{language === "en" ? "To More Inquiry":"Pour plus d'enquête"}</span>
              <h6 >
                <a className="hover:text-white" href="tel:+96170707627">+96170707627</a>
              </h6>
            </div>
          </div>
        </div>
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <ul className="icon-list         ">
            <li className="d-lg-flex d-none">
             
               {/* -----------------user login in modall------------------ */} 
             
              <button onClick={showModal}>
              <a className="hidden lg:block" data-bs-toggle="modal" data-bs-target="#user-login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    d="M26 13.5C26 20.4036 20.4035 26 13.5 26C6.59632 26 1 20.4036 1 13.5C1 6.59632 6.59632 1 13.5 1C20.4035 1 26 6.59632 26 13.5Z"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5001 11.8333C18.5001 14.5947 16.2616 16.8333 13.5001 16.8333C10.7384 16.8333 8.5 14.5947 8.5 11.8333C8.5 9.07189 10.7384 6.8333 13.5001 6.8333C16.2616 6.8333 18.5001 9.07189 18.5001 11.8333Z"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.04297 23.5324C6.44287 19.7667 9.62917 16.8333 13.5008 16.8333C17.3725 16.8333 20.5588 19.7669 20.9585 23.5325"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              </button>
            </li>
            <li className="right-sidebar-button" onClick={toggleRightSidebar}>
              <svg
                className="sidebar-toggle-button"
                width={23}
                height={23}
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.29608 0.0658336C0.609639 0.31147 0.139209 0.899069 0.0432028 1.63598C-0.0144009 2.09353 -0.0144009 5.4939 0.0432028 5.95146C0.129608 6.59686 0.489632 7.11703 1.07047 7.42046L1.36329 7.57458H3.83545H6.30761L6.59563 7.42046C6.96525 7.2278 7.25807 6.93401 7.45008 6.56314L7.60369 6.27416V3.79372V1.31328L7.45008 1.02429C7.25807 0.653433 6.96525 0.359633 6.59563 0.166978L6.30761 0.0128531L3.90745 0.00322056C1.83372 -0.00641251 1.4785 0.00322056 1.29608 0.0658336ZM6.2356 0.802741C6.52842 0.956866 6.65803 1.08209 6.79244 1.34699L6.90765 1.57336V3.80817V6.03816L6.74924 6.29824C6.53322 6.66429 6.2068 6.85694 5.74117 6.90029C5.54916 6.91956 4.55549 6.92437 3.52343 6.91474L1.65131 6.90029L1.41129 6.77025C1.12807 6.62094 1.00807 6.49571 0.854455 6.20191L0.739248 5.98518V3.79372V1.60226L0.854455 1.38552C1.05607 0.995397 1.33929 0.778659 1.74731 0.706413C1.85292 0.687148 2.85618 0.677515 3.97946 0.677515L6.01959 0.687148L6.2356 0.802741Z" />
                <path d="M11.6647 0.0658336C10.9783 0.31147 10.5079 0.899069 10.4119 1.63598C10.3879 1.82863 10.3687 2.80154 10.3687 3.79372C10.3687 4.7859 10.3879 5.75881 10.4119 5.95146C10.4983 6.59686 10.8583 7.11703 11.4391 7.42046L11.7319 7.57458H14.2041H16.6763L16.9643 7.42046C17.3339 7.2278 17.6267 6.93401 17.8187 6.56314L17.9723 6.27416V3.79372V1.31328L17.8187 1.02429C17.6267 0.653433 17.3339 0.359633 16.9643 0.166978L16.6763 0.0128531L14.2761 0.00322056C12.2024 -0.00641251 11.8471 0.00322056 11.6647 0.0658336ZM16.6043 0.802741C16.9019 0.956866 17.0267 1.08209 17.1611 1.35181L17.2811 1.583L17.2763 3.79854C17.2763 5.73472 17.2667 6.03816 17.1995 6.1682C17.0555 6.45237 16.9067 6.61131 16.6475 6.7558L16.3882 6.90029H14.2041H12.02L11.7799 6.77025C11.4967 6.62094 11.3767 6.49571 11.2231 6.20191L11.1079 5.98518V3.79372V1.60226L11.2231 1.38552C11.4247 0.995397 11.7079 0.778659 12.116 0.706413C12.2216 0.687148 13.2248 0.677515 14.3481 0.677515L16.3882 0.687148L16.6043 0.802741Z" />
                <path d="M1.29608 10.4693C0.609639 10.7149 0.139209 11.3025 0.0432028 12.0394C-0.0144009 12.497 -0.0144009 15.8973 0.0432028 16.3549C0.129608 17.0003 0.489632 17.5205 1.07047 17.8239L1.36329 17.978H3.83545H6.30761L6.59563 17.8239C6.96525 17.6312 7.25807 17.3374 7.45008 16.9666L7.60369 16.6776V14.1972V11.7167L7.45008 11.4277C7.25807 11.0569 6.96525 10.7631 6.59563 10.5704L6.30761 10.4163L3.90745 10.4067C1.83372 10.397 1.4785 10.4067 1.29608 10.4693ZM6.2356 11.2062C6.52842 11.3603 6.65803 11.4855 6.79244 11.7504L6.90765 11.9768V14.2116V16.4416L6.74924 16.7017C6.53322 17.0677 6.2068 17.2604 5.74117 17.3037C5.54916 17.323 4.55549 17.3278 3.52343 17.3182L1.65131 17.3037L1.41129 17.1737C1.12807 17.0244 1.00807 16.8992 0.854455 16.6054L0.739248 16.3886V14.1972V12.0057L0.854455 11.789C1.05607 11.3988 1.33929 11.1821 1.74731 11.1099C1.85292 11.0906 2.85618 11.081 3.97946 11.081L6.01959 11.0906L6.2356 11.2062Z" />
                <path d="M13.2441 10.4934C11.8856 10.8498 10.8583 11.8853 10.5079 13.2531C10.3735 13.7781 10.3735 14.6162 10.5079 15.1412C10.8343 16.4127 11.732 17.3808 12.9945 17.8239C13.3593 17.9491 13.4937 17.9732 14.0601 17.9925C14.617 18.0117 14.7754 17.9973 15.1162 17.9106C16.5179 17.5542 17.5452 16.5283 17.9052 15.1219C18.0348 14.6162 18.03 13.7685 17.9004 13.2531C17.55 11.8757 16.5179 10.8401 15.145 10.4885C14.6314 10.3585 13.7529 10.3585 13.2441 10.4934ZM15.2314 11.2784C15.7066 11.4518 16.0475 11.6782 16.4363 12.0828C17.0075 12.6848 17.2763 13.3639 17.2763 14.2068C17.2763 15.0882 17.0075 15.7288 16.3691 16.3645C15.721 17.0099 15.0826 17.2796 14.2186 17.2845C13.7001 17.2845 13.3113 17.193 12.8121 16.957C12.5336 16.8221 12.3608 16.692 12.0392 16.3694C11.396 15.724 11.132 15.0882 11.132 14.1972C11.132 13.3495 11.396 12.6896 11.972 12.0828C12.3608 11.6782 12.7017 11.4518 13.1817 11.2736C13.7913 11.0521 14.6218 11.0521 15.2314 11.2784Z" />
              </svg>
            </li>
          </ul>

          
                      {/* LANGUAGE switch */}

                      <li className="right-sidebar-button flex">
              <div className=" flex items-center   ">
                <LanguageToggle
                  languages={[
                    { label: "English", value: "en", img: english },
                    { label: "French", value: "fr", img: french },
                  ]}
                  selectedLanguage={language}
                  selectLanguage={selectLanguage}
                />
              </div>

          <ContactModal isOpen={isOpen} closeModal={closeModal} />
                <button onClick={openModal} className="primary-btn1 rounded-full hidden xl3:flex xl3:text-sm xl3:h-10 ml-2">
                 {language === "en" ? "Book A Meet":"réservation"} 
                </button>
            </li>

  
          <div
            className="sidebar-button mobile-menu-btn"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              viewBox="0 0 25 25"
              className=" cursor-pointer"
            >
              <path d="M0 4.46439C0 4.70119 0.0940685 4.92829 0.261511 5.09574C0.428955 5.26318 0.656057 5.35725 0.892857 5.35725H24.1071C24.3439 5.35725 24.571 5.26318 24.7385 5.09574C24.9059 4.92829 25 4.70119 25 4.46439C25 4.22759 24.9059 4.00049 24.7385 3.83305C24.571 3.6656 24.3439 3.57153 24.1071 3.57153H0.892857C0.656057 3.57153 0.428955 3.6656 0.261511 3.83305C0.0940685 4.00049 0 4.22759 0 4.46439ZM4.46429 11.6072H24.1071C24.3439 11.6072 24.571 11.7013 24.7385 11.8688C24.9059 12.0362 25 12.2633 25 12.5001C25 12.7369 24.9059 12.964 24.7385 13.1315C24.571 13.2989 24.3439 13.393 24.1071 13.393H4.46429C4.22749 13.393 4.00038 13.2989 3.83294 13.1315C3.6655 12.964 3.57143 12.7369 3.57143 12.5001C3.57143 12.2633 3.6655 12.0362 3.83294 11.8688C4.00038 11.7013 4.22749 11.6072 4.46429 11.6072ZM12.5 19.643H24.1071C24.3439 19.643 24.571 19.737 24.7385 19.9045C24.9059 20.0719 25 20.299 25 20.5358C25 20.7726 24.9059 20.9997 24.7385 21.1672C24.571 21.3346 24.3439 21.4287 24.1071 21.4287H12.5C12.2632 21.4287 12.0361 21.3346 11.8687 21.1672C11.7012 20.9997 11.6071 20.7726 11.6071 20.5358C11.6071 20.299 11.7012 20.0719 11.8687 19.9045C12.0361 19.737 12.2632 19.643 12.5 19.643Z" />
            </svg>
          </div>
        </div>
      </header>
      <div
        className={`right-sidebar-menu ${
          state.isRightSidebar ? "show-right-menu" : ""
        }`}
      >
        <div className="sidebar-logo-area d-flex justify-content-between align-items-center">
          <div className="sidebar-logo-wrap">
            <Link href="/">
            <img src="/3.png" alt="logo" className="w-[240px] " />
            </Link>
          </div>
          <div className="right-sidebar-close-btn" onClick={toggleRightSidebar}>
            <i className="bi bi-x" />
          </div>
        </div>
        <div className="sidebar-content-wrap ">
          <div className="category-wrapper  ">
       <h4>   {language === "en" ? "BUYING GUIDE" : "GUIDE D'ACHAT"}</h4>
            <ul className="category-list sm:mx-10 sm:flex-none sm:justify-evenly grid grid-cols-2 mx-auto  justify-center">
              <li className="ml-1">
               
                <Link
                  href="/buyguide?guide=north-cyprus"
                  className="single-category"
                >
                  <div className="icon">
           
   
                      <img src="/cyprus.svg" alt='cyprus' className="w-12 h-12 mx-auto"></img>
                  </div>
                  {language === "en" ?   <h6>CYPRUS</h6>: <h6>CHYPRE</h6>}
                </Link>
              </li>
              <li>
                <Link
                  href="/buyguide?guide=u.a.e."
                  className="single-category"
                >
                  <div className="icon">
                  <img src="/uae.svg" alt="uae" className="w-12 h-12 mx-auto"></img>
                  </div>
                  {language === "en" ?   <h6>U.A.E.</h6>: <h6>E.A.U.</h6>}
                </Link>
              </li>
              <li>
                <Link
                  href="/buyguide?guide=dominican-rep."
                  className="single-category"
                >
                  <div className="icon">
                  <img src="/dominican-republic.svg" alt="dominican-republic" className="w-12 h-12 mx-auto"></img>
                  </div>
                  {language === "en" ?   <h6>DOMINICAN REP.</h6>: <h6>REP. DOMINICAINE</h6>}
                </Link>
              </li>
              <li>
                <Link
                  href="/buyguide?guide=mexico"
                  className="single-category"
                >
                  <div className="icon">
                  <img src="/mexico.svg" alt="mexico" className="w-12 h-12 mx-auto"></img>
                  </div>
                  {language === "en" ?   <h6>MEXICO</h6>: <h6>MEXIQUE</h6>}
                </Link>
              </li>
              <li>
                <Link
                  href="/buyguide?guide=spain"
                  className="single-category"
                >
                  <div className="icon">
                  <img src="/spain.svg" alt="spain" className="w-12 h-12 mx-auto"></img>
                 
                  </div>
                  {language === "en" ?   <h6>SPAIN</h6>: <h6>ESPAGNE</h6>}
                </Link>
              </li>
              <li>
                <Link
                  href="/buyguide?guide=portugal"
                  className="single-category"
                >
                  <div className="icon">
                  <img src="/portugal.svg" alt="portugal" className="w-12 h-12 mx-auto"></img>
                  </div>
                  {language === "en" ?   <h6>PORTUGAL</h6>: <h6>PORTUGAL</h6>}
                </Link>
              </li>
            </ul>
          </div>
          <div className="destination-wrapper">
          {language === "en" ?  
            <h4>Our Destinations</h4>
            :
            <h4>Nos Destinations</h4>
          }
            <div className="row">
              <div className="col-lg-12">
                






             
                <Swiper
                  {...settings}
                  className="swiper destination-sidebar-slider mb-35"
                >
                  
                  <div className="swiper-wrapper">
                  {data?.map((country, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div className="destination-card2">
                      <Link
                          href={`/projects/?country=${
                            country?.title
                          }&city=${""}&baths=${0}&beds=${0}&minPrice=${0}&maxPrice=${1000000000000}&type=${""}&rooms=${0}&beds=${0}`}
                          className="destination-card-img"
                        >
                          
                          <img
                            src={`${ImageEndpoint}/${country?.cover}`}
                            //   src="/assets/img/home2/destination-card2-img1.jpg"
                            alt=""
                            className="h-52"
                          />
                        </Link>
                        <div className="destination-card2-content">
                          <h4>
                            <Link
                              href={`/projects/?country=${
                                country?.title
                              }&city=${""}&baths=${0}=&beds=${0}&minPrice=${0}&maxPrice=${10000000000000}&type=${""}&rooms=${0}&beds=${0}`}
                            >
                              {language === 'en' ? country?.title : country?.titlefr}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                      ))}
                  </div>
                  
                </Swiper>
            

                <div className="slide-and-view-btn-grp -mb-10 sm:-mb-20">
                  <div className="destination-sidebar-prev">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={53}
                      height={13}
                      viewBox="0 0 53 13"
                    >
                      <path d="M53 6.5L1 6.5M1 6.5L7 12M1 6.5L7 0.999996" />
                    </svg>
                  </div>
                  <Link href="/projects?city=&country=&baths=0=&beds=0&minPrice=0&maxPrice=10000000000000&type=&rooms=0&beds=0" className="secondary-btn2">
                    {language === "en" ? "View All" : "voir tout" }
                  </Link>
                  <div className="destination-sidebar-next">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={53}
                      height={13}
                      viewBox="0 0 53 13"
                    >
                      <path d="M0 6.5H52M52 6.5L46 1M52 6.5L46 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      
      
        <div className="sidebar-bottom">
          <div className="hotline-area ">
            <div className="icon  ">
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
              <span>{language === "en" ? "To More Inquiry":"Pour plus d'enquête"} </span>
              <h6 >
                <a  href="tel:+96170707627">+96170707627</a>
              </h6>
            </div>
          </div>
          <div className="email-area">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={27}
                height={27}
                viewBox="0 0 27 27"
              >
                <g clipPath="url(#clip0_2102_235)">
                  <path d="M9.84668 19.8136V25.0313C9.84754 25.2087 9.90418 25.3812 10.0086 25.5246C10.1129 25.6679 10.2598 25.7748 10.4283 25.8301C10.5968 25.8853 10.7784 25.8861 10.9474 25.8324C11.1164 25.7787 11.2642 25.6732 11.3699 25.5308L14.4221 21.3773L9.84668 19.8136ZM26.6486 0.156459C26.5218 0.0661815 26.3725 0.0127263 26.2173 0.00200482C26.062 -0.00871662 25.9068 0.0237135 25.7688 0.0957086L0.456308 13.3145C0.310668 13.3914 0.190668 13.5092 0.111035 13.6535C0.0314025 13.7977 -0.00439878 13.962 0.00802526 14.1262C0.0204493 14.2905 0.0805582 14.4475 0.180975 14.5781C0.281392 14.7087 0.417748 14.8071 0.573308 14.8613L7.61018 17.2666L22.5963 4.45283L10.9998 18.4242L22.7932 22.4551C22.9102 22.4944 23.0344 22.5077 23.1571 22.4939C23.2798 22.4802 23.398 22.4399 23.5034 22.3757C23.6089 22.3115 23.699 22.225 23.7676 22.1223C23.8361 22.0196 23.8814 21.9032 23.9002 21.7812L26.9939 0.968709C27.0168 0.81464 26.9967 0.657239 26.9357 0.513898C26.8748 0.370556 26.7754 0.246854 26.6486 0.156459Z" />
                </g>
              </svg>
            </div>
            <div className="content">
              <span>Email:</span>
              <h6>
                <a href="mailto:info@sandnsearealty.ca">info@sandnsearealty.ca</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
