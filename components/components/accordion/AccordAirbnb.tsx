import React from "react";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";

export default function AccordAirbnb() {

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


const {language} = useLanguageContext()

  return (
    <div className="faq-content-wrap mb-48 mt-32   ">
      <div className="faq-content-title mb-20">
        <h4> {language === "en" ? "Frequently Asked Question":"Foire aux questions"}</h4>
        <h5 className="mt-3 text-primary">{language === "en" ? "Invest in Airbnb Properties | Short-Term Rentals":"Investissez dans des Immobiliers Airbnb | Location à Court Terme"}</h5>
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
                "1. What are the advantages of investing in properties intended for Airbnb rentals ?"
                :
                "1. Quels sont les avantages d'acheter plusieurs propriétés en même temps ?"
                }
                <div
                  className={`ltr:ml-auto rtl:mr-auto flex justify-end text-start   absolute end-[15%] xl:end-[12%] 2xl:end-[20%] ${
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
                <p>
                  {language === "en" ? "Rental income can be higher than for long-term rentals, and you have the flexibility to use the property yourself." : "L'achat de plusieurs propriétés permet de diversifier votre portefeuille, d'optimiser les coûts de gestion et d'augmenter les revenus locatifs globaux."}
                </p>
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
                "2. What regulations should you be aware of when renting on Airbnb ?"
                :
                "2. Quelles sont les réglementations à connaître pour louer sur Airbnb ?"
                }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-start  absolute end-[15%] xl:end-[12%] 2xl:end-[20%]   ${
                    active1 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-start "
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
              <p>
                  {language === "en" ? "Regulations vary by city, but they may include duration restrictions, specific permits, and occupancy taxes." : "Les réglementations varient par ville, mais elles peuvent inclure des restrictions de durée, des permis spécifiques et des taxes de séjour."}
                </p>
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
                "3. How to set rental prices to maximize income ?"
                :
                "3. Comment fixer le prix de location pour maximiser les revenus ?"
                }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-start  absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active2 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-start "
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
              <p>
                  {language === "en" ? "TExamine prices of similar properties in your area and adjust based on seasonality and demand." : "Examinez les prix des propriétés similaires dans votre région et ajustez en fonction de la saisonnalité et de la demande."}
                </p>
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
                "4. What are the costs associated with managing an Airbnb property ?"
                :
                "4. Quels sont les coûts associés à la gestion d'une propriété Airbnb ?"
                }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-start  absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active3 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-start "
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
              <p>
                  {language === "en" ? "Costs include cleaning, maintenance, platform fees, and sometimes management fees if you hire a third party." : "Les coûts incluent le nettoyage, l'entretien, les frais de plateforme, et parfois des coûts de gestion si vous faites appel à un tiers."}
                </p>
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
                "5. How to attract guests on short-term rental platforms ?"
                :
                "5. Comment attirer des clients sur des plateformes de location à court terme ?"
                }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-start  absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active4 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-start "
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
              <p>
                  {language === "en" ? "Ensure you have high-quality photos, a detailed description, and positive reviews." : "Assurez-vous d'avoir de belles photos, une description détaillée et de bonnes évaluations."}
                </p>
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
                "6. What types of properties work best for Airbnb rentals ?"
                :
                "6. Quels types de propriétés fonctionnent le mieux pour la location Airbnb ?"
                }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-start  absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active5 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-start "
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
              <p>
                  {language === "en" ? "Properties in tourist areas, with modern amenities and good access to transportation, are often the most sought after." : "Les propriétés dans des zones touristiques, avec des commodités modernes et un bon accès aux transports sont souvent les plus recherchées."}
                </p>
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
                "7. How to manage reviews and online reputation for an Airbnb property ?"
                :
                "7. Comment gérer les avis et la réputation en ligne pour une propriété Airbnb ?"
                }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-start  absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active6 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 flex justify-end text-start "
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
              <p>
                  {language === "en" ? "Be proactive in responding to reviews, provide excellent customer service, and quickly address reported issues." : "Soyez proactif dans la réponse aux avis, offrez un excellent service client et corrigez rapidement les problèmes signalés."}
                </p>
              </div>
            </AnimateHeight>
          </div>

          
        </div>
      </div>
    </div>

  );
}
