import useSWR from "swr";
// it was a booking list instead of accounting list
// ----------------------------------ACCOUNTING PAGE----------------------------------

import { PageLayout } from "@/layouts";
 import StaffMainLayout from "@/components/Site/dashboardLayout/staffLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Chip,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import useCountries from "@/hooks/useCountries";

const fetcher = (url: string) => axios.get(url).then(({ data }) => data.bookings);





export default function StaffBookings() {
  const { data: bookings, error } = useSWR("/api/staff/bookings", fetcher);

  
  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'confirmed':
        return 'text-green-500 bg-green-100';
      case 'pending':
        return 'text-yellow-500 bg-yellow-100';
      case 'cancelled':
        return 'text-white bg-red-600';
        case 'reserved':
          return 'text-white bg-gray-200';
      default:
        return 'text-gray-500';
    }
  };



    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [dataSource, setDataSource] = useState([]);
  const [limit] = useState(10);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page when searching
  };

  const { data: countriesData } = useCountries();
  const { data, mutate } = useSWR(
    `/api/bookings?page=${page}&limit=${limit}&search=${search}`,
    fetcher
  );

  useEffect(()=>{
    if (data &&  data.bookings ){
      console.log("bookings: ", data.bookings)
      setDataSource(data.bookings)
    }

  }, [data])
  
  const totalPages = data?.totalPages || 1;


  return (
    <StaffMainLayout>
      <PageLayout title="Accounting" description="View and manage your bookings.">
        
              
              
                {/* --------------filter---------------------- */}
                <div className="mt-10">
                  <Paper elevation={2} sx={{ mb: 3, p: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} md={5}>
                        <TextField
                          fullWidth
                          label="Search by Bills"
                          variant="outlined"
                          value={search}
                          onChange={handleSearch}
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <Button
                          fullWidth
                          variant="outlined"
                          onClick={() => {
                            setSearch("");
                            setPage(1);
                          }}
                        >
                          Clear Filters
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </div>



                
        <Paper elevation={2} className="mt-20">
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" className="text-2xl  font-bold">Accounting</Typography>
          </Box>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: (theme) => theme.palette.grey[200] }}>
                <TableCell><strong>Staff</strong></TableCell>
                <TableCell><strong>Customer</strong></TableCell>
                <TableCell><strong>Property</strong></TableCell>
                <TableCell><strong>Price</strong></TableCell>
                <TableCell><strong>Commission</strong></TableCell>
                <TableCell><strong>Collect</strong></TableCell>
                <TableCell><strong>Start Date</strong></TableCell>
                <TableCell><strong>End Date</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Bills</strong></TableCell>
                <TableCell><strong>Date Paid</strong></TableCell>
                {/* <TableCell><strong>Created At</strong></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings?.map((booking: any) => (
                <TableRow key={booking._id} hover>
                   <TableCell>{booking?.staff?.name || 'N/A'}</TableCell>
                            <TableCell>{`${booking.customer?.firstName || ""} ${
                                     booking.customer?.lastName || ""
                                   }`}</TableCell>
                  <TableCell>{booking.property?.title || "N/A"}</TableCell>
                  <TableCell>$ {booking.property?.price}</TableCell>
                  <TableCell>{booking.commission} %</TableCell>
                  <TableCell>$ {(booking?.commission*booking?.property?.price/100)} </TableCell>
                  <TableCell>{booking.startDate ? new Date(booking.startDate).toLocaleDateString('en-GB') : "N/A"}</TableCell>
                  <TableCell>{booking.endDate ? new Date(booking.endDate).toLocaleDateString('en-GB') : "N/A"}</TableCell>
                  
                  
                  <TableCell>
                                  <Chip
                                  className={`cursor-pointer1 ${getStatusColor(booking?.status)}`}
                                  // onClick={() => handleStatusClick(booking)}
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



                <TableCell>{booking.datePaid ? new Date(booking.datePaid).toLocaleDateString('en-GB') : ""}</TableCell>


                </TableRow>
              ))}
              {!bookings && !error && (
                <TableRow>
                  <TableCell colSpan={5} align="center">Loading...</TableCell>
                </TableRow>
              )}
              {error && (
                <TableRow>
                  <TableCell colSpan={5} align="center">Error loading bookings</TableCell>
                </TableRow>
              )}
              {bookings?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">No bookings found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      </PageLayout>
    </StaffMainLayout>
  );
}