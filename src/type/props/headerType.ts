import { Dispatch, SetStateAction } from "react";

export type HeaderPropsType = {
  setListCategory: Dispatch<SetStateAction<"member" | "profile" | "contents">>;
  setLogin: Dispatch<SetStateAction<boolean>>;
};
