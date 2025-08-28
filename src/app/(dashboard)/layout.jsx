import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProctedLayout from "./ProctedLayout";

export default function DashboardLayout({ children }) {
  return (
    <div>
      {" "}
      <ProctedLayout>
        <Navbar />
        {children}
        <Footer />
      </ProctedLayout>
    </div>
  );
}
