import React from "react";
import PublicRoute from "./publicRoute";
import Home from "../components/Home/Home";
import Category from "../components/Category/Category";

const CombineRoute = () => {
  return [
    {
      path: "/",
      element: <PublicRoute component={Home} />,
    },
    {
      path: "/category/:id",
      element: <PublicRoute component={Category} />,
    },
  ];
};

export default CombineRoute;
