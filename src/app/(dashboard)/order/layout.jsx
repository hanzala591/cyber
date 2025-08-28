// app/dashboard/layout.js
import OrderStep from "@/components/OrderStep";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <div className="lg:w-[80%] mx-auto flex flex-col p-4 md:px-8 py-8 lg:px-0 lg:py-12">
        <OrderStep />
        {children}
      </div>
    </section>
  );
}
