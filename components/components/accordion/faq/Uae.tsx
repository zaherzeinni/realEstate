import React from "react";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";

export default function Uae() {
  
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
    <div dir="ltr" id={language === "en" ? "uae":"emirats"} className="faq-content-wrap mb-48  hidden1 scroll-my-32 ">
      <div className="faq-content-title mb-20">
      {language === "en" ?   <h4>FAQ : UAE</h4> : <h4>FAQ : Émirats Arabes Unis</h4>}
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
                <span>1. What are the benefits of investing in real estate in the UAE?</span>
                :
                <span>1. Quels sont les avantages d'investir dans l'immobilier aux Émirats ?</span>
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
                <p>Investing in real estate in the UAE offers <b>no capital gains tax, tax-free income, and high rental yields.</b></p>
                  :
                <p>Investir dans l'immobilier aux Émirats offre  <b>aucun impôt sur les plus-values, un revenu exonéré d'impôts, et des rendements locatifs élevés.</b></p>
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
                <span>2. Can foreigners buy property in the UAE?</span>
                :
                <span>2. Les étrangers peuvent-ils acheter des biens immobiliers aux Émirats ?</span>
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
                <p>Yes, foreigners can purchase real estate in <b>freehold areas</b> throughout the country.</p>
                    :
                <p>Oui, les étrangers peuvent acheter des biens immobiliers dans des <b>des zones en pleine propriété</b>à travers le pays.</p>
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
               <span> 3. What is the process for buying property in Dubai?</span>
                :
               <span> 3. Quel est le processus d'achat d'un bien immobilier à Dubaï ?</span>
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
                <p>The process includes researching a property, conducting legal checks, signing a Memorandum of Understanding, paying a deposit, and completing the transfer at the Dubai Land Department.</p>
                :
                <p>Le processus inclut la recherche d'un bien, les vérifications légales, la signature d'un protocole d'accord, le paiement d'un acompte, et le transfert au Département des Terres de Dubaï.</p>
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
               <span> 4. Are there residency benefits for property investors?</span>
                :
               <span> 4. Y a-t-il des avantages de résidence pour les investisseurs immobiliers ?</span>
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
                <p> Yes, investors can obtain a <b>long-term residency visa</b> by investing in real estate.</p>
                :
                <p> Oui, les investisseurs peuvent obtenir un  <b>visa de résidence à long terme </b>en investissant dans l'immobilier.</p>
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
                <span>5. What costs are associated with buying property in the UAE?</span>
                  :
                <span>5. Quels coûts sont associés à l'achat d'un bien immobilier aux Émirats ?</span>
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
          <p>Costs include <b>Dubai Land Department fees</b> (4%),<b>registration fees, real estate agent fees</b> (around 2%), and <b>maintenance charges.</b></p>
         :
          <p>Les coûts incluent les  <b>les frais du Département des Terres </b> (4%),<b> les frais d'enregistrement, les frais d'agent immobilier</b> (environ  2%), et les  <b>les charges de maintenance.</b></p>
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
                <span>6. What types of properties can I invest in?</span>
                  :
                <span>6. Quels types de biens puis-je investir ?</span>
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
                <p>Investors can choose from <b>apartments, villas, townhouses, commercial spaces, and off-plan developments.</b></p>
                :
                <p>Les investisseurs peuvent choisir parmi des<b>appartements, villas, maisons de ville, espaces commerciaux, et développements sur plan.</b></p>
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
               <span>7. What is the average return on investment (ROI) for properties in the UAE?</span>
                :
               <span>7. Quelle est la rentabilité moyenne des biens immobiliers aux Émirats ?</span>
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
                <p>Average rental yields typically range from <b>5% to 8%</b>, depending on the location and type of property.</p>
                :
                <p>Les rendements locatifs moyens varient généralement entre<b>5% to 8%</b>,  selon l'emplacement et le type de bien.</p>
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
                <span>8. What is a title deed, and how do I obtain one?</span>
                  :
                <span>8. Qu'est-ce qu'un acte de propriété et comment l'obtenir ?</span>
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
                <p>A title deed is a legal document proving ownership of a property, obtained during the transfer process at the Dubai Land Department.</p>
                :
                <p>L'acte de propriété est un document légal prouvant la propriété d'un bien, obtenu lors du transfert au Département des Terres de Dubaï.</p>
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
                <span>9. What are the current market trends in UAE real estate?</span>
                :
                <span>9. Quelles sont les tendances actuelles du marché immobilier aux Émirats ?</span>
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
                <p>The UAE real estate market is experiencing <b>continuous growth</b>, with increased demand for luxury properties and a rise in development projects, particularly in tourist areas.</p>
                :
                <p>Le marché immobilier aux Émirats connaît une  <b>croissance continue</b>, avec une demande accrue pour les propriétés de luxe et une augmentation des projets de développement, notamment dans les zones touristiques.</p>
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
                <span>10. How can I assess the value of a property before buying?</span>
                  :
                <span>10. Comment évaluer la valeur d'un bien immobilier avant d'acheter ?</span>
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
                <p>To evaluate a property's value, it is advisable to consult a <b>real estate expert</b> for a professional appraisal, compare prices of similar properties in the area, and examine local market trends.</p>
                :
                <p>Pour évaluer la valeur d'un bien, il est conseillé de faire appel à un <b>expert immobilier </b> pour une évaluation professionnelle, de comparer les prix des propriétés similaires dans la région, et d'examiner les tendances du marché local.</p>
                }
              </div>
            </AnimateHeight>
          </div>


          
        </div>
      </div>
    </div>

  );
}
