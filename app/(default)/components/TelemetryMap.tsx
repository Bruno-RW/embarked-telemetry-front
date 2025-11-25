"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { TelemetryType } from "@/src/shared/types/data/telemetry";

// Fix for default marker icons in Leaflet with webpack
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface TelemetryMapProps {
  data: TelemetryType[];
}

// Component to fit map bounds to markers
const FitBounds = ({ data }: { data: TelemetryType[] }) => {
  const map = useMap();

  useEffect(() => {
    if (data.length > 0) {
      const validLocations = data.filter(
        (item) =>
          item.location?.latitude !== undefined &&
          item.location?.longitude !== undefined
      );

      if (validLocations.length > 0) {
        const bounds = L.latLngBounds(
          validLocations.map((item) => [
            item.location.latitude!,
            item.location.longitude!,
          ])
        );
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }, [data, map]);

  return null;
};

const TelemetryMap = ({ data }: TelemetryMapProps) => {
  const validData = data.filter(
    (item) =>
      item.location?.latitude !== undefined &&
      item.location?.longitude !== undefined
  );

  // Default center (Brazil) if no data
  const defaultCenter: [number, number] = [-15.77972, -47.92972];
  const center: [number, number] =
    validData.length > 0
      ? [validData[0].location.latitude!, validData[0].location.longitude!]
      : defaultCenter;

  return (
    <MapContainer
      center={center}
      zoom={4}
      className="h-full w-full rounded-lg"
      style={{ minHeight: "400px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds data={validData} />
      {validData.map((item) => (
        <Marker
          key={item.location.id}
          position={[item.location.latitude!, item.location.longitude!]}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-semibold">
                {item.address?.city || "Cidade Desconhecida"}
              </p>
              {item.address?.state && (
                <p className="text-muted-foreground">{item.address.state}</p>
              )}
              {item.address?.country && (
                <p className="text-muted-foreground">{item.address.country}</p>
              )}
              <hr className="my-2" />
              <p>
                <span className="font-medium">Lat:</span>{" "}
                {item.location.latitude?.toFixed(6)}
              </p>
              <p>
                <span className="font-medium">Lng:</span>{" "}
                {item.location.longitude?.toFixed(6)}
              </p>
              {item.location.altitude && (
                <p>
                  <span className="font-medium">Alt:</span>{" "}
                  {item.location.altitude}m
                </p>
              )}
              {item.location.date_time && (
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(item.location.date_time).toLocaleString()}
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default TelemetryMap;
