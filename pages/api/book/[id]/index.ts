import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import Booking from "@/models/booking";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { page = 1, limit = 10, search = "", status = "" } = req.query;

      const pageNumber = parseInt(page as string);
      const limitNumber = parseInt(limit as string);
      const skip = (pageNumber - 1) * limitNumber;

      const query: any = {};

      if (search) {
        query["customer.firstName"] = { $regex: search, $options: "i" };
      }

      if (status) {
        query.status = status;
      }

      const bookings = await Booking.find(query)
        .skip(skip)
        .limit(limitNumber)
        .populate("property")
        .populate("customer");

      const totalItems = await Booking.countDocuments(query);

      return res.status(200).json({
        success: true,
        bookings,
        totalItems,
        totalPages: Math.ceil(totalItems / limitNumber),
      });
    } catch (error) {
      console.error("Error fetching bookings:", error);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
}