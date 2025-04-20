import { useState } from "react";
import { useRouter } from "next/router";
import useStaffProperties from "@/hooks/useStaffProperties";
import useAuth from "@/hooks/useAuth";
import Footer from "@/components/components/footer/Footer";
import Header from "@/components/components/header/Header2";
import { PageLayout } from "@/layouts";
import ProjectCard from "@/components/Site/ProjectCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  TextField,
  Paper,
  Box,
  Typography,
  Chip,
  IconButton,
  Stack,
  MenuItem,
  TableContainer,
  Pagination,
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ImageEndpoint } from "../../../utils/global";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaParking } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import BreadcrumbForSaleApp from "@/components/components/common/BreadcrumbForSaleApp";
import useCountries from "@/hooks/useCountries";

interface PropertyCardProps {
  property: {
    _id: string;
    title: string;
    city?: string;
    price?: number;
    details?: {
      beds?: number;
      baths?: number;
      rooms?: number;
      parkings?: number;
      areaSqM?: number;
    };
    coverImage?: string;
    services?: {
      pool?: boolean;
      gym?: boolean;
      security?: boolean;
      parking?: boolean;
      isfeatured?: boolean;
      Furnished?: boolean;
    };
    propertyInfo?: {
      constructionYear?: string;
      condition?: string;
      reference?: number;
    };
    whatsapp?: string;
    video?: string;
    googleLink?: string;
    booking?: {
      commission: number;
      status: string;
      bills: string;
      startDate?: string;
      endDate?: string;
    };
  };
}

export default function StaffProperties() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    country: "",
  });

  const { user, loading } = useAuth({
    redirectTo: '/auth/login',
    redirectIfFound: false,
  });

  // Redirect if user is not staff
  if (user && user.role !== 'staff') {
    router.push('/');
    return null;
  }

  const { properties, isLoading, totalPages } = useStaffProperties({ 
    page,
    limit: 10,
    ...filters 
  });
  console.log(properties, "properties🧑‍💻⚠️🧑‍💻⚠️");

  const { data: countries } = useCountries();

  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
    setPage(1);
  };

  const handleTypeChange = (e: any) => {
    setFilters(prev => ({ ...prev, type: e.target.value }));
    setPage(1);
  };

  const handleCountryChange = (e: any) => {
    setFilters(prev => ({ ...prev, country: e.target.value }));
    setPage(1);
  };

  return (
  
      <PageLayout title="Properties in Your Region">
  <Header />

<BreadcrumbForSaleApp />


        <div dir="rtl" className="container pt-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <form className="text-start">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <div className="relative">
                    <TextField
                      dir="rtl"
                      select
                      fullWidth
                      size="small"
                      value={filters.country}
                      onChange={handleCountryChange}
                      className="bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      SelectProps={{
                        MenuProps: {
                          PaperProps: {
                            style: {
                              borderRadius: '8px',
                              marginTop: '8px',
                              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                            },
                          },
                        },
                      }}
                    >
                      <MenuItem value="">All Countries</MenuItem>
                      {countries?.map((country: any) => (
                        <MenuItem key={country._id} value={country.title}>
                          {country.title}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <div className="relative">
                    <TextField
                      select
                      fullWidth
                      size="small"
                      value={filters.type}
                      onChange={handleTypeChange}
                      className="bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      SelectProps={{
                        MenuProps: {
                          PaperProps: {
                            style: {
                              borderRadius: '8px',
                              marginTop: '8px',
                              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                            },
                          },
                        },
                      }}
                    >
                      <MenuItem value="">All Types</MenuItem>
                      <MenuItem value="townhome">Townhome</MenuItem>
                      <MenuItem value="office">Office</MenuItem>
                      <MenuItem value="house">House</MenuItem>
                      <MenuItem value="villa">Villa</MenuItem>
                      <MenuItem value="apartment">Apartment</MenuItem>
                    </TextField>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Properties
                  </label>
                  <div className="relative">
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Search by title, reference"
                      value={filters.search}
                      onChange={handleSearch}
                      className="bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-3 flex gap-4 justify-end">
                  {/* <button
                    type="submit"
                    className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                  >
                    Search
                  </button> */}
                  <button
                    type="button"
                    onClick={() => setFilters({ search: "", type: "", country: "" })}
                    className="px-6 py-2.5 bg-[#63ab45] text-white rounded-lg hover:bg-[#518c37] transition-colors duration-200 flex items-center gap-2"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div
        dir="ltr"
        className="package-grid-with-sidebar-section pt-6 mb-12">
          <div className="container">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-12">
                <div className="list-grid-product-wrap mb-70">
                  <div className="row gy-4">
                    {properties?.map((property: any) => (
                      <PropertyCard
                        key={property._id}
                        property={{
                          _id: property._id,
                          title: property.title,
                          city: property.city,
                          price: property.price,
                          details: property.details,
                          coverImage: `${ImageEndpoint}/${property.image[0]}`,
                          services: property.services,
                          propertyInfo: property.propertyInfo,
                          whatsapp: property.whatsapp,
                          video: property.video,
                          googleLink: property.googleLink,
                          booking: property.booking
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <nav className="inner-pagination-area text-center">
                      <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                      />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
 
  );
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { _id, title, city, price, details, coverImage, services, propertyInfo } = property;

  return (
    <div className="col-md-6 item">
      <div className="transform transition-all duration-300 hover:shadow-xl rounded-xl overflow-hidden bg-white">
        <Link href={`/properties/${_id}`} className="block relative">
          <img
            className="h-[280px] w-full object-cover"
            src={coverImage || '/assets/img/placeholder.png'}
            alt={title}
          />
          <div className="absolute bottom-4 left-4 flex gap-3">
            {property.whatsapp && (
              <a
                href={property.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
                title="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            )}
            {property.video && (
              <a
                href={property.video}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
                title="YouTube Video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            )}
            {property.googleLink && (
              <a
                href={property.googleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                title="Google Drive"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.71 3.52L1.15 15l3.42 5.99 6.56-11.47zm1.37 0l6.56 11.47L9.08 21H2.52zm14.77 11.47L17.42 3.52 11.86 15h7.99z"/>
                </svg>
              </a>
            )}
          </div>
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {services?.isfeatured && (
              <div className="bg-[#63ab45] text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            )}
            {services?.Furnished && (
              <div className="bg-[#63ab45] text-white px-3 py-1 rounded-full text-sm font-medium">
                Furnished
              </div>
            )}
          </div>
        </Link>
        
        <div className="p-5">
          {propertyInfo?.reference && (
            <div className="text-sm text-gray-500 mb-2">
              Ref: #{propertyInfo.reference}
            </div>
          )}

          <Link href={`/properties/${_id}`}>
            <h5 className="text-xl font-semibold text-gray-800 mb-3 hover:text-[#63ab45] transition-colors">
              {title}
            </h5>
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <MdLocationOn className="text-[#63ab45] text-xl" />
            <span className="text-gray-600">{city}</span>
          </div>

          {property.booking && (
            <div className="bg-[#63ab45]/10 rounded-lg p-4 mb-4 border-l-4 border-[#63ab45]">
              <h6 className="text-lg font-semibold text-[#63ab45] mb-3">Booking Details</h6>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#63ab45]/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Commission</span>
                  <p className="text-md font-semibold text-gray-800">${property.booking.commission}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#63ab45]/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Status</span>
                  <p className="text-md font-semibold">
                    <Chip
                      size="small"
                      label={property.booking.status}
                      color={property.booking.status === "confirmed" ? "success" : property.booking.status === "cancelled" ? "error" : "default"}
                    />
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-[#63ab45]/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Booking Period</span>
                  <p className="text-md font-semibold text-gray-800">
                    {property.booking.startDate && property.booking.endDate ? (
                      <>
                        {new Date(property.booking.startDate).toLocaleDateString('en-GB')} - 
                        {new Date(property.booking.endDate).toLocaleDateString('en-GB')}
                      </>
                    ) : "No dates specified"}
                  </p>
                </div>
              </div>
            </div>
          )}

          {(propertyInfo?.constructionYear || propertyInfo?.condition) && (
            <div className="flex gap-4 mb-4 text-sm text-gray-600">
              {propertyInfo.constructionYear && (
                <span>Built: {propertyInfo.constructionYear}</span>
              )}
              {propertyInfo.condition && (
                <span>Condition: {propertyInfo.condition}</span>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 mb-4">
            {details?.beds && (
              <div className="flex items-center gap-2">
                <IoBedOutline className="text-gray-500 text-xl" />
                <span className="text-gray-700">{details.beds} Beds</span>
              </div>
            )}
            {details?.baths && (
              <div className="flex items-center gap-2">
                <FaBath className="text-gray-500 text-xl" />
                <span className="text-gray-700">{details.baths} Baths</span>
              </div>
            )}
            {/* {details?.areaSqM && (
              <div className="flex items-center gap-2">
                <BiArea className="text-gray-500 text-xl" />
                <span className="text-gray-700">{details.areaSqM} m²</span>
              </div>
            )}
            {details?.parkings && (
              <div className="flex items-center gap-2">
                <FaParking className="text-gray-500 text-xl" />
                <span className="text-gray-700">{details.parkings} Parking</span>
              </div>
            )} */}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {services?.security && (
              <Chip size="small" label="Security" color="primary" variant="outlined" />
            )}
            {services?.gym && (
              <Chip size="small" label="Gym" color="primary" variant="outlined" />
            )}
            {services?.pool && (
              <Chip size="small" label="Pool" color="primary" variant="outlined" />
            )}
          </div>

          <div className="border-t border-gray-200 my-4"></div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Price</span>
              <span className="text-2xl font-bold text-[#63ab45]">
                ${price?.toLocaleString()}
              </span>
            </div>
            <Link 
              href={`/properties/${_id}`}
              className="inline-flex items-center gap-2 bg-[#63ab45] text-white px-4 py-2 rounded-lg hover:bg-[#518c37] transition-colors"
            >
              <span>View Details</span>
              <HiArrowRight className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 