import { LoginPropsType } from "@/type/props/login";
import Fulllogo from "./atom/Fulllogo";
import Title from "./atom/Title";
import {
  loginBoxStyle,
  loginButtonStyle,
  loginInputBoxStyle,
  loginInputStyle,
  loginLabelStyle,
} from "@/style/login";
import { ChangeEvent, useState } from "react";
import { admin_name, admin_password } from "@/admin";

// 로그인 컴포넌트
const Login = ({ setLogin }: LoginPropsType) => {
  const [id, setId] = useState<string>();
  const [pw, setPw] = useState<string>();

  // 입력 이벤트
  const handleChange = (type: string, e: ChangeEvent<HTMLInputElement>) => {
    // 아이디 입력값
    if (type === "text") {
      setId(e.target.value);
    }

    if (type === "password") {
      // 비밀번호 입력값
      setPw(e.target.value);
    }
  };

  // 로그인 검사
  const handleSubmit = () => {
    const isId = id === admin_name;
    const isPw = pw === admin_password;

    if (isId && isPw) {
      setLogin(true);
    } else {
      window.alert("로그인 정보가 일치하지 않습니다!");
    }
  };

  return (
    <div className={`${loginBoxStyle}`}>
      <Fulllogo width="w-[200px]" height="h-[75px]" />
      <Title
        title="관리자"
        textColor="text-white"
        size="text-xl"
        align="text-center"
      />

      {/* 아이디 */}
      <div className={`${loginInputBoxStyle}`}>
        <label htmlFor="" className={`${loginLabelStyle}`}>
          아이디
        </label>
        <input
          className={`${loginInputStyle}`}
          type="text"
          onChange={(e) => handleChange("text", e)}
        />
      </div>

      {/* 비밀번호 */}
      <div className={`${loginInputBoxStyle}`}>
        <label htmlFor="" className={`${loginLabelStyle}`}>
          비밀번호
        </label>
        <input
          className={`${loginInputStyle}`}
          type="password"
          onChange={(e) => handleChange("password", e)}
        />
      </div>
      <button className={`${loginButtonStyle}`} onClick={handleSubmit}>
        로그인
      </button>
    </div>
  );
};

export default Login;
