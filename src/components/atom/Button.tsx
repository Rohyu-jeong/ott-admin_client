import { buttonStyle } from "@/style/atom";
import { ButtonPropsType } from "@/type/props/atom";

// 버튼 컴포넌트 { text : 버튼 내용 , bgColor : 배경색 , textColor : 글자 색상 }
const Button = ({ text, bgColor, textColor, onEvent }: ButtonPropsType) => {
  return (
    <button className={`${buttonStyle} ${bgColor} ${textColor}`} onClick={onEvent}>{text}</button>
  );
};

export default Button;
