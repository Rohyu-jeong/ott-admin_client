import { arrowIconStyle } from "@/style/atom";
import { ArrowiconPropsType } from "@/type/props/atom";
import { MdArrowDropDown } from "react-icons/md";

// 화살표 아이콘 {rotate : 회전 방향}
const Arrowicon = ({ rotate }: ArrowiconPropsType) => {
  return (
    <div className={`${arrowIconStyle} ${rotate}`}>
      <MdArrowDropDown />
    </div>
  );
};

export default Arrowicon;
