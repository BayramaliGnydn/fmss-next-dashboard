"use client";
import { Tab, Tabs, TabsProps } from "@nextui-org/tabs";
import React, { ReactNode, Ref } from "react";

import FDBox from "@/template/components/FDBox/FDBox";
import { Colors } from "@/types";

interface FDTabsProps extends TabsProps {
  tabContent: { title: string | ReactNode; component: ReactNode }[];
  color?: Colors;
  containerClassName?: string;
}

const FDTabs = React.forwardRef(
  (
    { tabContent, color, containerClassName = "", ...props }: FDTabsProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <FDBox className={`flex-col w-full gap-2 ${containerClassName}`}>
        <Tabs
          fullWidth
          aria-label="Tabs colors"
          color={color ?? "primary"}
          radius="full"
          size="lg"
          {...props}
          ref={ref}
          classNames={{
            ...props.classNames,
            panel: `p-0 !text-inherit ${props.classNames?.panel}`,
          }}
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
  },
);

FDTabs.displayName = "FDTabs";

export default FDTabs;
