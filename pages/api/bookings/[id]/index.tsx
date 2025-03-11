import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import Booking from "@/models/booking";
import auth from "@/utils/auth";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  await dbConnect();
  const user = req.user;

  if (!user) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const booking = await Booking.findById(id)
      .populate("property", "title country")
      .populate("staff", "name")
      .populate("customer", "firstName lastName");

    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }

    // Authorization: Admin or associated staff
    if (user.role !== "admin" && booking.staff._id.toString() !== user._id.toString()) {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }

    switch (req.method) {
      case "GET":
        return res.status(200).json({ success: true, booking });

      case "PUT":
        if (user.role !== "admin") {
          return res.status(403).json({ success: false, message: "Only admins can update bookings" });
        }
        const { commission, status, property, staff, customer, country, startDate, endDate } = req.body;

        // Validate dates if provided
        if (startDate && endDate) {
          const startDateObj = new Date(startDate);
          const endDateObj = new Date(endDate);
          
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
          
          booking.startDate = startDateObj;
          booking.endDate = endDateObj;
        } else if ((startDate && !endDate) || (!startDate && endDate)) {
          return res.status(400).json({
            success: false,
            error: "Both startDate and endDate must be provided together"
          });
        }

        booking.commission = commission ?? booking.commission;
        booking.status = status ?? booking.status;
        booking.property = property ?? booking.property;
        booking.staff = staff ?? booking.staff;
        booking.customer = customer ?? booking.customer;
        booking.country = country ?? booking.country;

        await booking.save();
        return res.status(200).json({ success: true, booking });

      case "DELETE":
        if (user.role !== "admin") {
          return res.status(403).json({ success: false, message: "Only admins can delete bookings" });
        }
        await Booking.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Booking deleted" });

      default:
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: (error as Error).message });
  }
}

export default auth(handler);