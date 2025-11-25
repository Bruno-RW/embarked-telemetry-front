"use client";

import dynamic from "next/dynamic";
import { TelemetryType } from "@/src/shared/types/data/telemetry";

const TelemetryMap = dynamic(
  () => import("@/app/(default)/components/TelemetryMap"),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full min-h-[400px] rounded-lg bg-muted animate-pulse flex items-center justify-center">
        <span className="text-muted-foreground">Loading map...</span>
      </div>
    ),
  }
);

interface MapWrapperProps {
  data: TelemetryType[];
}

const MapWrapper = ({ data }: MapWrapperProps) => {
  return <TelemetryMap data={data} />;
};

export default MapWrapper;
