import React from "react";
import { Card } from "./Components/Card.jsx";
import { SHOE_LIST } from "./Components/constant.js";
// import { Nav } from "./Components/Nav.jsx";
// import { ShoeDetail } from "./Components/ShoeDetail.jsx";

export function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      {/* <Nav />
      <ShoeDetail /> */}
      <Card item={SHOE_LIST[0]} />
    </div>
  );
}
