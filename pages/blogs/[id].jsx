import Link from "next/link";
import Breadcrumb from "@/components/components/common/Breadcrumb";
import Newslatter from "@/components/components/common/Newslatter";
import Footer from "@/components/components/footer/Footer";
import Header from "@/components/components/header/Header2";
import Topbar from "@/components/components/topbar/Topbar";
import useBlog from "../../hooks/useBlog";
import useBlogs from "../../hooks/useBlogs";
import { useRouter } from "next/router";
import { ImageEndpoint } from "../../utils/global";
import { useState } from "react";
import { useLanguageContext } from "@/context/languageContext";
import { format, formatDistanceToNow, parseISO } from "date-fns";
import useProducts from "@/hooks/useProducts";
import ProjectForm from "../../components/Site/ProjectForm";
import ContactModal from "../../components/Site/ContactModal";
import ProjectCard from "../../components/Site/ProjectCard";
import { handleChange } from "../../utils/handleLanguage";
import moment from "moment/moment";
export const metadata = {
  title: "SandnSea Realty",
  description:
    "SandnSea Realty",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const countries = [
  { value: "", label: "All countries" },

  { value: "Mexico", label: "Mexico" },
  { value: "North Cyprus", label: "North Cyprus" },
  { value: "Spain", label: "Spain" },
  { value: "Dominican Republic", label: "Dominican Republic" },

  { value: "Portugal", label: " Portugal" },

  { value: "Canada", label: "Canada" },

  { value: "United Arab Emirates", label: "United Arab Emirates" },
];

const page = () => {
  const router = useRouter();
  const { language, reference, setReference } = useLanguageContext();
  const { id } = router.query;
  const { data } = useBlog({ id });
  const { data: blogs } = useBlogs({ page: 1 });
  const { data: products } = useProducts({
    page: 1,
    isfeatured: true,
  });

  console.log("SSSS", products);

  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/blogs?search=${search}`);
  };

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setReference("");
  }

  function openModal(referenceid) {
    setIsOpen(true);
    setReference(referenceid);
  }

  return (
    <div dir="ltr" className="">
      {/* <Topbar /> */}
      <Header />
      <Breadcrumb
        pagename={language === "en" ? "Blog Details" : "Détails du blog"}
        pagetitle={language === "en" ? "Blog Details" : "Détails du blog"}
      />
      <div className="blog-details-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 justify-content-center flex-col md:!flex-row ">
            <div className="col-lg-8">
              <div className="post-thumb mb-30">
                <img
                  className="!h-[350px] !w-full"
                  src={`${ImageEndpoint}/${data?.book?.image[0]}`}
                  // src="/assets/img/innerpage/blog-standard-img2.jpg"
                  alt=""
                />
              </div>
              <div className="post-title mb-10">
                <h2 className="!text-[23px] sm:!text-[30px] md:!text-[35px]">
                  {language === "en" ? data?.book?.title : data?.book?.titlefr}{" "}
                </h2>
              </div>
              <div className="blog-meta two mb-50">
                <div className="author-area">
                  {/* <div className="author-img">
                    <img src={`${ImageEndpoint}/${data?.book?.image[0]}`}
                    // "/assets/img/innerpage/blog-meta-author-img.png"
                     alt="" />
                  </div> */}
                  <div className="author-content !text-md !font-semibold sm:!text-lg !text-[#63ab45] ">
                    {/* <h6>By, <Link href="/blog">Admin</Link></h6> */}
                    {/* {data?.book?.category} */}

                    <h6 className="!text-[#63ab45]">
                      {language === "en"
                        ? data?.book?.category==="Republic Dominica" ? "Dominican Republic" : data?.book?.category
                        : handleChange(data?.book?.category)}
                    </h6>
                  </div>
                </div>
                <ul>
                  <li className="!text-[#63ab45]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={16}
                      viewBox="0 0 12 16"
                    >
                      <path d="M7.80968 15.0679C9.5273 12.1176 8.80817 8.40483 6.09966 6.24033C6.09808 6.23911 6.0965 6.23758 6.09523 6.23666L6.10694 6.26482L6.10504 6.28594C6.63276 7.63466 6.55873 9.11531 5.91047 10.3857L5.45362 11.2813L5.31347 10.2917C5.21824 9.62039 4.95659 8.98001 4.55353 8.43177H4.48994L4.4564 8.33993C4.46115 9.3657 4.23778 10.3762 3.7996 11.3294C3.22474 12.5768 3.30922 14.0152 4.02581 15.1778L4.52031 15.9804L3.63066 15.6168C2.16361 15.0171 0.990804 13.8618 0.412783 12.4473C-0.234842 10.8678 -0.114934 9.03633 0.733906 7.54925C1.17652 6.77572 1.48657 5.95443 1.65583 5.10773L1.82129 4.27787L2.24334 5.01804C2.44487 5.37098 2.59326 5.75301 2.68532 6.15432L2.69481 6.16381L2.70462 6.22809L2.71379 6.22533C3.97804 4.6002 4.73545 2.57805 4.84586 0.530486L4.87434 0L5.33435 0.290191C7.21173 1.47391 8.51552 3.37301 8.91827 5.5069L8.92744 5.55067L8.93219 5.5574L8.95275 5.52924C9.3207 5.05906 9.51496 4.4998 9.51496 3.91115V2.99956L10.0835 3.72626C11.4053 5.41537 12.083 7.51068 11.9919 9.62651C11.8799 12.117 10.4761 14.3029 8.23648 15.4873L7.26678 16L7.80968 15.0679Z" />
                    </svg>
                    {/* {data?.book?.category} */}
                    3.9K {language === "en" ? "View" : "Voir"}
                  </li>
                  <li className="!text-[#63ab45]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <g>
                        <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z" />
                      </g>
                    </svg>
                    5 {language === "en" ? "Min Read" : "min de lecture"}
                    {/* {moment(data?.book?.createdAt).format("YYYY-MM-DD")} */}
                  </li>
                </ul>
              </div>
              <p className="first-para1 ">
                <div
                  className="bg-whit !text-[#100c08]"
                  dangerouslySetInnerHTML={{
                    __html:
                      language === "en"
                        ? data?.book?.story
                        : data?.book?.storyfr,
                  }}
                />
              </p>
            </div>

            <div className="col-lg-4 ">
              <div className="sidebar-area">
                <div className="single-widget mb-30">
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
                  </form>
                </div>

                <div className="single-widget mb-30">
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
                      <div className="recent-post-widget mb-20">
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
                          <Link href={`/blogs/${_id}`}>
                          {language ==='en' ? blog.category==="Republic Dominica" ? "Dominican Republic" : blog.category : handleChange(blog.category)}
                          </Link>
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

                {products?.books && products?.books[0] && (
                  <ProjectCard
                    openModal={openModal}
                    isfeaturepage={true}
                    hieght={300}
                    blog={products?.books[0]}
                    language={language}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newslatter />
      <Footer />
    </div>
  );
};

export default page;
