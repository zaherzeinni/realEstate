import mongoose from "mongoose";
import Book from "./book";
import User from "./user";

const { Schema } = mongoose;
const schema = new Schema(
  {
    orderBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["قيد الانتظار", "مكتمل"],
      default: "قيد الانتظار",
      description: "Used to determine the status of the order",
    },
    variant: {
      type: String,
      enum: ["pending", "delivered"],
      default: "pending",
      description: "Used to determine the variant of the order badge",
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },

    currency: {
      type: String,
      required: true,
      trim: true,
    },

    
    phone: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },

    
    name: {
      type: String,
      required: true,
      trim: true,
      default: '',
    },




    items: [
      {
        book: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "Book",
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

schema.virtual("id").get(function () {
  return this._id ;
});

schema.set("toJSON", {
  virtuals: true,
});

export default mongoose.models.Order || mongoose.model("Order", schema);
