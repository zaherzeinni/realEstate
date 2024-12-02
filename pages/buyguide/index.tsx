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



  



  return (
    <div className=" pt mb-" dir="ltr">
  <Breadcrumb  pagename={language === "en" ? currentGuide?.title : currentGuide?.titlefr} pagetitle={language === "en" ? "Buying Guide":"Guide D'achat"}/>

        <Header />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ width: "100%", backgroundColor: "#14345B" }}>
            
          <Container maxWidth="lg">
           
            <Box  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, py: 1 }}>

                
              {currentGuide && (
                <Box className="!flex !flex-col md1:flex md1:flex-row" key={currentGuide._id} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <button
                   className="primary-btn1 h-7 w-48 justify-center"
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
                    <Box className="!flex !flex-col md1:flex md1:flex-row" sx={{ display: 'flex', gap: 1 }}>
                      {currentGuide.items.map((item: BuyguideItem) => (
                        <button
                        className="primary-btn1 h-7 w-56 text-sm justify-center"
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
                    <button className="primary-btn1 h-7 justify-center"> Listing</button>
                    </Link>
                      :
                    <Link href={linkStringfr} >
                    <button className="primary-btn1 h-7 justify-center"> Inscription</button>
                    </Link>
                      }
                    </Box>
                    
                  )}
                </Box>
              )}
     

            </Box>
          </Container>
        </Box>
        <Container maxWidth="lg">
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
              
              
              <Container>
              {!selectedItem && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: language === 'en' 
                      ? currentGuide.desc 
                      : currentGuide.descfr
                  }}
                />
              )}
              {selectedItem && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: language === 'en' 
                      ? selectedItem.desc 
                      : selectedItem.descfr
                  }}
                />
              )}
              </Container>
              
              
              <div className="single-widget mb-28 mt-5 shadow-xl my-auto">
                    {blogs?.books?.length > 0 && (
                      <h5 className="widget-title">
                        {language === "en" ? "Recent Post" : "Article récent"}
                      </h5>
                    )}

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
                        <div className="recent-post-widget mb-20">
                          <div className="recent-post-img mb-1">
                            <Link href={`/blogs/${_id}`}>
                              <img
                                src={`${ImageEndpoint}/${image[0]}`}
                                // src="/assets/img/innerpage/recent-post-img1.png"
                                alt=""
                                className="w-[300px] h-[200px]"
                              />
                            </Link>
                          </div>

                          <div className="recent-post-content font-rubik ">
                            <Link
                              className=" px-2 text-black"
                              href={`/blogs/${_id}`}
                            >
                              {/* 20 July, 2023 */}
                            </Link>
                            <Link
                              className=" -ml-4  text-[#100c08] text-opacity-50 hover:text-primary"
                              href={`/blogs?country=${category}`}
                            >
                              {language === "en"
                                ? `${category}`
                                : handleChange(category)}
                               
                             
                                {/* {langCountry} */}
                           
                            </Link>

                            <h5>
                              <Link
                                href={`/blogs/${_id}`}
                                className="!text-black hover:text-primary"
                              >
                                {language === "en"
                                  ? title?.slice(0, 30)
                                  : titlefr?.slice(0, 30)}
                                ....
                              </Link>
                            </h5>
                          </div>
                        </div>
                      );
                    })}

                     <ContactModal isOpen={isOpen} closeModal={closeModal} />
                <section className="projectcard mt-10 flex">
                {products?.books && products?.books[0] && (
                  <ProjectCard
                    openModal={openModal}
                    isfeaturepage={true}
                    hieght={300}
                    blog={products?.books[0]}
                    language={language}
                  />
                )}
                  </section>
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