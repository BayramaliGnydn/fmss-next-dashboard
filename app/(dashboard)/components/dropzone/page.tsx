"use client";
import { Card } from "@nextui-org/card";
import React, { useState } from "react";
import { Image } from "@nextui-org/image";

import FDDropzone from "@/template/components/FDDropzone/FDDropzone";
import FDBox from "@/template/components/FDBox/FDBox";

const Dropzone = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Card className="w-full p-4 flex flex-col gap-4">
      <h2>
        You can use dropzone component in <b>client components.</b> Some
        examples under here
      </h2>
      <FDDropzone color="default" onChange={(files) => console.log(files)} />
      <FDDropzone
        color="primary"
        text="Hey, Drag and drop"
        onChange={(files) => console.log(files)}
      />
      <FDDropzone
        color="secondary"
        text={
          <p className="font-bold text-secondary p-2">
            Please drag and drop here. Maybe click here?
          </p>
        }
        onChange={(files) => console.log(files)}
      />
      <FDDropzone
        color="success"
        text={
          <p className="text-center text-success w-full p-2">
            We need your drag and drop here!
          </p>
        }
        onChange={(files) => console.log(files)}
      />
      <FDDropzone
        className="h-32"
        color="danger"
        text="Drag and drop for users with insufficient accuracy"
        onChange={(files) => console.log(files)}
      />
      <FDBox className="flex-col gap-4">
        <FDDropzone
          color="warning"
          text={
            <p className="text-warning text-bold p-2">
              Drag and drop here and full test how to work
            </p>
          }
          onChange={(files) => setFiles((prev) => [...prev, ...files])}
        />
        <p>Files previews</p>
        <FDBox className="gap-2">
          {files.map((item) => (
            <FDBox key={item.name} className="flex-col gap-2">
              <Image height={100} src={URL.createObjectURL(item)} />
              <p className="text-center">{item.name}</p>
            </FDBox>
          ))}
        </FDBox>
      </FDBox>
    </Card>
  );
};

export default Dropzone;
