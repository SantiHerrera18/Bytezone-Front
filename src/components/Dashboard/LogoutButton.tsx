"use client";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { confirmLogout, Toast } from "@/helpers/alert";

const LogoutButton = () => {
  const router = useRouter();
  const handleOnClick = async () => {
    confirmLogout().then((result) => {
      if (result.isConfirmed) {
        Cookies.remove("userData");
        Toast.fire({
          icon: "info",
          title: "Logged out succesfully",
        });
        setTimeout(() => {
          router.push("/");
        }, 800);
      }
    });
  };
  return (
    <Link
      href=""
      onClick={handleOnClick}
      className="bg-purple-700 border-2 text-purple-100 border-purple-700 font-semibold px-5 py-2 rounded-xl justify-end text-center  hover:bg-purple-200 hover:text-purple-700 ease-in-out duration-200"
    >
      LOGOUT
    </Link>
  );
};

export default LogoutButton;
