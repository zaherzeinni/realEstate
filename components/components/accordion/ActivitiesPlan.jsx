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
                    <h4>Build Your Future with SAND N SEA REALTY</h4>
                    <h6>Don't Miss This Opportunity!</h6>
            <div className="accordion tour-plan" id="tourPlan">
              <div className="!accordion-item ">
                <h6 className="!accordion-header11  bg-white"   id="headingOne">
                  <button  onClick={() => togglePara("1")} className="flex accordion-button- bg-transparent h-[50px] text-black !border-white !border-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                    >
                    
                    <span className='bg-primary2 p-2 -mt-1 mr-2  text-lg text-white w-[100px] h-[50px] text-center  items-center flex'>Day 01 :</span>  
                    <span className='my-auto'>Preparation and Departure</span>
                  
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
                  <div className="1accordion-body ">
                    <span>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className=" text-primary2  bi-check-lg" /><strong className='text-black'>Morning:</strong> Final gear check and packing.</li>
                      <li className='!my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Midday:</strong> Travel to the destination, ensuring everyone has the necessary equipment and provisions.</li>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Afternoon/Evening:</strong> Set up camp or accommodation, review safety protocols, and plan for the following days.</li>
                    </span>
                  </div>
                  </AnimateHeight>
                </div>
              </div>



              <div className="!accordion-item ">
              <h6 className="!accordion-header11  bg-white"   id="headingOne">
                  <button  onClick={() => togglePara1("1")} className="flex accordion-button- bg-transparent h-[50px] text-black !border-white !border-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                    >
                    
                    <span className='bg-primary2 p-2 -mt-1 mr-2  text-lg text-white w-[100px] h-[50px] text-center  items-center flex'>Day 01 :</span>  
                    <span className='my-auto'>Preparation and Departure</span>
                  
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
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className=" text-primary2  bi-check-lg" /><strong className='text-black'>Morning:</strong> Final gear check and packing.</li>
                      <li className='!my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Midday:</strong> Travel to the destination, ensuring everyone has the necessary equipment and provisions.</li>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Afternoon/Evening:</strong> Set up camp or accommodation, review safety protocols, and plan for the following days.</li>
                    </span>
                  </div>
                  </AnimateHeight>
                </div>
              </div>



              <div className="!accordion-item ">
              <h6 className="!accordion-header11  bg-white"   id="headingOne">
                  <button  onClick={() => togglePara2("1")} className="flex accordion-button- bg-transparent h-[50px] text-black !border-white !border-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                    >
                    
                    <span className='bg-primary2 p-2 -mt-1 mr-2  text-lg text-white w-[100px] h-[50px] text-center  items-center flex'>Day 01 :</span>  
                    <span className='my-auto'>Preparation and Departure</span>
                  
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
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className=" text-primary2  bi-check-lg" /><strong className='text-black'>Morning:</strong> Final gear check and packing.</li>
                      <li className='!my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Midday:</strong> Travel to the destination, ensuring everyone has the necessary equipment and provisions.</li>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Afternoon/Evening:</strong> Set up camp or accommodation, review safety protocols, and plan for the following days.</li>
                    </span>
                  </div>
                  </AnimateHeight>
                </div>
              </div>



              <div className="!accordion-item ">
              <h6 className="!accordion-header11  bg-white"   id="headingOne">
                  <button  onClick={() => togglePara3("1")} className="flex accordion-button- bg-transparent h-[50px] text-black !border-white !border-solid" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                    >
                    
                    <span className='bg-primary2 p-2 -mt-1 mr-2  text-lg text-white w-[100px] h-[50px] text-center  items-center flex'>Day 01 :</span>  
                    <span className='my-auto'>Preparation and Departure</span>
                  
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
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className=" text-primary2  bi-check-lg" /><strong className='text-black'>Morning:</strong> Final gear check and packing.</li>
                      <li className='!my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Midday:</strong> Travel to the destination, ensuring everyone has the necessary equipment and provisions.</li>
                      <li className=' !my-2 !text-[14px] text-[#787878]'><i className="  text-primary2 bi bi-check-lg" /><strong className='text-black'>Afternoon/Evening:</strong> Set up camp or accommodation, review safety protocols, and plan for the following days.</li>
                    </span>
                  </div>
                  </AnimateHeight>
                </div>
              </div>


            </div>
    </div>
  )
}
