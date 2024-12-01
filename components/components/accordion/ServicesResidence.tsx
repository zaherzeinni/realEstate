import React from "react";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";

export default function ServicesResidence() {

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
                "1. What is a residence permit through real estate investment?"
                :
                "1. Qu'est-ce qu'un permis de résidence par investissement immobilier ?"
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
                  {language === "en" ? "A residence permit through real estate investment is a status that allows an individual to obtain legal residency in a country by investing in designated real estate projects, such as purchasing a primary residence or a rental property." : "Un permis de résidence par investissement immobilier est un statut qui permet à un individu d'obtenir la résidence légale dans un pays en investissant dans des projets immobiliers désignés, tels que l'achat d'une résidence principale ou d'un bien locatif."}
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
                "2. What types of projects are eligible for the immigration by investment program?"
                :
                "2. Quels types de projets sont éligibles pour le programme d'immigration par investissement ?"
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
                  {language === "en" ? "Eligible projects may include the purchase of your primary residence or investment in rental properties. Each country has its own criteria and designated project types, so it is essential to research the available options." : "Les projets éligibles peuvent inclure l'achat de votre résidence principale ou un investissement dans des propriétés locatives. Chaque pays a ses propres critères et types de projets désignés, il est donc essentiel de se renseigner sur les options disponibles."}
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
                "3. What are the specific conditions to obtain a residence permit through investment?"
                :
                "3. Quelles sont les conditions spécifiques pour obtenir un permis de résidence par investissement ?"
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
                  {language === "en" ? "Conditions vary by country but may include criteria such as a minimum investment amount, the duration of property ownership, and the need to provide proof of income or funds. It is important to consult the specific requirements of each program." : "Les conditions varient selon les pays, mais elles peuvent inclure des critères tels que le montant minimum d'investissement, la durée de détention de la propriété, et la nécessité d'apporter des preuves de revenus ou de fonds. Il est important de consulter les exigences spécifiques de chaque programme."}
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
                "4. What role do immigration attorneys play in this process?"
                :
                "4. Quel rôle jouent les avocats spécialisés en immigration dans ce processus ?"
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
                  {language === "en" ? "Our immigration attorneys help navigate the complexities of immigration by investment programs. They can advise you on the best options, prepare the necessary documentation, and ensure that you meet all legal requirements." : "Nos avocats spécialisés en immigration aident à naviguer dans les complexités des programmes d'immigration par investissement. Ils peuvent vous conseiller sur les meilleures options, préparer la documentation nécessaire, et s'assurer que vous respectez toutes les exigences légales."}
                </p>
              </div>
            </AnimateHeight>



          </div>

          {/* <div className="accordion-item  ">
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
                "5. How does your team support clients?"
                :
                "5. Comment votre équipe accompagne-t-elle les clients ?"
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
                  {language === "en" ? "Our team supports clients at every stage of their real estate project in carefully selected destinations." : " Notre équipe accompagne les clients à chaque étape de leur projet immobilier, dans des destinations soigneusement sélectionnées."}
                </p>
              </div>
            </AnimateHeight>
          </div> */}


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
                "6. What destinations do you offer for real estate investment?"
                :
                "6. Quelles destinations proposez-vous pour l'investissement immobilier ?"
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
                  {language === "en" ? "We operate in selected destinations that provide attractive and profitable investment opportunities." : "Nous travaillons dans des destinations sélectionnées, offrant des opportunités d'investissement attractives et rentables."}
                </p>
              </div>
            </AnimateHeight>
          </div> */}



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
