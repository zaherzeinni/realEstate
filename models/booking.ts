import mongoose from "mongoose";
import User from "./user";
import Book from "./book";
import Customer from "./customer";

const bookingSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: [true, "Property is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Staff is required"],
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: [false, "Customer optional "],
  },
  commission: {
    type: Number,
    required: [true, "Commission is required"],
    min: [0, "Commission cannot be negative"],
  },
  status: {
    type: String,
    enum: ["reserved","pending", "confirmed", "cancelled"],
    default: "pending",
  },
  bills: {
    type: String,
    enum: ["in process", "paid", "not paid"],
    default: "in process",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },


  startDate: {
    type: Date,
    required: [true, "Start date is required"],
  },
  endDate: {
    type: Date,
    required: [true, "End date is required"],
    validate: {
      validator: function (this: any, value: Date) {
        return value > this.startDate;
      },
      message: "End date must be after start date",
    },
  },



});

// Pre-save validation
bookingSchema.pre("save", async function (next) {
  try {
    // Validate staff role
    const staff = await User.findById(this.staff);
    if (!staff || staff.role !== "staff") {
      return next(new Error("Staff must be a user with role 'staff'"));
    }

    // Validate customer belongs to staff
    // const customer = await Customer.findById(this.customer);
    // if (!customer || customer.userId.toString() !== this.staff.toString()) {
    //   return next(new Error("Customer must belong to the selected staff"));
    // }

    // Validate property exists
    const property = await Book.findById(this.property);
    if (!property) {
      return next(new Error("Invalid property"));
    }

    await Customer.findById(this.customer);


    next();
  } catch (error) {
    next(error as Error);
  }
});

bookingSchema.virtual("id").get(function () {
  return this._id;
});

bookingSchema.set("toJSON", { virtuals: true });

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);