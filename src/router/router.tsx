import { createBrowserRouter } from "react-router";
import RootLayout from "@/layouts/RootLayout.tsx";
import Home from "@/pages/Home.tsx";
import Characters from "@/pages/Characters";
import About from "@/pages/About";
import Details from "@/pages/Details";
import { characterLoader } from "@/loader/characterLoader";
import { detailLoader } from "@/loader/detailLoader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "characters",
        element: <Characters />,
        loader: characterLoader,
      },
      {
        path: "characters/detail/:id",
        element: <Details />,
        loader: detailLoader,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
