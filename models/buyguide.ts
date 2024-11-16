import mongoose from "mongoose";

// const itemSchema = new mongoose.Schema({
//   id: { type: String,
// //     required: true 
//     },
//   title: String,
//   titlefr: String,
//   desc: String,
//   descfr: String,
// }
// //, { _id: false }


// );

const buyguideSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    titlefr: {
      type: String,
      required: true,
    },
    desc: String,
    descfr: String,
    items: [
        {
           id: String,
           title: String,
           titlefr: String,
           desc: String,
           descfr: String,
        }
    ],
    addBy: {
      type: String,
      default: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Buyguide || mongoose.model("Buyguide", buyguideSchema); 