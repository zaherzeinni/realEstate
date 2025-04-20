import mongoose from "mongoose";
import User from "./user";

const schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref:  "Customer",
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default: "",
    },
    note: {
      type: String,
      trim: true,
      default: "",
    }
  },
  {
    timestamps: true,
  }
);

// Fix the paginate static method
schema.statics.paginate = async function ({
  limit = 10,
  page = 1,
  sort = -1,
  where = {},
}) {
  const skip = limit * (page - 1);
  
  // Remove the populate("userId") to prevent potential query issues
  const query = this.find(where)
    .limit(limit)
    .skip(skip)
    .sort({ createdAt: sort });

  const [customers, total] = await Promise.all([
    query.exec(),
    this.countDocuments(where)
  ]);

  const pages = Math.ceil(total / limit);

  return {
    customers,
    pages,
    total,
  };
};

schema.virtual("id").get(function () {
  return this._id;
});

schema.set("toJSON", {
  virtuals: true,
});

// Fix the model registration
const CustomerModel = mongoose.models.Customer || mongoose.model("Customer", schema);
export default CustomerModel; 