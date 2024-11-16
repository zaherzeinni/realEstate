import auth from "@/utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import Buyguide from "@/models/buyguide";
import dbConnect from "@/utils/dbConnect";
import { apiConfig } from "@/config/api";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await dbConnect();
    
    // const user = req.user;
    // if (user?.role !== "admin")
    //   return res.status(403).json({
    //     message: "You are not authorized to access this resource",
    //   });

    switch (req.method) {
      case "GET":
        try {
          const buyguides = await Buyguide.find({}).lean();
          return res.status(200).json(buyguides);
        } catch (error: any) {
          console.error('Get buyguides error:', error);
          return res.status(400).json({ 
            success: false, 
            error: error.message || "Failed to fetch buyguides" 
          });
        }

      case "POST":
        try {
          const data = req.body;
          if (!data) {
            return res.status(400).json({ 
              success: false, 
              error: "Request body is required" 
            });
          }
          
          data.items = data.items.filter((item: any) => 
            item.id || item.title || item.titlefr || item.desc || item.descfr
          );
          
          const newBuyguide = await Buyguide.create(data);
          return res.status(201).json({
            success: true,
            data: newBuyguide
          });
        } catch (error: any) {
          console.error('Create buyguide error:', error);
          return res.status(400).json({ 
            success: false, 
            error: error.message || "Failed to create buyguide" 
          });
        }

      default:
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }
  } catch (error: any) {
    console.error('Database connection error:', error);
    return res.status(500).json({ 
      success: false, 
      error: "Internal server error" 
    });
  }
};

export const config = apiConfig;


export default handler; 