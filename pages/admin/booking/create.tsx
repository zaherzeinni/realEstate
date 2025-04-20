import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { PageLayout } from "@/layouts";
import AdminMainLayout from "@/components/Site/dashboardLayout";
import { Grid, Button, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import useCountries from "@/hooks/useCountries";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function CreateBooking() {
  const router = useRouter();
  const { data: countries } = useCountries();

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [commission, setCommission] = useState("");
  const [status, setStatus] = useState("pending");
  const [bills, setBills] = useState("in process");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(addDays(new Date(), 7));

  const { data: properties } = useSWR(
    selectedCountry ? `/api/book/country?country=${selectedCountry}` : null,
    fetcher
  );

  // console.log(properties, "properties");

  const { data: staffList } = useSWR("/api/staff", fetcher);
  const { data: customers } = useSWR(
    selectedStaff ? `/api/customer?staff=${selectedStaff}` : null,
    fetcher
  );

  useEffect(() => {
    setSelectedProperty("");
  }, [selectedCountry]);

  useEffect(() => {
    setSelectedCustomer("");
  }, [selectedStaff]);

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
      await axios.post("/api/bookings", {
        property: selectedProperty,
        staff: selectedStaff,
        customer: selectedCustomer,
        commission: parseFloat(commission),
        bills,
        status,
        country: selectedCountry,
        startDate,
        endDate,
      });
      router.push("/admin/booking");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminMainLayout>
      <PageLayout title="Create Booking">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} marginTop={10}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Country</InputLabel>
                <Select
                  value={selectedCountry}
                  label="Country"
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <MenuItem dir="ltr" value="">Select Country</MenuItem>
                  {countries?.map((country: any) => (
                    <MenuItem dir="ltr" key={country._id} value={country.title}>
                      {country.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required disabled={!selectedCountry}>
                <InputLabel>Property</InputLabel>
                <Select
                  value={selectedProperty}
                  label="Property"
                  onChange={(e) => setSelectedProperty(e.target.value)}
                >
                  <MenuItem dir="ltr" value="">Select Property</MenuItem>
                  {properties?.books?.map((property: any) => (
                    <MenuItem dir="ltr" key={property._id} value={property._id}>
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
                  <MenuItem dir="ltr" value="">Select Staff</MenuItem>
                  {staffList?.staffs?.map((staff: any) => (
                    <MenuItem dir="ltr" key={staff._id} value={staff._id}>
                      {staff.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required disabled={!selectedStaff}>
                <InputLabel>Customer</InputLabel>
                <Select
                  value={selectedCustomer}
                  label="Customer"
                  onChange={(e) => setSelectedCustomer(e.target.value)}
                >
                  <MenuItem dir="ltr" value="">Select Customer</MenuItem>
                  {customers?.customers?.map((customer: any) => (
                    <MenuItem dir="ltr" key={customer._id} value={customer._id}>
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
                  <MenuItem dir="ltr" value="pending">Pending</MenuItem>
                  <MenuItem dir="ltr" value="confirmed">Confirmed</MenuItem>
                  <MenuItem dir="ltr" value="cancelled">Cancelled</MenuItem>
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
                  minDate={new Date()}
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
                  minDate={startDate || new Date()}
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
              <Button type="submit" variant="contained" color="primary">
                Create Booking
              </Button>
            </Grid>
          </Grid>
        </form>
      </PageLayout>
    </AdminMainLayout>
  );
}