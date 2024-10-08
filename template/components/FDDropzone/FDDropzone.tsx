import React, { ReactNode, Ref } from "react";
import Dropzone, { DropzoneRef } from "react-dropzone";

import FDBox from "@/template/components/FDBox/FDBox";
import { Colors } from "@/types";

interface FDDropzoneProps {
  text?: string | ReactNode;
  onChange: (arg: File[]) => void;
  color?: Colors;
  className?: string;
}

const FDDropzone = React.forwardRef(
  (
    { text, onChange, color = "primary", className }: FDDropzoneProps,
    ref: Ref<DropzoneRef>,
  ) => {
    return (
      <Dropzone ref={ref} onDrop={(acceptedFiles) => onChange(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <FDBox
            className={`rounded-md border-2 border-dashed border-${color} h-16 ${className ? className : ""}`}
          >
            <FDBox className="w-full items-center" {...getRootProps()}>
              <input className="w-full h-full" {...getInputProps()} />
              {text ? (
                typeof text === "string" ? (
                  <p className="p-2">{text}</p>
                ) : (
                  text
                )
              ) : (
                <p className="p-2">
                  Drag and drop some files here, or click to select files
                </p>
              )}
            </FDBox>
          </FDBox>
        )}
      </Dropzone>
    );
  },
);

FDDropzone.displayName = "FDDropzone";

export default FDDropzone;
