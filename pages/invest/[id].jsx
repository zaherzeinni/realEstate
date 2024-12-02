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
