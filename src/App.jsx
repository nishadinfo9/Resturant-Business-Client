import React from "react";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";

const AppRouter = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        { path: "/", Component: Home },
        { path: "/menu", Component: Menu },
        { path: "/contact", Component: Contact },
        { path: "/admin", Component: Admin },
      ],
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
};

export default AppRouter;
