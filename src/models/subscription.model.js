import mongoose, { Schema } from "mongoosse";

const subcriptionSchema = new Schema(
  {
    subcriber: {
      type: Schema.types.ObjectId,
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subcription = mongoose.model("ubsription", subcriptionSchema);
