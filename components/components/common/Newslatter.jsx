import React from "react";
import { useLanguageContext } from '@/context/languageContext';

const Newslatter = () => {


  const { language } = useLanguageContext();


  return (
    <>
      <div className="banner3-section w-[90%] mx-auto">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner3-content">
                <h2>{language === "en" ? "Join The Newsletter":"Rejoignez la newsletter"}</h2>
                {language === "en" ? 
                <p className="w-[80%] text-center mx-auto mt-2">Register to reach your favorite lists and to be informed about campaigns,<br></br> real estate news, the latest developments, and all special offers for you.</p>
                :
                <p className="w-[80%] text-center mx-auto mt-2">Inscrivez-vous pour accéder à vos listes préférées et être informé des campagnes, <br></br>des actualités immobilières, des derniers développements et de toutes les offres spéciales pour vous.</p>
              }
                <form>
                  <div className="from-inner">
                    <input type="email" placeholder={language === "en" ? "Enter Your Gmail...":"Entrez votre Gmail..."}/>
                    <button type="submit" className="from-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={17}
                        viewBox="0 0 18 17"
                      >
                        <path
                          d="M7 1L16 8.5M16 8.5L7 16M16 8.5H0.5"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
                
                <img
                  src="/assets/img/home1/banner3-vector1.png"
                  alt=""
                  className="vector1"
                />
                <img
                  src="/assets/img/home1/banner3-vector2.png"
                  alt=""
                  className="vector2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newslatter;
