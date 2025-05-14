import { useState } from "react";
import { useRouter } from "next/router";
import useCustomers from "@/hooks/useCustomers";
import useAuth from "@/hooks/useAuth";
import { PageLayout } from "@/layouts";
 import StaffMainLayout from "@/components/Site/dashboardLayout/staffLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Paper,
  TableContainer,
  Pagination,
  IconButton,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { DeleteIcon, EyeIcon, EditIcon } from "@/components/icons";
import Link from "next/link";
import { message } from "antd";
import axios from "axios";
import NotFound from "@/pages/404";

import { uploadApi } from "@/utils/global";


export default function StaffCustomers() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  // Auth check - moved hooks before conditional
  const { user } = useAuth({
    redirectTo: '/auth/login',
    redirectIfFound: false,
  });

  const { data, isLoading, mutate } = useCustomers({ 
    page,
    search 
  });

  console.log("dataXXXXXXXXXXX",data);

  // Move the auth check here, after all hooks
  if (!user || (user.role !== "staff" && user.role !== "admin")) {
    return <NotFound />;
  }

  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };

  const handleDelete = (id: string) => {
    if (!id) return;
    if (!confirm("Are you sure you want to delete this customer?")) return;
    
    axios.delete(`/api/customer/${id}`)
      .then((res) => {
        message.success("Customer deleted successfully");
        mutate();
      })
      .catch((err) => {
        message.error("Something went wrong");
        console.log(err);
      });
  };





  // Use the URL in an API call
fetch(`${uploadApi}/api/upload`)
.then(response => response.json())
.then(data => console.log(data));
console.log("uploadApi", uploadApi);


  return (
    <StaffMainLayout>
      <PageLayout title="Customers">
        <div className="p-20">
          <Typography
            variant="h4"
            align="start"
            gutterBottom
            style={{ marginBottom: "40px" }}
          >
            {user.role === "staff" ?"My Customers" : "All Customers"}
            
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label="Search customers..."
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Link href="/staff/customers/create">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mb-4">
                  Add New Customer
                </button>
              </Link>

              <TableContainer component={Paper}>
                <Table aria-label="Customers table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Created Date</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.customers?.map((customer: any) => (
                      <TableRow key={customer._id}>
                        <TableCell>
                          {customer.firstName} {customer.lastName}
                        </TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.phone}</TableCell>
                        <TableCell>
                          {new Date(customer.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          {/* <IconButton>
                            <Link href={`/staff/customers/${customer._id}`}>
                              <EyeIcon size={20} fill="#29221f" />
                            </Link>
                          </IconButton> */}
                          <IconButton>
                            <Link href={`/staff/customers/${customer._id}/edit`}>
                              <EditIcon size={20} fill="#c45e4c" />
                            </Link>
                          </IconButton>
                          <IconButton onClick={() => handleDelete(customer._id)}>
                            <DeleteIcon size={20} fill="#c45e4c" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px"
                }}>
                  <Pagination
                    count={data?.pages || 1}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                  />
                </Box>
              </TableContainer>
            </Grid>
          </Grid>
        </div>
      </PageLayout>
    </StaffMainLayout>
  );
} 