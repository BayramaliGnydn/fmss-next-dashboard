import React from "react";
import { Image } from "@nextui-org/image";

import LoginBox from "@/components/login/LoginBox";
import FDBox from "@/template/components/FDBox/FDBox";

const Login = () => {
  return (
    <FDBox className="h-[100vh] w-[100vw] bg-primary justify-center items-center">
      <FDBox className="w-[500px] h-[380px] bg-white rounded-md shadow-md relative items-end px-16 py-12 mx-4">
        <FDBox className="absolute bg-black rounded-md top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image className="object-contain w-[250px] p-4" src="/fmss.png" />
        </FDBox>
        <LoginBox />
      </FDBox>
    </FDBox>
  );
};

export default Login;
