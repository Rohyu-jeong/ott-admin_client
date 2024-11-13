import { Dispatch, SetStateAction } from "react";

// 추가하기 모달 Props 타입
export type AddModalPropsType = {
  setAddModalOpen: Dispatch<SetStateAction<boolean>>;
  listCategory: "member" | "profile" | "contents";
  setDataReload : Dispatch<SetStateAction<boolean>>
};
