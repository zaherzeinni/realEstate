import { useState } from "react";
import { useRouter } from "next/router";
import useStaffs from "@/hooks/useStaffs";
import useCountries from "@/hooks/useCountries";
import { PageLayout } from "@/layouts";
import AdminMainLayout from "@/components/Site/dashboardLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Stack,
  Paper,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { message } from "antd";
import axios from "axios";

export default function StaffList() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    search: "",
    country: "",
  });

  const { staffs, isLoading, mutate } = useStaffs(filters);
  console.log(staffs, "staffs");
  const { data: countries } = useCountries();

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this staff member?")) {
      try {
        await axios.delete(`/api/staff/${id}`);
        message.success("Staff member deleted successfully");
        mutate();
      } catch (error) {
        message.error("Error deleting staff member");
      }
    }
  };

  return (
    <AdminMainLayout>
      <PageLayout
        title="Staff Management"
        action={
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/admin/staffs/create")}
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#115293',
              },
              fontWeight: 600,
              px: 3,
            }}
          >
            Create Staff
          </Button>
        }
      >
        {/* Filters Section */}
        <Box sx={{ mb: 3 }}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Filters
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Search"
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select
                    label="Country"
                    value={filters.country}
                    onChange={(e) =>
                      setFilters({ ...filters, country: e.target.value })
                    }
                  >
                    <MenuItem value="">All Countries</MenuItem>
                    {countries?.map((country: any) => (
                      <MenuItem key={country._id} value={country._id}>
                        {country.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => router.push("/admin/staffs/create")}
                  sx={{
                    backgroundColor: '#1976d2',
                    '&:hover': {
                      backgroundColor: '#115293',
                    },
                    fontWeight: 600,
                    px: 3,
                  }}
                >
                  Create Staff
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Staff Table Section */}
        <Paper elevation={2}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Staff List
            </Typography>
          </Box>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: (theme) => theme.palette.grey[200],
                }}
              >
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Photo</strong></TableCell>
                <TableCell><strong>Country</strong></TableCell>
                <TableCell><strong>Position</strong></TableCell>
                <TableCell><strong>Department</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staffs?.map((staff: any) => (
                <TableRow key={staff._id} hover>
                  <TableCell>{staff.name}</TableCell>
                  <TableCell>{staff.email}</TableCell>
                    <TableCell>
                      {staff.image !== "" && (
                    <img src={`https://dash93.nyc3.digitaloceanspaces.com/${staff.image}`} className="w-16 h-16 rounded-full   object-fill" />
                      )}
                    </TableCell>
                  <TableCell>
                    {staff.country?.title || "N/A"}
                  </TableCell>
                  <TableCell>{staff.position}</TableCell>
                  <TableCell>{staff.department}</TableCell>
                  <TableCell>
                    <Chip
                      label={staff.status}
                      color={
                        staff.status?.toLowerCase() === "active"
                          ? "success"
                          : "default"
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() =>
                          router.push(`/admin/staffs/${staff._id}/edit`)
                        }
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => handleDelete(staff._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
              {/* Loading or No Data */}
              {isLoading && (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    Loading...
                  </TableCell>
                </TableRow>
              )}
              {!isLoading && staffs?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No staff found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      </PageLayout>
    </AdminMainLayout>
  );
}
