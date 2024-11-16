import type { NextApiRequest, NextApiResponse } from "next";
import Book from "@/models/book";
import dbConnect from "@/utils/dbConnect";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const { id } = req.query;
        let book = await Book.findOne({
          _id: id,
        });

        // const bookwithrelated = {...book , related}
        console.log("RELATED AS:ALS", book);

        res.status(200).json({ book });
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

export default handler;
