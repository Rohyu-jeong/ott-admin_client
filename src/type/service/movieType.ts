// 추가할 영화 데이터 타입
export type addMovieDataType = {
  movie_id: number;
  movie_title: string;
  age_rating:
    | "전체 관람가"
    | "12세 이상 관람가"
    | "15세 이상 관람가"
    | "청소년 관람불가";
  runtime: number;
  movie_rating: string;
  teaser_url: string;
  poster_img: string;
  plot_summary: string;
  release_date: string;
  genre_names?: string | string[];
  director_names?: string | string[];
  production_company_names?: string | string[];
  category_names?: string | string[];
};
