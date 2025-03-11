import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";
import auth from "@/utils/auth";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const staff = await User.findById(id)
          .populate("country", "name")
          
          // .select("-password"); // Exclude password from response
        console.log(staff ,'staff');
        if (!staff) {
          return res.status(404).json({ 
            success: false, 
            message: "Staff not found" 
          });
        }

        return res.status(200).json({ 
          success: true, 
          staff 
        });
      } catch (error: any) {
        return res.status(500).json({ 
          success: false, 
          error: error.message 
        });
      }

    case "PUT":
      try {
        const updateData = {
          ...req.body,
          role: "staff", // Ensure role remains staff
        };

        console.log(updateData ,'updateData');

  

        const staff = await User.findByIdAndUpdate(
          id,
          updateData,
          { 
            new: true, // Return updated document
            runValidators: true, // Run model validations
          }
        ).populate("country", "name");

        if (!staff) {
          return res.status(404).json({ 
            success: false, 
            message: "Staff not found" 
          });
        }

        return res.status(200).json({ 
          success: true, 
          staff 
        });
      } catch (error: any) {
        return res.status(500).json({ 
          success: false, 
          error: error.message 
        });
      }

    case "DELETE":
      try {
        const staff = await User.findById(id);
        
        if (!staff) {
          return res.status(404).json({ 
            success: false, 
            message: "Staff not found" 
          });
        }

        // Check if staff is the last admin
        if (staff.role === "admin") {
          const adminCount = await User.countDocuments({ role: "admin" });
          if (adminCount <= 1) {
            return res.status(400).json({
              success: false,
              message: "Cannot delete the last admin user"
            });
          }
        }

        await User.findByIdAndDelete(id);

        return res.status(200).json({ 
          success: true, 
          message: "Staff deleted successfully" 
        });
      } catch (error: any) {
        return res.status(500).json({ 
          success: false, 
          error: error.message 
        });
      }

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default auth(handler); 