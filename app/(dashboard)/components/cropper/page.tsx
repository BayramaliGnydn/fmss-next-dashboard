"use client";
import { Card } from "@nextui-org/card";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";

import FDBox from "@/template/components/FDBox/FDBox";
import FDCropper from "@/template/components/FDCropper/FDCropper";

const Cropper = () => {
  const [openChange, setChangeOpen] = useState(false);
  const [openNew, setNewOpen] = useState(false);
  const [changeImg, setChangeImg] = useState("/default-avatar.jpg");
  const onClose = (type: string, img?: string) => {
    if (type === "new") {
      setNewOpen(false);
    } else {
      setChangeOpen(false);
      if (img) setChangeImg(img);
    }
  };

  return (
    <Card className="w-full p-4 flex flex-col gap-4">
      <FDBox className="w-full justify-center gap-4 h-full items-center">
        <Button onClick={() => setChangeOpen(true)}>
          Click For Change Photo
        </Button>
        <Button onClick={() => setNewOpen(true)}>Click For New Photo</Button>
      </FDBox>
      <FDCropper
        key="w1"
        aspectRatio={4 / 3}
        defaultImage={changeImg}
        open={openChange}
        onClose={(img) => onClose("change", img)}
      />
      <FDCropper
        key="w2"
        aspectRatio={16 / 9}
        open={openNew}
        onClose={(img) => onClose("new", img)}
      />
    </Card>
  );
};

export default Cropper;
