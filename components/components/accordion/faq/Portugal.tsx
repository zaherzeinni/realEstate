import React from "react";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";

export default function Portugal() {
  
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
    <div dir="ltr" id="portugal" className="faq-content-wrap mb-48 mt-32  hidden1 scroll-my-20 ">
      <div className="faq-content-title mb-20">
      {language === "en" ?   <h4>FAQ : Portugal</h4> : <h4>FAQ : Portugal</h4>}
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
                <span>1. Can foreigners buy property in Portugal ?</span>
                :
                <span>1. Les étrangers peuvent-ils acheter des biens immobiliers au Portugal ?</span>
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
                <p>Yes, foreigners can purchase property in Portugal without restrictions. The country is open to foreign investments in the real estate sector.</p>
                  :
                <p>Oui, les étrangers peuvent acheter des biens immobiliers au Portugal sans restrictions. Le pays est ouvert aux investissements étrangers dans le secteur immobilier.</p>
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
                <p>In Portugal, investors can find various properties, including apartments, single-family homes, villas, commercial properties, and land.</p>
                    :
                <p>Au Portugal, les investisseurs peuvent trouver diverses propriétés, y compris des appartements, des maisons individuelles, des villas, des biens commerciaux et des terrains.</p>
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
               <span> 3. What are the legal requirements for purchasing property in Portugal ?</span>
                :
               <span> 3. Quelles sont les exigences légales pour acheter une propriété au Portugal ?</span>
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
                <p>Buyers need to obtain a Tax Identification Number (NIF) and open a Portuguese bank account. It is advisable to hire a local lawyer to ensure that all legal steps are followed.</p>
                :
                <p>Les acheteurs doivent obtenir un Numéro d'Identification Fiscale (NIF) et ouvrir un compte bancaire portugais. Il est recommandé de faire appel à un avocat local pour s'assurer que toutes les étapes légales sont respectées.</p>
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
               <span> 4. Are there any taxes associated with property ownership in Portugal ?</span>
                :
               <span> 4. Y a-t-il des taxes associées à la propriété au Portugal ?</span>
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
                <p> Yes, property owners in Portugal must pay several taxes, including property tax (IMI), income tax on rental income, and capital gains tax upon selling the property.</p>
                :
                <p>Oui, les propriétaires au Portugal doivent payer plusieurs taxes, dont la taxe foncière (IMI), la taxe sur le revenu locatif, et la taxe sur les plus-values lors de la vente de la propriété.</p>
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
                <span>5. What is the Portuguese Golden Visa ?</span>
                  :
                <span>5. Qu'est-ce que le Golden Visa portugais ?</span>
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
          <p>The Golden Visa is a program that allows foreign investors to obtain a residence permit in Portugal by investing in real estate with a minimum value of <b>€500,000</b>. This offers benefits such as the ability to travel within the Schengen Area.</p>
         :
          <p>Le Golden Visa est un programme qui permet aux investisseurs étrangers d'obtenir un permis de séjour au Portugal en investissant dans l'immobilier d'une valeur minimale de <b>500,000 €</b>. Cela offre des avantages tels que la possibilité de voyager dans l'espace Schengen.</p>
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
                <span>6. What are the costs associated with buying property in Portugal ?</span>
                  :
                <span>6. Quels sont les coûts associés à l'achat d'une propriété au Portugal ?</span>
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
                <p>In addition to the purchase price, buyers should consider notary fees, registration fees, taxes (approximately <b>6-11%</b> of the purchase price), and legal fees.</p>
                :
                <p>En plus du prix d'achat, les acheteurs doivent prendre en compte les frais de notaire, les frais d'enregistrement, les taxes (environ <b>6-11%</b> du prix d'achat), ainsi que les honoraires d'avocat.</p>
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
               <span>7. How is the real estate market in Portugal currently ?</span>
                :
               <span>7. Comment est le marché immobilier au Portugal actuellement ?</span>
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
                <p>The Portuguese real estate market has experienced strong growth in recent years, particularly in cities like Lisbon, Porto, and coastal regions. Demand continues to rise, driving up prices.</p>
                :
                <p>Le marché immobilier portugais a connu une forte croissance ces dernières années, en particulier dans des villes comme Lisbonne, Porto, et dans les régions côtières. La demande continue d'augmenter, ce qui fait grimper les prix.</p>
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
                <span>8. What are the benefits of investing in real estate in Portugal ?</span>
                  :
                <span>8. Quels sont les avantages d'investir dans l'immobilier au Portugal ?</span>
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
                <p>Investing in Portugal offers advantages such as a pleasant climate, high quality of life, a growing real estate market, and opportunities for rental income, especially due to tourism.</p>
                :
                <p>Investir au Portugal offre des avantages tels qu'un climat agréable, une qualité de vie élevée, un marché immobilier en pleine croissance, et des opportunités de revenus locatifs, notamment grâce au tourisme.</p>
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
                <span>9. What are the profitability prospects for real estate investors in Portugal ?</span>
                :
                <span>9. Quelles sont les perspectives de rentabilité pour les investisseurs immobiliers au Portugal ?</span>
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
                <p>The profitability prospects for real estate investors in Portugal are very positive, with increasing demand for short-term rentals and an expanding residential market. Many investors are seeing good returns on investment, especially in popular tourist areas.</p>
                :
                <p>Les perspectives de rentabilité pour les investisseurs immobiliers au Portugal sont très positives, avec une demande croissante pour les locations à court terme et un marché résidentiel en expansion. De nombreux investisseurs constatent un bon retour sur investissement, surtout dans les zones touristiques populaires.</p>
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
                <span>10. How can I verify the legitimacy of a property before purchasing ?</span>
                  :
                <span>10. Comment puis-je vérifier la légitimité d'une propriété avant l'achat ?</span>
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
                <p>To ensure the legitimacy of a property, it is essential to verify property titles, check for any outstanding debts or legal issues, and consult with a lawyer specializing in real estate transactions in Portugal.</p>
                :
                <p>Pour s'assurer de la légitimité d'une propriété, il est essentiel de vérifier les titres de propriété, de s'assurer qu'il n'y a pas de dettes ou de litiges associés, et de consulter un avocat spécialisé dans les transactions immobilières au Portugal.</p>
                }
              </div>
            </AnimateHeight>
          </div>


          
        </div>
      </div>
    </div>

  );
}
