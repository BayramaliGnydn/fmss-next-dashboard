import { Input, InputProps } from "@nextui-org/input";
import React, { Ref } from "react";
const FDInput = React.forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    return <Input {...props} ref={ref} />;
  },
);

FDInput.displayName = "FDInput";

export default FDInput;
