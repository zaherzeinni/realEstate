import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { PageLayout } from "@/layouts";
import AdminMainLayout from "@/components/Site/dashboardLayout";
import { Grid, Button, FormControl, InputLabel, Select, MenuItem, TextField, Typography } from "@mui/material";
import axios from "axios";
import useCountries from "@/hooks/useCountries";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function EditBooking() {
  const router = useRouter();
  const { id } = router.query;
  const { data: booking, error: bookingError } = useSWR(id ? `/api/bookings/${id}` : null, fetcher);
  const { data: countries } = useCountries();

  console.log(booking, "booking");

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [commission, setCommission] = useState("");
  const [status, setStatus] = useState("draft");
  const [bills, setBills] = useState("in process");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { data: properties } = useSWR(
    selectedCountry ? `/api/book/country?country=${selectedCountry}` : null,
    fetcher,
    {
      keepPreviousData: true
    }
  );
  const { data: staffList } = useSWR("/api/staff", fetcher);
  const { data: customers } = useSWR(
    selectedStaff ? `/api/customer?staff=${selectedStaff}` : null,
    fetcher,
    {
      keepPreviousData: true
    }
  );

  useEffect(() => {
    if (booking) {
      setSelectedCountry(booking.booking.property.country);
      setSelectedProperty(booking.booking.property._id);
      setSelectedStaff(booking.booking.staff._id);
      if (booking.booking.customer) {
        setSelectedCustomer(booking.booking.customer._id);
      }
      setCommission(booking.booking.commission.toString());
      setStatus(booking.booking.status);
      setBills(booking.booking.bills);
      
      setStartDate(booking.booking.startDate ? new Date(booking.booking.startDate) : null);
      setEndDate(booking.booking.endDate ? new Date(booking.booking.endDate) : null);
    }
  }, [booking]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!startDate || !endDate) {
      alert("Start date and end date are required");
      return;
    }
    
    if (endDate < startDate) {
      alert("End date cannot be before start date");
      return;
    }
    
    try {
      await axios.put(`/api/bookings/${id}`, {
        property: selectedProperty,
        staff: selectedStaff,
        customer: selectedCustomer || null,
        commission: parseFloat(commission),
        bills,
        status,
        startDate,
        endDate,
      });
      router.push("/admin/booking");
    } catch (error) {
      console.error(error);
    }
  };

  if (bookingError) return <div>Error loading booking</div>;
  if (!booking) return <div>Loading...</div>;

  return (
    <AdminMainLayout>
      <PageLayout title="Edit Booking">
         <Typography variant="h6" className="text-2xl font-bold my-20">Edit Booking</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Country</InputLabel>
                <Select
                  value={selectedCountry}
                  label="Country"
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <MenuItem className="flex flex-col" value="">Select Country</MenuItem>
                  {countries?.map((country: any) => (
                    <MenuItem className="flex flex-col" key={country._id} value={country.title}>
                      {country.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Property</InputLabel>
                <Select
                  value={selectedProperty}
                  label="Property"
                  onChange={(e) => setSelectedProperty(e.target.value)}
                >
                  <MenuItem className="flex flex-col" value="">Select Property</MenuItem>
                  {properties?.books?.map((property: any) => (
                    <MenuItem className="flex flex-col" key={property._id} value={property._id}>
                      {property.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Staff</InputLabel>
                <Select
                  value={selectedStaff}
                  label="Staff"
                  onChange={(e) => setSelectedStaff(e.target.value)}
                >
                  <MenuItem value="">Select Staff</MenuItem>
                  {staffList?.staffs?.map((staff: any) => (
                    <MenuItem className="flex flex-col" key={staff._id} value={staff._id}>
                      {staff.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth >
                <InputLabel>Customer</InputLabel>
                <Select
                  value={selectedCustomer}
                  label="Customer"
                  onChange={(e) => setSelectedCustomer(e.target.value)}
                >
                  <MenuItem className="flex flex-col" value="">Select Customer</MenuItem>
                  {customers?.customers?.map((customer: any) => (
                    <MenuItem className="flex flex-col" key={customer._id} value={customer._id}>
                      {`${customer.firstName} ${customer.lastName}`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                type="number"
                label="Commission"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={status}
                  label="Status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem  dir="ltr" value="draft">Draft</MenuItem>
                  <MenuItem  dir="ltr" value="pending">Pending</MenuItem>
                  <MenuItem  dir="ltr" value="confirmed">Confirmed</MenuItem>
                  <MenuItem  dir="ltr" value="cancelled">Cancelled</MenuItem>
                </Select>
              </FormControl>
            </Grid>
                  <Grid item xs={12} md={6}>
                          <FormControl fullWidth>
                            <InputLabel>Bills</InputLabel>
                            <Select
                              value={bills}
                              label="bills"
                              onChange={(e) => setBills(e.target.value)}
                            >
                              <MenuItem dir="ltr" value="in process">In Process</MenuItem>
                              <MenuItem dir="ltr" value="paid">Paid</MenuItem>
                              <MenuItem dir="ltr" value="not paid">Not Paid</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel shrink>Start Date</InputLabel>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd/MM/yyyy"
                  customInput={
                    <TextField
                      fullWidth
                      label="Start Date"
                      variant="outlined"
                      required
                    />
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel shrink>End Date</InputLabel>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="dd/MM/yyyy"
             
                  customInput={
                    <TextField
                      fullWidth
                      label="End Date"
                      variant="outlined"
                      required
                      
                    />
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <button type="submit" className="primary-btn1 z-0" color="primary">
                Update Booking
              </button>
            </Grid>
          </Grid>
        </form>
      </PageLayout>
    </AdminMainLayout>
  );
}