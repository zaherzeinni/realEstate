import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";
import auth from "@/utils/auth";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const { page = 1, search, country, status } = req.query;
        const limit = 10;
        const skip = (Number(page) - 1) * limit;

        const query: any = { role: { $in: ["staff", "admin"] } };
        if (search) {
          query.$or = [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
          ];
        }
        if (country) query.country = country;
        if (status) query.status = status;

        const staffs = await User.find(query)
          .populate("country", "name title")
          .skip(skip)
          .limit(limit)
          .sort({ createdAt: -1 });

        const total = await User.countDocuments(query);

        return res.status(200).json({
          success: true,
          staffs,
          pagination: {
            total,
            page: Number(page),
            pages: Math.ceil(total / limit),
          },
        });
      } catch (error: any) {
        return res.status(500).json({ success: false, error: error.message });
      }



    case "POST":
      try {
        const formData = { ...req.body, role: "staff", provider: "jwt" };
        const staff = await User.create(formData);
        res.status(201).json(staff);
      } catch (error) {
        res.status(400).json({ success: false, error: (error as Error).message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
};



export default auth(handler);