"use client";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        {/* Success Icon */}
        <CheckCircle className="w-16 h-16 text-black mx-auto mb-4" />

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Order Successful 🎉
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your order has been placed successfully.
          You’ll receive an email confirmation shortly.
        </p>
      </div>
    </div>
  );
}
