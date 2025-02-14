import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import Book from "@/models/book";
import Country from "@/models/country";
import auth from "@/utils/auth";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await dbConnect();
    const { id } = req.query;

    // Get country name from country ID
    const country = await Country.findById(id);
    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    // Find properties by country name
    const properties = await Book.find({ 
      country: country.title 
    }).select('_id title price image');

    // Transform properties to include formatted price
    const transformedProperties = properties.map(property => ({
      _id: property._id,
      title: property.title,
      price: property.price,
      formattedPrice: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(property.price),
      image: property.image?.[0] || ""
    }));

    return res.status(200).json({ 
      success: true, 
      properties: transformedProperties 
    });
  } catch (error: any) {
    return res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
}

export default auth(handler); 