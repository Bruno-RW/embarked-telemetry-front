"use client";

import { createContext } from "react";

import { type TelemetryType } from "@shared/types/data/telemetry";

export type DataContextType = {
  telemetryData?: TelemetryType[];
  telemetryLoading: boolean;
  telemetryError?: Error;
};

const DataContext = createContext<DataContextType | null>(null);
export default DataContext;
