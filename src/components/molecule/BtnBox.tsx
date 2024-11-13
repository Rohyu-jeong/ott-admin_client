import { buttonBoxStyle } from "@/style/molecule";
import Button from "../atom/Button";
import { BtnBoxPropsType } from "@/type/props/molecule";
import { movieSetService } from "@/service/post/movieSetService";
import { MovieDataType } from "@/type/data/movieData";
import { movieDel } from "@/service/delete/movieDelService";
import { memberSet } from "@/service/post/memberSetService";
import { profileSet } from "@/service/post/memberProfileSetService";
import { memberDel } from "@/service/delete/memberDelService";
import { profileDel } from "@/service/delete/memberProfileDelService";

// 버튼 박스
const BtnBox = ({ listCategory, dataSet, setDataReload }: BtnBoxPropsType) => {
  // 변경된 값 저장 이벤트
  const handleSave = async () => {
    // 콘텐츠 정보 변경
    if (listCategory === "contents" && "movie_id" in dataSet) {
      const isSet = window.confirm(
        dataSet.movie_title + "콘텐츠 정보를 변경하시겠습니까?"
      );
      if (isSet) {
        await movieSetService(dataSet);
        console.log(dataSet);
        setDataReload((prev) => !prev);
      }
    }
    // 멤버 정보 변경
    if (listCategory === "member" && "email" in dataSet) {
      const isSet = window.confirm(
        dataSet.name + "멤버 정보를 변경하시겠습니까?"
      );

      if (isSet) {
        await memberSet(dataSet);
        console.log(dataSet);
        setDataReload((prev) => !prev);
      }
    }
    // 프로필 정보 변경
    if (listCategory === "profile" && "member_email" in dataSet) {
      const isSet = window.confirm(
        dataSet.member_name + "프로필 정보를 변경하시겠습니까?"
      );

      if (isSet) {
        await profileSet(dataSet);
        console.log(dataSet);
        setDataReload((prev) => !prev);
      }
    }
  };

  // 삭제 이벤트
  const handleDelete = async () => {
    console.log(dataSet);

    // 콘텐츠 삭제
    if (listCategory === "contents" && "movie_id" in dataSet) {
      const isDel = window.confirm(
        dataSet.movie_title + "콘텐츠를 삭제하시겠습니까?"
      );

      if (isDel) {
        await movieDel(dataSet.movie_id);
        console.log(dataSet);
        setDataReload((prev) => !prev);
      }
    }
    // 멤버 삭제
    if (listCategory === "member" && "email" in dataSet) {
      const isDel = window.confirm(dataSet.name + "멤버를 삭제하시겠습니까?");

      if (isDel) {
        await memberDel(dataSet.id);
        console.log(dataSet);
        setDataReload((prev) => !prev);
      }
    }
    // 프로필 삭제
    if (listCategory === "profile" && "member_email" in dataSet) {
      const isDel = window.confirm(
        dataSet.member_name + "프로필를 삭제하시겠습니까?"
      );

      if (isDel) {
        await profileDel(dataSet.id);
        console.log(dataSet);
        setDataReload((prev) => !prev);
      }
    }
  };

  return (
    <div className={`${buttonBoxStyle}`}>
      <Button
        text="저장하기"
        textColor="text-white"
        bgColor="bg-main_Red"
        onEvent={handleSave}
      />
      <Button
        text="삭제하기"
        textColor="text-black"
        bgColor="bg-white"
        onEvent={handleDelete}
      />
    </div>
  );
};

export default BtnBox;
