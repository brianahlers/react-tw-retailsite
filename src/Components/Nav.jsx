import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
export function Nav() {
  return (
    <nav className="flex flex-wrap item-center justify-between">
      {/* Logo here */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Hamburger Menu */}
      <button className="hover:bg-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu List */}
      <div className="w-full">
        <ul className="bg-gray-50 text-lg border border-gray-100 rounded-lg p-4">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer rounded px-3 py-2 ${
                  i === 0 ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                }`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
