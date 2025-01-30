import React, { Suspense, lazy, useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import SubHeader from "./src/Subheader";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useBlocker,
} from "react-router-dom";
import Aboutus from "./src/Aboutus";
import Contact from "./src/Contact";
import ErrorPage from "./src/ErrorPage";
import CardLayout from "./src/CardLayout";
import Footer from "./src/Footer";
import Restaurant from "./src/Restaurant";
import Shimmer from "./src/Shimmer";
import Login from "./src/Login";

const Cities = lazy(() => import("./src/Cities"));
const AppLayout = () => {
  return (
    <div className="h-full w-full bg-neutral-300">
      <Header />
      <SubHeader />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <CardLayout />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
      {
        path: "cities",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cities />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const rootEle = ReactDOM.createRoot(document.getElementById("root"));
rootEle.render(<RouterProvider router={router} />);
