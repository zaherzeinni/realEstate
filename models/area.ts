import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    titlefr: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    // Uncomment if you want to add a reference to another model
    // addBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "City",
    // },
  },
  {
    timestamps: true,
  }
);

// Virtual field for id
schema.virtual("id").get(function () {
  return this._id.toString(); // Convert ObjectId to string if needed
});

// Set toJSON options to include virtuals
schema.set("toJSON", {
  virtuals: true,
});

// Export the model
const Area = mongoose?.models?.Area || mongoose?.model("Area", schema);
export default Area;