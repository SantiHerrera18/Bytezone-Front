/* eslint-disable @next/next/no-img-element */

import NavbarItem from "./NavbarItem";
import NavbarButtons from "./NavbarButtons";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-5 m-auto mt-2.5 w-full items-center pr-1 ">
      <ul className="flex shadow-lg border-solid  px-4 bg-white justify-between items-center m-auto rounded-3xl w-4/5">
        <div className="justify-self-start flex-nowrap">
          <Link href="/">
            <img
              src="/favicon.png"
              alt="See all products"
              className="w-7 min-w-5 rounded-full"
            />
          </Link>
        </div>

        <div className="flex items-center justify-end mr-1 flex-grow">
          <SearchBar />
          <NavbarItem text="Smartphones" route="categories/1" />
          <NavbarItem text="Laptops" route="categories/2" />
          <NavbarItem text="Tablets" route="categories/3" />
          <NavbarItem text="Headphones" route="categories/4" />
          <NavbarItem text="Accessories" route="categories/9" />
        </div>
      </ul>
      <div className=" flex items-center gap-3 font-semibold">
        <NavbarButtons />
      </div>
    </div>
  );
};

export default Navbar;
