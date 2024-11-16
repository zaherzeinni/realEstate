import auth from "@/utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import Country from "@/models/country";
import dbConnect from "@/utils/dbConnect";
import { apiConfig } from "@/config/api";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const user = req.user;
  if (user?.role !== "admin")
    return res.status(403).json({
      message: "You are not authorized to access this resource",
    });

  switch (req.method) {
    case "POST":
      try {
        const { title, titlefr, cover, story, storyfr } = req.body;
        const newCountry = new Country({
          title,
          titlefr,
          cover,
          story,
          storyfr
        });
        await newCountry.save();
        res.status(201).json(newCountry);
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
