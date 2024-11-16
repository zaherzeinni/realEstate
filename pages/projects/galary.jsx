import React from 'react'
import { useState } from 'react';
import ModalVideo from "react-modal-video";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";


export default function Galary({images}) {

    const [isOpenModalVideo, setOpenModalVideo] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });


  const images1 = [
    {
      id: 1,
      imageBig: "/assets/img/innerpage/ski-touring-01.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/innerpage/ski-touring-02.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/innerpage/ski-touring-03.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/innerpage/ski-touring-04.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/innerpage/ski-touring-05.jpg",
    },
    {
      id: 6,
      imageBig: "/assets/img/innerpage/ski-touring-06.jpg",
    },
  ];


  return (
    <div className="package-details-area pt-10 mb-10">
    <div className="container1 sm:mx-32 sm:h-[600px] mb-10 ">
      <div className="row">
        <div className="co-lg-12">
         
      
          <div className="package-img-group mb-50">
         
            <div className="row align-items-center g-3">
            {images?.map((img,index)=>(
              <div key={index} className="col-lg-6">
             
    
                <div   className="gallery-img-wrap sm:h-[600px] ">
                <img src={img.imageBig} alt=""  className='h-[600px]'/> 
                  <a ><i className="bi bi-eye"  onClick={() =>setOpenimg({ openingState: true, openingIndex: 0 }) }/></a>
                </div>
               
              </div>
                     ))}  

                  <div className="col-6 hidden ">
                 
                    <div  className="gallery-img-wrap active">
                      <img src="/assets/img/innerpage/ski-touring-01.jpg"  alt="" />
                      <button className="StartSlideShowFirstImage"><i className="bi bi-plus-lg" onClick={() =>setOpenimg({ openingState: true, openingIndex: 3 }) } /> View More Images</button>   
                    </div>
               
                  </div>
            
              <div className="col-lg-6 h-100 hidden">
                <div className="row g-3 h-100">
                  <div className="col-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/innerpage/ski-touring-02.jpg" alt="" />
                      <a ><i className="bi bi-eye " onClick={() =>setOpenimg({ openingState: true, openingIndex: 1 }) } /></a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="gallery-img-wrap">
                      <img src="/assets/img/innerpage/ski-touring-03.jpg" alt="" />
                      <a><i className="bi bi-eye" onClick={() =>setOpenimg({ openingState: true, openingIndex: 2 }) } /></a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="gallery-img-wrap active">
                      <img src="/assets/img/innerpage/ski-touring-04.jpg" alt="" />
                      <button className="StartSlideShowFirstImage"><i className="bi bi-plus-lg" onClick={() =>setOpenimg({ openingState: true, openingIndex: 3 }) } /> View More Images</button>   
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="gallery-img-wrap active">
                      <img src="/assets/img/innerpage/ski-touring-05.jpg" alt="" />
                      <a data-fancybox="gallery-01" style={{ cursor: "pointer" }}
onClick={() => setOpenModalVideo(true)}><i className="bi bi-play-circle" /> Watch Video</a>
                    </div>
                  </div>
                  
                </div>
                
              </div>
     
            </div>
            
          </div>




        </div>
      </div>
      
      {/* <div className="others-image-wrap d-none"> */}
        {/* <a href="assets/img/innerpage/ski-touring-02.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-02.jpg" alt="" /></a>   
        <a href="assets/img/innerpage/ski-touring-03.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-03.jpg" alt="" /></a>   
        <a href="assets/img/innerpage/ski-touring-04.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-04.jpg" alt="" /></a>   
        <a href="assets/img/innerpage/ski-touring-05.jpg" data-fancybox="images"><img src="/assets/img/innerpage/ski-touring-05.jpg" alt="" /></a>    */}
{/* </div> */}

   

      </div>



      <React.Fragment>
        <ModalVideo
          channel="youtube"
          onClick={() => setOpenModalVideo(true)}
          isOpen={isOpenModalVideo}
          animationSpeed="350"
          videoId="r4KpWiK08vM"
          ratio="16:9"
          onClose={() => setOpenModalVideo(false)}
        />
      </React.Fragment>



{images && images?.length && (
        <Lightbox
          className="img-fluid"
          open={isOpenimg.openingState}
          plugins={[Fullscreen]}
          index={isOpenimg.openingIndex}
          close={() => setOpenimg(false)}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
          slides={images?.map(function (elem) {
            return { src: elem.imageBig };
          })}
        />
      )}

      </div>

  )
}
