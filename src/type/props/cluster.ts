import { Dispatch, SetStateAction } from "react";
import { MemberDataType } from "../data/memberData";
import { MemberProfileDataType } from "../data/memberProfileData";
import { MovieDataType } from "../data/movieData";

// 리스트 박스 Props 타입
export type ListBoxPropsBox = {
  data: MovieDataType | MemberDataType | MemberProfileDataType;
  index: number;
  listCategory: "member" | "profile" | "contents";
  setDataReload: Dispatch<SetStateAction<boolean>>;
};
