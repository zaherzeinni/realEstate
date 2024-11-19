import React from "react";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";

export default function Cyprus() {
  
  const [active, setActive] = useState<string>("1");
  const togglePara = (value: string) => {
    setActive((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  const [active1, setActive1] = useState<string>("");
  const togglePara1 = (value: string) => {
    setActive1((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  const [active2, setActive2] = useState<string>("");
  const togglePara2 = (value: string) => {
    setActive2((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active3, setActive3] = useState<string>("");
  const togglePara3 = (value: string) => {
    setActive3((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  const [active4, setActive4] = useState<string>("");
  const togglePara4 = (value: string) => {
    setActive4((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  const [active5, setActive5] = useState<string>("");
  const togglePara5 = (value: string) => {
    setActive5((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  const [active6, setActive6] = useState<string>("");
  const togglePara6 = (value: string) => {
    setActive6((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  const [active7, setActive7] = useState<string>("");
  const togglePara7 = (value: string) => {
    setActive7((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  const [active8, setActive8] = useState<string>("");
  const togglePara8 = (value: string) => {
    setActive8((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  const [active9, setActive9] = useState<string>("");
  const togglePara9 = (value: string) => {
    setActive9((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  const [active10, setActive10] = useState<string>("");
  const togglePara10 = (value: string) => {
    setActive10((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };






const {language} = useLanguageContext()

  return (
    <div dir="ltr" id={language === "en" ? "cyprus":"chypre"} className="faq-content-wrap mb-48 mt-32  hidden1 scroll-my-20 ">
      <div id={language === "en" ? "northern cyprus":"chypre nord"} className="faq-content-title mb-20 scroll-my-20">
      {language === "en" ?   <h4>FAQ : Northern Cyprus</h4> : <h4>FAQ : Chypre Nord</h4>}
      </div>
      <div className="faq-content">
        <div className="accordion" id="accordionTravel">
          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>1. Can foreigners buy property in Northern Cyprus ?</span>
                :
                <span>1. Les étrangers peuvent-ils acheter des biens immobiliers à Chypre Nord ?</span>
                }
                <div
                  className={`ltr:ml-auto rtl:mr-auto sm:flex justify-end text-end   hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%] ${
                    active === "1" ? "rotate-180 " : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 15L5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </h6>

            <AnimateHeight duration={300} height={active === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
                  {language === "en" ? 
                <p>Yes, foreigners can purchase property in Northern Cyprus. However, there are specific regulations and limits on the amount of land that can be acquired.</p>
                  :
                <p>Oui, les étrangers peuvent acheter des biens immobiliers à Chypre Nord. Cependant, il existe des réglementations spécifiques et des limites sur la quantité de terrain pouvant être acquise.</p>
                  }             
              </div>
            </AnimateHeight>
          </div>

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara1("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>2. What types of properties are available for investment ?</span>
                :
                <span>2. Quels types de propriétés sont disponibles pour l'investissement ?</span>
                }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]   ${
                    active1 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-end "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 15L5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </h6>

            <AnimateHeight duration={300} height={active1 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
                  {language === "en" ? 
                <p>Investors can find a variety of properties, including residential homes, luxury villas, apartments, and commercial real estate.</p>
                    :
                <p>Les investisseurs peuvent trouver une variété de propriétés, y compris des maisons résidentielles, des villas de luxe, des appartements et des biens immobiliers commerciaux.</p>
                  }
              </div>
            </AnimateHeight>
          </div>

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara2("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
               {language === "en" ? 
               <span> 3. What are the legal requirements for purchasing a property ?</span>
                :
               <span> 3. Quelles sont les exigences légales pour l'achat d'une propriété ?</span>
                }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active2 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-end "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 15L5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </h6>

            <AnimateHeight duration={300} height={active2 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>Buyers must obtain permission from the Council of Ministers, and it is advisable to engage a local lawyer to navigate the legal process and ensure all documentation is in order.</p>
                :
                <p>Les acheteurs doivent obtenir une autorisation du Conseil des ministres, et il est conseillé de faire appel à un avocat local pour naviguer dans le processus légal et s'assurer que toute la documentation est en ordre.</p>
                }
                </div>
            </AnimateHeight>
          </div>


          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara3("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
               {language === "en" ? 
               <span> 4. Are there any taxes associated with property ownership ?</span>
                :
               <span> 4. Y a-t-il des taxes associées à la propriété ?</span>
                }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active3 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-end "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 15L5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </h6>

            <AnimateHeight duration={300} height={active3 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ?   
                <p> Yes, property owners in Northern Cyprus are subject to various taxes, including property tax, stamp duty, and potentially capital gains tax upon selling the property.</p>
                :
                <p> Oui, les propriétaires à Chypre Nord sont soumis à diverses taxes, y compris la taxe foncière, les droits de timbre et potentiellement la taxe sur les plus-values lors de la vente de la propriété.</p>
              }
              </div>
            </AnimateHeight>
          </div>


          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara4("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                 {language === "en" ?  
                <span>5. What are the growth prospects for the real estate market in Northern Cyprus ?</span>
                  :
                <span>5. Quelles sont les perspectives de croissance du marché immobilier à Chypre Nord ?</span>
                 }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active4 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-end "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 15L5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </h6>

            <AnimateHeight duration={300} height={active4 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
          <p>The real estate market in Northern Cyprus shows promising growth prospects, supported by an increase in interest from foreign investors, development projects, and improvements in infrastructure. This makes it an attractive destination for long-term investments.</p>
         :
          <p>Le marché immobilier à Chypre Nord présente des perspectives de croissance prometteuses, soutenues par une augmentation de l'intérêt des investisseurs étrangers, des projets de développement et une amélioration des infrastructures. Cela en fait une destination attrayante pour les investissements à long terme.</p>
              }
              </div>
            </AnimateHeight>
          </div>




          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara5("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>6. How is the real estate market performing in Northern Cyprus ?</span>
                  :
                <span>6. Comment se porte le marché immobilier à Chypre Nord ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active5 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-end "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 15L5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </h6>

            <AnimateHeight duration={300} height={active5 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>The real estate market in Northern Cyprus is growing, driven by foreign investments, particularly from countries such as the UK, Russia, Europe, the United States, and Canada, making it an appealing destination for property buyers.</p>
                :
                <p>Le marché immobilier à Chypre Nord est en croissance, soutenu par les investissements étrangers, en particulier en provenance de pays comme le Royaume-Uni, la Russie, l'Europe, les États-Unis et le Canada, ce qui en fait une destination attrayante pour les acheteurs de biens immobiliers.</p>
                }
              </div>
            </AnimateHeight>
          </div>




          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara6("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
               {language === "en" ? 
               <span>7. What are the benefits of investing in real estate in Northern Cyprus?</span>
                :
               <span>7. Quels sont les avantages d'investir dans l'immobilier à Chypre Nord ?</span>
                }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active6 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-end "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 15L5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </h6>

            <AnimateHeight duration={300} height={active6 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ?   
                <p>Investing in Northern Cyprus offers benefits such as lower property prices compared to other Mediterranean destinations, potential rental income, and the possibility of obtaining residency through property ownership.</p>
                :
                <p>Investir à Chypre Nord offre des avantages tels que des prix immobiliers plus bas par rapport à d'autres destinations méditerranéennes, un potentiel de revenus locatifs et la possibilité d'obtenir un permis de résidence par le biais de la propriété.</p>
              }
              </div>
            </AnimateHeight>
          </div>



          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara7("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>8. How long does the process of buying a property take ?</span>
                  :
                <span>8. Quelle est la durée du processus d'achat d'une propriété ?</span>
                }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active7 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-end "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 15L5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </h6>

            <AnimateHeight duration={300} height={active7 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>The process of buying a property in Northern Cyprus can take between 3 to 6 months, depending on the complexity of the transaction, obtaining the necessary permits, and the availability of documents.</p>
                :
                <p>Le processus d'achat d'une propriété à Chypre Nord peut prendre entre 3 à 6 mois, selon la complexité de la transaction, l'obtention des autorisations nécessaires et la disponibilité des documents.</p>
                }
              </div>
            </AnimateHeight>
          </div>



          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara8("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>9. How can I ensure that the property I am buying is legitimate ?</span>
                :
                <span>9. Comment puis-je m'assurer que la propriété que j'achète est légitime ?</span>
                }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active8 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-end "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 15L5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </h6>

            <AnimateHeight duration={300} height={active8 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ?   
                <p>To ensure legitimacy, it is essential to verify the title deeds, check for any outstanding debts or mortgages on the property, and consult with a reputable lawyer who specializes in real estate transactions in Northern Cyprus.</p>
                :
                <p>Pour garantir la légitimité, il est essentiel de vérifier les titres de propriété, de s'assurer qu'il n'y a pas de dettes ou d'hypothèques sur la propriété, et de consulter un avocat réputé spécialisé dans les transactions immobilières à Chypre Nord.</p>
                }
              </div>
            </AnimateHeight>
          </div>



          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara9("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>10. What is the typical return on investment for rental properties ?</span>
                  :
                <span>10. Quel est le rendement typique sur investissement pour les propriétés locatives ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active9 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-end "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 15L5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </h6>

            <AnimateHeight duration={300} height={active9 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>The return on investment for rental properties in Northern Cyprus can vary, but many investors report yields ranging from <b>5% to 10%</b>, depending on the location and type of property.</p>
                :
                <p>Le rendement sur investissement pour les propriétés locatives à Chypre Nord peut varier, mais de nombreux investisseurs rapportent des rendements allant de <b>5 % à 10 %</b>, selon l'emplacement et le type de propriété.</p>
                }
              </div>
            </AnimateHeight>
          </div>


          
        </div>
      </div>
    </div>

  );
}
