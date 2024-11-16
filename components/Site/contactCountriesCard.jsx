import React from "react";
import { useLanguageContext } from "@/context/languageContext";


export default function OurCoreItem({ item }) {

  
  const { language } = useLanguageContext();

  return (
    <div className="flex flex-col items-center">

 {/* {item?.svg} */}
<img src={item?.img} className="w-32 h-32"/>


      {/* <item.icon className="text-8xl text-primary mb-3" /> */}

      <div className="text-center text-xl mb-1  ">
        <span className=" font-semibold text-primary">{language === "en" ? item.title : item.titlefr}</span>
      </div>
      <a href={`tel:${item.description}`}>
      <p className="text-center text-md text-secondar !text-black hover:text-[#fd7e14] font-semibold">{item.description}</p>
      </a>
    </div>
  );
}