"use client";
import { Tab, Tabs, TabsProps } from "@nextui-org/tabs";
import React, { ReactNode } from "react";

import FDBox from "@/template/components/FDBox/FDBox";
import { Colors } from "@/types";

interface FDTabsProps extends TabsProps {
  tabContent: { title: string | ReactNode; component: ReactNode }[];
  color?: Colors;
}

const FDTabs = ({ tabContent, color, ...props }: FDTabsProps) => {
  return (
    <FDBox className="flex-col w-full gap-4">
      <Tabs
        fullWidth
        aria-label="Tabs colors"
        color={color ?? "primary"}
        radius="full"
        size="lg"
        {...props}
      >
        {tabContent.map((item, index) => (
          <Tab
            key={index}
            className="h-full w-full text-white"
            title={item.title}
          >
            {item.component}
          </Tab>
        ))}
      </Tabs>
    </FDBox>
  );
};

export default FDTabs;
