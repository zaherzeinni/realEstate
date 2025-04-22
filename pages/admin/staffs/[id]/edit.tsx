import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { TextInput } from "@/components/inputs";
import { PageLayout } from "@/layouts";
import AdminMainLayout from "@/components/Site/dashboardLayout";
import { Grid, Button, FormControl, InputLabel, Select, MenuItem, Typography, FormControlLabel, Checkbox, Box, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import useCountries from "@/hooks/useCountries";
import { message } from "antd";


export default function EditStaff() {
  const router = useRouter();
  const { id } = router.query;
  const { data: countries, isLoading: countriesLoading } = useCountries();
 
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({ open: false, message: '', severity: 'success' });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    phone: "",
    country: "",
    status: "",
    joinDate: "",

  });



  useEffect(() => {
    if (id) {
      fetchStaffData();
    }
  }, [id]);

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const fetchStaffData = async () => {
    try {
      const { data } = await axios.get(`/api/staff/${id}`);
      const staff = data.staff;
      
      setFormData({
        name: staff.name,
        email: staff.email,
        position: staff.position || "",
        department: staff.department || "",
        phone: staff.phone || "",
        country: staff.country?._id || "",
        status: staff.status || "active",
        joinDate: staff.joinDate ? staff.joinDate.split('T')[0] : "",
   
      });
      

    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error fetching staff data",
        severity: 'error'
      });
      router.push("/admin/staffs");
    }
  };




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/staff/${id}`, {
        ...formData,
   
      });
      setSnackbar({
        open: true,
        message: "Staff updated successfully",
        severity: 'success'
      });
      router.push("/admin/staffs");
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error updating staff",
        severity: 'error'
      });
    }
  };

  return (
    <AdminMainLayout>
      <PageLayout title="Edit Staff">
        <h1 className="text-2xl font-bold my-10">Edit Staff</h1>
        <form onSubmit={handleSubmit} >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextInput
                required
                label="Name"
                value={formData.name}
                onChange={(value) => setFormData({...formData, name: value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                required
                type="email"
                label="Email"
                value={formData.email}
                onChange={(value) => setFormData({...formData, email: value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                label="Phone"
                value={formData.phone}
                onChange={(value) => setFormData({...formData, phone: value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Country</InputLabel>
                <Select
                  value={formData.country}
                  label="Country"
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                >
                  {countriesLoading ? (
                    <MenuItem disabled>Loading...</MenuItem>
                  ) : (
                    countries?.map((country: any) => (
                      <MenuItem key={country._id} value={country._id}>
                        {country?.title}
                      </MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                label="Position"
                value={formData.position}
                onChange={(value) => setFormData({...formData, position: value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                label="Department"
                value={formData.department}
                onChange={(value) => setFormData({...formData, department: value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                type="date"
                label="Join Date"
                value={formData.joinDate}
                onChange={(value) => setFormData({...formData, joinDate: value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={formData.status}
                  label="Status"
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
           
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Update Staff
              </Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </PageLayout>
    </AdminMainLayout>
  );
}