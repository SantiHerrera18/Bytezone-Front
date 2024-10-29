"use client";

import { IUserInfo } from "@/interfaces/users";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const UserInfo: React.FC<IUserInfo> = ({ email, address, phone, role }) => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <div className="font-bold my-4 text-start self-start pl-9">
      <h2 className="text-lg w-fit">
        Email: <span className="text-slate-500">{email}</span>
      </h2>
      <h2 className="text-lg w-fit">
        Phone: <span className="text-slate-500">{phone}</span>
      </h2>
      <h2 className="text-lg w-fit">
        Addres: <span className="text-slate-500">{address}</span>
      </h2>
      <h2 className="text-lg w-fit">
        Role: <span className="text-slate-500">{role}</span>
      </h2>
    </div>
  );
};

export default UserInfo;
