import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import Booking from "@/models/booking";

// This endpoint should be called by a cron job service like Vercel Cron
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Verify the request is authorized (using a secret token for cron jobs)
  const { token } = req.query;
  if (token !== "1234567890") {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  await dbConnect();

  try {
    // Find and delete bookings where endDate is in the past
    const now = new Date();
    const result = await Booking.deleteMany({ endDate: { $lt: now } });

    return res.status(200).json({ 
      success: true, 
      message: `Deleted ${result.deletedCount} expired bookings`, 
      deletedCount: result.deletedCount 
    });
  } catch (error) {
    console.error("Error cleaning up expired bookings:", error);
    return res.status(500).json({ 
      success: false, 
      error: (error as Error).message || "Error cleaning up bookings" 
    });
  }
} 