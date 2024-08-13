"use client";
import React, { useContext } from "react";

import { LayoutContext } from "@/context/LayoutContext";
import Sidebar from "@/components/shared/LayoutItems/Sidebar";
import DashboardNavbar from "@/components/shared/LayoutItems/DashboardNavbar";
import FDBox from "@/template/components/FDBox/FDBox";

interface NavigationBarsprops {
  children: React.ReactNode;
}

const NavigationBars = ({ children }: NavigationBarsprops) => {
  const { sideBar } = useContext(LayoutContext);

  return (
    <FDBox className="w-full justify-end">
      <Sidebar />
      <FDBox
        className={`flex-col gap-4 ${sideBar ? "lg:w-[calc(100%_-_300px)]" : "w-full"} w-full transition-all duration-700`}
      >
        <DashboardNavbar />
        <FDBox className="px-4">{children}</FDBox>
      </FDBox>
    </FDBox>
  );
};

export default NavigationBars;
