import React, { useState } from "react";
import Link from "next/link";
import { ImageEndpoint } from "../../utils/global";
import { useEffect } from "react";
import { handleChange } from "../../utils/handleLanguage";
export default function ProjectCard({
  blog,
  language,
  isProjectsPage = false,
  isfeaturepage = false,
  openModal
}) {
  const {
    _id,

    createdAt,

    cover,
    image,
    title,
    titlefr,
    story,
    storyfr,
    category,
    country,
    city,
    area,
    features,
    details,
    price,
    services,
    reference
    // read_time,
  } = blog;
  
  // --------------------------change langauge city or country-------------------
  const [lang, setLang] = useState();

  useEffect(() => {
    const languageMap = {
      en: {
        "Spain": "Spain",
        "Mexico": "Mexico",
        "North Cyprus": "North Cyprus",
        "Cyprus": "Chypre",
        "Dominican Republic": "Dominican Republic",
        "Portugal": "Portugal",
        "Canada": "Canada" ,
        "United Arab Emirates":"United Arab Emirates"
      },
      fr: {
        "Spain": "Espagne",
        "Mexico": "Mexique",
        "North Cyprus": "Chypre du Nord",
        "CYPRUS": "Chypre",
        "Dominican Republic": "République Dominique",
        "Portugal": "Portugal",
        "Canada": "Canada",
        "United Arab Emirates" : "Émirats arabes unis"
      }
    };
  
    if (languageMap[language] && languageMap[language][country]) {
      setLang(languageMap[language][country]);
    } else {
      setLang(languageMap.en[country] || country); // Default to English name if not found
    }
  }, [country, language]); // Dependencies to re-run effect when country or language changes
  




  return (
    <div className={` ${isProjectsPage ? "col-md-4 item" : ""} `}>
      <div className="package-card3  ">
        <Link href={`/projects/${_id}`} className="package-card-img">
          <img
          className={`${ ' !h-[330px] !w-full'}`}
            // 650 * 423
            // src="/assets/img/home2/package-card3-img1.png"
            src={`${ImageEndpoint}/${cover}`}
            alt=""
          />
          <div className="batch">
            <span>  {language === "en" ? "Popular" : "Populaire"}  </span>
          </div>
        </Link>
        <div className="package-card-content">
          <div className="card-content-top">



            <div className="rating-area !flex !items-center">
              <ul className="rating !items-center -mt-4">
                <li className="projectcard">
                  <i className="bi bi-star-fill" />
                </li>
                <li className="projectcard">
                  <i className="bi bi-star-fill" />
                </li>
                <li className="projectcard">
                  <i className="bi bi-star-fill" />
                </li>
                <li className="projectcard">
                  <i className="bi bi-star-fill" />
                </li>
                <li className="projectcard">
                  <i className="bi bi-star-fill" />
                </li>
                <span>{language === "en" ? "(33 Review) Popular" : "(33 avis) Populaire"} </span>
              </ul>

            </div>



            <h5>
              <Link href={`/projects/${_id}`}>
                {language === "en" ? title : titlefr}
              </Link>
            </h5>
            <ul className="feature-list">
            <li className="projectcard">
                <svg
                  className="with-stroke"
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                >
                  <g clipPath="url(#clip0_1225_49)">
                    <path
                      d="M6.99999 13.5898C5.35937 11.1289 2.48828 7.79299 2.48828 4.9219C2.48828 2.43415 4.51223 0.410197 6.99999 0.410197C9.48774 0.410197 11.5117 2.43415 11.5117 4.9219C11.5117 7.79299 8.64061 11.1289 6.99999 13.5898Z"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.99999 6.97266C5.86925 6.97266 4.94922 6.05262 4.94922 4.92188C4.94922 3.79114 5.86925 2.87111 6.99999 2.87111C8.13074 2.87111 9.05077 3.79114 9.05077 4.92188C9.05077 6.05262 8.13074 6.97266 6.99999 6.97266Z"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                {language === "en" ? "Destination: " : "Destination: "} <b className="text-black">{lang}</b>
              </li>
              <li className="projectcard">
          


              <svg width={20} height={20} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

	
		<path d="M478.609,225.48v-86.35c0-46.03-37.448-83.478-83.478-83.478H116.87c-46.03,0-83.478,37.448-83.478,83.478v86.35
			C13.959,232.372,0,250.93,0,272.696c0,12.589,0,89.885,0,100.174c0,9.22,7.475,16.696,16.696,16.696h16.696v50.087
			c0,9.22,7.475,16.696,16.696,16.696h66.783c9.22,0,16.696-7.475,16.696-16.696v-50.087h244.87v50.087
			c0,9.22,7.475,16.696,16.696,16.696h66.783c9.22,0,16.696-7.475,16.696-16.696v-50.087h16.696c9.22,0,16.696-7.475,16.696-16.696
			c0-9.493,0-86.461,0-100.174C512,250.93,498.041,232.372,478.609,225.48z M66.783,139.13c0-27.618,22.469-50.087,50.087-50.087
			H395.13c27.618,0,50.087,22.469,50.087,50.087v83.478h-33.391v-16.696c0-27.618-22.469-50.087-50.087-50.087h-72.348
			c-12.819,0-24.523,4.846-33.391,12.794c-8.869-7.948-20.572-12.794-33.391-12.794h-72.348c-27.618,0-50.087,22.469-50.087,50.087
			v16.696H66.783V139.13z M378.435,205.913v16.696H272.696v-16.696c0-9.206,7.49-16.696,16.696-16.696h72.348
			C370.945,189.217,378.435,196.707,378.435,205.913z M239.304,205.913v16.696H133.565v-16.696c0-9.206,7.49-16.696,16.696-16.696
			h72.348C231.815,189.217,239.304,196.707,239.304,205.913z M100.174,422.957H66.783v-33.391h33.391V422.957z M445.217,422.957
			h-33.391v-33.391h33.391V422.957z M478.609,356.174c-14.401,0-412.865,0-445.217,0v-33.391h445.217V356.174z M478.609,289.391
			H33.391v-16.696c0-9.206,7.49-16.696,16.696-16.696c12.832,0,401.17,0,411.826,0c9.206,0,16.696,7.49,16.696,16.696V289.391z"/>


</svg>


                {language === "en" ? "Beds" : "Lits"} <b className="text-black"> {details?.beds}</b>
              </li>
         
              <li className="projectcard">
             


<svg width={20} height={20} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path  d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z" class="ci-primary"/>
</svg>
                
                {language === "en" ? "Bathrooms:" : "salles de bains:"}  <b className="text-black">{details?.baths}</b>
              </li>
            </ul>
          </div>
          <div className="card-content-bottom -mt-4 text-primary ">
            <div className="price-area              ">
              <span className="title"> {language === "en" ? "Price Starting From:" : "Prix ​​à partir de:"} </span>
              <h6>
                <sub>$</sub>
                {price}
                {/* <del>$100.00</del> */}
              </h6>
              {/* <span>Per Person</span> */}
            </div>
            {!isfeaturepage ? (
              <Link href={`/projects/${_id}`} className="primary-btn1  h-4 w-40 justify-center">
               {language === "en" ? "Project Details" : "Détails du projet"} 
              </Link>
            ) : (
              <button onClick={()=>openModal(reference)} className="primary-btn2">
                {language=== "en" ?  "Book Now": "Réservez maintenant"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
