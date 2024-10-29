import { getCookiesServer } from "@/helpers/cookies";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { IUserLogged } from "@/interfaces/users";
import UserInfo from "./UserInfo";

const DashboardInfo = () => {
  const { user }: IUserLogged = getCookiesServer();

  return (
    <div className="bg-white shadow-md rounded-lg  flex flex-col items-center my-5 m-auto pt-4 pb-8 w-full max-w-md">
      <h1 className="text-2xl font-semibold text-gray-800 ">
        {user.name.toUpperCase()}
      </h1>
      <UserInfo {...user} />
      <div className="flex justify-between px-7 items-center w-full">
        <Link
          href="/dashboard/orders"
          className="bg-purple-200 border-2 border-purple-700 text-purple-700 font-semibold justify-start rounded-xl py-2 px-3 hover:bg-purple-700 hover:border-purple-400 hover:text-purple-200 ease-in-out duration-200"
        >
          ORDERS
        </Link>
        <LogoutButton />
      </div>
    </div>
  );
};

export default DashboardInfo;
