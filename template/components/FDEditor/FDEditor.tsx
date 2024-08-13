"use client";
import dynamic from "next/dynamic";
import React, { useMemo, useRef, useState } from "react";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

interface FDEditorProps {
  placeholder?: string;
  height?: number;
  value?: string;
  onChange?: (arg: string) => void;
  readonly?: boolean;
}

const FDEditor = ({
  placeholder,
  height,
  value,
  onChange,
  readonly,
}: FDEditorProps) => {
  const editor = useRef(null);
  const [content, setContent] = useState(value ?? "");

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
    [placeholder],
  );

  return (
    <div className="no-tailwindcss-base w-full relative">
      <JoditEditor
        ref={editor}
        config={config}
        value={content}
        onBlur={(newContent) => setContent(newContent)}
        onChange={onChange}
      />
    </div>
  );
};

export default FDEditor;
