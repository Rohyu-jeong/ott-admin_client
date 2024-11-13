import { MovieDataType } from "@/type/data/movieData";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

// 영화 추가하기
export const movieAdd = async (addMovieData: MovieDataType) => {
  try {
    // 배열 필드 처리
    const movieData = {
      ...addMovieData,
      genre_names: processStringOrArray(addMovieData.genre_names),
      director_names: processStringOrArray(addMovieData.director_names),
      production_company_names: processStringOrArray(addMovieData.production_company_names),
      category_names: processStringOrArray(addMovieData.category_names),
      runtime: Number(addMovieData.runtime), // 문자열을 숫자로 변환
    };

    console.log("Sending movie data:", movieData);

    const response = await axios.post(`${url}/admin/movie/add`, movieData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

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

export function processStringOrArray(input?: string | string[]): string[] {
  if (Array.isArray(input)) {
    return input.map((item) => item.trim());
  } else if (typeof input === "string") {
    return input.split(",").map((item) => item.trim());
  } else {
    return [];
  }
}