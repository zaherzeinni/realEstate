import Breadcrumb from "@/components/components/common/Breadcrumb";
import Newslatter from "@/components/components/common/Newslatter";
import Footer from "@/components/components/footer/Footer";
import Header from "@/components/components/header/Header2";
import Topbar from "@/components/components/topbar/Topbar";
import SelectComponent from "@/components/Site/SelectComponent";
import { useRouter } from "next/router";
import { ImageEndpoint } from "../../utils/global";
import { useState ,useEffect } from "react";
import { useLanguageContext } from "@/context/languageContext";
import { format, formatDistanceToNow, parseISO } from "date-fns";
import { message as antdMessage } from "antd";
import axios from "axios";
import useVisa from "@/hooks/useVisa";



import moment from "moment/moment";

import useProducts from "../../hooks/useProducts";
import ContactModal from "../../components/Site/ContactModal";
import ProjectCard from "../../components/Site/ProjectCard";


import AccordBulk from "../../components/components/accordion/AccordBulk"
import AccordAirbnb from "../../components/components/accordion/AccordAirbnb"
import AccordProfitable from "../../components/components/accordion/AccordProfitable"
import AccordOffPlan from "../../components/components/accordion/AccordOffPlan"
import AccordRental from "../../components/components/accordion/AccordRental"
import AccordHotels from "../../components/components/accordion/AccordHotels"
import AccordBargain from "../../components/components/accordion/AccordBargain"
import AccordInvestVillas from "../../components/components/accordion/AccordInvestVillas"


export const metadata = {
  title: "TripRex - Tour & Travel Agency  NextJs Template",
  description:
    "TripRex is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const VisaDetails = () => {
  const router = useRouter();
  const { language, reference, setReference } = useLanguageContext();
  const { id } = router.query;
  const { data } = useVisa({ id });
  //   console.log("?>??>?" , id , data)

  const [selectedVisa, setSelectedVisa] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [name, setName] = useState("");
  const [email , setEmail] = useState("");
  const [phone , setPhone] = useState("");
  const [message , setMessage] = useState("");
  const [selectedlanguage , setSelectedLanguage] = useState("");







  const handleSelect = (option) => {
    setSelectedVisa(option); // Update the selected visa state
  };


  const handleSelectCountry = (option) => {
    setSelectedCountry(option); // Update the selected visa state
  };

  const handleSelectLanguage = (option) => {
    setSelectedLanguage(option); // Update the selected visa state
  };


    // CRUD State.
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (error) {
        antdMessage.error(error);
        setError(null);
      }
  
      if (isSuccess) {
        antdMessage.success("Message send successfully");
  
        setIsSuccess(false);
      }
    }, [error, isSuccess]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
       // Validation
  if (!name || !email || !phone || !message || !selectedVisa || !selectedCountry || !selectedlanguage) {
    antdMessage.error("Please fill in all required fields.");
    return;
  }
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      try {
        const { data } = await axios.post(
          `/api/visamessage`,
          {
            name,
            email,
            phone,
            message,
            visa:selectedVisa,
            country:selectedCountry,
            language:selectedlanguage
          },
          config
        );
  
        antdMessage.success("Your message sended successfully")
        setIsSuccess(data.success);
      } catch (error) {
        setError(error.message);
       // antdMessage.error("Your message sended successfully")
        console.error(error.message);
      }
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

   


  return (
    <div dir="ltr">
      {/* <Topbar /> */}
      <Header />
      <Breadcrumb
        pagename={language === "en" ? "Invest Details" : "Détails d'investissement"}
        pagetitle={language === "en" ? "Invest Details" : "Détails d'investissement"}
      />
      <div className="visa-details-pages pt-10 mb-20">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="visa-thumb">
                <img
                  className="w-full h-[350px] object-fit"
                  src={`${ImageEndpoint}/${data?.book?.image[0]}`}
                  // src="/assets/img/innerpage/visa-bt-img.jpg"
                  alt=""
                />
              </div>
              <div className="visa-title  !font-rubik">
                <h3 className="!text-[23px] sm:!text-[30px] md:!text-[35px] !font-rubik">
                  {language === "en" ? data?.book?.title : data?.book?.titlefr}{" "}
                </h3>
              </div>
              <div className="visa-required-document mb-50">
                <div className="document-list">
                  <p>
                  <div
                    className="bg-whit !text-[#100c08]"
                    dangerouslySetInnerHTML={{
                      __html:
                        language === "en"
                          ? data?.book?.story
                          : data?.book?.storyfr,
                    }}
                  />
                    </p>
                  
                </div>
              </div>
              {data?.book?.title === 'Bulk Property Purchase | Buy Blocks and Buildings' ? <AccordBulk/> : 
              data?.book?.title === 'Invest in Airbnb Apartments | Short Term Rental Properties' ? <AccordAirbnb/> : 
              data?.book?.title === 'Invest in Profitable Building Lands and Plots' ? <AccordProfitable/> : 
              data?.book?.title === 'Off Plan Investment at Launch Period' ? <AccordOffPlan/> : 
              data?.book?.title === 'Rental Income Commercials for Sale' ? <AccordRental/> : 
              data?.book?.title === 'Hotels for Sale at Popular Tourist Destinations' ? <AccordHotels/> : 
              data?.book?.title === 'Bargain Hunting for Real Estate | Bargain Property for Sale' ? <AccordBargain/> : 
              data?.book?.title === 'INVEST : VILLAS' && <AccordInvestVillas/> }

            </div>
            <div className="col-lg-4">
              <div className="visa-sidebar mb-30">
                <div className="inquery-form">
                    <img src="/3.png" alt="logo" className="w-[220px] sm:w-[240px] 1-mt-10 mb-10" />
                  <div className="form-title">
                    {language ==="en" ? <h4>Inquiry Form</h4> : <h4>Formulaire de demande</h4> }
                    
                    {language ==="en" ? 
                    
                    <p>
                    Complete form for complaints or service inquiries; expect
                    prompt response via phone/email.
                  </p>
                    : 
                    <p>Remplissez le formulaire pour les plaintes ou les demandes de service ; attendre
                    réponse rapide par téléphone/e-mail.</p> 
                    }  
                  
                  
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-inner mb-4">
                      <label>
                        {language === "en" ? "Full Name" : "Nom et prénom"} <span>*</span>
                      </label>
                      <input
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                      type="text" placeholder={language === "en" ?"Enter your full name":"Entrez votre nom complet"} />
                    </div>
                    <div className="form-inner mb-4">
                      <label>
                      {language === "en" ? "Email Address" : "Email Address"}  <span>*</span>
                      </label>
                      <input
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder={language === "en" ?"Enter your email address":"Entrez votre adresse email"}
                      />
                    </div>
                    <div className="form-inner mb-4">
                      <label>
                      {language === "en" ?  "Phone Number" :"Numéro de téléphone"} <span>*</span>
                      </label>
                      <input
                       value={phone}
                       onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        placeholder={language === "en" ?"Enter your phone number":"Entrez votre numéro de téléphone"}
                      />
                    </div>
                

                    <div className="form-inner mb-70">
                      <label>
                      {language === "en" ? "Your language":"Votre langue"} <span>*</span>
                      </label>
                      <SelectComponent
                        options={["English","French" ,"Spanish",]}
                        placeholder={language === "en" ? "Select Language":"Sélectionner la langue"}
                        onSelect={handleSelectLanguage} // Pass the handler to the SelectComponent
                      />
                     
                    </div>



                    <div className="form-inner mb-30">
                      <label>
                      {language === "en" ? "Write Your Massage":"Écrivez votre massage"}  <span>*</span>
                      </label>
                      <textarea
                       value={message}
                       onChange={(e) => setMessage(e.target.value)}
                        placeholder= {language === "en" ? "Write your quiry" : "Écrivez votre demande"}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-inner">
                      <button type="submit" className="primary-btn1 two">
                      {language === "en" ?  "Submit Now":"Soumettre maintenant"}
                      </button>
                    </div>
                  </form>

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

              
{/* 
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
                        <span>To More Inquiry</span>
                        <h6>
                          <a href="tel:+990737621432">+990-737 621 432</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}



            </div>
          </div>
        </div>
      </div>
      <Newslatter />
      <Footer />
    </div>
  );
};

export default VisaDetails;
