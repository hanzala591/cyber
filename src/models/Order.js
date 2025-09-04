import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      number: { type: String, required: true },
    },
    shipmentMethod: {
      type: String,
      enum: ["freeshipment", "fastshipment", "dateshipment"],
      default: "freeshipment",
    },
    payment: {
      cardholdername: String,
      cardnumber: String,
      expiraydate: String,
      cvv: String,
      method: { type: String, default: "Credit Card" },
      status: { type: String, default: "pending" },
    },
    totalprice: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
