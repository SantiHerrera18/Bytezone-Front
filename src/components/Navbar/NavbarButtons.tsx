/* eslint-disable @next/next/no-img-element */
"use client";
import Cookies from "js-cookie";
import { IUserLogged } from "@/interfaces/users";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarButtons = () => {
  const [userInfo, setUserInfo] = useState<IUserLogged | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const userData = JSON.parse(Cookies.get("userData") || "{}");
    if (userData.token) setUserInfo(userData);
    else setUserInfo(null);
  }, [pathname]);
  return (
    <>
      {!userInfo?.token ? (
        <>
          <Link
            className="  ease-in-out duration-300 hover:outline px-2 py-1 rounded-lg outline-1 hover:text-white outline-purple-700 text-nowrap"
            href={"/login"}
          >
            SIGN IN
          </Link>
          <Link
            href={"/register"}
            className="px-2 py-1 rounded-lg ease-in-out duration-200 hover:text-black bg-purple-700 text-white text-nowrap
            hover:bg-purple-200"
          >
            SIGN UP
          </Link>
        </>
      ) : (
        <div className="flex items-center">
          <Link href="/cart" className="w-fit mr-4">
            <img src="/cart.png" alt="cart" className="w-7 min-w-5" />
          </Link>
          <Link href="/dashboard" className="w-fit mr-4">
            <img
              src="/Profile-icon.png"
              alt="Dashboard"
              className="w-8 min-w-6"
            />
          </Link>
        </div>
      )}
    </>
  );
};

export default NavbarButtons;
