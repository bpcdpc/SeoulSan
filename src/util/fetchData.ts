import { ENV } from "../config/env";

import type {
  Category,
  ContentListItem,
  Response,
  ContentInfoItem,
} from "../types/types";

type FetchDataProps = {
  url: string;
  method: string;
  catId?: string;
  contentId?: string;
};

async function fetchData<T>({
  url,
  method,
  catId = "",
  contentId = "",
}: FetchDataProps): Promise<T | null> {
  try {
    const headers = {
      "VISITSEOUL-API-KEY": ENV.VS_API_KEY,
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "application/json;charset=UTF-8",
    };

    const body = catId
      ? { com_ctgry_sn: catId }
      : contentId
        ? { cid: contentId }
        : undefined;

    const res = await fetch(url, {
      method: method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    // if (!res.ok) {
    //   const errorText = await res.text();
    //   console.log("HTTP Error:", res.status, errorText);
    //   throw new Error(`HTTP Error ${res.status} : ${errorText}`);
    // }

    if (!res.ok) {
      const errorText = await res.text();

      console.log({
        url,
        method,
        contentId,
        catId,
        status: res.status,
        errorText,
      });

      throw new Error(`HTTP Error ${res.status} : ${errorText}`);
    }

    const data: Response<T> = await res.json();
    return data.data;
  } catch (err) {
    if (err instanceof Error) console.log(err);
    return null;
  }
}

async function fetchCategoryList(): Promise<Category[]> {
  const url = `${ENV.VS_BASE_URL}/category/list`;
  const method = "GET";
  const result = await fetchData<Category[]>({ url, method });
  return result!;
}

export async function fetchContentListItems(): Promise<ContentListItem[]> {
  const url = `${ENV.VS_BASE_URL}/contents/list`;
  const method = "POST";

  const catList: Category[] = await fetchCategoryList();
  const targetCat: Category[] = getCatId(catList);

  const contentListItems = await fetchData<ContentListItem[]>({
    url,
    method,
    catId: targetCat[0].com_ctgry_sn,
  });

  return contentListItems!;
}

export async function fetchContentInfoItems(): Promise<ContentInfoItem[]> {
  const contentListItems = await fetchContentListItems();

  const targetIds: string[] = contentListItems.map((i) => i.cid);

  const url = `${ENV.VS_BASE_URL}/contents/info`;
  const method = "POST";

  //   console.log(targetIds);

  //   return [];

  //   const result: (ContentInfoItem | null)[] = await Promise.all(
  //     targetIds.map((targetId) =>
  //       fetchData<ContentInfoItem>({
  //         url,
  //         method,
  //         contentId: targetId,
  //       }),
  //     ),
  //   );

  const contentInfoItems: ContentInfoItem[] = [];

  for (const targetId of targetIds) {
    const item = await fetchData<ContentInfoItem>({
      url,
      method,
      contentId: targetId,
    });

    if (item) contentInfoItems.push(item);

    await delay(1000);
  }

  //   const contentInfoItems: ContentInfoItem[] = result.filter(
  //     (item): item is ContentInfoItem => item !== null,
  //   );

  return contentInfoItems;
}

function getCatId(catList: Category[]): Category[] {
  const catName = ENV.VS_CAT_NAME;
  return catList.filter((cat) => cat.ctgry_nm.includes(catName));
}

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
