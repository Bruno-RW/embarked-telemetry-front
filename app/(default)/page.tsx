"use client";

import { useData } from "@/src/shared/hook/data/useData";

const Home = () => {
  const { telemetryData, telemetryLoading, telemetryError } = useData();

  if (telemetryLoading) return <div>Loading map data...</div>;
  if (telemetryError)
    return <div>Error loading data: {telemetryError.message}</div>;

  return (
    <main className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {telemetryData?.map((item) =>
        item.location && item.address ? (
          <div key={item.location.id}>
            Pin at Lat: {item.location.latitude}, City: {item.address.city}
          </div>
        ) : null
      )}
    </main>
  );
};

export default Home;
