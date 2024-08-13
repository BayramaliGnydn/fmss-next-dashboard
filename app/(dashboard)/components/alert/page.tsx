"use client";
import { Card } from "@nextui-org/card";
import React, { useState } from "react";

import FDButton from "@/template/components/FDButton/FDButton";
import { useAlert } from "@/context/AlertContext";
import FDGrid from "@/template/components/FDGrid/FDGrid";

const Alert = () => {
  const { showAlert } = useAlert();
  const [index, setIndex] = useState(0);

  return (
    <Card className="w-full p-4 flex flex-col gap-4">
      <FDGrid container spacing={4}>
        <FDGrid item md={3}>
          <FDButton
            onClick={() => {
              showAlert("Alert " + index, "info", 3000);
              setIndex((prev) => prev + 1);
            }}
          >
            click for alert
          </FDButton>
        </FDGrid>
        <FDGrid item md={3}>
          <FDButton
            colorType="Btn-Success"
            onClick={() => {
              showAlert("Alert " + index, "success", 3000);
              setIndex((prev) => prev + 1);
            }}
          >
            click for alert
          </FDButton>
        </FDGrid>
        <FDGrid item md={3}>
          <FDButton
            colorType="Btn-Danger"
            onClick={() => {
              showAlert("Alert " + index, "danger", 3000);
              setIndex((prev) => prev + 1);
            }}
          >
            click for alert
          </FDButton>
        </FDGrid>
        <FDGrid item md={3}>
          {" "}
          <FDButton
            colorType="Btn-Warning"
            onClick={() => {
              showAlert("Alert " + index, "warning", 3000);
              setIndex((prev) => prev + 1);
            }}
          >
            click for alert
          </FDButton>
        </FDGrid>
      </FDGrid>
    </Card>
  );
};

export default Alert;
