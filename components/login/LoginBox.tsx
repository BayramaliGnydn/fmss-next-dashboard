"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Spinner } from "@nextui-org/spinner";

import FDBox from "@/template/components/FDBox/FDBox";
import { loginAction } from "@/actions/loginAction";
import { useAlert } from "@/context/AlertContext";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      className="text-white"
      color="primary"
      isDisabled={pending}
      type="submit"
    >
      {pending ? <Spinner color="white" /> : "Login"}
    </Button>
  );
};

const LoginBox = () => {
  const [formState, formAction] = useFormState(loginAction, {
    name: "",
    password: "",
    error: "",
  });
  const { showAlert } = useAlert();

  useEffect(() => {
    const errorArray = Object.values(formState);

    errorArray.forEach((item) => {
      if (item) {
        showAlert(item, "danger", 3000);
      }
    });
  }, [formState]);

  return (
    <form action={formAction} className="w-full">
      <FDBox className="w-full flex-col gap-6">
        <h2 className="text-center">Project Name Admin Panel</h2>
        <FDBox className="flex-col gap-6 relative pb-4">
          <Input
            fullWidth
            errorMessage={formState.name}
            isInvalid={!!formState.name || !!formState.error}
            name="name"
            placeholder="Username"
            variant="bordered"
          />
          <Input
            fullWidth
            errorMessage={formState.password}
            isInvalid={!!formState.password || !!formState.error}
            name="password"
            placeholder="Password"
            type="password"
            variant="bordered"
          />
        </FDBox>
        <SubmitButton />
      </FDBox>
    </form>
  );
};

export default LoginBox;
