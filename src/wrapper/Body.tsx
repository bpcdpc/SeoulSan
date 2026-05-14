import OpenButton from "../component/OpenButton";
import type { ContentInfoItem, ContentListItem } from "../types/types";
import {
  fetchContentInfoItems,
  fetchContentListItems,
} from "../util/fetchData";

import Aside from "./Aside";
import Main from "./Main";

import { useEffect, useState } from "react";

export default function Body() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contents, setContents] = useState<ContentInfoItem[] | null>(null);

  const onCloseAside = () => {
    setIsOpen(false);
  };

  const onOpenAside = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const loadContents = async () => {
      const result = await fetchContentInfoItems();
      setContents(result);
    };
    loadContents();
  }, []);

  return (
    <div className="absolute w-full h-full overflow-hidden z-30">
      <Aside isOpen={isOpen} onCloseAside={onCloseAside} />
      <OpenButton onOpenAside={onOpenAside} />
      {contents?.map((c) => (
        <div key={c.cid}>{c.post_sj}</div>
      ))}
      <Main />
    </div>
  );
}
