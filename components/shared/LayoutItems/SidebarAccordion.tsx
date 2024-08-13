"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Link from "next/link";
import React, { Key, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { SidebarAccordionProps } from "@/types/sidebar";
import FDBox from "@/template/components/FDBox/FDBox";

const SidebarAccordion = ({
  item,
  baseRoute,
  subRoute,
}: SidebarAccordionProps) => {
  const [selectedKeys, setSelectedKeys] = useState<Iterable<string>>(new Set());
  const pathname = usePathname();

  useEffect(() => {
    if (baseRoute === item.key) {
      setSelectedKeys([item.key]);
    } else setSelectedKeys(new Set());
  }, [pathname]);

  return (
    <Accordion
      isCompact
      showDivider
      className="p-0"
      itemClasses={{
        indicator: "text-white",
        heading: `hover:bg-[rgba(255,255,255,0.2)] p-2 rounded-md ${baseRoute === item.key ? "bg-[rgba(255,255,255,0.2)]" : ""}`,
      }}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys as (selection: Iterable<Key>) => void}
    >
      <AccordionItem
        key={item.key}
        aria-label="Accordion 1"
        className="rounded-md text-white "
        startContent={item.icon}
        title={<h2 className="text-white">{item.name}</h2>}
      >
        <FDBox
          className={`flex-col p-2 gap-2 rounded-md ${baseRoute === item.key ? "bg-secondary" : ""}`}
        >
          {item.routes.map((item, index) => (
            <Link
              key={index}
              className={`flex items-center gap-4 w-full h-[56px] hover:bg-[rgba(255,255,255,0.2)] p-2 rounded-md ${subRoute === item.key ? "bg-[rgba(255,255,255,0.2)]" : ""}`}
              href={item.route}
            >
              {item.icon}
              <p className="text-white">{item.name}</p>
            </Link>
          ))}
        </FDBox>
      </AccordionItem>
    </Accordion>
  );
};

export default SidebarAccordion;
