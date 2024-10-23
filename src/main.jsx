import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import Facility from "./pages/Facility";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Reqruitments from "./pages/Reqruitments";
import Paket from "./pages/Paket";

import Galery from "./pages/Galery";

import Package1 from "./pages/package/Package1";
import Package2 from "./pages/package/Package2";
import Package3 from "./pages/package/Package3";
import Package4 from "./pages/package/Package4";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/facility",
    element: <Facility />,
  },
  {
    path: "/reqruitments",
    element: <Reqruitments />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },

  {
    path: "/paket",
    element: <Paket />,
  },
  {
    path: "/paket/reguler",
    element: <Package1 />,
  },
  {
    path: "/paket/milad",
    element: <Package2 />,
  },
  {
    path: "/paket/paket-3",
    element: <Package3 />,
  },
  {
    path: "/paket/paket-4",
    element: <Package4 />,
  },
  {
    path: "/gallery",
    element: <Galery />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={root} />
  </StrictMode>
);
