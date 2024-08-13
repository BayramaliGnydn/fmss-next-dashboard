"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { LayoutContext, UserInformation } from "@/context/LayoutContext";
import { AlertProvider } from "@/context/AlertContext";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const [sideBar, setSideBar] = React.useState(false);
  const [userInformation, setUserInformation] = React.useState<
    UserInformation | undefined
  >({ name: "Bayramali", lastName: "Günaydın" });
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <AlertProvider>
          <LayoutContext.Provider
            value={{ sideBar, setSideBar, userInformation, setUserInformation }}
          >
            {children}
          </LayoutContext.Provider>
        </AlertProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
