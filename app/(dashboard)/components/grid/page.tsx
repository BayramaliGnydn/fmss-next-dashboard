import React from "react";
import { Card } from "@nextui-org/card";

import FDGrid from "../../../../template/components/FDGrid/FDGrid";

import FDButton from "@/template/components/FDButton/FDButton";
import FDInput from "@/template/components/FDInput/FDInput";

const Grid = () => {
  return (
    <Card className="w-full p-4 flex flex-col gap-4">
      <FDGrid container spacing={8}>
        <FDGrid item md={3} sm={7}>
          <FDButton>md:col 3 sm:col 7</FDButton>
        </FDGrid>
        <FDGrid item md={7} sm={5}>
          <FDInput placeholder="md:col 7 sm:col 5" />
        </FDGrid>
        <FDGrid item col={8} md={2}>
          <FDButton colorType="Btn-Success">md:col 2 - col 8</FDButton>
        </FDGrid>
        <FDGrid item col={4} md={5}>
          <FDButton colorType="Btn-Danger">md:col 5 - col 4</FDButton>
        </FDGrid>
        <FDGrid item md={3}>
          <FDButton>col 3</FDButton>
        </FDGrid>
        <FDGrid item md={4}>
          <FDInput placeholder="col 4" />
        </FDGrid>
        <FDGrid item md={12}>
          <FDButton colorType="Btn-Success">col 12</FDButton>
        </FDGrid>
      </FDGrid>
    </Card>
  );
};

export default Grid;
