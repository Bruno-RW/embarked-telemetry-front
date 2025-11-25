"use client";

import useSWR from "swr";

import { TELEMETRY_API_URL } from "@core/routes/backend";

import { fetcher } from "@shared/api/data/getData";
import { TelemetryType } from "@shared/types/data/telemetry";
import DataContext, {
  type DataContextType,
} from "@shared/context/data/DataContext";

interface DataProviderProps {
  children: React.ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const {
    data: telemetryData,
    isLoading: telemetryLoading,
    error: telemetryError,
  } = useSWR<TelemetryType[]>(TELEMETRY_API_URL, fetcher);

  const value: DataContextType = {
    telemetryData,
    telemetryLoading,
    telemetryError: telemetryError ?? undefined,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
