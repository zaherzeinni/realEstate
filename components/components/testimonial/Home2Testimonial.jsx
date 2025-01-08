"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

import { useLanguageContext } from "@/context/languageContext";

const Home2Testimonial = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2500,
      spaceBetween: 25,
      loop: true,
      navigation: {
        nextEl: ".testimonial-card-slider-next",
        prevEl: ".testimonial-card-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 1,
        },
      },
    };
  }, []);

  const comments = [
    {
      id: 1,
      name: "Zunich Jordan",
      parag: "Sand n Sea Realty team have served us for over 10 years now. First by finding us great rental accommodations for our family during our first few visits to uae, and now managing the maintenance and rental of a condo in dubai. Absolutely fantastic service",
    },
    {
      id: 2,
      name: "Mario Trambley",
      parag: "J'ai eu une année productive en investissant en République Dominicaine avec Sand n Sea Realty.Mr. Haidar, a été très réactif et professionnel, ce qui a rendu mon investissement à Punta Cana une bonne décision",
    },
    {
      id: 3,
      name: "Magdalina Victorovich",
      parag: "It has been a pleasure working with Sarah. She walked me through all the steps of the property buying process in Punta Cana with patience and confidence. She is very knowledgeable and made me feel comfortable making the decision to buy",
    },
    {
      id: 4,
      name: "David Levi",
      parag: "My experience with SAND N SEA REALTY has been amazing. Haidar has been very helpful with this process coming from the US, connecting me to the right people to get my purchase accomplished. I am looking forward to my new home in Mexico",
    },
    {
      id: 5,
      name: "Amina El-Sayed",
      parag: "L'équipe de Sand n Sea Realty a été incroyable ! Leur connaissance du marché m'a aidé à trouver la maison parfaite à chypre",
    },
    {
      id: 6,
      name: "Carlos Mendoza",
      parag: "I am very satisfied with my experience at Sand n Sea agency. My agent was very professional and made every step of buying my property in mexico easy",
    },
    {
      id: 7,
      name: "Fatima Khan",
      parag: "Travailler avec cette Agence a été un plaisir. Leur attention aux détails m'a permis de me sentir en confiance tout au long du processus d'achat",
    },
    {
      id: 8,
      name: "John Smith",
      parag: "The team at Sand n Sea Realty transformed my dream of investing abroad into reality. Their expertise and responsiveness were invaluable",
    },
    {
      id: 9,
      name: "Yuki Tanaka",
      parag: "Je suis très reconnaissant envers Sand n Sea Realty pour leur service exceptionnel. Ils ont pris le temps de comprendre mes besoins",
    },
    {
      id: 10,
      name: "Sofia Rossi",
      parag: "My experience with Sand n Sea Realty was fantastic. Their team was attentive and demonstrated great expertise in real estate",
    },
    {
      id: 11,
      name: "Omar Al-Farsi",
      parag: "Je recommande vivement Sand n Sea Realty. Leur professionnalisme a fait toute la différence dans mon investissement à dubaï et en spain",
    },
    {
      id: 12,
      name: "Nina Petrova",
      parag: "I am thrilled with my experience at Sand n Sea Realty. They were patient and guided me through every step of buying my home in portugal",
    },
    {
      id: 13,
      name: "Émilie Legault",
      parag: "Mon expérience avec Sand n Sea a été exceptionnelle. L'équipe a été très à l'écoute de mes besoins et m'a aidée à trouver la maison de mes rêves à Punta Cana. Je remercie Mr. Haidar et Je recommande vivement leurs services à tous ceux qui cherchent à investir à l'étranger ",
    },
    {
      id: 14,
      name: "Claire Dupont",
      parag: "Je suis ravie d'avoir choisi Sand n Sea Reality pour mon projet immobilier. Leur professionnalisme et leur expertise m'ont rassurée tout au long du processus d'achat. Grâce à eux, j'ai trouvé un magnifique appartement en Espagne. Un grand merci à toute l'équipe",
    }
  ];


  const { language } = useLanguageContext();

  return (
    <>
      <div className="home2-testimonial-section mb-120">
        <div className="container-fluid lg:-my-20">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-5">
              <div className="testimonial-content-wrapper">
                <div className="section-title2 lg:mb-28">
                  <div className="eg-section-tag two">
                    {language === "en" ? (
                      <span>Testimonial</span>
                    ) : (
                      <span>Témoignage</span>
                    )}
                  </div>
                  {language === "en" ? (
                    <h2>
                      Your Trust, Our Pride. <br></br>They Chose Sand n Sea
                      Realty: <span className="text-primary"> Here's Their Story.</span>
                    </h2>
                  ) : (
                    <h2>
                      Votre Confiance, Notre Fierté. <br></br>Ils Ont Choisi Sand
                      n Sea Realty :<span className="text-primary"> Voici Leur Histoire.</span>
                    </h2>
                  )}
                  {language === "en" ? (
                    <p>
                      At Sand n Sea Realty, we turn your real estate dreams into
                      reality. Discover the testimonials of our satisfied
                      clients who chose our expertise for their buying and
                      investment projects. <br></br>Get inspired and join us to write
                      your own success story today!
                    </p>
                  ) : (
                    <p>
                      Chez Sand n Sea Realty, nous faisons de vos rêves
                      immobiliers une réalité. Découvrez les témoignages de nos
                      clients satisfaits qui ont choisi notre expertise pour
                      leurs projets d'achat et d'investissement. <br></br>Laissez-vous
                      inspirer et rejoignez-nous pour écrire votre propre
                      histoire de succès dès aujourd'hui!
                    </p>
                  )}
                </div>
                {/* <div className="review-wrap">
                  <h6>Review On</h6>
                  <ul className="rating-area">
                    <li className="single-rating">
                      <a href="https://www.trustpilot.com/">
                        <div className="icon">
                          <img
                            src="/assets/img/home2/icon/trustpilot-logo.svg"
                            alt=""
                          />
                        </div>
                        <div className="rating">
                          <div className="star">
                            <img
                              src="/assets/img/home2/icon/trustpilot-star.svg"
                              alt=""
                            />
                          </div>
                          <span>5.0 / 5.0</span>
                        </div>
                      </a>
                    </li>
                    <li className="single-rating">
                      <a href="https://www.tripadvisor.com/">
                        <div className="icon">
                          <img
                            src="/assets/img/home2/icon/tripadvisor-logo2.svg"
                            alt=""
                          />
                        </div>
                        <div className="rating">
                          <div className="star">
                            <img
                              src="/assets/img/home2/icon/tripadvisor-star2.svg"
                              alt=""
                            />
                          </div>
                          <span>4.5 / 5.0</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-lg-7">
            
              <div className="testimonial-card-slider-area">
                <div className="row">
                  <div className="col-lg-12">
                 
                    <Swiper
                      {...settings}
                      className="swiper home2-testimonial-card-slider mb-35"
                    >

                      {comments.map((data,index)=>(

                      <div key={index} className="swiper-wrapper">
                        

                        
                        <SwiperSlide  className="swiper-slide">
                        
                          <div  className="tesimonial-card-wrapper style-2">
                            <div className="tesimonial-card">
                              <img
                                src="/assets/img/home2/vector/testi-quote.svg"
                                alt=""
                                className="quote"
                              />
                              <div className="testimonial-content">
                                <p className="text-[18px]">
                                {data.parag}
                                </p>
                              </div>
                              <div className="testimonial-bottom">
                                <div className="rating-area">
                                  <ul className="rating">
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                    <li>
                                      <i className="bi bi-star-fill" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="author-area">
                              {/* <div className="author-img">
                                <img
                                  src="/assets/img/home1/testi-author-img1.png"
                                  alt=""
                                />
                              </div> */}
                              <div className="author-content">
                                <h5>{data.name}</h5>
                                {/* <span>CEO, ToruXpro</span> */}
                              </div>
                            </div>
                          </div>
                      
                        </SwiperSlide>
                    
                      </div>
                         ))}
                    </Swiper>
                 
                    <div className="slide-and-view-btn-grp style-3">
                      <div className="slider-btn-grp3">
                        <div className="slider-btn testimonial-card-slider-prev">
                          <i className="bi bi-arrow-left" />
                          <span>{language === "en" ? "PREV" : "PREC"} </span>
                        </div>
                        <div className="slider-btn testimonial-card-slider-next">
                        <span>{language === "en" ? "NEXT" : "SUIVANTE"}</span>
                          <i className="bi bi-arrow-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2Testimonial;
