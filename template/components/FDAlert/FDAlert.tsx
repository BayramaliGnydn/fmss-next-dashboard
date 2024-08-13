import React from "react";

import { Alert, AlertColors } from "@/context/AlertContext";

interface FDAlertProps {
  alerts: Alert[];
  removeAlert: (arg: number) => void;
}

const AlertColorsEnum: { [key in AlertColors]: string } = {
  success: "bg-alert-success-bg text-alert-success-text",
  danger: "bg-alert-danger-bg text-alert-danger-text",
  warning: "bg-alert-warning-bg text-alert-warning-text",
  info: "bg-alert-info-bg text-alert-info-text",
};

const FDAlert = ({ alerts, removeAlert }: FDAlertProps) => {
  return (
    <div className="fixed sm:right-4 sm:top-24 sm:translate-x-0 w-80 top-4 right-1/2 z-50 translate-x-1/2">
      {alerts.map((alert, index) => (
        <div
          key={alert.id}
          className={`p-4 rounded-md flex items-center justify-between shadow-lg mb-4 transition-transform transform-gpu 
            ${AlertColorsEnum[alert.type]}`}
          style={{
            marginTop: `${index * 5}px`,
            animation: "slideInRight 0.5s ease-out",
          }}
        >
          <span className="flex-1 break-words">{alert.message}</span>
          <button
            className="ml-4 text-lg font-semibold focus:outline-none"
            onClick={() => removeAlert(alert.id)}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default FDAlert;
