import OpenButton from "../component/OpenButton";
import Aside from "./Aside";
import Main from "./Main";

import { useState } from "react";

export default function Body() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onCloseAside = () => {
    setIsOpen(false);
  };

  const onOpenAside = () => {
    setIsOpen(true);
  };
  return (
    <div className="absolute w-full h-full overflow-hidden z-30">
      <Aside isOpen={isOpen} onCloseAside={onCloseAside} />
      <OpenButton onOpenAside={onOpenAside} />
      <Main />
    </div>
  );
}
