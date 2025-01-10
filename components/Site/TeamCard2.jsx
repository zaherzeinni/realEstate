import React from "react";
import { MdEmail } from "react-icons/md";
import { useLanguageContext } from "@/context/languageContext";

export default function TeamCard2({ member }) {
  const { language } = useLanguageContext();

  return (
    <div>
      <div className="guide-section ">
        <div className="container1">
          <div className="row g-lg-4 gy-5">
            <div className="col-xl-12 col-lg-10 col-sm-12">
              <div className="teams-card2">
                <div className="teams-img">
                  <img
                    src={member?.image}
                    alt=""
                    className=" object-top  h-[300px] sm:h-[280px] w-full 2xl:h-[340px]"
                  />
                  <ul className="social-list">
                    {/* <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li> */}
                    <li>
                      <a href={`mailto:${member?.email}`}>
                        <i className="bx bxl-gmail " />
                        <MdEmail className="text-xl -mt-3" />
                      </a>
                    </li>
                    {/* <li>
                      <a href="https://twitter.com/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          fill="currentColor"
                          className="bi bi-twitter-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div className="teams-content h-[90px]">
                  <h4 className="-mt-3 !text-[19px] sm:text-[20px]  xl:text-[24px]">{member?.name}</h4>
                  {member.languages.length > 0 && (
                    <p className="text-gray-500">
                      {language === "en" ? "Languages:" : "Langues:"}
                      {language === "en"
                        ? `${member.languages.join(", ")}`
                        : `${member.languagesfr.join(", ")}`}
                      <p className="text-gray-500">
                        {language === "en" ? member.title : member.titlefr}
                      </p>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
