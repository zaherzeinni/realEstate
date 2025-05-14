import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { PageLayout } from "@/layouts";
import AdminMainLayout from "@/components/Site/dashboardLayout";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Paper,
  Box,
  Typography,
  Chip,
  IconButton,
  Stack,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
  DialogContent,
  DialogActions,
  Dialog,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { message } from "antd";
import useCountries from "@/hooks/useCountries";
import useProducts from "@/hooks/useProducts";
import useStaffProperties from "@/hooks/useStaffProperties";

const fetcher = (url: string) => axios.get(url).then(({ data }) => data);

export default function BookingList() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const [limit] = useState(10);
  const { data: countriesData } = useCountries();

  // const { data: products } = useProducts({});

  const { data, error, mutate } = useSWR(
    `/api/bookings?page=${page}&limit=${limit}&search=${search}&country=${country}`,
    fetcher
  );

  useEffect(()=>{
    if (data &&  data.bookings ){
      console.log("bookings: ", data.bookings)
      setDataSource(data.bookings)
    }

  }, [data])
  
  const totalPages = data?.totalPages || 1;


  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this booking?")) {
      try {
        await axios.delete(`/api/bookings/${id}`);
        message.success("Booking deleted successfully");
        mutate();
      } catch (error) {
        message.error("Error deleting booking");
      }
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page when searching
  };

  const handleCountryChange = (e: any) => {
    setCountry(e.target.value);
    setPage(1); // Reset to first page when filtering
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


    const [statusDialog, setStatusDialog] = useState({
      open: false,
      id: '',
      currentStatus: ''
    });

  const handleStatusClick = (booking: any) => {
    setStatusDialog({
      open: true,
      id: booking._id,
      currentStatus: booking.status || 'pending'
    });
  };


  const handleStatusUpdate = async (newStatus: string) => {
    try {
    const response =  await axios.put(`/api/bookings/${statusDialog.id}/status`, {
        status: newStatus
      });
      console.log(response, "response newStatus ,id",newStatus,statusDialog.id)
      message.success("Status updated successfully");
      // mutate() from SWR to Refresh the properties data
      mutate();
      setStatusDialog((prev) => ({
        ...prev,
        currentStatus: newStatus,
        open: false,
        id: ''
      }));
    } catch (error) {
      message.error("Error updating status");
    }
  };

  
    const [filters, setFilters] = useState({
      search: "",
      type: "",
      country: "",
      status: "",
    });

    
    const { properties, statusCounts, isLoading,  } = useStaffProperties({ 
      page,
      ...filters 
    });
    console.log("statusCountsssss", statusCounts);

    const handleStatusCardClick = (status: string) => {
      setFilters(prev => ({ ...prev, status }));
      setPage(1);
    };
    
  const statusCards = [
    { status: 'draft', label: 'draft', color: 'bg-gray-100 border-gray-500 ' },
    { status: 'pending', label: 'Pending', color: 'bg-yellow-100 border-yellow-500' },
    { status: 'confirmed', label: 'Confirmed', color: 'bg-green-100 border-green-500' },
    { status: 'cancelled', label: 'Cancelled', color: 'bg-red-100 border-red-500' },
    { 
      status: '', 
      label: 'All Bookings', 
      color: 'bg-yellow-500 border-blue-500',
      count: statusCounts ? 
        (statusCounts.draft || 0) + 
        (statusCounts.pending || 0) + 
        (statusCounts.confirmed || 0) + 
        (statusCounts.cancelled || 0) : 0
    }
  ];




  


  return (
    <AdminMainLayout>
      <PageLayout
        title="Bookings"
        action={
          <Button
            variant="contained"
            onClick={() => router.push("/admin/booking/create")}
          >
            Create Booking
          </Button>
        }
      >
        <div></div>
        {/* --------------filter---------------------- */}
        <div className="mt-10">
          <Paper elevation={2} sx={{ mb: 3, p: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  label="Search by customer, property, or staff name"
                  variant="outlined"
                  value={search}
                  onChange={handleSearch}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <FormControl fullWidth size="small">
                  <InputLabel>Filter by Country</InputLabel>
                  <Select
                    value={country}
                    onChange={handleCountryChange}
                    label="Filter by Country"
                  >
                    <div dir="ltr" className="flex flex-col">
                      <MenuItem value="">All Countries</MenuItem>
                      {countriesData?.map((country: any) => (
                        <MenuItem key={country.id} value={country.title}>
                          <div>{country.title}</div>
                        </MenuItem>
                      ))}
                    </div>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => {
                    setSearch("");
                    setCountry("");
                    setPage(1);
                  }}
                >
                  Clear Filters
                </Button>
              </Grid>
            </Grid>
          </Paper>


          <div className="hidden">        {/* Status Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 sm:gap-4 mb-6">
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
        </div>

        {/* Clear filters button */}
        {filters.status && (
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
        )}
        
        </div>
        </div>

        <Paper elevation={2}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" className="text-2xl font-bold">Bookings</Typography>
          
          </Box>
          
          <Link href="/admin/booking/create" passHref>
          <button className="mx-auto justify-center flex mb-2 primary-btn1">Create Booking</button>
          </Link>


            <Box sx={{ overflowX: "auto" }}>
            <Table>
              <TableHead>
              <TableRow
                sx={{ backgroundColor: (theme) => theme.palette.grey[200] }}
              >
                <TableCell>
                <strong>Staff</strong>
                </TableCell>
                <TableCell>
                <strong>Customer</strong>
                </TableCell>
                <TableCell>
                <strong>Property</strong>
                </TableCell>
                <TableCell>
                <strong>Country</strong>
                </TableCell>

                {/* -----------------these columns are not used in the table------------------ but the are using in Accounting page------ */}
                {/* <TableCell>
                <strong>Comm</strong>
                </TableCell>
                <TableCell>
                <strong>Price</strong>
                </TableCell>
                <TableCell>
                <strong>Collect</strong>
                </TableCell> */}
                <TableCell>
                <strong>StartDate</strong>
                </TableCell>
                <TableCell>
                <strong>End Date</strong>
                </TableCell>
                <TableCell>
                <strong>Status</strong>
                </TableCell>
                <TableCell>
                <strong>Bills</strong>
                </TableCell>
                {/* <TableCell>
                <strong>Created At</strong>
                </TableCell> */}
                <TableCell>
                <strong>Actions</strong>
                </TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {dataSource?.map((booking: any) => (
                <TableRow key={booking._id} hover>
                <TableCell>{booking.staff?.name || "N/A"}</TableCell>
                <TableCell>{`${booking.customer?.firstName || ""} ${
                  booking.customer?.lastName || ""
                }`}</TableCell>
                <TableCell>{booking.property?.title || "N/A"}</TableCell>
                <TableCell>{booking.country}</TableCell>
                {/* <TableCell>{booking.commission}%</TableCell>
                <TableCell>
                 $ {booking.property ? booking.property.price : ""} 
                </TableCell>
                <TableCell>
                 $ {(booking.commission*booking.property.price/100)} 
                </TableCell> */}

                <TableCell>
                  {booking.startDate
                  ? new Date(booking.startDate).toLocaleDateString("en-GB")
                  : "N/A"}
                </TableCell>
                {/* <TableCell>
                  {booking.endDate
                  ? new Date(booking.endDate).toLocaleDateString("en-GB")
                  : "N/A"}
                </TableCell> */}

                   <TableCell>
                              {booking.status === "draft" ?
                              <>
                                    {booking?.endDate ? 
                                      (() => {
                                        const today = new Date();
                                        const endDate = new Date(booking.endDate);
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
                                    </> 
                                    :
                                    <>
                                    {booking?.endDate 
                                      ? new Date(booking.endDate).toLocaleDateString("en-GB") 
                                      : "N/A"}
                                  </>
                                  }



                                  </TableCell>

                <TableCell>
                  <Chip
                  className={`cursor-pointer ${getStatusColor(booking?.status)}`}
                  onClick={() => handleStatusClick(booking)}
                  label={booking.status}
                  color={
                    booking.status === "confirmed"
                    ? "success"
                    : booking.status === "cancelled"
                    ? "error"
                    : "default"
                  }
                  size="small"
                  />
                </TableCell>
                <TableCell>
                <Chip
                  label={booking.bills}
                  color={
                    booking.bills === "paid"
                    ? "success"
                    : booking.bills === "not paid"
                    ? "error"
                    : "default"
                  }
                  size="small"
                  />
                </TableCell>
                {/* <TableCell>
                  {new Date(booking.createdAt).toLocaleDateString("en-GB")}
                </TableCell> */}
                <TableCell>
                  <Stack direction="row" spacing={1}>
                  <IconButton
                    onClick={() =>
                    router.push(`/admin/booking/${booking._id}`)
                    }
                  >
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(booking._id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                  </Stack>
                </TableCell>
                </TableRow>
              ))}

              {!data && !error && (
                <TableRow>
                <TableCell colSpan={8} align="center">
                  Loading...
                </TableCell>
                </TableRow>
              )}
              {error && (
                <TableRow>
                <TableCell colSpan={8} align="center">
                  Error loading bookings
                </TableCell>
                </TableRow>
              )}
              {dataSource?.length === 0 && (
                <TableRow>
                <TableCell colSpan={8} align="center">
                  No bookings found
                </TableCell>
                </TableRow>
              )}
              </TableBody>
            </Table>
            </Box>

          {dataSource?.length > 0 && (
            <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          )}
        </Paper>




              <Dialog 
        open={statusDialog.open} 
        onClose={() => setStatusDialog({ open: false, id: '', currentStatus: '' })}
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
              <MenuItem className="flex flex-col" value="draft">Draft</MenuItem>
              <MenuItem className="flex flex-col" value="pending">Pending</MenuItem>
              <MenuItem className="flex flex-col" value="confirmed">Confirmed</MenuItem>
              <MenuItem className="flex flex-col" value="cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setStatusDialog({ open: false, id: '', currentStatus: '' })}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>


      </PageLayout>
    </AdminMainLayout>
  );
}
