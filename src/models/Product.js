import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0, default: 0 },
    unit: { type: Number, default: 1 },
    stock: { type: Number, default: 1 },
    image: { type: String, required: true },
    discount: { type: Number, default: 0 },
    availability: Boolean,
    brand: String,
    category: {
      type: String,
    },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    reviews: [
      {
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: { type: Number, min: 0, max: 5, default: 0 },
        comment: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
mongoose.model("Product", ProductSchema);
