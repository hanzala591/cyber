import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(3, "Name must be at least 2 characters"),
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signinSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const orderSchema = z.object({
  userId: z.string(),
  products: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number().min(1),
    })
  ),
  address: z.object({
    street: z.string().min(3, "Street must be at least 3 characters"),
    city: z.string().min(2, "City must be at least 2 characters"),
    number: z.string().min(1, "House/Building number is required"),
  }),
  shipmentMethod: z.enum(["freeshipment", "fastshipment", "dateshipment"]),
  payment: z.object({
    cardholdername: z.string().min(2),
    cardnumber: z.string().min(12).max(19),
    expiraydate: z.string(),
    cvv: z.string().min(3).max(4),
  }),
  totalprice: z.number().positive(),
});
