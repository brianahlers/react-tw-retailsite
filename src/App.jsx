import React from "react";
import { SHOE_LIST } from "./Components/constant.js";
import { Nav } from "./Components/Nav.jsx";
import { ShoeDetail } from "./Components/ShoeDetail.jsx";
import { NewArrivalSection } from "./Components/NewArrivalSection.jsx";

export function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST}/>
    </div>
  );
}
