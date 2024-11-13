import { Dispatch, SetStateAction } from "react";
import { MovieDataType } from "../data/movieData";
import { MemberDataType } from "../data/memberData";
import { MemberProfileDataType } from "../data/memberProfileData";

// 버튼 props 타입
export type ButtonPropsType = {
  text: string;
  bgColor: "bg-main_Red" | "bg-white";
  textColor: "text-white" | "text-main_Red" | "text-black";
  onEvent: () => void;
};

// 입력란 props 타입
export type InputPropsType = {
  ple: string | number;
  i: number;
  listCategory: "member" | "profile" | "contents";
  setDataSet: Dispatch<
    SetStateAction<MovieDataType | MemberDataType | MemberProfileDataType>
  >;
  data: MovieDataType | MemberDataType | MemberProfileDataType;
};

// 타이틀 Props 타입
export type TitlePropsType = {
  title: string;
  size: "text-sm" | "text-xl";
  textColor: "text-white" | "text-main_Red" | "text-black";
  align: "text-center" | "text-start" | "text-end";
};

// 재사용 가능한 타이틀 Props 타입
export type TextPropsType = {
  text: string;
  align?: "text-center" | "text-start";
  cursor?: "cursor-pointer";
};

// 재사용 가능한 로고 이미지 props 타입
export type LogoPropsType = {
  // 홈 페이지 타이틀 | 폼  | 사이드 바 or 푸터 | 모달 | 본문
  width: "w-[400px]" | "w-[300px]" | "w-[200px]" | "w-[150px]" | "w-[80px]";
  height: "h-[200px]" | "h-[150px]" | "h-[100px]" | "h-[75px]" | "h-[40px]";
};

// 화살표 아이콘 Props 타입
export type ArrowiconPropsType = {
  rotate: "rotate-180" | "rotate-0";
};
