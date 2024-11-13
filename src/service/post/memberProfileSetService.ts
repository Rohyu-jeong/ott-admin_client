import { MemberProfileDataType } from "@/type/data/memberProfileData";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

// 멤버 프로필 데이터 수정하기
export const profileSet = async (memberProfileData: MemberProfileDataType) => {
  try {
    const response = await axios
      .post(`${url}/admin/memberprofile`, memberProfileData)
      .then((res) => res.data);

    console.log(response.message);

    return response;
  } catch (error) {
    console.log("서버요청에 실패하였습니다 : ", error);
  }
};
