import auth from "@/utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import Buyguide from "@/models/buyguide";
import dbConnect from "@/utils/dbConnect";
import mongoose from 'mongoose';
import { apiConfig } from "@/config/api";


interface SubItem {
  id: string;
  title: string;
  titlefr: string;
  desc: string;
  descfr: string;
}

interface Item {
  id: string;
  title: string;
  titlefr: string;
  desc: string;
  descfr: string;
  subitems: SubItem[];
}

interface BuyguideDocument {
  title: string;
  titlefr: string;
  desc: string;
  descfr: string;
  items: Item[];
  addBy: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const user = req.user;
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID format" });
  }

  switch (req.method) {
    case "GET":
      try {
        const isHeader = req.query.isHeader === 'true';

        
        const buyguide = await Buyguide.findById(id).catch();
        if (!buyguide) {
          return res.status(404).json({ success: false, message: "Buyguide not found" });
        }
        res.status(200).json(buyguide);
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case "PUT":
      if (user?.role !== "admin") {
        return res.status(403).json({ message: "Not authorized" });
      }
      try {
        const updatedBuyguide = await Buyguide.findByIdAndUpdate(
          id,
          req.body,
          { new: true, runValidators: true }
        );
        if (!updatedBuyguide) {
          return res.status(404).json({ success: false, message: "Buyguide not found" });
        }
        res.status(200).json(updatedBuyguide);
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case "DELETE":
      if (user?.role !== "admin") {
        return res.status(403).json({ message: "Not authorized" });
      }
      try {
        const deletedBuyguide = await Buyguide.findByIdAndDelete(id);
        if (!deletedBuyguide) {
          return res.status(404).json({ success: false, message: "Buyguide not found" });
        }
        res.status(200).json({ success: true, message: "Buyguide deleted" });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
};


export const config = apiConfig;

export default auth(handler); 