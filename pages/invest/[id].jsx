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
// import ProjectForm from "../../components/Site/ProjectForm";
// import ContactModal from "../../components/Site/ContactModal";
import Accord from "../../components/components/accordion/Accord"

import moment from "moment/moment";

import useProducts from "../../hooks/useProducts";
import ContactModal from "../../components/Site/ContactModal";
import ProjectCard from "../../components/Site/ProjectCard";

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
              {/* <ul className="visa-meta">
                <li>
                  <span>Country :</span> New York
                </li>
                <li>
                  <span>Visa Type :</span> Tourist
                </li>
                <li>
                  <span>Maximum Sta ys :</span> 30 Days
                </li>
                <li>
                  <span>Processing Time :</span> 7-10 Working Day
                </li>
                <li>
                  <span>Validity :</span> 60 Days
                </li>
                <li>
                  <span>Visa Mode :</span> Electronic
                </li>
              </ul> */}
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
                  {/* <h3>View Required Documents</h3>
                  <h6>
                    <span>*</span>Required Documents for Electronic Visa (Adult)
                    with Insurance
                  </h6>
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                      >
                        <path d="M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z" />
                      </svg>{" "}
                      Passport Scan Copy: Clearly scanned Passport copy
                      required. Minimum of 6 months validity required from the
                      arrival date.
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                      >
                        <path d="M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z" />
                      </svg>{" "}
                      Photo Specification: Passport Size Photo with White
                      Background (clear scanned Copy required)
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                      >
                        <path d="M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z" />
                      </svg>{" "}
                      Previous Visa copy: If traveler has previous travel
                      history on countries like Thailand, Malaysia, Singapore,
                      USA, UK and so on, need those clear VISA scanned copy.
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                      >
                        <path d="M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z" />
                      </svg>{" "}
                      Flight and hotel reservations booking with dates clearly
                      stated (DO NOT purchase until visa approval)
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                      >
                        <path d="M8.21008 15.9998C8.15563 15.9998 8.10177 15.9885 8.05188 15.9664C8.002 15.9444 7.95717 15.9122 7.92022 15.8719L0.104874 7.34121C0.0527746 7.28433 0.0182361 7.21337 0.00548549 7.137C-0.00726514 7.06063 0.00232503 6.98216 0.0330824 6.9112C0.0638398 6.84025 0.11443 6.77988 0.178662 6.73748C0.242893 6.69509 0.31798 6.67251 0.394731 6.6725H4.15661C4.21309 6.67251 4.26891 6.68474 4.32031 6.70837C4.37171 6.73201 4.41749 6.76648 4.45456 6.80949L7.06647 9.84167C7.34875 9.2328 7.89519 8.21899 8.85409 6.98363C10.2717 5.15733 12.9085 2.47141 17.4197 0.0467428C17.5069 -0.000110955 17.6084 -0.0122714 17.704 0.0126629C17.7996 0.0375972 17.8825 0.0978135 17.9363 0.181422C17.9901 0.26503 18.0109 0.365952 17.9946 0.46426C17.9782 0.562568 17.9259 0.651115 17.848 0.712418C17.8308 0.726001 16.0914 2.10818 14.0896 4.63987C12.2473 6.96965 9.79823 10.7792 8.59313 15.6973C8.57196 15.7837 8.52272 15.8604 8.45327 15.9153C8.38382 15.9702 8.29816 16 8.20996 16L8.21008 15.9998Z" />
                      </svg>{" "}
                      Processing time 7 working days.
                    </li>
                  </ul> */}
                </div>
              </div>

              {/* <h4 className="widget-title mb-30">
                FAQ - General Visa Information:
              </h4>
              <div className="faq-content">
                <div className="accordion" id="accordionTravel">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseOne"
                        aria-expanded="true"
                        aria-controls="travelcollapseOne"
                      >
                        01. Can I fill in my visa application in a language
                        other than English?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="travelheadingOne"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        No. At Present our online application system only
                        supports applications made in English.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseTwo"
                        aria-expanded="false"
                        aria-controls="travelcollapseTwo"
                      >
                        02. Will I be able to access the online application
                        system using my computer?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingTwo"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        We are doing our best to support as many computers,
                        operating systems and internet browsers as possible but
                        due to the technologies we use for our online
                        application system, there are certain browsers we
                        exclude due to their age or design. Currently our site
                        is tested at IE 5.0 or later and Mozilla Firefox 3.5 or
                        later.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseThree"
                        aria-expanded="false"
                        aria-controls="travelcollapseThree"
                      >
                        03. Can I save my application mid-way through the
                        application process?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingThree"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        Yes. You can save your online visa application wherever
                        you see the "Save &amp; Exit" icon. To login again and
                        complete your application, you will require your unique
                        "Visa Application Id". This number will have been sent
                        to the email address that you supplied in your
                        application security details.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseFour"
                        aria-expanded="false"
                        aria-controls="travelcollapseFour"
                      >
                        04. I do not understand one of the questions. What can I
                        do?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingFour"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        Throughout the online form we have added "More Info"
                        icons to some questions that might require further
                        guidance.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseFive"
                        aria-expanded="false"
                        aria-controls="travelcollapseFive"
                      >
                        05. I made a mistake on one of my answers. Can I change
                        it?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingFive"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        If you didn't submit your application finally you can do
                        the change. After submitting the application you can't
                        change it.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseSix"
                        aria-expanded="false"
                        aria-controls="travelcollapseSix"
                      >
                        06. The date I entered is not being accepted. What is
                        the correct format?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingSix"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        All date fields in our forms are set up in the following
                        format: dd/mm/yyyy (for example 21/08/2011).
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingSevene">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseSevene"
                        aria-expanded="false"
                        aria-controls="travelcollapseSevene"
                      >
                        07. I have not received my Completed Application
                        confirmation email. Can you resend it to me?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseSevene"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingSevene"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        Yes. But please check first that your inbox has not
                        treated our email confirmation as SPAM and that you have
                        given us the correct email address. If you have not
                        received your confirmation email after 24 hours please
                        contact us through Complain and Feedback link.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="travelheadingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseEight"
                        aria-expanded="false"
                        aria-controls="travelcollapseEight"
                      >
                        08. I am unable to retrieve my application. What can I
                        do?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="travelheadingEight"
                      data-bs-parent="#accordionTravel"
                    >
                      <div className="accordion-body">
                        This could be because you did not save your application
                        by selecting the "Save &amp; Exit" option flagged by the
                        following image on the application form or your did not
                        retrieve your application within 7 days of last saving
                        it. If you are sure you saved your application in the
                        last seven days, empty your browser cache(temporary
                        internet files) and try again.
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}


<Accord />


            </div>
            <div className="col-lg-4">
              <div className="visa-sidebar mb-30">
                {/* <div className="sidebar-top text-center">
                  <h4>Cost Summary</h4>
                  <h6>
                    $7836/ <span>per person</span>
                  </h6>
                  <p>Arrange your trip in advance - book this room now!</p>
                </div> */}
                <div className="inquery-form">
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
                    {/* <div className="form-inner mb-70">
                      <label>
                        Visa Type <span>*</span>
                      </label>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        placeholder="Select Visa"
                        onSelect={handleSelect} // Pass the handler to the SelectComponent
                      />
                      
                    </div> */}
                    {/* <div className="form-inner mb-70">
                      <label>
                        Country <span>*</span>
                      </label>
                      <SelectComponent
                        options={["Spain", "Canada", "France"]}
                        placeholder="Select Country"
                        onSelect={handleSelectCountry}
                      />

                    </div> */}

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
