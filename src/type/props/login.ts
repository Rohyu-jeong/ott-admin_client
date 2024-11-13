import { Dispatch, SetStateAction } from "react";

// 로그인 Props 타입
export type LoginPropsType = {
  setLogin: Dispatch<SetStateAction<boolean>>;
};
