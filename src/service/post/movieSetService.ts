import { MovieDataType } from "@/type/data/movieData";
import { addMovieDataType } from "@/type/service/movieType";
import axios from "axios";
import { processStringOrArray } from "./movieAddService";

const url = process.env.NEXT_PUBLIC_API_URL;

// 영화 데이터 수정하기
export const movieSetService = async (setMovieData: MovieDataType) => {
  try {
    // 배열 필드 처리
    const addData: addMovieDataType = {
      ...setMovieData,
      genre_names: processStringOrArray(setMovieData.genre_names),
      director_names: processStringOrArray(setMovieData.director_names),
      production_company_names: processStringOrArray(setMovieData.production_company_names),
      category_names: processStringOrArray(setMovieData.category_names),
      runtime: Number(setMovieData.runtime), // 문자열을 숫자로 변환
    };

    console.log("Sending movie update data:", addData);

    const response = await axios.post(
      `${url}/admin/movie`,
      {
        ...addData,
        newId: addData.movie_id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data.message);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("서버 요청에 실패하였습니다:", error.response.data);
    } else {
      console.error("서버 요청에 실패하였습니다:", error.message);
    }
    throw error;
  }
};
