import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

// 전체 영화 데이터 읽어오기
export const movieGet = async () => {
  try {
    const response = await axios
      .get(`${url}/admin/movie`)
      .then((res) => res.data);

    return response;
  } catch (error) {
    console.log("서버요청에 실패하였습니다 : ", error);
  }
};
