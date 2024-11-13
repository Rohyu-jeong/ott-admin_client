import { MemberProfileAddType } from "@/type/service/memberProfileType";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

// 멤버 프로필 추가하기
export const profileAdd = async (profileData: MemberProfileAddType) => {
  try {
    // 요청 본문 데이터 확인
    console.log("Sending profile data:", profileData);

    const response = await axios.post(`${url}/admin/memberprofile/add`, profileData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data.message);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.log("서버요청에 실패하였습니다 : ", error.response.data);
    } else {
      console.log("서버요청에 실패하였습니다 : ", error.message);
    }
  }
};
