import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";
import { PageLayout } from "@/layouts";
import StaffMainLayout from "@/components/Site/dashboardLayout/staffLayout";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { message } from "antd";
import axios from "axios";
import NotFound from "@/pages/404";
import { Upload } from "antd";
import { ImageEndpoint, uploadApi } from "@/utils/global";
import { MdDeleteForever } from "react-icons/md";

export default function EditCustomer() {
  const router = useRouter();
  const { id } = router.query;
  const [files, setFiles] = useState([]);
  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    note: "",
    image: "",
  });

  // Auth check
  const { user } = useAuth({
    redirectTo: '/auth/login',
    redirectIfFound: false,
  });

  useEffect(() => {
    if (!id) return;
    axios.get(`/api/customer/${id}`).then((res) => {
      const { customer } = res.data;
      setCustomerData(customer);
    });
  }, [id]);

  // if (!user || ( user.role !== "staff")) {
  //   return <NotFound />;
  // }

  const handleInputChange = (name: string, value: string) => {
    setCustomerData(prev => ({
      ...prev,
      userId: user._id,
      [name]: value
    }));
    console.log(customerData, "customerData");
  };

  const handleUploadImages = async (filesArray: any) => {
    try {
      const formData = new FormData();
      filesArray.forEach((image: any) => {
        formData.append("images", image);
      });

      const response = await axios.post(
        // `${uploadApi}/file/uploads?size=600&heightsize=800`,
        `${uploadApi}/api/upload?size=600&heightsize=800`,
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
      setCustomerData(prev => ({ ...prev, image: "" }));
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

      let imageUrl = customerData.image;
      if (files.length > 0) {
        const uploadedImages = await handleUploadImages(files);
          imageUrl = uploadedImages[0];
      }
      
      const data = {
        ...customerData,
        userId: user._id,
        image: imageUrl,
      };

      await axios.put(`/api/customer/${id}`, data);
      message.success("Customer updated successfully");
      router.push("admin/staff/customers");
    } catch (error) {
      message.error("Error updating customer");
      console.error(error);
    }
  };

  return (
    <StaffMainLayout>
      <PageLayout title="Edit Customer">
        <div className="p-20">
          <Paper className="p-6">
            <Typography variant="h5" gutterBottom>
              Edit Customer
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    required
                    value={customerData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    required
                    value={customerData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    required
                    value={customerData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    required
                    value={customerData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Notes"
                    multiline
                    rows={4}
                    value={customerData.note}
                    onChange={(e) => handleInputChange("note", e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  {customerData.image && (
                    <div className="relative inline-block">
                      <img
                        src={`${ImageEndpoint}/${customerData.image}`}
                        alt="Customer"
                        className="w-32 h-32 rounded-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteImage(customerData.image)}
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
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Update Customer
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </div>
      </PageLayout>
    </StaffMainLayout>
  );
} 