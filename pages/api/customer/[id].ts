import auth from "@/utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import Customer from "@/models/customer";
import dbConnect from "@/utils/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const user = req.user;
  const { id } = req.query;

  if (user?.role !== "admin" && user?.role !== 'staff') {
    return res.status(403).json({
      message: "You are not authorized to access this resource",
    });
  }

  switch (req.method) {
    case "GET":
      try {
        const customer = await Customer.findById(id).populate("userId");
        res.status(200).json({ customer });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case "PUT":
      try {
        const customer = await Customer.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(200).json({ customer });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case "DELETE":
      try {
        await Customer.findByIdAndDelete(id);
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
};

export default auth(handler); 