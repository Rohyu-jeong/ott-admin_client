import { headerContainerStyle } from "@/style/header";
import Fulllogo from "../atom/Fulllogo";
import Text from "../atom/Text";
import { HeaderPropsType } from "@/type/props/headerType";
import { useState } from "react";

const HeaderContainer = ({ setListCategory, setLogin }: HeaderPropsType) => {
  // 현제 항목 리스트 식별 번호
  const [count, setCount] = useState<1 | 2 | 3>(1);

  // 로그아웃 이벤트
  const handleLogout = () => {
    const isLogout = window.confirm("로그아웃하시겠습니까?");

    isLogout && setLogin(false);
  };

  return (
    <div className="w-screen h-fit flex justify-center fixed top-0 left-0 right-0 z-50 bg-black">
      <div className={`${headerContainerStyle}`}>
        <div className="flex justify-center items-center gap-2">
          <Fulllogo height="h-[40px]" width="w-[80px]" />
          <Text text="관리자" align="text-start" />
        </div>
        <div className="flex gap-3">
          {/* 콘텐츠 */}
          <div
            className={`w-fit h-full p-2 rounded-lg transition-all duration-300 ${
              count === 1 && "bg-main_Red"
            }`}
            onClick={() => {
              setListCategory("contents");
              setCount(1);
            }}
          >
            <Text text="콘텐츠" align="text-center" cursor="cursor-pointer" />
          </div>
          {/* 멤버 */}
          <div
            className={`w-fit h-full p-2 rounded-lg transition-all duration-300 ${
              count === 2 && "bg-main_Red"
            }`}
            onClick={() => {
              setListCategory("member");
              setCount(2);
            }}
          >
            <Text text="멤버" align="text-center" cursor="cursor-pointer" />
          </div>
          {/* 프로필 */}
          <div
            className={`w-fit h-full p-2 rounded-lg transition-all duration-300 ${
              count === 3 && "bg-main_Red"
            }`}
            onClick={() => {
              setListCategory("profile");
              setCount(3);
            }}
          >
            <Text text="프로필" align="text-center" cursor="cursor-pointer" />
          </div>
          {/* 로그아웃 */}
          <div className="w-fit h-full p-2" onClick={() => handleLogout()}>
            <Text text="로그아웃" align="text-center" cursor="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
