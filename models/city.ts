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


    country:{
        type: String,
        required: true,
        trim: true,
    

    }
,

    addBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Country",
    },
  },
  {
    timestamps: true,
  }
);

schema.virtual("id").get(function () {
  return this._id;
});

schema.set("toJSON", {
  virtuals: true,
});

export default mongoose.models.City || mongoose.model("City", schema);
