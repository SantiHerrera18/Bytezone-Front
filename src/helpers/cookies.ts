import { cookies } from "next/headers";

export const getCookiesServer = () => {
  const cookieStore = cookies();
  const userData = JSON.parse(cookieStore.get("userData")?.value ?? "{}");
  return userData;
};
