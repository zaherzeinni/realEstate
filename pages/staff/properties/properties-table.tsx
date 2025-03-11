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
      case 'confirmed':
        return 'text-green-500';
      case 'pending':
        return 'text-yellow-500';
      case 'cancelled':
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
    { status: 'pending', label: 'Pending', color: 'bg-yellow-100 border-yellow-500' },
    { status: 'confirmed', label: 'Confirmed', color: 'bg-green-100 border-green-500' },
    { status: 'cancelled', label: 'Cancelled', color: 'bg-red-100 border-red-500' },
    { 
      status: '', 
      label: 'All Bookings', 
      color: 'bg-blue-100 border-blue-500',
      count: statusCounts ? 
        (statusCounts.pending || 0) + 
        (statusCounts.confirmed || 0) + 
        (statusCounts.cancelled || 0) : 0
    }
  ];

  return (
    <StaffMainLayout>
    <PageLayout title="Properties Table View">
      <div dir="ltr" className="container mx-auto px-4 py-8">
        {/* Status Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6">
          {statusCards.map(({ status, label, color, count }) => (
            <div
              key={status || 'all'}
              onClick={() => handleStatusCardClick(status)}
              className={`cursor-pointer border rounded-lg p-2 sm:p-4 ${color} ${
                filters.status === status ? 'ring-2 ring-offset-2' : ''
              }`}
            >
              <h3 className="text-sm sm:text-lg font-semibold">{label}</h3>
              <p className="text-lg sm:text-2xl font-bold">
                {count !== undefined ? count : (statusCounts && statusCounts[status] ? statusCounts[status] : 0)}
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
                <TableCell>Customer</TableCell>
                <TableCell>Staff</TableCell>
                <TableCell>Date Range</TableCell>
                <TableCell>Remaining Time</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {properties?.map((property: any) => (
                <TableRow key={property._id}>
                  <TableCell>{property.title}</TableCell>
                  <TableCell>${property.price?.toLocaleString()}</TableCell>
                  <TableCell>{property.type}</TableCell>
                  <TableCell>{property.city}</TableCell>
                  <TableCell>{property.booking?.customer?.firstName } {property.booking?.customer?.lastName || 'N/A'}</TableCell>
                  <TableCell>{property.booking?.staff?.name || 'N/A'}</TableCell>
                  <TableCell>
                    {property.booking?.startDate && property.booking?.endDate ? 
                      `${new Date(property.booking.startDate).toLocaleDateString('en-GB')} - 
                       ${new Date(property.booking.endDate).toLocaleDateString('en-GB')}` : 
                      'N/A'}
                  </TableCell>
                  <TableCell>
                    {property.booking?.endDate ? 
                      (() => {
                        const today = new Date();
                        const endDate = new Date(property.booking.endDate);
                        const diffTime = endDate.getTime() - today.getTime();
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        
                        if (diffDays < 0) {
                          return <span className="text-green-500">Commission Due</span>;
                        } else if (diffDays === 0) {
                          return <span className="text-orange-500">Due Today</span>;
                        } else {
                          return <span className="text-blue-500">{diffDays} days remaining</span>;
                        }
                      })() : 
                      'N/A'}
                  </TableCell>
                  <TableCell>
                    <span 
                      className={`cursor-pointer ${getStatusColor(property.booking?.status)}`}
                      onClick={() => handleStatusClick(property)}
                    >
                      {property.booking?.status || 'N/A'}
                    </span>
                  </TableCell>
                  <TableCell>
                    {new Date(property.createdAt).toLocaleDateString('en-GB')}
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
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="confirmed">Confirmed</MenuItem>
              <MenuItem value="cancelled">Cancelled</MenuItem>
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