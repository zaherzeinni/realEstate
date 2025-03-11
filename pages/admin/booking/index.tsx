import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { PageLayout } from "@/layouts";
import AdminMainLayout from "@/components/Site/dashboardLayout";
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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { message } from "antd";
import useCountries from "@/hooks/useCountries";

const fetcher = (url: string) => axios.get(url).then(({ data }) => data);

export default function BookingList() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [limit] = useState(10);
  const { data: countriesData } = useCountries();
 
  
  const { data, error, mutate } = useSWR(
    `/api/bookings?page=${page}&limit=${limit}&search=${search}&country=${country}`,
    fetcher
  );
  
  const bookings = data?.bookings || [];
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

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
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
                  <MenuItem value="">All Countries</MenuItem>
                  {countriesData?.map((country: any) => (
                    <MenuItem key={country.id} value={country.title}>
                      {country.title}
                    </MenuItem>
                  ))}
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

        <Paper elevation={2}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Booking List</Typography>
          </Box>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: (theme) => theme.palette.grey[200] }}>
                <TableCell><strong>Property</strong></TableCell>
                <TableCell><strong>Staff</strong></TableCell>
                <TableCell><strong>Customer</strong></TableCell>
                <TableCell><strong>Country</strong></TableCell>
                <TableCell><strong>Commission</strong></TableCell>
                <TableCell><strong>Start Date</strong></TableCell>
                <TableCell><strong>End Date</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Created At</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings?.map((booking: any) => (
                <TableRow key={booking._id} hover>
                  <TableCell>{booking.property?.title || "N/A"}</TableCell>
                  <TableCell>{booking.staff?.name || "N/A"}</TableCell>
                  <TableCell>{`${booking.customer?.firstName || ""} ${booking.customer?.lastName || ""}`}</TableCell>
                  <TableCell>{booking.country}</TableCell>
                  <TableCell>{booking.commission}</TableCell>
                  <TableCell>{booking.startDate ? new Date(booking.startDate).toLocaleDateString('en-GB') : "N/A"}</TableCell>
                  <TableCell>{booking.endDate ? new Date(booking.endDate).toLocaleDateString('en-GB') : "N/A"}</TableCell>
                  <TableCell>
                    <Chip
                      label={booking.status}
                      color={booking.status === "confirmed" ? "success" : booking.status === "cancelled" ? "error" : "default"}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{new Date(booking.createdAt).toLocaleDateString('en-GB')}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton onClick={() => router.push(`/admin/booking/${booking._id}`)}>
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
                  <TableCell colSpan={8} align="center">Loading...</TableCell>
                </TableRow>
              )}
              {error && (
                <TableRow>
                  <TableCell colSpan={8} align="center">Error loading bookings</TableCell>
                </TableRow>
              )}
              {bookings?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} align="center">No bookings found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          
          {bookings?.length > 0 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
              <Pagination 
                count={totalPages} 
                page={page} 
                onChange={handlePageChange} 
                color="primary" 
              />
            </Box>
          )}
        </Paper>
      </PageLayout>
    </AdminMainLayout>
  );
}