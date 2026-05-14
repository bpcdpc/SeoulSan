export interface Paging {
  page_no: number;
  page_size: number;
  total_count: number;
}

export interface Traffic {
  adres: string;
  new_zip_code: string;
  new_adres: string;
  map_position_x: string;
  map_position_y: string;
  subway_info: string;
}

export interface Extra {
  cmmn_telno: string;
  cmmn_hmpg_url: string;
  cmmn_use_time: string;
  cmmn_important: string;
  disabled_facility: string[];
  closed_days: string;
}

export interface Category {
  com_ctgry_sn: string;
  ctgry_nm: string;
  ctgry_path: string;
  ctgry_level: number;
  sort_no: number;
}

export interface ContentListItem {
  cid: string;
  lang_code_id: string;
  com_ctgry_sn: string;
  cate_depth: string;
  multi_lang_list: string;
  main_img: string;
  post_sj: string;
  sumry: string;
  creat_dt_text: string;
  updt_dt_text: string;
}

export interface ContentInfoItem extends ContentListItem {
  relate_img: string[];
  schdul_info_bgnde: string;
  schdul_info_endde: string;
  tag: string[];
  traffic: Traffic;
  extra: Extra;
}

export interface Mountain {
  overview: ContentListItem; // 요약 정보 (목록 정보)
  relate_img: string[]; // 상세 정보에서 추출
  traffic: Traffic; // 상세 정보에서 추출
}

export interface Response<T> {
  data: T;
  paging?: Paging;
  result_code: number;
  result_message: string;
}

// export interface ContentInfo {
//   cid: string;
//   lang_code_id: string;
//   com_ctgry_sn: string;
//   cate_depth: string;
//   multi_lang_list: string;
//   main_img: string;
//   relate_img: string[];
//   post_sj: string;
//   sumry: string;
//   schdul_info_bgnde: string;
//   schdul_info_endde: string;
//   creat_dt_text: string;
//   updt_dt_text: string;
//   tag: string[];
//   extra: {
//     cmmn_telno: string;
//     cmmn_hmpg_url: string;
//     cmmn_use_time: string;
//     cmmn_important: string;
//     disabled_facility: string[];
//     closed_days: string;
//   };
//   traffic: {
//     adres: string;
//     new_zip_code: string;
//     new_adres: string;
//     map_position_x: string;
//     map_position_y: string;
//     subway_info: string;
//   };
//   tourist: {
//     guidance_service: string;
//     safe_mng: string;
//   };
//   post_desc: string;
// }

// export interface Mountain {
//   item: ContentListItem;
//   traffic: Traffic;
// }
