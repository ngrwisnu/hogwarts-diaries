import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
