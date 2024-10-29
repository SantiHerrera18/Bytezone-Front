"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const FooterClient = () => {
  const pathname = usePathname();

  const hideNavbarRoutes = ["/login", "/register"];

  if (hideNavbarRoutes.includes(pathname)) {
    return null;
  }

  return <Footer />;
};

export default FooterClient;
