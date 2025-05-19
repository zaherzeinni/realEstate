import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import Booking from "@/models/booking";
import Customer from "@/models/customer";
import auth from "@/utils/auth";
import mongoose from "mongoose";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const user = req.user;

  if (!user || user.role !== "admin") {
    return res.status(403).json({ success: false, message: "Unauthorized" });
  }

  switch (req.method) {
    case "GET":
      try {
        const { page = 1, limit = 10, search = "", country = "" } = req.query;
        const pageNumber = parseInt(page as string, 10);
        const limitNumber = parseInt(limit as string, 10);
        const skip = (pageNumber - 1) * limitNumber;

        // Build query
        let query: any = {};
        
        // Update country filter to be case-insensitive
        if (country && country !== "") {
          query.country = new RegExp(`^${country}$`, 'i'); // Exact match but case insensitive
        }
        
        // First, get total count with the country filter
        const totalDocuments = await Booking.countDocuments(query);
        
        // Then fetch the bookings with population
        let bookings;
        
        if (search) {
          // If there's a search term, we need to fetch all matching documents first
          // and then filter them in memory after population
          const allBookings = await Booking.find(query) // Use query here instead of baseQuery
            .populate("property", "title country price")
            .populate("staff", "name phone email")
            .populate("customer", "firstName lastName")
            .sort({ createdAt: -1 });
            
          // Filter in memory after population
          const searchRegex = new RegExp(String(search), 'i');
          const filteredBookings = allBookings.filter((booking: any) => {
            const propertyMatch = booking.property?.title?.match(searchRegex);
            const customerName = `${booking.customer?.firstName || ''} ${booking.customer?.lastName || ''}`.trim();
            const customerMatch = customerName.match(searchRegex);
            const staffMatch = booking.staff?.name?.match(searchRegex);
            
            return propertyMatch || customerMatch || staffMatch;
          });
          
          // Apply pagination in memory
          const startIndex = skip;
          const endIndex = startIndex + limitNumber;
          bookings = filteredBookings.slice(startIndex, endIndex);
          
          // Adjust total pages based on filtered results
          const filteredTotal = filteredBookings.length;
          const totalPages = Math.ceil(filteredTotal / limitNumber);


          
          
          return res.status(200).json({ 
            success: true, 
            bookings,
            page: pageNumber,
            limit: limitNumber,
            totalPages,
            totalDocuments: filteredTotal
          });
        } else {
          // If no search term, use regular pagination with the database
          bookings = await Booking.find(query)
            .populate("property", "title country price")
            .populate("staff", "name phone email")
            .populate("customer", "firstName lastName")
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limitNumber)
            .select("property staff customer country commission bills status startDate endDate datePaid createdAt");
            
          const totalPages = Math.ceil(totalDocuments / limitNumber);

         
          
          return res.status(200).json({ 
            success: true, 
            bookings,
            page: pageNumber,
            limit: limitNumber,
            totalPages,
            totalDocuments
          });
        }
      } catch (error) {
        console.error("Booking list error:", error);
        return res.status(500).json({ success: false, error: (error as Error).message });
      }

    case "POST":
      try {
        const { property, staff, customer, commission,bills, status, country, startDate, endDate,datePaid } = req.body;
        console.log(req.body, "req.body🧑‍💻⚠️🧑‍💻⚠️");
        // Validate required fields   i delete the || !customer 
        if (!property || !staff    || !commission || !country || !startDate || !endDate) {
          return res.status(400).json({ 
            success: false, 
            error: "Missing required fields. Property, staff, customer, commission, country, startDate, and endDate are required." 
          });
        }

        // Validate dates
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        const datePaidObj = new Date(datePaid);
        
        if (isNaN(startDateObj.getTime()) || isNaN(endDateObj.getTime())) {
          return res.status(400).json({
            success: false,
            error: "Invalid date format for startDate or endDate"
          });
        }
        
        if (endDateObj < startDateObj) {
          return res.status(400).json({
            success: false,
            error: "End date cannot be before start date"
          });
        }

        if (datePaidObj < startDateObj) {
          return res.status(400).json({
            success: false,
            error: "Date paid cannot be before start date"
          });
        }

        // Create booking with validated data
        const booking = await Booking.create({
          property,
          staff,
          customer : customer || null,
          commission: Number(commission),
          bills: bills || "in process",
          status: status || "pending",
          country: country.trim(),
          startDate: startDateObj,
          endDate: endDateObj,
          datePaid: datePaidObj
        });

        // Populate the created booking with related data
        const populatedBooking = await Booking.findById(booking._id)
          .populate("property", "title country price")
          .populate("staff", "name phone email")
          .populate("customer", "firstName lastName");

        return res.status(201).json({ 
          success: true, 
          booking: populatedBooking,
          message: "Booking created successfully"
        });

      } catch (error) {
        console.error("Create booking error:", error);
        return res.status(400).json({ 
          success: false, 
          error: (error as Error).message || "Error creating booking"
        });
      }

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default auth(handler);