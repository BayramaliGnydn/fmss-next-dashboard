"use client";
import dynamic from "next/dynamic";
import React, { Ref, useMemo, useState, useEffect } from "react";

import FDBox from "@/template/components/FDBox/FDBox";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

interface FDEditorProps {
  placeholder?: string;
  height?: number;
  value?: string;
  onChange?: (arg: string) => void;
  readonly?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  label?: string;
}

const FDEditor = React.forwardRef(
  (
    {
      label,
      placeholder,
      height,
      value,
      onChange,
      readonly,
      errorMessage,
      isInvalid,
    }: FDEditorProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const [content, setContent] = useState(value ?? "");

    useEffect(() => {
      if (value !== content) {
        setContent(value ?? "");
      }
    }, [value]);

    const config = useMemo(
      () => ({
        tabIndex: 1,
        readonly: readonly,
        placeholder: placeholder || "Start typings...",
        uploader: {
          insertImageAsBase64URI: true,
        },
        useDefaultToolbarButtons: true,
        showCharsCounter: false,
        showWordsCounter: false,
        showXPathInStatusbar: false,
        height: height ?? 500,
        addNewLine: false,
        buttons: [
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "fontsize",
          "paragraph",
          "align",
          "ul",
          "ol",
          "outdent",
          "indent",
          "hr",
          "table",
          "cut",
          "copy",
          "paste",
          "link",
          "image",
          "video",
          "undo",
          "redo",
        ],
      }),
      [placeholder, height, readonly],
    );

    return (
      <FDBox ref={ref} className="flex-col gap-2 relative pb-6 overflow-hidden">
        <div className={`no-tailwindcss-base relative`}>
          <p className={isInvalid ? "text-danger" : ""}>{label}</p>
          <JoditEditor
            className={`${isInvalid ? "!border-danger !bg-danger" : "!border-gray-800"}`}
            config={config}
            value={content}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => {
              setContent(newContent);
              onChange && onChange(newContent);
            }}
          />
        </div>
        {isInvalid && (
          <p className="absolute text-xs text-danger ps-2 bottom-0">
            {errorMessage}
          </p>
        )}
      </FDBox>
    );
  },
);

FDEditor.displayName = "FDEditor";

export default FDEditor;
