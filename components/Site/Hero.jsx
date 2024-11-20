import React from "react";
import { useLanguageContext } from "@/context/languageContext";
export default function ProductsHero({ title, text, background }) {
  const rootStyle = ` flex flex-col pb-4 gap-10 sm:gap-0 sm:flex-row items-center sm:items-en justify-cente sm:justify-cente mx-0 sm:mx-[5%] text-NormalWhite    md:h-auto pb-[2vh] px-[3%] sm:px-[1.5%] mt- ssm:mt-16 sm:mt-0 md:mt-0 lg:mt-0 ${background} `;

  const { language } = useLanguageContext();
  return (
    <div className={rootStyle}>
      <section className=" text-center sm:text-left w-full sm:w-[70%] md:w-[100%] lg:ml-20 ">
        <div  style={{fontfamily: "Rubik"}} className=" flex justify-center flex-col  mb-12 mt-6 text-4xl font-bold">
       
        <div>
          <img src="/3.png" className="w-[240px] mb-7 md:mb-0 mr-2 md:mt-1 md:mr-0 md:start-10 md:absolute flex justify-center" alt="imageLogo" />
        </div>
         
         <p  style={{fontfamily: "Rubik"}}  className="!text-[#16426F] lg:mr-16 font-bold text-5xl md:!mt-3 md:pt-3 !font-rubik md:!text-[55px]">
         {language === "en" ? "Values":"Valeurs"}       
            </p>
        </div>

        <div>
          <div className="flex gap-4 flex-col md:flex-row justify-between px-6 md:px-12 container flex-wrap">
            <p className="m-t flex gap-1 md:w-1/2 lg:w-1/4">
              <span>
                {/* <img
                  src="https://bluecaribbeanproperties.com/wp-content/uploads/2023/07/ai-check-icon-1-1.png"
                  alt=""
                /> */}
                <img
                  src="/checkmark-aboutpage.png"
                  alt=""
                  className="w-11 h-9"
                />
              </span>
              {language === "en" ? "Integrity":"Intégrité"} 
            </p>

          

            <p className="m-t flex gap-1 md:w-1/3 lg:w-[300px] lg:ml-[50px]">
              <span>
              <img
                  src="/checkmark-aboutpage.png"
                  alt=""
                  className="w-11 h-9"
                />
              </span>
              {language === "en" ? <span className="md:-ml-10  lg:ml-0">Customer Orientation</span>:<span className="1lg:-ml-6">Orientation client</span>}
            </p>

            <p className="m-t flex gap-1 md:w-1/2 lg:w-1/4">
              <span>
              <img
                  src="/checkmark-aboutpage.png"
                  alt=""
                  className="w-11 h-9"
                />
              </span>
             <span className=""> 
             {language === "en" ? "Authenticity":"Authenticité"} 
         </span>
            </p>
            <p className="m-t flex gap-1 w-[300px] md:w-1/3 lg:w-1/4 ">
              <span>
              <img
                  src="/checkmark-aboutpage.png"
                  alt=""
                  className="w-11 h-9"
                />
              </span>
            <span className="">  {language === "en" ? "Expertise":"Expertise"} </span>
            </p>
            <p className="m-t flex gap-1 md:w-1/3 lg:w-[240px] ">
              <span>
              <img
                  src="/checkmark-aboutpage.png"
                  alt=""
                  className="w-11 h-9"
                />
              </span>
             <span className="">{language === "en" ? "Collaboration":"Collaboration"}</span>
            </p>
            <p className="m-t flex gap-1 md:w-1/3 lg:w-1/4">
              <span>
              <img
                  src="/checkmark-aboutpage.png"
                  alt=""
                  className="w-11 h-9"
                />
              </span>
              {language === "en" ? "Innovation":"Innovation"} 
            </p>
            <p className="m-t flex gap-1 md:w-1/3 lg:w-[240px]">
              <span>
              <img
                  src="/checkmark-aboutpage.png"
                  alt=""
                  className="w-11 h-9"
                />
              </span>
              {language === "en" ? "Respect":"Respect"} 
            </p>
           
            <p className="m-t flex gap-1 md:w-1/3 lg:w-[24%] 1lg:w-[26%]  lg:ml-[10px] xl:-ml-[10px] herowidth">
              <span>
              <img
                  src="/checkmark-aboutpage.png"
                  alt=""
                  className="w-11 h-9"
                />
              </span>
             <span> {language === "en" ? "Honesty":"Honnêteté"}</span> 
            </p>
          


            <p className="m-t flex gap-1 md:w-1/2 md:mx-auto lg:mx-0 lg:w-[280px] xl:-mr-5 xl:-ml-10  ">
              <span>
                <img
                  src="/checkmark-aboutpage.png"
                  alt=""
                  className="w-11 h-9 lg:mr-10"
                />
              </span>
               {language === "en" ? <span className="lg:w-[380px] lg:-ml-4 ">Be Sand n Sea Realty</span>:<span  className="lg:w-[380px] lg:-ml-5">Être Sand n Sea Realty</span>}
            </p>
          </div>

          <div  className=" mt-16 !w-full">
            <p style={{fontfamily:  'Rubik' }} className=" !text-[#16426F] text-2xl lg:-ml-16  md:!text-[36px] !font-rubik  ">
            {language === "en" ? "We'll exceed your expectations":"Nous dépasserons vos attentes"}  
            </p>
            <p  style={{fontfamily: "Rubik"}}  className="!text-[#16426F] lg:-ml-16 font-bold text-3xl md:!mt-3 md:pt-3 !font-rubik md:!text-[36px]">
            {language === "en" ? "GUARANTEED":"GARANTI"}       
            </p>

            <div className=" flex pb-5  justify-center m-6 lg:-ml-16">
              <img
                src="https://bluecaribbeanproperties.com/wp-content/uploads/2023/07/separator-1.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <h1 className=" px-[5%] sm:px-0 text-[1.3rem] ssm:text-[1.4rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] leading-[171%] font-bold ">
        {title}
      </h1>

      <p className="px-[3%] text-justify sm:px-0 text-[0.9rem] sm:text-[0.75rem] md:text-[0.8rem] lg:text-[0.85rem] xl:text-[0.9rem] font-semibold leading-[200%] mt-6 ssm:mt-8   sm:mt-2 md:mt-4 ">
        {text}
      </p> */}
      </section>
    </div>
  );
}
