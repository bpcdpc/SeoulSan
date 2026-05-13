import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

import { MapContainer, TileLayer } from "react-leaflet";

export default function SeoulSan() {
  const [position, setPosition] = useState();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Error: 현재 위치를 알 수 없습니다.",
        );
      }
    });
  }, []);

  return (
    <MapContainer
      center={[37.5665, 126.978]}
      zoom={13}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
