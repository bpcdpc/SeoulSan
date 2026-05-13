import type { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";

import { MapContainer, TileLayer } from "react-leaflet";

export default function MapTest() {
  const [position, setPosition] = useState<LatLngExpression>([
    37.566759, 126.978173,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  console.log(position);

  return (
    <MapContainer
      center={position}
      zoom={12}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
