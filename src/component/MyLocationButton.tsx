import { useMap } from "react-leaflet";
import { LocateFixed } from "lucide-react";

export default function MyLocationButton() {
  const map = useMap();

  const onClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      map.setView([position.coords.latitude, position.coords.longitude], 14);
    });
  };

  return (
    <div className="absolute z-1000 bottom-14 right-4">
      <button
        onClick={onClick}
        className="flex h-10 w-10 items-center justify-center bg-white rounded-sm shadow-md"
      >
        <LocateFixed size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
}
