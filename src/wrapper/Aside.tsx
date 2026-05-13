import Info from "../component/Info";
import { X } from "lucide-react";

type AsideProps = {
  isOpen: boolean;
  onCloseAside: () => void;
};

export default function Aside({ isOpen, onCloseAside }: AsideProps) {
  return (
    <aside
      className={`transition-all duration-300 absolute z-1000 bg-white overflow-hidden h-full ${
        isOpen ? "w-full sm:w-80 xl:w-100" : "w-0"
      }`}
    >
      <button onClick={onCloseAside} className="absolute right-2 top-3 z-100">
        <X size={30} strokeWidth={2.5} />
      </button>
      <div className="w-screen sm:w-80 xl:w-100 pt-14 px-2 pb-6 h-full overflow-x-hidden overflow-y-scroll">
        <Info />
      </div>
    </aside>
  );
}
