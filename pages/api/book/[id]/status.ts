import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import Booking from "@/models/booking";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const { id } = req.query;

  if (req.method === "PUT") {
    try {
      const { status } = req.body;

      if (!status) {
        return res.status(400).json({ success: false, message: "Status is required" });
      }

      const booking = await Booking.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );

      if (!booking) {
        return res.status(404).json({ success: false, message: "Booking not found" });
      }

      return res.status(200).json({ success: true, booking });
    } catch (error) {
      console.error("Error updating booking status:", error);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
}