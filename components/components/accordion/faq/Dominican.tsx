import React from "react";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";

export default function Dominican() {
  
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
  const [active11, setActive11] = useState<string>("");
  const togglePara11 = (value: string) => {
    setActive11((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active12, setActive12] = useState<string>("");
  const togglePara12 = (value: string) => {
    setActive12((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active13, setActive13] = useState<string>("");
  const togglePara13 = (value: string) => {
    setActive13((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active14, setActive14] = useState<string>("");
  const togglePara14 = (value: string) => {
    setActive14((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active15, setActive15] = useState<string>("");
  const togglePara15 = (value: string) => {
    setActive15((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active16, setActive16] = useState<string>("");
  const togglePara16 = (value: string) => {
    setActive16((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active17, setActive17] = useState<string>("");
  const togglePara17 = (value: string) => {
    setActive17((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active18, setActive18] = useState<string>("");
  const togglePara18 = (value: string) => {
    setActive18((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active19, setActive19] = useState<string>("");
  const togglePara19 = (value: string) => {
    setActive19((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active20, setActive20] = useState<string>("");
  const togglePara20 = (value: string) => {
    setActive20((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active21, setActive21] = useState<string>("");
  const togglePara21 = (value: string) => {
    setActive21((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active22, setActive22] = useState<string>("");
  const togglePara22 = (value: string) => {
    setActive22((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active23, setActive23] = useState<string>("");
  const togglePara23 = (value: string) => {
    setActive23((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const [active24, setActive24] = useState<string>("");
  const togglePara24 = (value: string) => {
    setActive24((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };






const {language} = useLanguageContext()

  return (
    <div dir="ltr" className="faq-content-wrap mb-48 mt-32  hidden1  ">
      <div className="faq-content-title mb-20">
      {language === "en" ?   <h4>FAQ : Dominican Republic</h4> : <h4>FAQ : République Dominicaine</h4>}
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
                <span>1. Can foreigners buy property in the Dominican Republic?</span>
                :
                <span>1. Les étrangers peuvent-ils acheter des biens immobiliers en République Dominicaine ?</span>
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
                <p>Yes, foreigners can buy property without restrictions, making it an attractive destination for international investors.</p>
                  :
                <p>Oui, les étrangers peuvent acheter des biens immobiliers sans restrictions, ce qui en fait une destination attrayante pour les investisseurs internationaux.</p>
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
                <span>2. What is the process for buying property in the Dominican Republic?</span>
                :
                <span>2. Quel est le processus d'achat d'un bien immobilier en République Dominicaine ?</span>
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
                <p>The process includes searching for a property, signing a purchase agreement, obtaining a Taxpayer Identification Number (RNC), and registering the property with local authorities.</p>
                    :
                <p>Le processus comprend la recherche d'un bien, la signature d'un contrat de vente, l'obtention d'un numéro d'identification fiscale (RNC), et l'enregistrement de la propriété auprès des autorités locales.</p>
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
               <span> 3. What is the Confotur law?</span>
                :
               <span>3. Qu'est-ce que la loi Confotur ?</span>
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
                <p>The Confotur law (Tourism Development Law) provides tax incentives to investors in the real estate sector, including tax exemptions on rental income and capital gains, as well as reductions on customs duties for construction materials.</p>
                :
                <p>La loi Confotur (Loi sur le développement touristique) offre des incitations fiscales aux investisseurs dans le secteur immobilier, notamment des exonérations fiscales sur les revenus locatifs et les plus-values, ainsi que des réductions sur les droits de douane pour les matériaux de construction.</p>
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
               <span> 4. What taxes are associated with property ownership?</span>
                :
               <span>4. Quelles sont les taxes associées à la propriété ?</span>
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
                <p>Property owners must pay an annual property tax known as <b>Impuesto sobre la Propiedad Inmobiliaria (IPI)</b>, which is generally 1% of the assessed value of the property above a certain threshold. </p>
                :
                <p>Les propriétaires doivent payer une taxe annuelle sur la propriété appelée <b>Impuesto sobre la Propiedad Inmobiliaria (IPI)</b>, généralement de 1 % de la valeur estimée de la propriété au-dessus d'un certain seuil.</p>
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
                <span>5. What are the additional costs involved in purchasing real estate?</span>
                  :
                <span>5. Quels sont les coûts supplémentaires lors de l'achat d'un bien immobilier ?</span>
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
          <p>In addition to the purchase price, buyers should budget for closing costs, which can include <b>lawyer fees</b>, registration fees, and taxes, typically amounting to about <b>3% to 6%</b> of the purchase price.</p>
         :
          <p>En plus du prix d'achat, les acheteurs doivent prévoir des frais de clôture, qui peuvent inclure des <b>frais de bureau d'avocat</b>, des frais d'enregistrement et des taxes, représentant environ <b>3 % à 6 %</b> du prix d'achat.</p>
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
                <span>6. Is it advisable to hire a real estate agent?</span>
                  :
                <span>6. Est-il conseillé d'engager un agent immobilier ?</span>
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
                <p>While not mandatory, hiring an experienced real estate agent can facilitate the purchasing process, help navigate the local market, and ensure a smooth transaction.</p>
                :
                <p>Bien que ce ne soit pas obligatoire, engager un agent immobilier expérimenté peut faciliter le processus d'achat, aider à naviguer dans le marché local et garantir une transaction sans problème.</p>
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
               <span>7. What types of properties are available for purchase?</span>
                :
               <span>7. Quels types de propriétés sont disponibles à l'achat ?</span>
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
                <p>The Dominican Republic offers a variety of properties, including <b>condominiums, villas, beachfront homes, and commercial properties</b>, catering to different budgets and preferences.</p>
                :
                <p>La République Dominicaine offre une variété de propriétés, y compris des <b>condominiums, villas, maisons en bord de mer, et propriétés commerciales</b>, adaptées à différents budgets et préférences.</p>
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
                <span>8. Are there residency options for property investors?</span>
                  :
                <span>8. Existe-t-il des options de résidence pour les investisseurs immobiliers ?</span>
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
                <p>Yes, purchasing property can provide a pathway to residency in the Dominican Republic, especially for those investing above a certain amount, typically around $200,000.</p>
                :
                <p>Oui, l'achat de biens immobiliers peut offrir une voie vers la résidence en République Dominicaine, surtout pour ceux qui investissent au-dessus d'un certain montant, généralement autour de 200 000 $.</p>
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
                <span>9. What are the current market trends in the Dominican Republic?</span>
                :
                <span>9. Quelles sont les tendances actuelles du marché immobilier en République Dominicaine ?</span>
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
                <p>The real estate market is experiencing steady growth, particularly in tourist areas like Punta Cana and Santo Domingo, with increasing demand for vacation rentals and investment properties.</p>
                :
                <p>Le marché immobilier connaît une croissance stable, en particulier dans des zones touristiques comme Punta Cana et Saint-Domingue, avec une demande croissante pour les locations de vacances et les propriétés d'investissement.</p>
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
                <span>10. How can I ensure the property is legally compliant?</span>
                  :
                <span>10. Comment puis-je m'assurer que la propriété est conforme légalement ?</span>
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
                <p>It is essential to conduct due diligence, including verifying property titles and ensuring compliance with local zoning laws. Consulting a local attorney can help navigate these legal aspects.</p>
                :
                <p>Il est essentiel de mener une diligence raisonnable, y compris la vérification des titres de propriété et la conformité avec les lois de zonage locales. Consulter un avocat local peut aider à naviguer dans ces aspects juridiques.</p>
                }
              </div>
            </AnimateHeight>
          </div>



          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara10("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>11. How much is the property tax?</span>
                  :
                <span>11. Quel est le taux de la taxe foncière ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active10 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active10 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>Property tax in the Dominican Republic is 1% a year, based on the registered value of the property; the first, approximately US$150,000.00, is tax-free. Therefore, the exemption is based on a natural person's total real estate patrimony, meaning that the total amount of the exemption will be the same whether having one or multiple properties. This exemption does not apply to corporations.</p>
                :
                <p>La taxe foncière en République Dominicaine est de 1 % par an, basée sur la valeur enregistrée de la propriété ; les premiers, environ 150 000,00 USD, sont exonérés d'impôt. Par conséquent, l'exemption est basée sur le patrimoine immobilier total d'une personne physique, ce qui signifie que le montant total de l'exemption sera le même, que l'on possède une ou plusieurs propriétés. Cette exemption ne s'applique pas aux sociétés.</p>
                }
              </div>
            </AnimateHeight>
          </div>
          

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara11("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>12. What is the currency in the Dominican Republic?</span>
                  :
                <span>12. Quelle est la monnaie en République Dominicaine ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active11 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active11 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>The Dominican peso is the legal currency. See the exchange rate <a href="https://www.bancentral.gov.do/SectorExterno/HistoricoTasas" target="_blank">[Central Bank</a>] </p>
                :
                <p>Le peso dominicain est la monnaie légale. Voir le taux de change <a href="https://www.bancentral.gov.do/SectorExterno/HistoricoTasas" target="_blank">[Central Bank</a>]</p>
                }
              </div>
            </AnimateHeight>
          </div>
          
          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara12("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>13. How is the economy in the Dominican Republic?</span>
                  :
                <span>13. Comment est l'économie de la République dominicaine ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active12 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active12 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>The main economic activity in the Dominican Republic is agriculture, followed by services, agroindustry, and tourism, with a wide range of hotels located in the beautiful beaches that attract tourists from every corner of the world.</p>
                :
                <p>L'activité économique principale de la République dominicaine est l'agriculture, suivie des services, de l'agro-industrie et du tourisme, avec une large gamme d'hôtels situés sur les belles plages qui attirent des touristes de tous horizons.</p>
                }
              </div>
            </AnimateHeight>
          </div>
          

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara13("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>14. What are the benefits of the Confotur law?</span>
                  :
                <span>14. Quels sont les avantages de la loi Confotur ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active13 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active13 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>This law allows foreigners to buy their property in the Dominican Republic with tax exemption.</p>
                :
                <p>Cette loi permet aux étrangers d'acheter leur propriété en République dominicaine avec une exonération fiscale.</p>
                }
              </div>
            </AnimateHeight>
          </div>
          

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara14("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>15. What is the GDP of the Dominican Republic?</span>
                  :
                <span>15. Quel est le PIB de la République dominicaine ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active14 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active14 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>The projections of international organizations about the GDP growth of the Dominican Republic will remain above 5.0% in 2022, despite the geopolitical conflict between Russia and Ukraine.</p>
                :
                <p>Les projections des organisations internationales concernant la croissance du PIB de la République dominicaine devraient rester au-dessus de 5,0 % en 2022, malgré le conflit géopolitique entre la Russie et l'Ukraine.</p>
                }
              </div>
            </AnimateHeight>
          </div>
          

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara15("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>16. How is the security in the country?</span>
                  :
                <span>16. Comment est la sécurité dans le pays ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active15 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active15 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>The Dominican Republic continues to be one of the countries with the lowest crime rate in the region. However, it is suggested to keep a smart attitude of caution, as you would when visiting any unknown country or big city in the world.</p>
                :
                <p>La République dominicaine continue d'être l'un des pays avec le taux de criminalité le plus bas de la région. Cependant, il est conseillé de garder une attitude de prudence, comme vous le feriez en visitant un pays ou une grande ville inconnue.</p>
                }
              </div>
            </AnimateHeight>
          </div>
          

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara16("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>17. What documents do I need to buy my property?</span>
                  : 
                <span>17. Quels documents dois-je fournir pour acheter ma propriété ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active16 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active16 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>Passport and a second identification, for example, a driver’s license.</p>
                :
                <p>Un passeport et une seconde pièce d'identité, par exemple, un permis de conduire.</p>
                }
              </div>
            </AnimateHeight>
          </div>
          

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara17("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>18. What is the average temperature in the Dominican Republic?</span>
                  :
                <span>18. Quelle est la température moyenne en République dominicaine ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active17 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active17 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>The temperature in the Dominican Republic ranges from 73.4°F to 86°F, depending on the area of the country and the season of the year. The weather is tropical warm throughout the whole year.</p>
                :
                <p>La température en République dominicaine varie de 23,4 °C à 30 °C, selon la zone du pays et la saison de l'année. Le climat est tropical chaud tout au long de l'année.</p>
                }
              </div>
            </AnimateHeight>
          </div>
          

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara18("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>19. Do I have to be present for the closing?</span>
                  :
                <span>19. Dois-je être présent pour la clôture ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active18 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active18 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>In a real estate transaction, buyers and sellers must be present or duly represented by power of attorney at the closing.</p>
                :
                <p>Dans une transaction immobilière, les acheteurs et les vendeurs doivent être présents ou dûment représentés par procuration lors de la clôture.</p>
                }
              </div>
            </AnimateHeight>
          </div>
          

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara19("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>20. Is it better to own the property in my name or the name of a corporation?</span>
                  :
                <span>20. Est-il préférable d'avoir la propriété à mon nom ou au nom d'une société ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active19 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active19 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>Every case is different, especially in terms of asset protection and tax savings; however, in terms of ownership, there is no difference. When buying in the name of a corporation, there will be additional obligations in terms of company maintenance, bookkeeping, and taxes.</p>
                :
                <p>Chaque cas est différent, surtout en termes de protection des actifs et d'économies fiscales ; cependant, en termes de propriété, il n'y a pas de différence. Lors de l'achat au nom d'une société, il y aura des obligations supplémentaires en matière de maintenance de l'entreprise, de comptabilité et de taxes.</p>
                }
              </div>
            </AnimateHeight>
          </div>
          

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara20("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>21. How long does it take to do the due diligence process?</span>
                  :
                <span>21. Combien de temps faut-il pour effectuer le processus de diligence raisonnable ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active20 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active20 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>In normal circumstances, the average time will be from 2 to 4 weeks; however, the timeframe for the due diligence will be dictated by the potential problems and situations that we will find out when performing research and paperwork revision.</p>
                :
                <p>Dans des circonstances normales, le délai moyen sera de 2 à 4 semaines ; cependant, le calendrier pour la diligence raisonnable sera dicté par les problèmes potentiels et les situations que nous découvrirons lors des recherches et de la révision des documents.</p>
                }
              </div>
            </AnimateHeight>
          </div>
          

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara21("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>22. After closing, how long does it take to get the title in my name?</span>
                  :
                <span>22. Après la clôture, combien de temps faut-il pour obtenir le titre à mon nom ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active21 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active21 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>Since the pandemic, transferring the title to the new owner takes about 2 to 3 months.</p>
                :
                <p>Depuis la pandémie, le transfert du titre au nouveau propriétaire prend environ 2 à 3 mois.</p>
                }
              </div>
            </AnimateHeight>
          </div>
          

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara22("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>23. How much are the property transfer taxes?</span>
                  :
                <span>23. Combien sont les taxes de transfert de propriété ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active22 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active22 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>Transfer tax in the Dominican Republic is 3% on the highest amount between the purchase price and the registered value.</p>
                :
                <p>La taxe de transfert en République dominicaine est de 3 % sur le montant le plus élevé entre le prix d'achat et la valeur enregistrée.</p>
                }
              </div>
            </AnimateHeight>
          </div>
          

          <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara23("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span>24. How much is the property tax?</span>
                  :
                <span>24. Combien est la taxe foncière ?</span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active23 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active23 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p>Property tax in the Dominican Republic is 1% a year, based on the registered value of the property; the first, approximately US$150,000.00, is tax-free. Therefore, the exemption is based on a natural person's total real estate patrimony, meaning that the total amount of the exemption will be the same whether having one or multiple properties. This exemption does not apply to corporations.</p>
                :
                <p>La taxe foncière en République dominicaine est de 1 % par an, basée sur la valeur enregistrée de la propriété ; le premier montant, d'environ 150 000,00 USD, est exempté d'impôt. Par conséquent, l'exemption est basée sur le patrimoine immobilier total d'une personne physique, ce qui signifie que le montant total de l'exemption sera le même, qu'il y ait une ou plusieurs propriétés. Cette exemption ne s'applique pas aux sociétés.</p>
                }
              </div>
            </AnimateHeight>
          </div>
          

          {/* <div className="accordion-item  ">
            <h6 className="accordion-header111 !border-1 border-b-2 border-gray-500 my-2" id="travelheadingOne">
              <button
                onClick={() => togglePara24("1")}
                className="accordion-button- collapsed flex justify-end text-start w-auto mb-2 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#travelcollapseOne"
                aria-expanded="false"
                aria-controls="travelcollapseOne"
              >
                {language === "en" ? 
                <span></span>
                  :
                <span></span>
                  }
                <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto sm:flex justify-end text-end  hidden absolute end-[15%] xl:end-[12%] 2xl:end-[20%]  ${
                    active24 === "1" ? "rotate-180" : ""
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

            <AnimateHeight duration={300} height={active24 === "1" ? "auto" : 0}>
              <div className="space-y-2 p-4 text-white-dark text-[13px]">
              {language === "en" ? 
                <p></p>
                :
                <p></p>
                }
              </div>
            </AnimateHeight>
          </div>
           */}


        </div>
      </div>
    </div>

  );
}
