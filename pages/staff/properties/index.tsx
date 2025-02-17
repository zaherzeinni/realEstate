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

  // Redirect if not authenticated or not staff
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
    ...filters 
  });

  const { data: countries, isLoading: isLoadingCountries } = useCountries();

  console.log(properties , "properties");

  const handlePageChange = (event: any, value: number) => {
    setPage(value);
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
                      onChange={(e) => setFilters({...filters, country: e.target.value})}
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
                        <MenuItem key={country._id} value={country._id}>
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
                      onChange={(e) => setFilters({...filters, type: e.target.value})}
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
                      onChange={(e) => setFilters({...filters, search: e.target.value})}
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
                   className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
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
                          propertyInfo: property.propertyInfo
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
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {services?.isfeatured && (
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            )}
            {services?.Furnished && (
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
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
            <h5 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
              {title}
            </h5>
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <MdLocationOn className="text-blue-600 text-xl" />
            <span className="text-gray-600">{city}</span>
          </div>

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
            {details?.areaSqM && (
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
            )}
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
              <span className="text-2xl font-bold text-blue-600">
                ${price?.toLocaleString()}
              </span>
            </div>
            <Link 
              href={`/properties/${_id}`}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
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