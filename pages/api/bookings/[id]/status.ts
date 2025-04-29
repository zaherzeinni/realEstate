import auth from "@/utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import Booking from "@/models/booking";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const user = req.user;
  
  if (user?.role !== "admin" && user?.role !== "staff") {
    return res.status(403).json({
      message: "You are not authorized to access this resource",
    });
  }

  if (req.method !== "PUT") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { id } = req.query;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ success: false, message: "Status is required" });
    }

    await Booking.findByIdAndUpdate(id, { status });
    
    res.status(200).json({ success: true, message: "Status updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: (error as Error).message });
  }
};

export default auth(handler); 