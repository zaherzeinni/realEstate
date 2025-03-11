import type { NextApiRequest, NextApiResponse } from "next";
import Book from "@/models/book";
import dbConnect from "@/utils/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    await dbConnect();

    const {
      page = "1",
      sort = "1",
      country = "",
      city = "",
      limit = "6",
      search = "",
      isfeatured = "",
      rooms = "0",
      baths = "0",
      beds = "0",
      type = "",
      minPrice = "0",
      maxPrice = "1000000000", // Set a high default max price
      condition = "",
      resale = "",
      lockoff = ""
    } = req.query;

    const where: Record<string, any> = {};

    const addNumericFilter = (field: string, value: string, operator = "$gte") => {
      const numValue = parseInt(value);
      if (numValue !== 0) {
        where[field] = { [operator]: numValue };
      }
    };

    const addBooleanFilter = (field: string, value: string) => {
      if (value !== "") {
        where[field] = value === 'true';
      }
    };

    addNumericFilter("details.rooms", rooms as string);
    addNumericFilter("details.baths", baths as string);
    addNumericFilter("details.beds", beds as string);
    addNumericFilter("price", minPrice as string, "$gte");
    addNumericFilter("price", maxPrice as string, "$lte");

    if (type) where["type"] = type;
    if (search) where["title"] = { $regex: search, $options: "i" };
    if (city) where["city"] = city;
    if (country) where["country"] = country;
    if (condition) where["condition"] = condition;

    addBooleanFilter("services.isfeatured", isfeatured as string);
    addBooleanFilter("services.resale", resale as string);
    addBooleanFilter("services.lockoff", lockoff as string);

    const { books, pages } = await Book.paginate({
      page: parseInt(page as string),
      limit: parseInt(limit as string),
      sort: parseInt(sort as string),
      where,
    });

    res.status(200).json({ books, pages });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: (error as Error).message });
  }
};

export default handler;
