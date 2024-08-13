import { Card } from "@nextui-org/card";
import React from "react";

import FDEditor from "@/template/components/FDEditor/FDEditor";

const Editor = () => {
  return (
    <Card className="w-full p-4 flex flex-col gap-4">
      <FDEditor value={"<h1>sdadsdsqweqweqweqwa</h1>"} />
    </Card>
  );
};

export default Editor;
