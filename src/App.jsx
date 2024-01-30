import React, { useState } from "react";
import { SHOE_LIST } from "./Components/constant.js";
import { Nav } from "./Components/Nav.jsx";
import { ShoeDetail } from "./Components/ShoeDetail.jsx";
import { NewArrivalsSection } from "./Components/NewArrivalsSection.jsx";
import { Sidebar } from "./Components/Sidebar.jsx";

export function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() =>setIsSidebarOpen(true)}/>
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST}/>
      <Sidebar
       isOpen={isSidebarOpen}
       onClickClose={()=>setIsSidebarOpen(false)}/>
    </div>
  );
}
