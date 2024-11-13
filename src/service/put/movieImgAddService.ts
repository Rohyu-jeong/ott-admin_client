import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

// 특정 콘텐츠 삭제하기
export const movieImgAdd = async () => {
  try {
    const response = await axios
      .put(`${url}/admin/movie/poster`)
      .then((res) => res.data);

    console.log(response.message);

    return response;
  } catch (error) {
    console.log("서버요청에 실패하였습니다 : ", error);
  }
};