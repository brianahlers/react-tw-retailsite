import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav({ onClickShoppingBtn }) {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="relative z-10 flex flex-wrap item-center justify-between">
      {/* Logo here */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Hamburger Button Menu */}
      <button onClick={() => setIsMobileMenuShown(!isMobileMenuShown)} className="hover:bg-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-gray-200 lg:hidden">
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu List */}
      <div
        className={`${
            !isMobileMenuShown && "hidden"
        } w-full lg:w-auto lg:block`}
      >
        <ul className="lg:space-x-8 bg-gray-50 text-lg border border-gray-100 lg:border-none rounded-lg p-4 flex flex-col lg:flex-row lg:bg-transparent">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`lg:hover:text-blue-500 lg:hover:bg-transparent cursor-pointer rounded px-3 py-2 ${
                  i === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                    : "hover:bg-gray-100"
                } ${(i==3 || i==4) && "lg:text-white"}`}
                key={route}
              >
                <a>{route}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Cart Button */}
      <div onClick={onClickShoppingBtn}className="btn-press-animation fixed left-4 bottom-4 lg:static lg:mr-8">
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
