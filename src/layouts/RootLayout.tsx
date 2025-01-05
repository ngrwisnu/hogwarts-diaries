import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const RootLayout = () => {
  return (
    <div className="grid grid-rows-[auto_minmax(100vh,_1fr)_auto]">
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
