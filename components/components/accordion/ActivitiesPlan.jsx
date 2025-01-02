import React from 'react'

import { useState } from 'react';
import AnimateHeight from "react-animate-height";
import { useLanguageContext } from '../../../context/languageContext';
export default function ActivitiesPlan() {

  const {language} = useLanguageContext()

    const [active, setActive] = useState("1");
    const togglePara = (value) => {
      setActive((oldValue) => {
        return oldValue === value ? "" : value;
      });
    };
  
    const [active1, setActive1] = useState("");
    const togglePara1 = (value) => {
      setActive1((oldValue) => {
        return oldValue === value ? "" : value;
      });
    };
  
    const [active2, setActive2] = useState("");
    const togglePara2 = (value) => {
      setActive2((oldValue) => {
        return oldValue === value ? "" : value;
      });
    };
  
    const [active3, setActive3] = useState("");
    const togglePara3 = (value) => {
      setActive3((oldValue) => {
        return oldValue === value ? "" : value;
      });
    };
  

    

  return (
  <div>
    {language === "en" ?
    <div >
                    <h4>Build Your Future with <i>SAND N SEA REALTY</i></h4>
                    <h5>Don't Miss This Opportunity!</h5>
            <div className="accordion tour-plan" id="tourPlan">
              <div className="!accordion-item ">
                <h6 className="!accordion-header11  bg-white"   id="headingOne">
                  <button  onClick={() => togglePara("1")} className="flex accordion-button- bg-transparent h-[50px] text-black !border-white !border-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                    >
                    
                    <span className='bg-primary2 p-2 -mt-1 mr-2 text-[13px] md:text-lg text-white w-[150px] md:w-[200px] h-[50px] text-center  items-center flex'>Unlock Your Success</span>  
                    
                    <span className='my-auto text-[13px] md:text-lg hidden sm:flex'>Join Our Exclusive Referral Program</span>

                    <span className='my-auto text-[13px] md:text-lg sm:hidden'>Join Our Exclusive <br></br>Referral Program</span>
                  
                   <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end absolute end-6   ${
                    active === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-10 w-7 flex justify-end text-end "
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
                <div id="collapseOne" className="accordion-collapse  -collapse show-" aria-labelledby="headingOne" data-bs-parent="#tourPlan">
                <AnimateHeight duration={300} height={active === "1" ? "auto" : 0}>
                  <div className="1accordion-body">
                    <span>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className=" text-primary2  bi-check-lg" /><strong className='text-black'>Build a Prosperous Future:</strong> By enrolling in our referral program today, you can start forging a successful path with appealing commissions.</li>
                      <li className='!my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Expansion Opportunities:</strong> Take advantage of various avenues for growth and advancement in the real estate market.</li>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Lucrative Adventure:</strong> Together, let's turn your real estate journey into a fulfilling and profitable experience!</li>
                    </span>
                  </div>
                  </AnimateHeight>
                </div>
              </div>



              <div className="!accordion-item ">
              <h6 className="!accordion-header11  bg-white"   id="headingOne">
                  <button  onClick={() => togglePara1("1")} className="flex accordion-button- bg-transparent h-[50px] text-black !border-white !border-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                    >
                    
                    <span className='bg-primary2 p-2 -mt-1 mr-2 text-[13px] md:text-lg text-white w-[150px] md:w-[200px] h-[50px] text-center  items-center flex'>Referral Program</span>  
                    <span className='my-auto text-[13px] md:text-lg'>How Does It Work?</span>

                   <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end absolute end-6   ${
                    active1 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-10 w-7 flex justify-end text-end "
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
                <div id="collapseOne" className="accordion-collapse  -collapse show-" aria-labelledby="headingOne" data-bs-parent="#tourPlan">
                <AnimateHeight duration={300} height={active1 === "1" ? "auto" : 0}>
                  <div className="1accordion-body ">
                    <span>
                      <h6 className='my-3'>Getting started with our referral program is effortless! Here are the steps to follow:</h6>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className=" text-primary2  bi-check-lg" /><strong className='text-black'>Sign Up:</strong> At <span className="italic">SAND N SEA REALTY</span>, we welcome individuals and businesses eager to join our network of real estate agents.</li>
                      <li className='!my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Refer Your Contacts:</strong> Identify potential clients and connect them with our team.</li>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Invest in Our Projects:</strong> When your contacts invest, you begin to earn income.</li>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Commission Collection:</strong> Enjoy attractive commissions for every investment made through your referrals.</li>
                    </span>
                    <h6 className='font-normal my-4'>Once you're registered, you'll gain access to our exclusive developments, which you can promote to your clientele, maximizing your earning potential.</h6>
                  </div>
                  </AnimateHeight>
                </div>
              </div>



              <div className="!accordion-item ">
              <h6 className="!accordion-header11  bg-white"   id="headingOne">
                  <button  onClick={() => togglePara2("1")} className="flex accordion-button- bg-transparent h-[50px] text-black !border-white !border-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                    >
                    
                    <span className='bg-primary2 p-2 -mt-1 mr-2  text-[13px] md:text-lg text-white w-[150px] md:w-[200px] h-[50px] text-center  items-center flex'>Partner Benefits</span>  
                    
                    <span className='my-auto text-[13px] md:text-lg hidden text-start md:flex'>Earn More with &nbsp; <i>SAND N SEA REALTY</i></span>
                    <span className='my-auto text-[13px] md:text-lg md:hidden text-start'>Earn More with &nbsp; <br></br><i>SAND N SEA REALTY</i></span>
                  
                   <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end absolute end-6   ${
                    active2 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-10 w-7 flex justify-end text-end "
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
                <div id="collapseOne" className="accordion-collapse  -collapse show-" aria-labelledby="headingOne" data-bs-parent="#tourPlan">
                <AnimateHeight duration={300} height={active2 === "1" ? "auto" : 0}>
                  <div className="1accordion-body ">
                    <span>
                    <h6 className='my-3'>As a partner, you will enjoy numerous advantages:</h6>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className=" text-primary2  bi-check-lg" /><strong className='text-black'>General Commissions:</strong> Benefit from generous commissions on each investment made by your contacts.</li>
                      <li className='!my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Access to Exclusive Projects:</strong> Enjoy privileged access to high-quality properties, with a return on investment (R.O.I.) starting at 6%.</li>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Marketing Support:</strong> We provide the promotional materials you need to sell and generate high-quality leads.</li>
                    </span>
                  </div>
                  </AnimateHeight>
                </div>
              </div>



              <div className="!accordion-item ">
              <h6 className="!accordion-header11  bg-white"   id="headingOne">
                  <button  onClick={() => togglePara3("1")} className="flex accordion-button- bg-transparent h-[50px] text-black !border-white !border-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                    >
                    
                    <span className='bg-primary2 p-2 -mt-1 mr-2  text-[13px] md:text-lg text-white w-[150px] md:w-[200px] h-[50px] text-center  items-center flex'>Join Us</span>  

                    <span className='my-auto text-[13px] md:text-lg hidden md:flex sm:ml-0 text-start'>Transform Your Career with  <br></br><i>&nbsp; SAND N SEA REALTY!</i></span>
                  
                    <span className='my-auto text-[13px] md:text-lg md:hidden sm:ml-0 text-start'>Transform Your Career <br></br>with <i>&nbsp;SAND N SEA REALTY!</i></span>
                  
                   <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end absolute end-6   ${
                    active3 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-10 w-7 flex justify-end text-end "
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
                <div id="collapseOne" className="accordion-collapse  -collapse show-" aria-labelledby="headingOne" data-bs-parent="#tourPlan">
                <AnimateHeight duration={300} height={active3 === "1" ? "auto" : 0}>
                  <div className="1accordion-body ">
                    <span>
              <p>Whether you are an independent professional or represent a firm in the industry, we invite you to join us and become a valued member of the <i>SAND N SEA REALTY</i> family! <br></br> <a className=' font-bold' href='/contact' >Contact-us</a> now to learn more!</p>
                    </span>
                  </div>
                  </AnimateHeight>
                </div>
              </div>


            </div>
    </div>
    :


    // ----------------FRENCH TRANSLATION-----------------
    <div>
                    <h4>Construisez Votre Avenir avec <i>SAND N SEA REALTY</i></h4>
                    <h5>Ne Ratez Pas Cette Opportunité!</h5>
            <div className="accordion tour-plan" id="tourPlan">
              <div className="!accordion-item ">
                <h6 className="!accordion-header11  bg-white"   id="headingOne">
                  <button  onClick={() => togglePara("1")} className="flex accordion-button- bg-transparent h-[50px] text-black !border-white !border-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                    >
                    
                    <span className='bg-primary2 p-2 -mt-1 mr-2 text-[13px] md:text-lg text-white w-[150px] md:w-[250px] h-[50px] text-center  items-center md:flex hidden'>Déverrouillez Votre Succès</span>  

                    <span className='bg-primary2 p-2 -mt-1 mr-2 text-[13px] md:text-lg text-white w-[100px] md:w-[200px] h-[50px] text-center  items-center flex md:hidden'>Déverrouillez<br></br> Votre Succès</span>  
                    
                    <span className='my-auto text-[13px] md:text-lg hidden sm:flex text-start' >Rejoignez Notre Programme de Référence Exclusif</span>
                    
                    <span className='my-auto text-[13px] md:text-lg sm:hidden text-start'>Rejoignez Notre Programme <br></br>de Référence Exclusif</span>
                  
                   <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end absolute end-6   ${
                    active === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-10 w-7 flex justify-end text-end "
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
                <div id="collapseOne" className="accordion-collapse  -collapse show-" aria-labelledby="headingOne" data-bs-parent="#tourPlan">
                <AnimateHeight duration={300} height={active === "1" ? "auto" : 0}>
                  <div className="1accordion-body">
                    <span>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className=" text-primary2  bi-check-lg" /><strong className='text-black'>Construisez un Futur Prospère:</strong> En vous inscrivant à notre programme de référence aujourd'hui, vous pouvez commencer à tracer un parcours réussi avec des commissions attrayantes.</li>
                      <li className='!my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Opportunités d'Expansion:</strong> Profitez de diverses avenues pour croître et progresser dans le secteur immobilier.</li>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Aventure Lucrative:</strong> Ensemble, transformons votre parcours immobilier en une expérience enrichissante et profitable!</li>
                    </span>
                  </div>
                  </AnimateHeight>
                </div>
              </div>



              <div className="!accordion-item ">
              <h6 className="!accordion-header11  bg-white"   id="headingOne">
                  <button  onClick={() => togglePara1("1")} className="flex accordion-button- bg-transparent h-[50px] text-black !border-white !border-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                    >
                    
                    <span className='bg-primary2 p-2 -mt-1 mr-2  text-[13px] md:text-lg text-white w-[100px] md:w-[250px] h-[50px] text-center  items-center flex'>Programme de Référence</span>  
                    <span className='my-auto text-[13px] md:text-lg'>Comment Ça Marche?</span>

                   <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end absolute end-6   ${
                    active1 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-10 w-7 flex justify-end text-end "
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
                <div id="collapseOne" className="accordion-collapse  -collapse show-" aria-labelledby="headingOne" data-bs-parent="#tourPlan">
                <AnimateHeight duration={300} height={active1 === "1" ? "auto" : 0}>
                  <div className="1accordion-body ">
                    <span>
                      <h6 className='my-3'>Commencer avec notre programme de référence est un jeu d'enfant ! Voici les étapes à suivre:</h6>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className=" text-primary2  bi-check-lg" /><strong className='text-black'>Inscription:</strong> Chez <span className="italic">SAND N SEA REALTY</span>, nous accueillons aussi bien les particuliers que les entreprises désireuses de rejoindre notre réseau d'agents immobiliers.</li>
                      <li className='!my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Référez Vos Contacts:</strong> Identifiez des clients potentiels et connectez-les avec notre équipe.</li>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Investissez dans Nos Projets:</strong> Lorsque vos contacts investissent, vous commencez à générer des revenus.</li>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Collecte de Commissions:</strong> Profitez de commissions attrayantes pour chaque investissement réalisé par vos références.</li>
                    </span>
                    <h6 className='font-normal my-4'>Une fois inscrit, vous aurez accès à nos développements exclusifs, que vous pourrez promouvoir auprès de votre clientèle, maximisant ainsi vos opportunités de gains.</h6>
                  </div>
                  </AnimateHeight>
                </div>
              </div>



              <div className="!accordion-item ">
              <h6 className="!accordion-header11  bg-white"   id="headingOne">
                  <button  onClick={() => togglePara2("1")} className="flex accordion-button- bg-transparent h-[50px] text-black !border-white !border-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                    >
                    
                    <span className='bg-primary2 p-2 -mt-1 mr-2  text-[13px] md:text-lg text-white w-[100px] md:w-[250px] h-[50px] text-center  items-center flex'>Avantages Partenaires</span>  
                    
                    <span className='my-auto text-[13px] md:text-lg hidden md:flex'>Gagnez Plus avec &nbsp; <i> SAND N SEA REALTY</i></span>

                    <span className='my-auto text-[13px] text-start md:text-lg md:hidden'>Gagnez Plus<br></br> avec <i> SAND N SEA REALTY</i></span>

                  
                   <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end absolute end-6   ${
                    active2 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-10 w-7 flex justify-end text-end "
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
                <div id="collapseOne" className="accordion-collapse  -collapse show-" aria-labelledby="headingOne" data-bs-parent="#tourPlan">
                <AnimateHeight duration={300} height={active2 === "1" ? "auto" : 0}>
                  <div className="1accordion-body ">
                    <span>
                    <h6 className='my-3'>En tant que partenaire, vous bénéficierez de nombreux avantages:</h6>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className=" text-primary2  bi-check-lg" /><strong className='text-black'>Commissions Générales:</strong> Profitez de commissions généreuses sur chaque investissement réalisé par vos contacts.</li>
                      <li className='!my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Accès à des Projets Exclusifs:</strong> Bénéficiez d'un accès privilégié à des propriétés de haute qualité, avec un retour sur investissement (R.O.I.) commençant à 6%.</li>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Soutien Marketing:</strong> Nous fournissons les matériaux promotionnels nécessaires pour vous aider à vendre et à générer des prospects de haute qualité.</li>
                    </span>
                  </div>
                  </AnimateHeight>
                </div>
              </div>



              <div className="!accordion-item ">
              <h6 className="!accordion-header11  bg-white"   id="headingOne">
                  <button  onClick={() => togglePara3("1")} className="flex accordion-button- bg-transparent h-[50px] text-black !border-white !border-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                    >
                    
                    <span className='bg-primary2 p-2 -mt-1 mr-2  text-[13px] md:text-lg text-white w-[100px] md:w-[250px] h-[50px] text-center  items-center flex'>Rejoignez Nous</span>  
                    
                    <span className='my-auto text-[13px] md:text-lg hidden md:flex sm:ml-0 text-start'>Transformez votre carrière avec nous</span>
                   
                    <span className='my-auto text-[13px] md:text-lg md:hidden sm:ml-0'>Transformez votre carrière <br></br>avec <i className='text-start'>&nbsp; SAND N SEA REALTY!</i></span>
                  
                   <div
                  className={`ltr:ml-auto1 rtl:mr-auto1 w-auto flex justify-end text-end absolute end-6   ${
                    active3 === "1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-10 w-7 flex justify-end text-end "
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
                <div id="collapseOne" className="accordion-collapse  -collapse show-" aria-labelledby="headingOne" data-bs-parent="#tourPlan">
                <AnimateHeight duration={300} height={active3 === "1" ? "auto" : 0}>
                  <div className="1accordion-body ">
                    <span>
              <p>Que vous soyez un professionnel indépendant ou que vous représentiez une entreprise du secteur, nous vous invitons à nous rejoindre et à devenir un membre précieux de la famille <i>SAND N SEA REALTY!</i><br></br><a className=' font-bold' href='/contact' > Contactez-nous</a> dès maintenant pour en savoir plus!</p>
                    </span>
                  </div>
                  </AnimateHeight>
                </div>
              </div>


            </div>
    </div>

                }
</div>
  )
}
