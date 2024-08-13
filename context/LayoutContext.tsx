"use client";
import { createContext } from "react";

export interface UserInformation {
  name?: string;
  lastName?: string;
  avatar?: string;
}

type LayoutContextType = {
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  userInformation?: UserInformation;
  setUserInformation?: React.Dispatch<
    React.SetStateAction<UserInformation | undefined>
  >;
};

export const LayoutContext = createContext<LayoutContextType>({
  sideBar: false,
  setSideBar: () => null,
  userInformation: { name: "", lastName: "", avatar: "" },
  setUserInformation: () => null,
});
