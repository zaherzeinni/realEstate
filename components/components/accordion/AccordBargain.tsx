import React from "react";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";

export default function AccordBargain() {

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


const {language} = useLanguageContext()

  return (
    <div className="faq-content-wrap mb-48 mt-32   ">
      <div className="faq-content-title mb-20">
        <h4> {language === "en" ? "Frequently Asked Question":"Foire aux questions"}</h4>
        <h5 className="mt-3 text-primary">{language === "en" ? "Low-Priced Real Estate for Sale":"Immobilier à Vendre à Prix Bas"}</h5>
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
                "1. Why is a property sold at a low price ?"
                :
                "1. Pourquoi un bien immobilier est-il vendu à prix bas ?"
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
                  {language === "en" ? "A property may be sold at a low price due to a desired quick sale, market price adjustments, or properties needing renovations, thus offering interesting opportunities for buyers." : "Un bien peut être vendu à prix bas en raison d'une vente rapide souhaitée, d'ajustements de prix liés au marché, ou de propriétés nécessitant des rénovations, offrant ainsi des opportunités intéressantes pour les acheteurs."}
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
                "2. How to identify low-priced buying opportunities ?"
                :
                "2. Comment identifier des opportunités d'achat à prix bas ?"
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
                  {language === "en" ? "Monitor auctions and listings of undervalued properties on real estate platforms to maximize your chances of finding good deals." : "Surveillez les enchères et les annonces de biens sous-évalués sur des plateformes immobilières pour maximiser vos chances de trouver de bonnes affaires."}
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
                "3. What advice would you give for successfully purchasing at a low price ?"
                :
                "3. Quels conseils donneriez-vous pour réussir un achat à prix bas ?"
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
                  {language === "en" ? "Conduct thorough market research, consult real estate experts, and be ready to act quickly when you find a good opportunity." : "Faites des recherches approfondies sur le marché, consultez des experts en immobilier, et soyez prêt à agir rapidement lorsque vous trouvez une bonne opportunité."}
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
                "4. How to maximize the value of a property purchased at a low price ?"
                :
                "4. Comment maximiser la valeur d'un bien immobilier acheté à prix bas ?"
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
                  {language === "en" ? "Invest in strategic improvements, such as aesthetic renovations or energy updates, which can increase your property's value and enhance your return on investment." : "Investissez dans des améliorations stratégiques, comme des rénovations esthétiques ou des mises à jour énergétiques, qui peuvent augmenter la valeur de votre propriété et améliorer votre retour sur investissement."}
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
                "5. How to negotiate the price of a property ?"
                :
                "5. Comment négocier le prix d'un bien immobilier ?"
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
                  {language === "en" ? "Justify your offer with market data and remain flexible on the terms of sale to achieve a better price." : "Justifiez votre offre avec des données de marché et restez flexible sur les conditions de vente pour obtenir un meilleur prix."}
                </p>
              </div>
            </AnimateHeight>
          </div>


          {/* <div className="accordion-item  ">
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
                "6. How to finance the purchase of buildable land ?"
                :
                "6. Comment financer l'achat d'un terrain constructible ?"
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
                  {language === "en" ? "You can use mortgages, private financing, or investment partnerships." : "Vous pouvez utiliser des prêts hypothécaires, des financements privés, ou des partenariats d'investissement."}
                </p>
              </div>
            </AnimateHeight>
          </div>
 */}

          
        </div>
      </div>
    </div>

  );
}
