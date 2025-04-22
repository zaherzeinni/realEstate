// pages/admin/staff/create.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TextInput, SelectInput } from "@/components/inputs";
import { PageLayout } from "@/layouts";
import AdminMainLayout from "@/components/Site/dashboardLayout";
import { Grid, Button, FormControl, InputLabel, Select, MenuItem, Typography, FormControlLabel, Checkbox, Box } from "@mui/material";
import axios from "axios";
import useCountries from "@/hooks/useCountries";


import { message, Upload } from "antd";
import { uploadApi } from "@/utils/global";



export default function CreateStaff() {


  const router = useRouter();
  const { data: countries, isLoading: countriesLoading } = useCountries();
  const [files, setFiles] = useState([]);
  
  const [staffData, setStaffData] = useState({
    name: "",
    email: "",
    password: "",
    position: "",
    department: "",
    phone: "",
    country: countries?.[0]?._id || "",
    status: "active",
    joinDate: "",
    image: "",
  });

// -------------for uploading images------------------




  const handleUploadImages = async (filesArray: any) => {
    try {
      const formData = new FormData();
      filesArray.forEach((image: any) => {
        formData.append("images", image);
      });

      const response = await axios.post(
        `${uploadApi}/file/uploads?size=600&hieghtsize=800`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response?.data?.files;
    } catch (error) {
      console.error("Error uploading files:", error);
      return [];
    }
  };

  const handleSubmit = async  (e: React.FormEvent)  => {
    e.preventDefault();
    try {
      message.loading("Creating staff...");
      let imageUrl = "";
      if (files.length > 0) {
        const uploadedImages = await handleUploadImages(files);
        imageUrl = uploadedImages[0];
      }





      const data = {
        ...staffData,
        // userId: selectedStaff ? selectedStaff._id : user._id,
        image: imageUrl,
      };

      console.log("staff data: ", data);
      await axios.post("/api/staff", data);
      message.success("staff created successfully");
      router.push("/admin/staffs");
    } catch (error) {
      message.error("Error creating staff");
      console.error(error);
    }
  };






  return (
    <AdminMainLayout>
      <PageLayout title="Add New Staff">
      <h1 className="text-2xl font-bold my-10">Add New Staff</h1>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextInput
                required
                label="Name"
                value={staffData.name}
                onChange={(value) => setStaffData({...staffData, name: value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                required
                type="email"
                label="Email"
                value={staffData.email}
                onChange={(value) => setStaffData({...staffData, email: value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                required
                type="password"
                label="Password"
                value={staffData.password}
                onChange={(value) => setStaffData({...staffData, password: value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                label="Phone"
                value={staffData.phone}
                onChange={(value) => setStaffData({...staffData, phone: value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Country</InputLabel>
                <Select
                  value={staffData.country}
                  label="Country"
                  onChange={(e) => setStaffData({...staffData, country: e.target.value})}
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
                value={staffData.position}
                onChange={(value) => setStaffData({...staffData, position: value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                label="Department"
                value={staffData.department}
                onChange={(value) => setStaffData({...staffData, department: value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                type="date"
                label=""
                value={staffData.joinDate}
                onChange={(value) => setStaffData({...staffData, joinDate: value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={staffData.status}
                  label="Status"
                  onChange={(e) => setStaffData({...staffData, status: e.target.value})}
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
    

         <Grid item xs={12}>
                  <Upload
                    accept="image/*"
                    beforeUpload={(file) => {
                      setFiles((prev) => [...prev, file]);
                      return false;
                    }}
                    listType="picture-card"
                    onRemove={(file) => {
                      setFiles((prev) => {
                        const index = prev.indexOf(file);
                        const newFileList = prev.slice();
                        newFileList.splice(index, 1);
                        return newFileList;
                      });
                    }}
                  >
                    Upload Image
                  </Upload>
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