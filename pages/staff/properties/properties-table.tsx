import { useState } from "react";
import { useRouter } from "next/router";
import useStaffProperties from "@/hooks/useStaffProperties";
import useAuth from "@/hooks/useAuth";
import { PageLayout } from "@/layouts";
//staff layout
import StaffMainLayout from "@/components/Site/dashboardLayout/staffLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Paper,
  TableContainer,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { message } from "antd";
import axios from "axios";
import Link from "next/link";
import useCountries from "@/hooks/useCountries";



export default function StaffPropertiesTable() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    country: "",
    status: "",
  });
  const [statusDialog, setStatusDialog] = useState({
    open: false,
    propertyId: '',
    currentStatus: ''
  });

  // Auth check
  const { user, loading } = useAuth({
    redirectTo: '/auth/login',
    redirectIfFound: false,
  });

  if (user && user.role !== 'staff') {
    router.push('/');
    return null;
  }

  const { properties, statusCounts, isLoading, totalPages } = useStaffProperties({ 
    page,
    ...filters 
  });
    console.log("propertiessssss", properties);
  console.log("statusCountsssss", statusCounts);
  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };

  const handleStatusClick = (booking: any) => {
    setStatusDialog({
      open: true,
      propertyId: booking._id,
      currentStatus: booking.status || 'pending'
    });
  };

  const handleStatusUpdate = async (newStatus: string) => {
    try {
      await axios.put(`/api/bookings/${statusDialog.propertyId}/status`, {
        status: newStatus
      });
      message.success("Status updated successfully");
      // Refresh the properties data
      router.replace(router.asPath);
      setStatusDialog({ open: false, propertyId: '', currentStatus: '' });
    } catch (error) {
      message.error("Error updating status");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'confirmed':
        return 'text-green-500 bg-green-100';
      case 'pending':
        return 'text-yellow-500 bg-yellow-100';
      case 'cancelled':
        return 'text-white bg-red-600';
        case 'draft':
          return 'text-white bg-gray-200';
      default:
        return 'text-gray-500';
    }
  };

  const handleStatusCardClick = (status: string) => {
    setFilters(prev => ({ ...prev, status }));
    setPage(1);
  };

  const statusCards = [
    { status: 'pending', label: 'Pending', color: 'bg-yellow-100 border-yellow-500' },
    { status: 'confirmed', label: 'Confirmed', color: 'bg-green-100 border-green-500' },
    { status: 'cancelled', label: 'Cancelled', color: 'bg-red-100 border-red-500' },
    { 
      status: '', 
      label: 'All Bookings', 
      color: 'bg-blue-100 border-blue-500',
      count: statusCounts ? 
        (statusCounts.pending || 0) + 
        (statusCounts.confirmed || 0) + 
        (statusCounts.cancelled || 0) : 0
    }
  ];





  // -------------------filter in properties-------------------

  const { data: countries } = useCountries();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
    setPage(1);
    const searchValue = e.target.value.toLowerCase();
    setFilters(prev => ({
      ...prev,
      search: searchValue,
      filteredProperties: properties?.filter(property => 
        property.booking?.customer?.firstName?.toLowerCase().includes(searchValue) || 
        property.booking?.customer?.lastName?.toLowerCase().includes(searchValue)
    
      )
    }));
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
    <StaffMainLayout>
    <PageLayout title="Properties Table View">

    <h4 className="mt-10">Properties Table</h4>
  
      {/* -------------------filter in properties------------------- */}
        <div dir="ltr" className="container pt-6 mb-12">
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
                      <MenuItem className="flex flex-col" value="">All Countries</MenuItem>
                      {countries?.map((country: any) => (
                        <MenuItem className="flex flex-col" key={country._id} value={country.title}>
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
                   
                      <MenuItem className="flex flex-col" value="">All Types</MenuItem>
                      <MenuItem  className="flex flex-col" value="townhome">Townhome</MenuItem>
                      <MenuItem  className="flex flex-col" value="office">Office</MenuItem>
                      <MenuItem  className="flex flex-col" value="house">House</MenuItem>
                      <MenuItem  className="flex flex-col" value="villa">Villa</MenuItem>
                      <MenuItem  className="flex flex-col" value="apartment">Apartment</MenuItem>
                   
                    </TextField>
                  </div>
                </div>
{/* -------------------filter in properties------------------- */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Properties
                  </label>
                  <div className="relative">
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Search by title, reference,customer name"
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














      



      <div dir="ltr" className="container mx-auto px-4 py-8">
        {/* Status Cards */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6">
          {statusCards.map(({ status, label, color, count }) => (
            <div
              key={status || 'all'}
              onClick={() => handleStatusCardClick(status)}
              className={`cursor-pointer border rounded-lg p-2 sm:p-4 ${color} ${
                filters.status === status ? 'ring-2 ring-offset-2' : ''
              }`}
            >
              <h3 className="text-sm sm:text-lg font-semibold">{label}</h3>
              <p className="text-lg sm:text-2xl font-bold">
                {count !== undefined ? count : (statusCounts && statusCounts[status] ? statusCounts[status] : 0)}
              </p>
            </div>
          ))}
        </div> */}

        {/* Clear filters button */}
        {/* {filters.status && (
          <Button
            variant="outlined"
            className="mb-4"
            onClick={() => {
              setFilters(prev => ({ ...prev, status: '' }));
              setPage(1);
            }}
          >
            Clear Status Filter
          </Button>
        )} */}

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell className="!w-8 mx-auto">ُEmail</TableCell>
                <TableCell>Phone</TableCell>        
                {/* <TableCell>Price</TableCell>
                <TableCell>Comm</TableCell>
                <TableCell>Collect</TableCell>
                <TableCell>Bills</TableCell> */}
                <TableCell>Date Range</TableCell>
                <TableCell>Remaining Time</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Staff</TableCell>
                {/* <TableCell>Created</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {properties?.map((property: any) => (
                <TableRow key={property._id}>
                  <TableCell>{property.title}</TableCell>
                  
                  <TableCell>{property.type}</TableCell>
                  <TableCell>{property.city}</TableCell>
                  <TableCell>{property.booking?.customer?.firstName } {property.booking?.customer?.lastName || ""}</TableCell>
                    <TableCell style={{ wordWrap: 'break-word', maxWidth: '100px' }}>
                    {property.booking?.customer?.email || ""}
                    </TableCell>
                  <TableCell>{property.booking?.customer?.phone || ""}</TableCell>

                  {/* <TableCell>${property.price?.toLocaleString()}</TableCell>
                  <TableCell>{property.booking?.commission || 'N/A'}</TableCell>
                  <TableCell>$ {(property.booking?.commission*property.price/100)} </TableCell>
                  <TableCell>{property.booking?.bills || 'N/A'}</TableCell> */}
      
                  <TableCell>
                    {property.booking?.startDate && property.booking?.endDate ? 
                      `${new Date(property.booking.startDate).toLocaleDateString('en-GB')} - 
                       ${new Date(property.booking.endDate).toLocaleDateString('en-GB')}` : 
                      'N/A'}
                  </TableCell>
                  <TableCell>
                    {property.booking?.endDate ? 
                      (() => {
                        const today = new Date();
                        const endDate = new Date(property.booking.endDate);
                        const diffTime = endDate.getTime() - today.getTime();
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        
                        if (diffDays < 0) {
                          return <span className="text-green-500">Commission Due</span>;
                        } else if (diffDays === 0) {
                          return <span className="text-orange-500">Due Today</span>;
                        } else {
                          return <span className="text-blue-500">{diffDays} days remaining</span>;
                        }
                      })() : 
                      'N/A'}
                  </TableCell>
                  <TableCell>
                    <span 
                      className={`cursor-pointer1 p-2 rounded-lg ${getStatusColor(property.booking?.status)}`}
                      // onClick={() => handleStatusClick(property)}
                    >
                      {property.booking?.status || 'N/A'}
                    </span>
                  </TableCell>
                  <TableCell>{property.booking?.staff?.name || 'N/A'}</TableCell>
                  {/* <TableCell>
                    {new Date(property.createdAt).toLocaleDateString('en-GB')}
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="flex justify-center mt-4">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </div>
      </div>

      {/* <Dialog 
        open={statusDialog.open} 
        onClose={() => setStatusDialog({ open: false, propertyId: '', currentStatus: '' })}
      >
        <DialogTitle>Update Status</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusDialog.currentStatus}
              label="Status"
              onChange={(e) => handleStatusUpdate(e.target.value)}
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="confirmed">Confirmed</MenuItem>
              <MenuItem value="cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setStatusDialog({ open: false, propertyId: '', currentStatus: '' })}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog> */}
    </PageLayout>
    </StaffMainLayout>




  );
} 