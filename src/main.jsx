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

import Reguler from "./pages/package/Reguler";
import Milad from "./pages/package/Milad";
import Galery from "./pages/Galery";
import NewYear from "./pages/package/NewYear";

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
    element: <Reguler />,
  },
  {
    path: "/paket/milad",
    element: <Milad />,
  },
  {
    path: "/paket/tahun-baru",
    element: <NewYear />,
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
