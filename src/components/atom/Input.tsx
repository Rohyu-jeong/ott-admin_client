import { inputStyle } from "@/style/atom";
import { InputPropsType } from "@/type/props/atom";
import { MovieDataType } from "@/type/data/movieData";
import { ChangeEvent } from "react";

// 입력란 { ple : placeholder }
const Input = ({ ple, listCategory, setDataSet, i, data }: InputPropsType) => {
  // 입력 이벤트
  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    // 콘텐츠 정보 입력
    if (listCategory === "contents" && "movie_id" in data) {
      switch (i) {
        case 0:
          setDataSet((prev) => ({ ...prev, movie_id: Number(e.target.value) }));
          break;
        case 1:
          setDataSet((prev) => ({ ...prev, movie_title: e.target.value }));
          break;
        case 2:
          setDataSet((prev) => ({
            ...prev,
            age_rating: e.target.value as MovieDataType["age_rating"],
          }));
          break;
        case 3:
          setDataSet((prev) => ({ ...prev, movie_rating: e.target.value }));
          break;
        case 4:
          setDataSet((prev) => ({
            ...prev,
            genre_names: e.target.value.split(",").map((item) => item.trim()),
          }));
          break;
        case 5:
          setDataSet((prev) => ({
            ...prev,
            category_names: e.target.value.split(",").map((item) => item.trim()),
          }));
          break;
        case 6:
          setDataSet((prev) => ({ ...prev, release_date: e.target.value }));
          break;
        case 7:
          setDataSet((prev) => ({ ...prev, runtime: Number(e.target.value) }));
          break;
        case 8:
          setDataSet((prev) => ({ ...prev, poster_img: e.target.value }));
          break;
        case 9:
          setDataSet((prev) => ({ ...prev, teaser_url: e.target.value }));
          break;
        case 10:
          setDataSet((prev) => ({
            ...prev,
            production_company_names: e.target.value
              .split(",")
              .map((item) => item.trim()),
          }));
          break;
        case 11:
          setDataSet((prev) => ({
            ...prev,
            director_names: e.target.value.split(",").map((item) => item.trim()),
          }));
          break;
        case 12:
          setDataSet((prev) => ({ ...prev, plot_summary: e.target.value }));
          break;
      }
    }
    // 멤버 정보 입력
    else if (listCategory === "member" && "password" in data) {
      switch (i) {
        case 0:
          setDataSet((prev) => ({ ...prev, id: Number(e.target.value) }));
          break;
        case 1:
          setDataSet((prev) => ({ ...prev, name: e.target.value }));
          break;
        case 2:
          setDataSet((prev) => ({ ...prev, email: e.target.value }));
          break;
        case 3:
          setDataSet((prev) => ({ ...prev, password: e.target.value }));
          break;
        case 4:
          setDataSet((prev) => ({ ...prev, membership_id: e.target.value }));
          break;
      }
    }
    // 프로필 정보 입력
    else if (listCategory === "profile" && "member_id" in data) {
      switch (i) {
        case 0:
          setDataSet((prev) => ({ ...prev, id: Number(e.target.value) }));
          break;
        case 1:
          setDataSet((prev) => ({ ...prev, member_id: Number(e.target.value) }));
          break;
        case 2:
          setDataSet((prev) => ({ ...prev, member_name: e.target.value }));
          break;
        case 3:
          setDataSet((prev) => ({ ...prev, member_email: e.target.value }));
          break;
        case 4:
          setDataSet((prev) => ({ ...prev, member_password: e.target.value }));
          break;
      }
    }
  };

  return (
    <input
      className={`${inputStyle}`}
      placeholder={String(ple)}
      onChange={handleInputValue}
    />
  );
};

export default Input;
