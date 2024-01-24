import React from "react";
import { Nav } from "./Components/Nav.jsx";
import { ShoeDetail } from "./Components/ShoeDetail.jsx";

export function App() {
  return (
    <div className="p-10 xl:px-24">
      <Nav />
      <ShoeDetail />
    </div>
  );
}