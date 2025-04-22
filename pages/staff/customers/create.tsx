import { useState } from "react";
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { message } from "antd";
import axios from "axios";
import NotFound from "@/pages/404";
import { Upload } from "antd";
import { uploadApi } from "@/utils/global";

import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function CreateCustomer() {
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState({} as any);
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
    redirectTo: "/auth/login",
    redirectIfFound: false,
  });

  // if (!user || (user.role !== "staff")) {
  //   return <NotFound />;
  // }

  const { data: staffList } = useSWR("/api/staff", fetcher);

  const handleInputChange = (name: string, value: string) => {
    setCustomerData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      message.loading("Creating customer...");

      let imageUrl = "";
      if (files.length > 0) {
        const uploadedImages = await handleUploadImages(files);
        imageUrl = uploadedImages[0];
      }

      const data = {
        ...customerData,
        userId: selectedStaff ? selectedStaff._id : user._id,
        image: imageUrl,
      };

      await axios.post("/api/customer", data);
      message.success("Customer created successfully");
      router.push("/staff/customers");
    } catch (error) {
      message.error("Error creating customer");
      console.error(error);
    }
  };

  return (
    <StaffMainLayout>
      <PageLayout title="Create Customer">
        <div className="p-20">
          <Paper className="p-6">
            <Typography variant="h5" gutterBottom>
              Create New Customer
            </Typography>

            <form onSubmit={handleSubmit}>
              {user && user.role == "admin" ? (
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth required>
                      <InputLabel>Staff</InputLabel>
                      <Select
                        value={selectedStaff}
                        label="Staff"
                        onChange={(e) => setSelectedStaff(e.target.value)}
                      >
                        <MenuItem dir="ltr" value="">
                          Select Staff
                        </MenuItem>
                        {staffList?.staffs?.map((staff: any) => (
                          <MenuItem dir="ltr" key={staff._id} value={staff}>
                            {staff.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              ) : null}

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    required
                    value={customerData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    required
                    value={customerData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
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
                    Create Customer
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
