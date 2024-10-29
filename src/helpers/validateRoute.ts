"use client";

import { usePathname } from "next/navigation";

const ValidateRoute = (): boolean => {
  const pathname = usePathname();

  const hideNavbarRoutes = ["/login", "/register"];

  if (hideNavbarRoutes.includes(pathname)) {
    return false;
  }

  return true;
};

export default ValidateRoute;
