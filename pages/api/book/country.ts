import type { NextApiRequest, NextApiResponse } from "next";
import Book from "@/models/book";
import dbConnect from "@/utils/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    await dbConnect();

    const { country = "" } = req.query;

    if (!country) {
      return res.status(400).json({ 
        success: false, 
        message: "Country parameter is required" 
      });
    }

    const where: Record<string, any> = {
      country: country
    };

    const books = await Book.find(where);

    res.status(200).json({ books });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: (error as Error).message });
  }
};

export default handler; 