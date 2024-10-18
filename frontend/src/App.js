import React, { useState } from "react";
import "./App.css";
import Loader from "./components/Layout/Loader/Loader";
import Layout from "./components/Layout/Layout";

function App() {
  const [isLoading, /* setIsLoading */] = useState(false);
  return (
    <React.Fragment>

      {/* Main component iof the App */}
      <Layout />

      {/* Loading screen will be visible when isLoading is equal to true */}
      {isLoading && <Loader />} 

    </React.Fragment>
  );
}

export default App;
