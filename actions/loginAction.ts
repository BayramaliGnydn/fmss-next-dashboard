"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (
  currentState: {
    name: string;
    password: string;
    error: string;
  },
  formData: FormData,
) => {
  const username = formData.get("username");
  const password = formData.get("password");

  if (username !== "fmss" && password !== "fmss") {
    return {
      ...currentState,
      error:
        "Invalid credentials. Default => username:fmss password:fmss  Change it later",
    };
  } else {
    cookies().set("access-token", "fmss");
    redirect("/");
  }
};
