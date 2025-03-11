import useSWR from "swr";

import { PageLayout } from "@/layouts";
 import StaffMainLayout from "@/components/Site/dashboardLayout/staffLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then(({ data }) => data.bookings);

export default function StaffBookings() {
  const { data: bookings, error } = useSWR("/api/staff/bookings", fetcher);

  return (
    <StaffMainLayout>
      <PageLayout title="My Bookings">
        <Paper elevation={2}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Booking List</Typography>
          </Box>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: (theme) => theme.palette.grey[200] }}>
                <TableCell><strong>Property</strong></TableCell>
                <TableCell><strong>Customer</strong></TableCell>
                <TableCell><strong>Commission</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Start Date</strong></TableCell>
                <TableCell><strong>End Date</strong></TableCell>
                <TableCell><strong>Created At</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings?.map((booking: any) => (
                <TableRow key={booking._id} hover>
                  <TableCell>{booking.property?.title || "N/A"}</TableCell>
                  <TableCell>{`${booking.customer?.firstName || ""} ${booking.customer?.lastName || ""}`}</TableCell>
                  <TableCell>{booking.commission}</TableCell>
                  <TableCell>
                    <Chip
                      label={booking.status}
                      color={booking.status === "confirmed" ? "success" : booking.status === "cancelled" ? "error" : "default"}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{booking.startDate ? new Date(booking.startDate).toLocaleDateString('en-GB') : "N/A"}</TableCell>
                  <TableCell>{booking.endDate ? new Date(booking.endDate).toLocaleDateString('en-GB') : "N/A"}</TableCell>
                  <TableCell>{new Date(booking.createdAt).toLocaleDateString('en-GB')}</TableCell>
                </TableRow>
              ))}
              {!bookings && !error && (
                <TableRow>
                  <TableCell colSpan={5} align="center">Loading...</TableCell>
                </TableRow>
              )}
              {error && (
                <TableRow>
                  <TableCell colSpan={5} align="center">Error loading bookings</TableCell>
                </TableRow>
              )}
              {bookings?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">No bookings found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      </PageLayout>
    </StaffMainLayout>
  );
}