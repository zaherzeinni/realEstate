import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import Book from "@/models/book";
import User from "@/models/user";
import auth from "@/utils/auth";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await dbConnect();
    
    // Get all properties
    const properties = await Book.find({}).select('_id title price image');

    // Get all staff members and their properties
    const staffMembers = await User.find({ role: 'staff' })
      .select('properties')
      .lean();

    // Create a Set of all property IDs that are assigned to any staff
    const assignedPropertyIds = new Set(
      staffMembers.flatMap(staff => staff.properties.map(prop => prop.toString()))
    );

    // Transform properties and mark if they're already assigned
    const transformedProperties = properties.map(property => ({
      _id: property._id,
      title: property.title,
      price: property.price,
      formattedPrice: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(property.price),
      image: property.image?.[0] || "",
      isAssigned: assignedPropertyIds.has(property._id.toString())
    }));

    // Filter out properties that are already assigned to other staff
    const availableProperties = transformedProperties.filter(
      property => !property.isAssigned
    );

    return res.status(200).json({ 
      success: true, 
      properties: availableProperties
    });
  } catch (error: any) {
    return res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
}

export default auth(handler); 