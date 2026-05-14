import type { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import ZoomButtons from "./ZoomButtons";
import MyLocationButton from "./MyLocationButton";

export default function Map() {
  const position: LatLngExpression = [37.566759, 126.978173];

  return (
    <MapContainer
      center={position}
      zoom={12}
      zoomControl={false}
      scrollWheelZoom={false}
      className="h-full"
    >
      <ZoomButtons />
      <MyLocationButton />

      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
