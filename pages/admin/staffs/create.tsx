// pages/admin/staff/create.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import { TextInput, SelectInput } from "@/components/inputs";
import { PageLayout } from "@/layouts";
import AdminMainLayout from "@/components/Site/dashboardLayout";
import { Grid, Button, FormControl, InputLabel, Select, MenuItem, Typography, FormControlLabel, Checkbox, Box } from "@mui/material";
import axios from "axios";
import useCountries from "@/hooks/useCountries";


export default function CreateStaff() {
  const router = useRouter();
  const { data: countries, isLoading: countriesLoading } = useCountries();

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    position: "",
    department: "",
    phone: "",
    country: countries?.[0]?._id || "",
    status: "active",
    joinDate: "",
    
  });





  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/staff", {
        ...formData,
       
      });
      router.push("/admin/staffs");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminMainLayout>
      <PageLayout title="Add New Staff">
        <form onSubmit={handleSubmit}>
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
                required
                type="password"
                label="Password"
                value={formData.password}
                onChange={(value) => setFormData({...formData, password: value})}
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
                Add Staff
              </Button>
            </Grid>
          </Grid>
        </form>
      </PageLayout>
    </AdminMainLayout>
  );
}