// 멤버 프로필 수정, 삭제 서비스 인수 타입
export type memberProfileDataType = {
  memberprofileId: number;
  newName: string;
  newEmail: string;
  newPassword: string;
};

// 멤버 프로필 추가 타입
export type MemberProfileAddType = {
  memberId: number;
  name: string;
  email: string;
  password: string;
};
