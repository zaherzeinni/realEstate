import React from "react";
import AnimateHeight from "react-animate-height";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";

export default function ServicesUnder() {

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
                "1. What are the initial cost advantages of buying an off-plan property?"
                :
                "1. Quels sont les avantages de coût initial lors de l'achat d'un bien en construction ?"
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
                  {language === "en" ? "Off-plan properties are often offered at lower prices compared to fully completed properties, especially during pre-launch or early construction phases. This can be beneficial for budget-conscious buyers looking for more affordable options." : "Les biens en construction sont souvent proposés à des prix plus bas que les biens entièrement achevés, en particulier lors des phases de pré-lancement ou de construction précoce. Cela peut être avantageux pour les acheteurs soucieux de leur budget."}
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
                "2. How does purchasing off-plan property offer potential for appreciation?"
                :
                "2. Comment l'achat d'un bien en construction offre-t-il un potentiel d'appréciation ?"
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
                  {language === "en" ? "As construction progresses and nearing completion, the market value of the property may increase. This appreciation can lead to significant returns on investment when the property is eventually sold or rented out." : "À mesure que la construction progresse et que l'achèvement approche, la valeur marchande du bien peut augmenter. Cette appréciation peut se traduire par des rendements importants lors de la vente ou de la location future."}
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
                "3. What are the advantages of investing in an off-plan property compared to a completed one?"
                :
                "3. Quels sont les avantages d'investir dans un bien en construction par rapport à un bien déjà achevé ?"
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
                  {language === "en" ? "Investing in an off-plan property often allows buyers to benefit from lower purchase prices and a higher appreciation potential. Additionally, new properties typically feature modern technologies and energy-efficient materials, increasing their appeal in the market." : "Investir dans un bien en construction permet souvent de bénéficier de prix d'achat plus bas et d'un potentiel d'appréciation plus élevé. De plus, les nouveaux biens sont généralement dotés de technologies modernes et de matériaux écoénergétiques, augmentant ainsi leur attrait sur le marché."}
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
                "4. How can purchasing an off-plan property be a unique opportunity for investors?"
                :
                "4. En quoi l'achat d'un bien en construction peut-il être une opportunité unique pour les investisseurs ?"
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
                  {language === "en" ? "Buying during the early development phase of a project allows investors to secure properties at lower costs. This can lead to advantages such as rental income or capital gains when the property increases in value after completion." : "L'achat en phase de développement précoce d'un projet permet aux investisseurs de sécuriser des biens à des coûts plus faibles. Cela peut générer des avantages tels que des revenus locatifs ou des plus-values lorsque le bien prend de la valeur après l'achèvement."}
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
                "5. How do payment plans work for off-plan properties?"
                :
                "5. Comment fonctionnent les plans de paiement pour les biens en construction ?"
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
                  {language === "en" ? "Developers usually offer flexible payment plans linked to construction milestones. This staged payment approach can be more manageable for buyers compared to the lump-sum payments required for completed properties." : "Les promoteurs proposent généralement des plans de paiement flexibles liés aux étapes de construction. Cette approche échelonnée peut être plus gérable pour les acheteurs par rapport aux paiements forfaitaires requis pour les biens achevés."}
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
                "6. Are there any tax benefits or incentives for buying off-plan properties?"
                :
                "6. Existe-t-il des avantages fiscaux ou des incitations à acheter des biens en construction ?"
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
                  {language === "en" ? "In certain regions, purchasing an off-plan property may qualify buyers for tax deductions on mortgage interest, property tax exemptions during construction, or government incentives promoting homeownership. These benefits can help reduce overall costs." : "Dans certaines régions, l'achat d'un bien en construction peut donner droit à des déductions fiscales sur les intérêts d'emprunt hypothécaire, des exonérations de taxes foncières pendant la construction ou des incitations gouvernementales favorisant l'accession à la propriété. Ces avantages peuvent réduire les coûts globaux."}
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
