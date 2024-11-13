// 멤버 수정, 삭제 서비스 인수 타입
export type memberDataType = {
  memberId: number;
  newName: string;
  newEmail: string;
  newPassword: string;
};

// 멤버 추가 데이터 타입
export type MemberAddType = {
  name: string;
  email: string;
  password: string;
  cardNumber: string;
  expiryDate: string;
  paymentDate: string;
  cardName: string;
  amount: number;
};
