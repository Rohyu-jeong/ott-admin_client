import { inputBoxStyle } from "@/style/molecule";
import Input from "../atom/Input";
import Title from "../atom/Title";
import { InputBoxPropsType } from "@/type/props/molecule";
import { useEffect, useState } from "react";
import { MemberDataType } from "@/type/data/memberData";
import { MovieDataType } from "@/type/data/movieData";
import { MemberProfileDataType } from "@/type/data/memberProfileData";
import { inputStyle } from "@/style/atom";

// 콘텐츠 라벨
const labelDataForMovie = [
  { id: 0, title: "고유식별번호" },
  { id: 1, title: "영화 제목" },
  { id: 2, title: "시청 연령" },
  { id: 3, title: "평점" },
  { id: 4, title: "장르" },
  { id: 5, title: "카테고리" },
  { id: 6, title: "개봉일" },
  { id: 7, title: "런타임" },
  { id: 8, title: "포스터 URL" },
  { id: 9, title: "티저 영상 URL" },
  { id: 10, title: "제작사" },
  { id: 11, title: "감독" },
  { id: 12, title: "시놉시스" },
];
// 멤버 라벨
const labelDataForMember = [
  { id: 0, title: "고유식별번호" },
  { id: 1, title: "이름" },
  { id: 2, title: "이메일" },
  { id: 3, title: "비밀번호" },
  { id: 4, title: "멤버십 ID" },
];
// 프로필 라벨
const labelDataForProfle = [
  { id: 0, title: "고유식별번호" },
  { id: 1, title: "멤버식별번호" },
  { id: 2, title: "이름" },
  { id: 3, title: "이메일" },
  { id: 4, title: "비밀번호" },
];

const InputBox = ({
  data,
  ple,
  textColor,
  index,
  listCategory,
  setDataSet,
}: InputBoxPropsType) => {
  // 데이터 카테고리 필터링
  const [datas, setDatas] = useState<any[]>([]);

  useEffect(() => {
    if (listCategory === "contents" && "movie_id" in data) {
      setDatas([
        data.movie_id,
        data.movie_title,
        data.age_rating,
        data.movie_rating,
        data.genre_names,
        data.category_names,
        data.release_date,
        data.runtime,
        data.poster_img,
        data.teaser_url,
        data.production_company_names,
        data.director_names,
        data.plot_summary,
      ]);
    } else if (listCategory === "member" && "email" in data) {
      setDatas([
        data.id,
        data.name,
        data.email,
        data.password,
        data.membership_id,
      ]);
    } else if (listCategory === "profile" && "member_email" in data) {
      setDatas([
        data.id,
        data.member_id,
        data.member_name,
        data.member_email,
        data.member_password,
      ]);
    }
  }, [data, listCategory]);

  const isMovieData = (data: any): data is MovieDataType => "movie_id" in data;
  const isMemberData = (data: any): data is MemberDataType => "id" in data;
  const isProfileData = (data: any): data is MemberProfileDataType =>
    "member_id" in data;

  return (
    <>
      {(listCategory === "contents" && isMovieData(data)
        ? labelDataForMovie
        : listCategory === "member" && isMemberData(data)
        ? labelDataForMember
        : listCategory === "profile" && isProfileData(data)
        ? labelDataForProfle
        : []
      ).map((label, i) => (
        <div className={`${inputBoxStyle}`} key={label.id}>
          <Title
            title={label.title}
            size="text-sm"
            textColor={textColor}
            align="text-start"
          />
          {i !== 12 ? (
            <Input
              data={data}
              ple={datas[i]}
              setDataSet={setDataSet}
              i={i}
              listCategory={listCategory}
            />
          ) : (
            <textarea className={`${inputStyle}`} placeholder={datas[i]} />
          )}
        </div>
      ))}
    </>
  );
};

export default InputBox;
