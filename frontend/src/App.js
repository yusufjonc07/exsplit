import React from "react";
import "./App.css";
import Button from "./components/Core/Buttons/Button";
import Card from "./components/Core/Card/Card";
import Header from "./components/Layout/Header/Header";

function App() {
  return (
    <React.Fragment>
      <Header title="exsplit" />
      <Card>salom</Card>
      <Button className="btn-secondary m-2">Shuhratjon</Button>
    </React.Fragment>
  );
}

export default App;
