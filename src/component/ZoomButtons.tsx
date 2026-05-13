import { useMap } from "react-leaflet";
import { Plus, Minus } from "lucide-react";

export default function ZoomButtons() {
  const map = useMap();

  return (
    <div className="absolute z-1000 bottom-26 right-4 flex flex-col bg-white rounded-sm shadow-md">
      <button
        className="flex h-10 w-10 items-center justify-center border-b border-b-gray-200"
        onClick={() => {
          map.zoomIn();
        }}
      >
        <Plus size={20} strokeWidth={2.5} />
      </button>
      <button
        className="flex h-10 w-10 items-center justify-center"
        onClick={() => {
          map.zoomOut();
        }}
      >
        <Minus size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
}
