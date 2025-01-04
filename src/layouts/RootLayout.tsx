import { Outlet } from "react-router";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
