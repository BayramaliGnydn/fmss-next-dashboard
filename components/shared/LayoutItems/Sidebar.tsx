"use client";
import Link from "next/link";
import React, { useContext, useEffect, useRef } from "react";
import { Image } from "@nextui-org/image";
import { usePathname } from "next/navigation";

import { routes } from "@/config/routes";
import SidebarAccordion from "@/components/shared/LayoutItems/SidebarAccordion";
import FDBox from "@/template/components/FDBox/FDBox";
import { LayoutContext } from "@/context/LayoutContext";

const Sidebar = () => {
  const pathname = usePathname();
  const splittedRoute = pathname.split("/");
  const baseRoute = splittedRoute[1];
  const subRoute = splittedRoute[2];
  const ref = useRef<HTMLDivElement>(null);
  const { sideBar, setSideBar } = useContext(LayoutContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const viewport = window.innerWidth;

      if (viewport > 650) {
        setSideBar(true);
      }
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 10);

    return () => clearTimeout(timeout);
  }, [ref.current]);

  return (
    <FDBox
      className={`fixed bg-primary rounded-md w-[250px] top-1/2 -translate-y-1/2 transition-all duration-700 ${sideBar ? "left-[15px]" : "left-[-260px]"} h-[90%] z-50`}
    >
      <FDBox className="flex-col w-full items-center p-8">
        <FDBox className="w-full items-center flex-col px-4 py-8">
          <Image className="object-contain" src="/fmss.png" width={200} />
        </FDBox>
        <div
          className="h-[1px] w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff, rgba(255, 255, 255, 0))",
          }}
        />
        <FDBox className="flex flex-col gap-2 w-[200px] mt-4 overflow-y-scroll scrollbar-hide">
          {routes.map((item, index) => (
            <div
              key={index}
              ref={baseRoute === item.key ? ref : undefined}
              className="w-full"
            >
              {item.collapse ? (
                <SidebarAccordion
                  baseRoute={baseRoute}
                  item={item}
                  subRoute={subRoute}
                />
              ) : (
                <Link
                  className={`flex items-center gap-4 w-full h-[56px] hover:bg-[rgba(255,255,255,0.2)] p-2 rounded-md ${baseRoute === item.key ? "bg-[rgba(255,255,255,0.2)]" : ""}`}
                  href={item.route!}
                >
                  {item.icon}
                  <p className="text-white">{item.name}</p>
                </Link>
              )}
            </div>
          ))}
        </FDBox>
      </FDBox>
    </FDBox>
  );
};

export default Sidebar;
