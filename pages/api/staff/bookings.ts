// --------------------this is API for ACCOUNTING  STAFF PAGE (old name bookings)--------------------

import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import Booking from "@/models/booking";
import auth from "@/utils/auth";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const user = req.user;

  if (!user || (user.role !== "staff" && user.role !== "admin")) {
    return res.status(403).json({ success: false, message: "Unauthorized" });
  }

  switch (req.method) {
    case "GET":
      try {
      const query: { staff?: any; status?: any } = user.role === "admin" ? {} : { staff: user._id };
      
      // Add condition to exclude bookings with "draft" status
      query.status = { $ne: "draft" };
      
        const bookings = await Booking.find(query)
          .populate("property", "title price reference")
          .populate("customer")
          .populate("staff")
          .sort({ createdAt: -1 });
        
        // Format dates for consistent output
        const formattedBookings = bookings.map(booking => {
          const bookingObj = booking.toObject();
          return {
            ...bookingObj,
            startDate: booking.startDate,
            endDate: booking.endDate
          };
        });
        
        return res.status(200).json({ success: true, bookings: formattedBookings });
      } catch (error) {
        return res.status(500).json({ success: false, error: (error as Error).message });
      }

    default:
      res.setHeader("Allow", "GET");
      return res.status(405).send(`Method ${req.method} Not Allowed`);
  }
}

export default auth(handler);