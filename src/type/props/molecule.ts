import { Dispatch, SetStateAction } from "react";
import { MovieDataType } from "../data/movieData";
import { MemberDataType } from "../data/memberData";
import { MemberProfileDataType } from "../data/memberProfileData";

// 입력란  박스 props 타입
export type InputBoxPropsType = {
  data: MovieDataType | MemberDataType | MemberProfileDataType;
  ple: string | number;
  textColor: "text-black" | "text-main_Red";
  index: number;
  listCategory: "member" | "profile" | "contents";
  setDataSet: Dispatch<
    SetStateAction<MovieDataType | MemberDataType | MemberProfileDataType>
  >;
};

// 리스트 헤더 Props 타입
export type ListHeaderPropsType = {
  data: MovieDataType | MemberDataType | MemberProfileDataType;
  setListBodyOpen: Dispatch<SetStateAction<boolean>>;
  listCategory: "member" | "profile" | "contents";
  dataSet: MovieDataType | MemberDataType | MemberProfileDataType;
  setDataReload: Dispatch<SetStateAction<boolean>>;
};

// 리스트 업데이트 드롭다운 Props 타입
export type ListUpDateBoxPropsType = {
  data: MovieDataType | MemberDataType | MemberProfileDataType;
  index: number;
  listBodyOpen: boolean;
  listCategory: "member" | "profile" | "contents";
  setDataSet: Dispatch<
    SetStateAction<MovieDataType | MemberDataType | MemberProfileDataType>
  >;
};

// 버튼 박스 Props 타입
export type BtnBoxPropsType = {
  listCategory: "member" | "profile" | "contents";
  dataSet: MovieDataType | MemberDataType | MemberProfileDataType;
  setDataReload: Dispatch<SetStateAction<boolean>>;
};
