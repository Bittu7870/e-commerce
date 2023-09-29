import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { AppContext } from "./utils/context";

const App = () => {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes />
      </AppContext>
    </BrowserRouter>
  );
};

export default App;
