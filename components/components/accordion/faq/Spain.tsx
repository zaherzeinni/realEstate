import React from "react";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";

export default function Spain() {
  
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
    <div dir="ltr" id={language === "en" ? "spain":"espagne"} className="faq-content-wrap mb-48 hidden1 scroll-my-20  ">
      <div className="faq-content-title mb-20">
      {language === "en" ?   <h4>FAQ : Spain</h4> : <h4>FAQ : Espagne</h4>}
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
                <span>1. Can foreigners buy property in Spain ?</span>
                :
                <span>1. Les étrangers peuvent-ils acheter des biens immobiliers en Espagne ?</span>
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
                <p>Yes, foreigners can purchase property in Spain without restrictions. The country has established legal frameworks to facilitate foreign investments.</p>
                  :
                <p>Oui, les étrangers peuvent acheter des biens immobiliers en Espagne sans restrictions. Le pays a mis en place des cadres juridiques pour faciliter les investissements étrangers.</p>
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
                <p>Investors can find a wide range of properties, including residential apartments, villas, commercial properties, and land for development.</p>
                    :
                <p>Les investisseurs peuvent trouver une large gamme de propriétés, y compris des appartements résidentiels, des villas, des biens commerciaux et des terrains à développer.</p>
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
               <span> 3. What are the legal requirements for purchasing property in Spain ?</span>
                :
               <span> 3. Quelles sont les exigences légales pour l'achat d'une propriété en Espagne ?</span>
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
                <p>Buyers need to obtain a Foreigner's Identification Number (NIE) and open a Spanish bank account. It is advisable to hire a local lawyer to handle the transaction and ensure all legal requirements are met.</p>
                :
                <p>Les acheteurs doivent obtenir un Numéro d'Identification d'Étranger (NIE) et ouvrir un compte bancaire espagnol. Il est conseillé de faire appel à un avocat local pour gérer la transaction et s'assurer que toutes les exigences légales sont respectées.</p>
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
               <span> 4. Are there any taxes associated with property ownership in Spain ?</span>
                :
               <span> 4. Y a-t-il des taxes associées à la propriété en Espagne ?</span>
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
                <p> Yes, property owners in Spain are subject to various taxes, including property tax (IBI), income tax on rental income, and capital gains tax upon selling the property.</p>
                :
                <p>Oui, les propriétaires en Espagne sont soumis à diverses taxes, y compris la taxe foncière (IBI), l'impôt sur le revenu des locations, et la taxe sur les plus-values lors de la vente de la propriété.</p>
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
                <span>5. What are the current trends in the Spanish real estate market ?</span>
                  :
                <span>5. Quelles sont les tendances actuelles du marché immobilier en Espagne ?</span>
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
          <p>The Spanish real estate market is experiencing growing demand, particularly in major cities like Madrid and Barcelona, as well as in coastal areas. Prices are rising, reflecting renewed interest from both domestic and foreign buyers.</p>
         :
          <p>Le marché immobilier espagnol connaît une demande croissante, particulièrement dans les grandes villes comme Madrid et Barcelone, ainsi que dans les zones côtières. Les prix sont en hausse, ce qui reflète un regain d'intérêt des acheteurs nationaux et étrangers.</p>
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
                <span>6. What are the costs associated with buying property in Spain ?</span>
                  :
                <span>6. Quels sont les coûts associés à l'achat d'une propriété en Espagne ?</span>
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
                <p>In addition to the purchase price, buyers should budget for additional costs, including notary fees, registration fees, taxes (approximately <b>10-15%</b> of the purchase price), and legal fees.</p>
                :
                <p>En plus du prix d'achat, les acheteurs doivent prévoir des coûts supplémentaires, y compris les frais de notaire, les frais d'enregistrement, les taxes (environ <b>10-15 %</b> du prix d'achat) et les honoraires juridiques.</p>
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
               <span>7. What are the benefits of investing in real estate in Spain ?</span>
                :
               <span>7. Quels sont les avantages d'investir dans l'immobilier en Espagne ?</span>
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
                <p>Investing in Spain offers benefits such as a diverse real estate market, potential for rental income, a favorable climate, and the possibility of obtaining a Golden Visa for residency.</p>
                :
                <p>Investir en Espagne offre des avantages tels qu'un marché immobilier diversifié, un potentiel de revenus locatifs, un climat favorable, et la possibilité d'obtenir un Golden Visa pour la résidence.</p>
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
                <span>8. What is an off-plan property project ?</span>
                  :
                <span>8. Qu'est-ce qu'un projet immobilier off-plan ?</span>
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
                <p>An off-plan property project refers to purchasing a property before its construction or during its construction. This can offer reduced purchase prices and the opportunity to customize certain aspects of the property, but it also carries risks related to the project's completion.</p>
                :
                <p>Un projet immobilier off-plan se réfère à l'achat d'une propriété avant sa construction ou pendant sa construction. Cela peut offrir des prix d'achat réduits et la possibilité de personnaliser certains aspects de la propriété, mais il comporte également des risques liés à la réalisation du projet.</p>
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
                <span>9. What are the rights of property owners in Spain ?</span>
                :
                <span>9. Quels sont les droits des propriétaires en Espagne ?</span>
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
                <p>Property owners in Spain have specific rights regarding their property, including the right to enjoy their property, rent it out, and sell it. It is important to understand these rights to avoid conflicts.</p>
                :
                <p>Les propriétaires en Espagne ont des droits spécifiques concernant leur propriété, y compris le droit de jouir de leur bien, de le louer, et de le vendre. Il est important de comprendre ces droits pour éviter les conflits.</p>
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
                <span>10. How can I ensure that the property I am buying is legitimate ?</span>
                  :
                <span>10. Comment puis-je m'assurer que la propriété que j'achète est légitime ?</span>
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
                <p>To ensure legitimacy, it is crucial to verify the property titles, check for any outstanding debts or legal issues, and consult with a reputable lawyer specializing in real estate transactions in Spain.</p>
                :
                <p>Pour garantir la légitimité, il est crucial de vérifier les titres de propriété, de s'assurer qu'il n'y a pas de dettes ou de problèmes juridiques, et de consulter un avocat réputé spécialisé dans les transactions immobilières en Espagne.</p>
                }
              </div>
            </AnimateHeight>
          </div>


          
        </div>
      </div>
    </div>

  );
}
