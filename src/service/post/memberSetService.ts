import { MemberDataType } from "@/type/data/memberData";
import { memberDataType } from "@/type/service/memberType";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

// 멤버 데이터 수정하기
export const memberSet = async (memberData: MemberDataType) => {
  try {
    const response = await axios
      .post(`${url}/admin/member`, memberData)
      .then((res) => res.data);

    console.log(response.message);

    return response;
  } catch (error) {
    console.log("서버요청에 실패하였습니다 : ", error);
  }
};
