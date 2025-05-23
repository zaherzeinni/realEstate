import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { TextInput } from "@/components/inputs";
import { PageLayout } from "@/layouts";
import AdminMainLayout from "@/components/Site/dashboardLayout";
import { Grid, Button, FormControl, InputLabel, Select, MenuItem, Typography, FormControlLabel, Checkbox, Box, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import useCountries from "@/hooks/useCountries";
import { message, Upload } from "antd";
import { ImageEndpoint, uploadApi } from "@/utils/global";
import { MdDeleteForever } from "react-icons/md";


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
    image: "",
  });

  const [files, setFiles] = useState([]);

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
        image: staff.image || "",
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




  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     await axios.put(`/api/staff/${id}`, {
  //       ...formData,
  //       image: files.length > 0 ? files[0] : formData.image,
   
  //     });
  //     setSnackbar({
  //       open: true,
  //       message: "Staff updated successfully",
  //       severity: 'success'
  //     });
  //     router.push("/admin/staffs");
  //   } catch (error) {
  //     setSnackbar({
  //       open: true,
  //       message: "Error updating staff",
  //       severity: 'error'
  //     });
  //   }
  // };




   const handleUploadImages = async (filesArray: any) => {
      try {
        const formData = new FormData();
        filesArray.forEach((image: any) => {
          formData.append("files", image);
        });
  
        const response = await axios.post(
          `${uploadApi}/api/upload?size=600&hieghtsize=800`,
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
  
    const handleDeleteImage = async (fileName: string) => {
      try {
        await axios.delete(`${uploadApi}/file/delete?fileName=${fileName}`);
        setFormData(prev => ({ ...prev, image: "" }));
        message.success("Image deleted successfully");
      } catch (error) {
        console.error("Error deleting image:", error);
        message.error("Error deleting image");
      }
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        message.loading("Updating customer...");
  
        let imageUrl = formData.image;
        if (files.length > 0) {
          const uploadedImages = await handleUploadImages(files);
            imageUrl = uploadedImages[0];
        }
        
        const data = {
          ...formData,
          // userId: user._id,
          image: imageUrl,
        };
  
        await axios.put(`/api/staff/${id}`, data);
        message.success("staff updated successfully");
        router.push("/admin/staffs");
      } catch (error) {
        message.error("Error updating staff");
        console.error(error);
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
                label=""
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
                         {formData.image && (
                           <div className="relative inline-block">
                             <img
                               src={`${ImageEndpoint}/${formData.image}`}
                               alt="Customer"
                               className="w-32 h-32 rounded-full object-cover"
                             />
                             <button
                               type="button"
                               onClick={() => handleDeleteImage(formData.image)}
                               className="absolute -top-2 -right-2 text-red-600"
                             >
                               <MdDeleteForever className="w-6 h-6" />
                             </button>
                           </div>
                         )}
       
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