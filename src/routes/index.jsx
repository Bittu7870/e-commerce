import React from "react";
import CombineRoute from "./route";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
  const routes = CombineRoute();
  console.log(routes);
  return (
    <Routes>
      {routes.length !== 0 &&
        routes.map((item, index) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
    </Routes>
  );
};

export default Routing;
