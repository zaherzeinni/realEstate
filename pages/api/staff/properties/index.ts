import auth from "@/utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import Book from "@/models/book";
import Booking from "@/models/booking";
import dbConnect from "@/utils/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const user = req.user;

  // Check if user is authenticated and is a staff member
  if (!user || user.role !== "staff" && user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Unauthorized access",
    });
  }

  switch (req.method) {
    case "GET":
      try {
        const {
          page = 1,
          limit = 10,
          search = "",
          country = "",
          type = "",
          status = "",
        } = req.query;

        const pageNumber = parseInt(page as string);
        const limitNumber = parseInt(limit as string);
        const skip = (pageNumber - 1) * limitNumber;

        // First, get all bookings for this staff member
        let bookingQuery: any = { staff: user._id || { admin: user._id } };

        // Add country filter if provided - using a "contains" approach
        if (country && country !== "") {
          bookingQuery.country = { $regex: country, $options: 'i' }; // Changed to contains match
        }

            // Add status filter if provided
        if (status && status !== "") {
          bookingQuery.status = status;
        } else {
          // Default to showing only "draft" status if no status is provided
          bookingQuery.status = { $in: ["pending", "reserved"] };
        }


        console.log("Booking query:", bookingQuery); // Log the query for debugging

        // Get all bookings for this staff to calculate status counts
        const allBookings = await Booking.find({ $or: [{ staff: user._id }, { admin: user._id }] });
        console.log("All Bookingsss:", allBookings);
        console.log("Booking Statuses:", allBookings.map(booking => booking.status));
        
        // Calculate status counts
        const statusCounts = {
          pending: allBookings.filter(booking => booking.status === 'pending').length,
          confirmed: allBookings.filter(booking => booking.status === 'confirmed').length,
          cancelled: allBookings.filter(booking => booking.status === 'cancelled').length,
          reserved: allBookings.filter(booking => booking.status === 'reserved').length
        };
        console.log("Status Countssss api:", statusCounts); // Log the counts for debugging

        // Get all booking IDs for this staff with the applied filters
        const bookings = await Booking.find(bookingQuery)
          .select('property country status bills commission startDate endDate datePaid')
          .populate({
            path: 'property',
            select: 'title titlefr type country city cityFr price details services image propertyId reference whatsapp video googleLink createdAt'
          })
          .populate({
            path: 'staff',
            select: 'name email'
          })
          .populate({
            path: 'customer',
            select: 'firstName lastName email phone'
          });

        console.log(`Found ${bookings.length} bookings with filter`); // Debug log

        // Extract unique properties from bookings and remove duplicates
        // And include the booking details with each property
        let properties = [...new Map(
          bookings
            .map(booking => ({
              ...booking.property.toObject(),
              booking: {
                status: booking.status,
                commission: booking.commission,
                bills: booking.bills,
                startDate: booking.startDate,
                endDate: booking.endDate,
                datePaid: booking.datePaid,
                _id: booking._id,
                staff: booking.staff,
                customer: booking.customer
              }
            }))
            .filter((property): property is any => property !== null)
            .map(property => [property._id, property])
        ).values()];

        // Apply search filter
        if (search) {
          const searchRegex = new RegExp(search, 'i');
          properties = properties.filter(property => 
            searchRegex.test(property.title) ||
            searchRegex.test(property.titlefr) ||
            searchRegex.test(property.city) ||
            searchRegex.test(property.cityFr) ||
            searchRegex.test(property.propertyId?.toString() || '') ||
            searchRegex.test(property.booking?.customer?.firstName.toString() || '') ||
            searchRegex.test(property.booking?.customer?.lastName.toString() || '') ||
            searchRegex.test(property.booking?.customer?.email.toString() || '') ||
            searchRegex.test(property.booking?.customer?.phone.toString() || '') ||
            searchRegex.test(property.reference?.toString() || '')
          );
        }

        // Apply type filter
        if (type) {
          properties = properties.filter(property => property.type === type);
        }

        // Calculate pagination
        const totalItems = properties.length;
        const totalPages = Math.ceil(totalItems / limitNumber) || 1; // Ensure at least 1 page

        // Apply pagination
        const paginatedProperties = properties.slice(skip, skip + limitNumber);

        return res.status(200).json({
          success: true,
          properties: paginatedProperties,
          statusCounts,
          currentPage: pageNumber,
          totalPages,
          totalItems,
        });

      } catch (error) {
        console.error("Error fetching staff properties:", error);
        return res.status(500).json({
          success: false,
          message: "Error fetching properties",
          error: process.env.NODE_ENV === "development" ? error : undefined,
        });
      }

    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).json({
        success: false,
        message: `Method ${req.method} Not Allowed`,
      });
  }
};

export default auth(handler);