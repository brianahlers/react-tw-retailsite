import React from "react";
import { SHOE_LIST } from "./Components/constant.js";
import { Nav } from "./Components/Nav.jsx";
import { ShoeDetail } from "./Components/ShoeDetail.jsx";
import { NewArrivalsSection } from "./Components/NewArrivalsSection.jsx";

export function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST}/>
    </div>
  );
}
