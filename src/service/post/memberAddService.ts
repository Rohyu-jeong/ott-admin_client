import { MemberAddType } from "@/type/service/memberType";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

// 멤버 데이터 추가하기
export const memberAdd = async (memberData: MemberAddType) => {
  try {
    const response = await axios
      .post(`${url}/admin/member/add`, memberData)
      .then((res) => res.data);

    console.log(response.message);

    return response;
  } catch (error) {
    console.log("서버요청에 실패하였습니다 : ", error);
  }
};
