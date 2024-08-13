import React, { createContext, ReactNode, useContext, useState } from "react";

import FDAlert from "@/template/components/FDAlert/FDAlert";

export type AlertColors = "success" | "danger" | "warning" | "info";

export interface Alert {
  id: number;
  message: string;
  type: AlertColors;
}
export interface AlertContextType {
  showAlert: (message: string, type: AlertColors, duration: number) => void;
}

const AlertContext = createContext<AlertContextType>({ showAlert: () => null });

export const useAlert = () => {
  return useContext<AlertContextType>(AlertContext);
};

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const showAlert = (
    message: string,
    type: AlertColors = "info",
    duration = 5000,
  ) => {
    const id = new Date().getTime();

    setAlerts((prev) => {
      const newAlerts = [...prev, { id, message, type }];

      if (newAlerts.length > 5) {
        newAlerts.shift();
      }

      return newAlerts;
    });

    setTimeout(() => {
      removeAlert(id);
    }, duration);
  };

  const removeAlert = (id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <FDAlert alerts={alerts} removeAlert={removeAlert} />
    </AlertContext.Provider>
  );
};
