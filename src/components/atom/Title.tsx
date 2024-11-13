import { titleStyle } from "@/style/atom";
import { TitlePropsType } from "@/type/props/atom";
import { text } from "stream/consumers";

// 타이틀 { title : 내용, size : 폰트크기 , textColor : 글자 색상, align : 글자 시작 위치  }
const Title = ({ title, size, textColor, align }: TitlePropsType) => {
  return (
    <span className={`${titleStyle} ${size} ${textColor} ${align}`}>
      {title}
    </span>
  );
};

export default Title;
