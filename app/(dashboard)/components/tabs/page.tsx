"use client";
import React from "react";
import { Card } from "@nextui-org/card";

import FDTabs from "@/template/components/FDTabs/FDTabs";
import FDBox from "@/template/components/FDBox/FDBox";
import FDInput from "@/template/components/FDInput/FDInput";
import FDButton from "@/template/components/FDButton/FDButton";

const Tabs = () => {
  return (
    <FDTabs
      color="danger"
      tabContent={[
        {
          title: <p className="text-red">Tab 1</p>,
          component: (
            <Card className="h-full w-full p-4">
              <FDBox>
                <FDInput label="First Name" />
                <FDInput label="Last Name" />
                <FDInput label="Age" type="number" />
              </FDBox>
            </Card>
          ),
        },
        {
          title: <p className="text-red">Tab 1</p>,
          component: (
            <Card className="h-full w-full p-4">
              <FDBox className="flex-col gap-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  vitae eius aliquid. Excepturi incidunt molestias reiciendis,
                  minus vero ab, provident perspiciatis laborum ducimus vel
                  saepe iure quaerat. Odit ab inventore distinctio vero cumque
                  sit voluptatibus. Consequatur nisi asperiores omnis! Ex
                  provident dolor excepturi aliquid consequuntur, laboriosam
                  velit earum suscipit iure?
                </p>
                <FDBox className="gap-4 justify-center">
                  <FDButton colorType="Btn-Primary">Okey</FDButton>
                  <FDButton colorType="Btn-Success">Success</FDButton>
                  <FDButton colorType="Btn-Danger">Danger</FDButton>
                  <FDButton colorType="Btn-Default">Cancel</FDButton>
                </FDBox>
              </FDBox>
            </Card>
          ),
        },
        {
          title: <p className="text-red">Tab 3</p>,
          component: (
            <Card className="h-full w-full p-4">
              <FDBox>
                <FDInput label="First Name" />
                <FDInput label="Last Name" />
                <FDInput label="Age" type="number" />
              </FDBox>
            </Card>
          ),
        },
        {
          title: <p className="text-red">Tab 4</p>,
          component: (
            <Card className="h-full w-full p-4">
              <FDBox>
                <FDInput label="First Name" />
                <FDInput label="Last Name" />
                <FDInput label="Age" type="number" />
              </FDBox>
            </Card>
          ),
        },
      ]}
    />
  );
};

export default Tabs;
