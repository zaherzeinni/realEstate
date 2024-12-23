"use client"

// Handle selected guide from Header2.js
import * as React from "react"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { PageLayout } from "@/layouts"
import { useLanguageContext } from "@/context/languageContext"
import { CircularLoading as Loading } from "@/components/loading"
import { Box, Typography, Container, Button } from "@mui/material"

import Header from "@/components/components/header/Header2";
import Newslatter from "@/components/components/common/Newslatter";
import Footer from "@/components/components/footer/Footer";
import Breadcrumb from "@/components/components/common/Breadcrumb";
import Link from "next/link"
import ContactModal from "@/components/Site/ContactModal"
import ProjectCard from "@/components/Site/ProjectCard"
import useProducts from "../../hooks/useProducts"

import useBlogs from "../../hooks/useBlogs";
import useProduct from "../../hooks/useProductDetails";
import { ImageEndpoint } from "../../utils/global";
import { handleChange } from "../../utils/handleLanguage";

import SelectComponent from "@/components/Site/SelectComponent";



import { message as antdMessage } from "antd";
import axios from "axios";
import useVisa from "@/hooks/useVisa";
import Select from "react-select";

// Fetcher function for SWR
const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch data')
  const data = await res.json()
  return data.map((guide: Buyguide) => ({
    ...guide,
    link: `/buyguide/${guide.title.toLowerCase().replace(/\s+/g, '-')}`,
  }))
}

export default function BuyguideList() {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [searchstate, setsearchstate] = useState("");
  const [countrystate, setCountry] = useState({ value: "", label: "" });

    
  const [search, setSearch] = useState<string>('')


  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };


  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/blogs?search=${searchstate}&country=${countrystate?.value}`);
  };



  const [selectedVisa, setSelectedVisa] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [name, setName] = useState("");
  const [email , setEmail] = useState("");
  const [phone , setPhone] = useState("");
  const [message , setMessage] = useState("");
  const [selectedlanguage , setSelectedLanguage] = useState("");


    // CRUD State.
    const [isSuccess, setIsSuccess] = useState(false);
    const [error1, setError] = useState(null);


    useEffect(() => {
      if (error1) {
        antdMessage.error(error1);
        setError(null);
      }
  
      if (isSuccess) {
        antdMessage.success("Message send successfully");
  
        setIsSuccess(false);
      }
    }, [error1, isSuccess]);



  const { data: products } = useProducts({
    page: 1,
    isfeatured: true,
  });


  const { language } = useLanguageContext()
  const router = useRouter()
  const { guide } = router.query
  console.log(guide)

  const { id } = router.query;
  const { data } = useProduct({ id });

  const { data: blogs } = useBlogs({
    country: data?.book?.country,
  });

  
  // Use SWR to fetch data
  const { data: buyguides, error } = useSWR('/api/buyguide', fetcher)
  const [currentGuide, setCurrentGuide] = React.useState<Buyguide | null>(null)
  const [selectedItem, setSelectedItem] = React.useState<BuyguideItem | null>(null)

  // Set initial guide when data is loaded
  console.log(buyguides , "buyguides")
  React.useEffect(() => {
    if (buyguides?.length > 0) {
        // handle if query guide
        if (guide) {
          const selectedGuide = buyguides.find(g => 
            g.title.toLowerCase().replace(/\s+/g, '-') === guide
          )
          setCurrentGuide(selectedGuide)
        } else {
          setCurrentGuide(buyguides[0])
        }
    }
  }, [buyguides , guide])



  const linkString = `/projects?city=${currentGuide?.title}&country=&baths=0&beds=0&minPrice=0&maxPrice=10000000000000&type=&rooms=0&beds=0`;
  const linkStringfr = `/projects?city=${currentGuide?.titlefr}&country=&baths=0&beds=0&minPrice=0&maxPrice=10000000000000&type=&rooms=0&beds=0`;



  const handleGuideChange = (guide: Buyguide) => {
    if (currentGuide?._id === guide._id) {
      // If clicking the same guide, just clear the selected item
      setSelectedItem(null)
    } else {
      // If clicking a different guide, update current guide and clear selected item
      setCurrentGuide(guide)
      setSelectedItem(null)
    }
  }

  const handleItemSelect = (item: BuyguideItem) => {
    setSelectedItem(!selectedItem?.id === item.id ? null : item)
  }

  if (error) return <div>Failed to load buyguides</div>
  if (!buyguides) return <Loading />




 


  const images = data?.book?.image?.map((img, index) => {
    return {
      id: index + 1,
      imageBig: `${ImageEndpoint}/${img}`,
      // Add more properties if needed
    };
  });












  const handleSelect = (option) => {
    setSelectedVisa(option); // Update the selected visa state
  };


  const handleSelectCountry = (option) => {
    setSelectedCountry(option); // Update the selected visa state
  };

  const handleSelectLanguage = (option) => {
    setSelectedLanguage(option); // Update the selected visa state
  };



  
  

  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
       // Validation
  if (!name || !email || !phone || !message || !selectedVisa || !selectedCountry || !selectedlanguage) {
    antdMessage.error("Please fill in all required fields.");
    return;
  }
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      try {
        const { data } = await axios.post(
          `/api/visamessage`,
          {
            name,
            email,
            phone,
            message,
            visa:selectedVisa,
            country:selectedCountry,
            language:selectedlanguage
          },
          config
        );
  
        antdMessage.success("Your message sended successfully")
        setIsSuccess(data.success);
      } catch (error) {
        setError(error.message);
       // antdMessage.error("Your message sended successfully")
        console.error(error.message);
      }
    };




    const countries = [
      // { value: "", label: "All countries" },
  
      { value: "Mexico", label: language === "en" ? "Mexico" : "Mexique" },
      {
        value: "North Cyprus",
        label: language === "en" ? "North Cyprus" : "Chypre du Nord",
      },
      { value: "Spain", label: language === "en" ? "Spain" : "Espagne" },
      {
        value: "Republic Dominica",
        label: language === "en" ? "Republic Dominica" : "République Dominique",
      },
  
      { value: "Portugal", label: language === 'en' ? " Portugal" : "Portugal"},
  
      // { value: "Canada", label: language === 'en' ? "Canada" : "Canada"},
  
      {
        value: "United Arab Emirates",
        label: language === "en" ? "United Arab Emirates" : "Émirats arabes unis",
      },
    ];



    const languagess = [
      {value:"English",label:language === "en" ? "English" : "Anglaise"},
      {value:"French",label:language === "en" ? "French" : "Français"},
      {value:"Spanish",label:language === "en" ? "Spanish" : "Espagnole"}
    ]






    // let obj = currentGuide.desc;
    // let jsonString = JSON.stringify(obj); // Correctly converts to JSON string
    // JSON.parse(jsonString); // This will work without errors
    // console.log(jsonString,"json strinngggg")




  return (
    <div className=" pt mb-" dir="ltr">
  <Breadcrumb  pagename={language === "en" ? currentGuide?.title : currentGuide?.titlefr} 
  pagetitle={language === "en" ? selectedItem?.title ? selectedItem?.title :currentGuide?.title  :selectedItem?.titlefr ? selectedItem?.titlefr :currentGuide?.titlefr} />

        <Header />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ width: "100%", backgroundColor: "#14345B" }}>
            
          <Container maxWidth="lg">
           
            <Box  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, py: 1 }}>

                
              {currentGuide && (
                <Box className="!flex !flex-col lg1:flex lg1:flex-row" key={currentGuide._id} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <button
                   className="primary-btn1 h-7 w-56 justify-center mx-auto "
                    onClick={() => handleGuideChange(currentGuide)}
                    // sx={{
                    //   textTransform: "uppercase", 
                    //   fontWeight: 600,
                    //   fontSize: "14px",
                    //   color: "#14345B",
                    //   backgroundColor: "#fff",
                    //   borderRadius: "4px 4px 0 0",
                    //   minHeight: "40px",
                    //   '&:hover': {
                    //     backgroundColor: "#c92a2a",
                    //   }
                    // }}
                  >
                   {language === 'en' ? currentGuide.title : currentGuide.titlefr}
                  </button>
                  {currentGuide.items.length > 0 && (
                    <Box className="!flex !flex-col lg1:flex lg1:flex-row" sx={{ display: 'flex', gap: 1 }}>
                      {currentGuide.items.map((item: BuyguideItem) => (
                        <button
                        className="primary-btn1 h-7 w-56 xl:w-full justify-center mx-auto"
                          key={item.id}
                          onClick={() => handleItemSelect(item)}
                          // sx={{
                          //   textTransform: "none",
                          //   fontSize: "13px", 
                          //   color: !selectedItem?.id === item.id ? "#fff" : "#14345B",
                          //   minHeight: "40px",
                          //   backgroundColor: !selectedItem?.id === item.id ? "#fff" : "#fff",
                          //   border: "1px solid rgba(255,255,255,0.2)",
                          //   '&:hover': {
                          //     backgroundColor: !selectedItem?.id === item.id ? "#c92a2a" : "#f8f9fa",
                          //   }
                          // }}
                        >
                          {language === 'en' ? item.title : item.titlefr}
                        </button>
                      ))}
                    
                    {language === "en" ? 
                    <Link href={linkString} >
                    <button className="primary-btn1 h-7 w-56 xl:w-full justify-center mx-auto">Properties {currentGuide?.title}</button>
                    </Link>
                      :
                    <Link href={linkStringfr} >
                    <button className="primary-btn1 h-7 w-56 xl:w-full justify-center mx-auto">Propriétés {currentGuide?.titlefr}</button>
                    </Link>
                      }
                    </Box>
                    
                  )}
                </Box>
              )}
     

            </Box>
          </Container>
        </Box>
        <Container maxWidth="">
          {currentGuide && (
            <Box sx={{ mt: 3, mb: 2 }} className="flex col-lg-12">
              <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom
                sx={{ 
                  color: '#14345B',
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', md: '2rem' }
                }}
              >
                {/* TITLE DELETED BY ME */}
               {/* <h3> {language === 'en' ? currentGuide.title : currentGuide.titlefr}</h3> */}
              </Typography>

 
                  <div className="md1:flex ">
              <div className="!text-sm container" >
              {!selectedItem && (
                 <div className="document-list">
                <p className="w-auto sm:mx-10 lg:mx-20">
                <div
                  dangerouslySetInnerHTML={{
                    __html: language === 'en' 
                      ? currentGuide.desc 
                      : currentGuide.descfr
                  }}
                />
                </p>
                </div>
              )}
              {selectedItem && (
                 <div className="document-list">
                <p className="w-auto sm:mx-10 lg:mx-20">
                <div
                  dangerouslySetInnerHTML={{
                    __html: language === 'en' 
                      ? selectedItem.desc 
                      : selectedItem.descfr
                  }}
                />
              </p>
              </div>
              )}

              </div>
              



              {/* ---------------------right side--------------------------- */}
              <div className="col-lg-3 hidden xl:block xl:mr-10 ">
                

              <div className="visa-sidebar shadow-sm p-3 bg-[#dbe6d9]  mt-36 mb-20 ">
              <div className="inquery-form">
                    <img src="/3.png" alt="logo" className="w-[220px] sm:w-[240px] 1-mt-10 mb-10" />
                  <div className="form-title">
                    {language ==="en" ? <h4>Inquiry Form</h4> : <h4>Formulaire de demande</h4> }
                    
                    {language ==="en" ? 
                    
                    <p>
                    Complete form for complaints or service inquiries; expect
                    prompt response via phone/email.
                  </p>
                    : 
                    <p>Remplissez le formulaire pour les plaintes ou les demandes de service; attendre
                    réponse rapide par téléphone/e-mail.</p> 
                    }  
                  
                  
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-inner mb-4">
                      <label>
                        {language === "en" ? "Full Name" : "Nom et prénom"} <span>*</span>
                      </label>
                      <input
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       type="text" placeholder={language === "en" ?"Enter your full name":"Entrez votre nom complet"} />
                    </div>
                    <div className="form-inner mb-4">
                      <label>
                      {language === "en" ? "Email Address" : "Email Address"}  <span>*</span>
                      </label>
                      <input
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder={language === "en" ?"Enter your email address":"Entrez votre adresse email"}
                      />
                    </div>
                    <div className="form-inner mb-4">
                      <label>
                      {language === "en" ?  "Phone Number" :"Numéro de téléphone"} <span>*</span>
                      </label>
                      <input
                       value={phone}
                       onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        placeholder={language === "en" ?"Enter your phone number":"Entrez votre numéro de téléphone"}
                      />
                    </div>
                

                    <div className="form-inner">
                      <label>
                      {language === "en" ? "Your language":"Votre langue"} <span>*</span>
                      </label>
                      <Select
                        options={languagess}
                        placeholder={language === "en" ? <p className="ml-5 my-auto text-sm">Select Language</p>:<p className="ml-5 my-auto text-sm">Sélectionner la langue</p>}
                        onSelect={handleSelectLanguage} // Pass the handler to the SelectComponent

                      />
                     
                    </div>

                    <div className="form-inner">
                      <label className="mt-3">
                      {language === "en" ? "Country":"Pays"}<span>*</span>
                      </label>
                     <div className="!bg-green-500">
                      {/* <Select
                      
                        // options={countries}
                        // placeholder= {language === "en" ? <p className="ml-5 my-auto text-sm">{currentGuide.title}</p>:<p className="ml-5 text-sm my-auto" >{currentGuide.titlefr}</p>}
                        // onSelect={handleSelectCountry} // Pass the handler to the SelectComponent
                        value={language === "en" ? currentGuide.title:currentGuide.titlefr}
                      /> */}

                      <input
                       value={selectedCountry}
                       onChange={(e) => setSelectedCountry(e.target.value)}
                       type="text" placeholder={language === "en" ?"Which country are you contacting us from?":"De quel pays nous contactez-vous?"} />
                     </div>
                    </div>


                    <div className="form-inner">
                      <label className="mt-3">
                      {language === "en" ? "Write Your Massage":"Écrivez votre massage"}  <span>*</span>
                      </label>
                      <textarea
                       value={message}
                       onChange={(e) => setMessage(e.target.value)}
                        placeholder= {language === "en" ? "Write your quiry" : "Écrivez votre demande"}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-inner mt-2">
                      <button type="submit" className="primary-btn1 two">
                      {language === "en" ?  "Submit Now":"Soumettre maintenant"}
                      </button>
                    </div>
                  </form>

                </div>

              

                
</div>

<div className="banner-and-inquiry-form mb-20">
                <div className="banner2-card four">
                  <img src="/images/banner2-card-img2.png" alt="" />
                  <div className="banner2-content-wrap">
                    <div className="banner2-content">
                      <span>
                        {language === "en"
                          ? "Savings worldwide"
                          : "Des économies dans le monde entier"}
                      </span>
                      <h3>
                        {language === "en" ? "50% Off" : "50% de réduction"}
                      </h3>
                      <p>
                        {language === "en"
                          ? "For Your First Book"
                          : "Pour votre premier livre"}
                      </p>
                    </div>
                    <ContactModal isOpen={isOpen} closeModal={closeModal} />
                    <button onClick={openModal} className="primary-btn1 justify-center text-[13px]">
                      {language === "en" ? "Book Now" : "Réservez maintenant"}
                    </button>
                  </div>
                </div>
              </div>


              <div className="mb-20">
              {products?.books && products?.books[0] && (
                  <ProjectCard
                    openModal={openModal}
                    isfeaturepage={false}
                    blog={products?.books[0]}
                    language={language}
                    
                  />
                )}
              </div>

              <div className="sidebar-area ">
                <div className="single-widget">
                  <h5 className="widget-title">
                    {language === "en" ? "Search Here" : "Rechercher ici"}
                  </h5>
                  <form onSubmit={handleSearch}>
                    <div className="search-box">
                      <input
                        placeholder={
                          language === "en" ? "Search Here" : "Rechercher ici"
                        }
                        value={search}
                        onChange={handleSearchInputChange}
                        type="text"
                      />
                      <button type="submit">
                        <i className="bx bx-search" />
                      </button>
                    </div>
                    



                    <div className="filte-search-fo position-relativ focus:!border-none filter-borde bg-light ">
                        <Select
                          onChange={(newValue) => {
                            setCountry(newValue);
                          }}
                          className="form-inpu  !focus-ring-info filter-input-box !bg-gray-50  border-0 pl-5 "
                          options={countries}
                          placeholder={language === "en" ? "Select" : "Sélectionner"}
                        />
                      </div>


                  </form>
                </div>

                <div className="single-widget mb-20">
                  <h5 className="widget-title">
                    {language === "en" ? "Recent Post" : "Article récent"}
                  </h5>

                  {blogs?.books?.map((blog) => {
                    const {
                      _id,

                      createdAt,

                      image,
                      title,
                      titlefr,
                      story,
                      storyfr,
                      category,
                      // read_time,
                    } = blog;
                    return (
                      <div className="recent-post-widget mb-10">
                        <div className="recent-post-img">
                          <Link href={`/blogs/${_id}`}>
                            <img
                              src={`${ImageEndpoint}/${image[0]}`}
                              // src="/assets/img/innerpage/recent-post-img1.png"
                              alt=""
                            />
                          </Link>
                        </div>

                        <div className="recent-post-content">
                          <Link href={`/blogs/${_id}`}> {language === "en"
                        ? blog?.category
                        : handleChange(blog?.category)}</Link>
                          <h6>
                            <Link href={`/blogs/${_id}`}>
                              {language === "en" ? title : titlefr}
                            </Link>
                          </h6>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <ContactModal isOpen={isOpen} closeModal={closeModal} />
                  <div className="mb-20">
                {products?.books && products?.books[0] && (
                  <ProjectCard
                    openModal={openModal}
                    isfeaturepage={true}
                   
                    blog={products?.books[0]}
                    language={language}
                  />
                )}
                  </div>

              </div>

              {currentGuide?.title === "U.A.E." ? 
              <div className="tour-location">
              <h4>{language === "en" ? "Location Map":"Carte de localisation"}</h4>
              <div className="map-area">
              <iframe className=" w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7259008.9373557065!2d43.82589322282474!3d24.02821598116107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e1!3m2!1sen!2sbd!4v1733346086291!5m2!1sen!2sbd"  height="500" loading="lazy"></iframe>
              </div>
            </div>
            :
            currentGuide?.title === "North Cyprus" ?
              <div className="tour-location">
              <h4>{language === "en" ? "Location Map":"Carte de localisation"}</h4>
              <div className="map-area">
             <iframe className=" w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999109.7123114157!2d33.425200000000004!3d35.168800000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1767ca494d55%3A0x324c3c807fc4146e!2sCyprus!5e1!3m2!1sen!2slb!4v1734042879623!5m2!1sen!2slb" height="500" loading="lazy"></iframe>
              </div>
            </div>
            :
            currentGuide?.title === "Mexico" ?
              <div className="tour-location">
              <h4>{language === "en" ? "Location Map":"Carte de localisation"}</h4>
              <div className="map-area">
              <iframe className=" w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17926129.21740442!2d-102.62050004999999!3d23.554126900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2sMexico!5e1!3m2!1sen!2slb!4v1734655301193!5m2!1sen!2slb" height="500"></iframe>
              </div>
            </div>
             :
             currentGuide?.title === "Spain" ?
               <div className="tour-location">
               <h4>{language === "en" ? "Location Map":"Carte de localisation"}</h4>
               <div className="map-area">
               <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731162.4846247975!2d-3.7781355090223383!3d39.8647308345809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e1!3m2!1sen!2slb!4v1734990843826!5m2!1sen!2slb" height="500"></iframe>
               </div>
             </div>
              :
              currentGuide?.title === "Portugal" ?
                <div className="tour-location">
                <h4>{language === "en" ? "Location Map":"Carte de localisation"}</h4>
                <div className="map-area">
                <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59579.03129684894!2d-9.237675037877379!3d38.74412052215297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e1!3m2!1sen!2slb!4v1734994299099!5m2!1sen!2slb" height="500" ></iframe>
                </div>
              </div>
            :
            currentGuide?.title === "Spain" ?
              <div className="tour-location">
              <h4>{language === "en" ? "Location Map":"Carte de localisation"}</h4>
              <div className="map-area">
              <iframe className=" w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28041148.317717925!2d-49.277405919424574!3d28.10931314313744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!5e1!3m2!1sen!2slb!4v1734905728015!5m2!1sen!2slb" height="500"></iframe>
              </div>
            </div>
            :
            currentGuide?.titlefr === "Rep.Dominicaine" &&
              <div className="tour-location">
              <h4>{language === "en" ? "Location Map":"Carte de localisation"}</h4>
              <div className="map-area">
              <iframe className=" w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315826.739296603!2d-71.44941769804883!3d18.66789661465209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8838def1b6f5%3A0xa6020f24060df7e0!2sDominican%20Republic!5e1!3m2!1sen!2slb!4v1734050379902!5m2!1sen!2slb"  height="500" loading="lazy"></iframe>
              </div>
            </div>
            }
            </div>
            


            </div>

            </Box>
          )}
        </Container>
      </Container>


     
      <Newslatter />
      <Footer />
    </div>
  )
} 