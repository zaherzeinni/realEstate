import auth from "@/utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import City from "@/models/city";
import Book from "@/models/book";
import dbConnect from "@/utils/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const user = req.user;
  if (user?.role !== "admin")
    return res.status(403).json({
      message: "You are not authorized to access this resource",
    });

  switch (req.method) {
    case "DELETE":
      try {
        const { id } = req.query;
        await City.findByIdAndDelete(id);
     
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case "PUT":
      try {
        const { id } = req.query;
        const { title , titlefr ,country} = req.body;
        await City.updateOne({ _id: id }, { title , titlefr ,country });
        res.status(200).json({ success: true, message: "City updated !" });
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
