import { useState } from "react";
import { useRouter } from "next/router";
import useStaffProperties from "@/hooks/useStaffProperties";
import useAuth from "@/hooks/useAuth";
import { PageLayout } from "@/layouts";
//staff layout
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { message } from "antd";
import axios from "axios";
import Link from "next/link";

export default function StaffPropertiesTable() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    country: "",
    status: "",
  });
  const [statusDialog, setStatusDialog] = useState({
    open: false,
    propertyId: '',
    currentStatus: ''
  });

  // Auth check
  const { user, loading } = useAuth({
    redirectTo: '/auth/login',
    redirectIfFound: false,
  });

  if (user && user.role !== 'staff') {
    router.push('/');
    return null;
  }

  const { properties, statusCounts, isLoading, totalPages } = useStaffProperties({ 
    page,
    ...filters 
  });

  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };

  const handleStatusClick = (property: any) => {
    setStatusDialog({
      open: true,
      propertyId: property._id,
      currentStatus: property.status || 'pending'
    });
  };

  const handleStatusUpdate = async (newStatus: string) => {
    try {
      await axios.put(`/api/book/${statusDialog.propertyId}/status`, {
        status: newStatus
      });
      message.success("Status updated successfully");
      // Refresh the properties data
      router.replace(router.asPath);
      setStatusDialog({ open: false, propertyId: '', currentStatus: '' });
    } catch (error) {
      message.error("Error updating status");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'text-green-500';
      case 'pending':
        return 'text-yellow-500';
      case 'completed':
        return 'text-blue-500';
      case 'rejected':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const handleStatusCardClick = (status: string) => {
    setFilters(prev => ({ ...prev, status }));
    setPage(1);
  };

  const statusCards = [
    { status: 'active', label: 'Active', color: 'bg-green-100 border-green-500' },
    { status: 'pending', label: 'Pending', color: 'bg-yellow-100 border-yellow-500' },
    { status: 'completed', label: 'Completed', color: 'bg-blue-100 border-blue-500' },
    { status: 'rejected', label: 'Rejected', color: 'bg-red-100 border-red-500' },
  ];

  return (
    <StaffMainLayout>
    <PageLayout title="Properties Table View">
      <div dir="ltr" className="container mx-auto px-4 py-8">
        {/* Status Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6">
          {statusCards.map(({ status, label, color }) => (
            <div
              key={status}
              onClick={() => handleStatusCardClick(status)}
              className={`cursor-pointer border rounded-lg p-2 sm:p-4 ${color} ${
                filters.status === status ? 'ring-2 ring-offset-2' : ''
              }`}
            >
              <h3 className="text-sm sm:text-lg font-semibold">{label}</h3>
              <p className="text-lg sm:text-2xl font-bold">
                {statusCounts && statusCounts[status] ? statusCounts[status] : 0}
              </p>
            </div>
          ))}
        </div>

        {/* Clear filters button */}
        {filters.status && (
          <Button
            variant="outlined"
            className="mb-4"
            onClick={() => {
              setFilters(prev => ({ ...prev, status: '' }));
              setPage(1);
            }}
          >
            Clear Status Filter
          </Button>
        )}

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {properties?.map((property: any) => (
                <TableRow key={property._id}>
                  <TableCell>{property.title}</TableCell>
                  <TableCell>${property.price?.toLocaleString()}</TableCell>
                  <TableCell>{property.type}</TableCell>
                  <TableCell>{property.city}</TableCell>
                  <TableCell>
                    <span 
                      className={`cursor-pointer ${getStatusColor(property.status)}`}
                      onClick={() => handleStatusClick(property)}
                    >
                      {property.status || 'pending'}
                    </span>
                  </TableCell>
                  <TableCell>
                    {new Date(property.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="flex justify-center mt-4">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </div>
      </div>

      <Dialog 
        open={statusDialog.open} 
        onClose={() => setStatusDialog({ open: false, propertyId: '', currentStatus: '' })}
      >
        <DialogTitle>Update Status</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusDialog.currentStatus}
              label="Status"
              onChange={(e) => handleStatusUpdate(e.target.value)}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="rejected">Rejected</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setStatusDialog({ open: false, propertyId: '', currentStatus: '' })}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </PageLayout>
    </StaffMainLayout>




  );
} 