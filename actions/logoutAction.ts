"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logoutAction = async () => {
  cookies().delete("access-token");
  redirect("/login");
};
