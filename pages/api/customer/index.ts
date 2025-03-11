import auth from "@/utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import Customer from "@/models/customer";
import dbConnect from "@/utils/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const user = req.user;

  if (!user || (user.role !== "admin" && user.role !== "staff")) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  switch (req.method) {
    case "GET":
      try {
        const { page = 1, limit = 10, sort = -1, search = "", staff = "" } = req.query;

        const where: any = {};
        if (user.role === "staff") {
          where.userId = user._id;
        } else if (user.role === "admin" && staff) {
          where.userId = staff;
        }

        if (search) {
          where.$or = [
            { firstName: { $regex: search, $options: "i" } },
            { lastName: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
            { phone: { $regex: search, $options: "i" } },
          ];
        }

        const skip = Number(limit) * (Number(page) - 1);
        const customers = await Customer.find(where)
          .limit(Number(limit))
          .skip(skip)
          .sort({ createdAt: Number(sort) as 1 | -1 })
          .lean();

        const total = await Customer.countDocuments(where);
        const pages = Math.ceil(total / Number(limit));

        res.status(200).json({
          customers: customers || [],
          pages: pages || 1,
          total: total || 0,
        });
      } catch (error) {
        res.status(400).json({ success: false, error: (error as Error).message });
      }
      break;

    case "POST":
      try {
        const customerData = { ...req.body, userId: user._id };
        const customer = await Customer.create(customerData);
        res.status(201).json(customer);
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

// import auth from "@/utils/auth";
// import type { NextApiRequest, NextApiResponse } from "next";
// import Customer from "@/models/customer";
// import dbConnect from "@/utils/dbConnect";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   await dbConnect();
//   const user = req.user;

//   if (user?.role !== "admin" && user?.role !== 'staff') {
//     return res.status(403).json({
//       message: "You are not authorized to access this resource",
//     });
//   }

//   switch (req.method) {

//     case "GET":
//         try {
//           const {
//             page = 1,
//             limit = 10,
//             sort = -1,
//             search = "",
//           } = req.query;
  
//           const where: any = {};
//           if (user.role !== 'admin' && user.role !== 'staff') {
//             where.userId = user._id;
//           }

//           if (search) {
//             where.$or = [
//               { firstName: { $regex: search, $options: "i" } },
//               { lastName: { $regex: search, $options: "i" } },
//               { email: { $regex: search, $options: "i" } },
//               { phone: { $regex: search, $options: "i" } },
//             ];
//           }
  
//           // Use Customer.find instead of paginate
//           const skip = Number(limit) * (Number(page) - 1);
//           const customers = await Customer.find(where)
//             .limit(Number(limit))
//             .skip(skip)
//             .sort({ createdAt: Number(sort) as 1 | -1 })
//             .lean();
  
//           const total = await Customer.countDocuments(where);
  
//           const pages = Math.ceil(total / Number(limit));
  
//           res.status(200).json({
//             customers: customers || [],
//             pages: pages || 1,
//             total: total || 0
//           });
//         } catch (error) {
//           console.error("API Error:", error);
//           res.status(400).json({ success: false, error: (error as Error).message });
//         }
//         break;

//     case "POST":
//       try {
//         const customerData = {
//           ...req.body,
//           userId: user._id,
//         };
        
//         const customer = await Customer.create(customerData);
//         res.status(201).json(customer);
//       } catch (error) {
//         console.error("API Error:", error);
//         res.status(400).json({ success: false, error: (error as Error).message });
//       }
//       break;

//     default:
//       res.status(405).json({ success: false, message: "Method not allowed" });
//       break;
//   }
// };

// export default auth(handler); 