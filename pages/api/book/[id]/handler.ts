import auth from "@/utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import Book from "@/models/book";
import dbConnect from "@/utils/dbConnect";
import Category from "@/models/category";

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
        await Book.findByIdAndDelete(id);
        res.status(201).json({ success: true, message: "Book deleted" });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case "PUT":
      try {
        const { id } = req.query;
        const data   = req.body;
        await Book.updateOne(
          {
            _id: id,
          },
         data
        );
        res.status(201).json({ success: true, message: "Book updated" });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case "GET":
      try {
        const { id } = req.query;
        const books = await Book.find({
          category: id,
        }).sort({
            createdAt: -1,
          });

        // Fetch additional related books
        //   const related = await Book.find({
        //     category: book?.category?._id
        // }).sort({viewCount: 'desc'}).limit(4);

        res.status(201).json(books);
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
};

export default auth(handler);
