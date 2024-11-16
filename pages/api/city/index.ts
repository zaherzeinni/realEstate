import auth from "@/utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import City from "@/models/city";
import dbConnect from "@/utils/dbConnect";

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
        const { title , titlefr ,country} = req.body;
        const newCity= new City({
          title,
          titlefr,
          country
        
        //   addBy: user.id,
        });
        await newCity.save();
        console.log("NEW_CATEGORY" ,newCity)
        res.status(201).json(newCity);
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
