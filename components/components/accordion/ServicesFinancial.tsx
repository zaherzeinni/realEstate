import React from "react";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";

export default function ServicesFinancial() {

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
        {/* <h5 className="mt-3 text-primary">{language === "en" ? "Buying":"Acheter"}</h5> */}
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
                "1. What are the main payment options when purchasing a property in pre-sale?"
                :
                "1. Quelles sont les principales options de paiement lors de l'achat d'une propriété en pré-vente ?"
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
                  {language === "en" ? "When purchasing a property in pre-sale, payments are generally spread out over several stages based on the progress of the project. This starts with a small deposit to reserve your property, followed by larger payments made at different stages of development, and a final payment is due at closing." : "Lors de l'achat d'une propriété en pré-vente, les paiements sont généralement répartis en plusieurs étapes en fonction de l'avancement du projet. Cela commence par un petit dépôt de garantie pour réserver votre propriété, suivi de paiements plus importants effectués à différentes étapes du développement, et un paiement final est dû à la clôture."}
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
                "2. Why is it advantageous to make a small deposit to reserve a property?"
                :
                "2. Pourquoi est-il avantageux de faire un petit dépôt pour réserver une propriété ?"
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
                  {language === "en" ? "Making a small deposit allows you to secure your property without having to pay the total amount immediately. This makes it easier to manage your budget and allows you to gradually commit to your investment while ensuring that the property is reserved for you." : "Faire un petit dépôt de garantie vous permet de sécuriser votre propriété sans avoir à payer le montant total immédiatement. Cela facilite la gestion de votre budget et vous permet de vous engager progressivement dans votre investissement, tout en vous assurant que la propriété est réservée pour vous."}
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
                "3. How does the value of the property evolve during the pre-sale period?"
                :
                "3. Comment la valeur de la propriété évolue-t-elle pendant la période de prévente ?"
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
                  {language === "en" ? "The value of the property tends to increase as the project progresses toward completion. By taking advantage of pre-sale opportunities, buyers can benefit from this appreciation, which can lead to higher returns on their investment when the property is finally completed." : "La valeur de la propriété a tendance à augmenter à mesure que le projet progresse vers son achèvement. En profitant des opportunités de pré-vente, les acheteurs peuvent bénéficier de cette appréciation, ce qui peut mener à des rendements plus élevés sur leur investissement lorsque la propriété est enfin terminée."}
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
                "4. What guarantees do developers offer regarding the progress of the project?"
                :
                "4. Quelles garanties les promoteurs offrent-ils concernant l'avancement du projet ?"
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
                  {language === "en" ? "Developers generally commit to providing regular updates on the progress of the project so that buyers can track the construction's evolution. This includes information on construction timelines and details on development stages." : "Les promoteurs s'engagent généralement à fournir des mises à jour régulières sur l'avancement du projet, afin que les acheteurs puissent suivre l'évolution de la construction. Cela inclut des informations sur les délais de construction et des détails sur les étapes de développement."}
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
                "5. What happens if delays occur in the development of the property?"
                :
                "5. Que se passe-t-il si des retards surviennent dans le développement de la propriété ?"
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
                  {language === "en" ? "In the event of delays in development, developers must inform buyers of new deadlines. However, conditions may vary, so it is important to read the sales contract carefully to understand the developer's policies regarding delays and potential changes." : "En cas de retards dans le développement, les promoteurs doivent informer les acheteurs des nouvelles échéances. Cependant, les conditions peuvent varier, donc il est important de lire attentivement le contrat de vente pour comprendre les politiques du promoteur concernant les retards et les changements éventuels."}
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
                "6. Can I negotiate the price during the pre-sale process?"
                :
                "6. Puis-je négocier le prix pendant le processus de pré-vente ?"
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
                  {language === "en" ? "While prices for properties in pre-sale are generally fixed, there may be some room for negotiation. This is especially true if you are considering purchasing multiple units, if you wish to pay the total purchase amount upfront, or if the project is not selling as quickly as expected. It is advisable to discuss these options with your real estate advisor to explore possibilities for discounts or other benefits." : "Bien que les prix des propriétés en pré-vente soient généralement fixés, il peut exister une certaine marge de négociation. Cela est particulièrement vrai si vous envisagez d'acheter plusieurs unités, si vous souhaitez payer le montant total d'achat d'avance, ou si le projet ne se vend pas aussi rapidement que prévu. Il est donc conseillé de discuter de ces options avec votre conseiller en immobilier pour explorer les possibilités de réduction ou d'autres avantages."}
                </p>
              </div>
            </AnimateHeight>
          </div>



          {/* <div className="accordion-item  ">
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
                "7. What is the role of attorneys in the purchasing process?"
                :
                "7. Quel est le rôle des avocats dans le processus d'achat ?"
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
                  {language === "en" ? "Our local attorneys handle the verification of all legal documents with government departments. They ensure that all formalities are respected and that documents are in order, thus protecting you from potential legal issues." : "Nos avocats locaux s'occupent de la vérification de tous les documents légaux auprès des départements gouvernementaux. Ils s'assurent que toutes les formalités sont respectées et que les documents sont en règle, vous protégeant ainsi contre d'éventuels problèmes juridiques."}
                </p>
              </div>
            </AnimateHeight>
          </div> */}

          
        </div>
      </div>
    </div>

  );
}
