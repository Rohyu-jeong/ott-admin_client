import { memberAdd } from "@/service/post/memberAddService";
import { profileAdd } from "@/service/post/memberProfileAddService";
import { movieAdd } from "@/service/post/movieAddService";
import { MemberDataType } from "@/type/data/memberData";
import { MemberProfileDataType } from "@/type/data/memberProfileData";
import { MovieDataType } from "@/type/data/movieData";
import { AddModalPropsType } from "@/type/props/modal";
import { MemberProfileAddType } from "@/type/service/memberProfileType";
import { MemberAddType } from "@/type/service/memberType";
import { ChangeEvent, useEffect, useState } from "react";

// 콘텐츠 라벨
const labelDataForMovie = [
  { id: 0, title: "고유식별번호" },
  { id: 1, title: "영화 제목" },
  { id: 2, title: "시청 연령" },
  { id: 3, title: "평점" },
  { id: 4, title: "장르" },
  { id: 5, title: "카테고리" },
  { id: 6, title: "개봉일" },
  { id: 7, title: "런타임" },
  { id: 8, title: "포스터 URL" },
  { id: 9, title: "티저 영상 URL" },
  { id: 10, title: "제작사" },
  { id: 11, title: "감독" },
  { id: 12, title: "시놉시스" },
];

// 멤버 라벨
const labelDataForMember = [
  { id: 0, title: "이름" },
  { id: 1, title: "이메일" },
  { id: 2, title: "비밀번호" },
  { id: 3, title: "카드번호" },
  { id: 4, title: "유효 기간" },
  { id: 5, title: "결제 날짜" },
  { id: 6, title: "카드 명의" },
  { id: 7, title: "멤버쉽" }, // 멤버십 라벨 추가
];

// 프로필 라벨
const labelDataForProfle = [
  { id: 0, title: "멤버식별번호" },
  { id: 1, title: "이름" },
  { id: 2, title: "이메일" },
  { id: 3, title: "비밀번호" },
];

// 시청연령 선택 라벨
const contentAgeLobel = [
  { id: 0, label: "전체 관람가" },
  { id: 1, label: "12세 이상 관람가" },
  { id: 2, label: "15세 이상 관람가" },
  { id: 3, label: "청소년 관람불가" },
];

// 장르 선택 라벨
const contentGenre = [
  { id: 0, label: "액션", value: "action" },
  { id: 1, label: "애니메이션", value: "animation" },
  { id: 2, label: "코미디", value: "comedy" },
  { id: 3, label: "다큐멘터리", value: "documentary" },
  { id: 4, label: "공포", value: "horror" },
  { id: 5, label: "넷플릭스", value: "netflix" },
  { id: 6, label: "로맨스", value: "romance" },
  { id: 7, label: "스릴러", value: "thriller" },
];

// 멤버쉽 선택 라벨
const membershipOptions = [
  { id: 0, label: "광고형 스탠다드", value: 5500 },
  { id: 1, label: "스탠다드", value: 13500 },
  { id: 2, label: "프리미엄", value: 17000 },
];

// 추가하기 모달
const AddModal = ({
  setAddModalOpen,
  listCategory,
  setDataReload,
}: AddModalPropsType) => {
  const [radioAge, setRadioAge] = useState<number>(0);
  const [radioGenre, setRadioGenre] = useState<number>(0);
  const [radioMembership, setRadioMembership] = useState<number>(0);
  const [postFile, setPostFile] = useState<File | null>(null);

  const [addData, setAddData] = useState<
    MovieDataType | MemberAddType | MemberProfileAddType
  >(() => {
    if (listCategory === "contents") {
      return {
        age_rating: contentAgeLobel[0].label,
        category_names: "",
        director_names: "",
        genre_names: contentGenre[0].label,
        movie_id: 0,
        movie_title: "",
        plot_summary: "",
        poster_img: "",
        production_company_names: "",
        movie_rating: "",
        release_date: "",
        runtime: "",
        teaser_url: "",
      } as MovieDataType;
    } else if (listCategory === "member") {
      return {
        name: "",
        email: "",
        password: "",
        cardNumber: "",
        expiryDate: "",
        paymentDate: "",
        cardName: "",
        amount: membershipOptions[0].value, // 초기값 설정
      } as MemberAddType;
    } else if (listCategory === "profile") {
      return {
        memberId: 0,
        name: "",
        email: "",
        password: "",
      } as MemberProfileAddType;
    } else {
      return {
        memberId: 0,
        name: "",
        email: "",
        password: "",
      } as MemberProfileAddType;
    }
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    if (listCategory === "contents") {
      setAddData((prev) => {
        const updatedData = { ...prev } as MovieDataType;
        switch (i) {
          case 0:
            updatedData.movie_id = Number(e.target.value);
            break;
          case 1:
            updatedData.movie_title = e.target.value;
            break;
          case 2:
            updatedData.age_rating = contentAgeLobel[radioAge].label;
            break;
          case 3:
            updatedData.movie_rating = e.target.value;
            break;
          case 4:
            updatedData.genre_names = contentGenre[radioGenre].label;
            break;
          case 5:
            updatedData.category_names = e.target.value;
            break;
          case 6:
            updatedData.release_date = e.target.value;
            break;
          case 7:
            updatedData.runtime = e.target.value;
            break;
          case 8:
            updatedData.poster_img = e.target.value;
            break;
          case 9:
            updatedData.teaser_url = e.target.value;
            break;
          case 10:
            updatedData.production_company_names = e.target.value;
            break;
          case 11:
            updatedData.director_names = e.target.value;
            break;
          case 12:
            updatedData.plot_summary = e.target.value;
            break;
        }
        return updatedData;
      });
    } else if (listCategory === "member") {
      setAddData((prev) => {
        const updatedData = { ...prev } as MemberAddType;
        switch (i) {
          case 0:
            updatedData.name = e.target.value;
            break;
          case 1:
            updatedData.email = e.target.value;
            break;
          case 2:
            updatedData.password = e.target.value;
            break;
          case 3:
            updatedData.cardNumber = e.target.value;
            break;
          case 4:
            updatedData.expiryDate = e.target.value;
            break;
          case 5:
            updatedData.paymentDate = e.target.value;
            break;
          case 6:
            updatedData.cardName = e.target.value;
            break;
          case 7:
            updatedData.amount = membershipOptions[radioMembership].value;
            break;
        }
        return updatedData;
      });
    } else if (listCategory === "profile") {
      setAddData((prev) => {
        const updatedData = { ...prev } as MemberProfileAddType;
        switch (i) {
          case 0:
            updatedData.memberId = Number(e.target.value);
            break;
          case 1:
            updatedData.name = e.target.value;
            break;
          case 2:
            updatedData.email = e.target.value;
            break;
          case 3:
            updatedData.password = e.target.value;
            break;
        }
        return updatedData;
      });
    }
  };

  useEffect(() => {
    if (listCategory === "contents") {
      setAddData((prev) => {
        const updatedData = { ...prev } as MovieDataType;
        updatedData.age_rating = contentAgeLobel[radioAge].label;
        updatedData.genre_names = contentGenre[radioGenre].label;
        return updatedData;
      });
    }

    if (listCategory === "member") {
      setAddData((prev) => {
        const updatedData = { ...prev } as MemberAddType;
        updatedData.amount = membershipOptions[radioMembership].value;
        return updatedData;
      });
    }
  }, [radioAge, radioGenre, radioMembership, listCategory]);

  const handleAddData = async () => {
    if (listCategory === "contents" && "movie_id" in addData) {
      const isAdd = window.confirm("추가하시겠습니까?");
      if (isAdd) {
        await movieAdd(addData as MovieDataType, postFile);
        console.log(addData);
        setDataReload((prev) => !prev);
        setAddModalOpen(false);
      }
    } else if (listCategory === "member" && "cardNumber" in addData) {
      await memberAdd(addData as MemberAddType);
      console.log(addData);
      setDataReload((prev) => !prev);
      setAddModalOpen(false);
    } else if (listCategory === "profile" && "memberId" in addData) {
      await profileAdd(addData as MemberProfileAddType);
      console.log(addData);
      setDataReload((prev) => !prev);
      setAddModalOpen(false);
    }
  };

  console.log(addData);

  return (
    <div className="w-full h-full flex flex-col gap-4 justify-center items-center rounded-lg">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full cursor-pointer"
        onClick={() => setAddModalOpen(false)}
      ></div>
      <div
        className="w-[35vw] h-[80vh] bg-black overflow-auto flex flex-col justify-between text-white relative z-50"
        style={{ scrollbarColor: "#E50914 black", scrollbarWidth: "thin" }}
      >
        {listCategory === "contents" ? (
          labelDataForMovie.map((label, i) => (
            <div
              key={label.id}
              className={`rounded-xl w-full h-full flex justify-between items-center px-4 ${
                i % 2 === 0 ? "bg-[#333333]" : "bg-black"
              }`}
            >
              <label htmlFor={label.title} className="text-smg font-semibold">
                {label.title}
              </label>
              {i !== 2 && i !== 4 ? (
                <div
                  className={`w-[70%] flex flex-col gap-2 ${i === 8 && "py-2"}`}
                >
                  {i === 8 && (
                    <input
                      type="file"
                      className="w-full h-fit bg-white/20 rounded-lg cursor-pointer"
                      onChange={(e) =>
                        setPostFile(e.target.files ? e.target.files[0] : null)
                      }
                    />
                  )}
                  <input
                    type="text"
                    className="w-full h-[40px] rounded-lg bg-white/20 border-white border-2 px-2 text-sm outline-none"
                    onChange={(e) => handleInput(e, i)}
                  />
                </div>
              ) : i === 2 ? (
                <div className="w-[70%] flex flex-col gap-2 py-2">
                  {contentAgeLobel.map((label, index) => (
                    <div key={label.id} className="flex items-center gap-2">
                      <input
                        type="radio"
                        id={`age_${label.id}`}
                        value={label.label}
                        name="age_rating"
                        checked={radioAge === label.id}
                        className="cursor-pointer"
                        onChange={(e) => {
                          setRadioAge(label.id);
                          handleInput(e, i);
                        }}
                      />
                      <label
                        htmlFor={`age_${label.id}`}
                        className="text-sm text-white"
                      >
                        {label.label}
                      </label>
                    </div>
                  ))}
                </div>
              ) : i === 4 ? (
                <div className="w-[70%] flex flex-col gap-2 py-2">
                  {contentGenre.map((label, index) => (
                    <div key={label.id} className="flex items-center gap-2">
                      <input
                        type="radio"
                        id={`genre_${label.id}`}
                        value={label.label}
                        name="genre"
                        checked={radioGenre === label.id}
                        className="cursor-pointer"
                        onChange={(e) => {
                          setRadioGenre(label.id);
                          handleInput(e, i);
                        }}
                      />
                      <label
                        htmlFor={`genre_${label.id}`}
                        className="text-sm text-white"
                      >
                        {label.label}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          ))
        ) : listCategory === "member" ? (
          labelDataForMember.map((label, i) => (
            <div
              key={label.id}
              className={`rounded-xl w-full h-full flex justify-between items-center px-4 ${
                i % 2 === 0 ? "bg-[#333333]" : "bg-black"
              }`}
            >
              <label htmlFor={label.title} className="text-smg font-semibold">
                {label.title}
              </label>
              {i !== 7 ? (
                <input
                  type="text"
                  className="w-[70%] h-[40px] rounded-lg bg-white/20 border-white border-2 px-2 text-sm outline-none"
                  onChange={(e) => handleInput(e, i)}
                />
              ) : (
                <div className="w-[70%] flex gap-2 py-2">
                  {membershipOptions.map((option) => (
                    <div key={option.id} className="flex items-center gap-2">
                      <input
                        type="radio"
                        id={`membership_${option.id}`}
                        value={option.value}
                        name="membership"
                        checked={radioMembership === option.id}
                        className="cursor-pointer"
                        onChange={(e) => {
                          setRadioMembership(option.id);
                          handleInput(e, i);
                        }}
                      />
                      <label
                        htmlFor={`membership_${option.id}`}
                        className="text-sm text-white"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : listCategory === "profile" ? (
          labelDataForProfle.map((label, i) => (
            <div
              key={label.id}
              className={`rounded-xl w-full h-full flex justify-between items-center px-4 ${
                i % 2 === 0 ? "bg-[#333333]" : "bg-black"
              }`}
            >
              <label htmlFor={label.title} className="text-smg font-semibold">
                {label.title}
              </label>
              <input
                type="text"
                className="w-[70%] h-[40px] rounded-lg bg-white/20 border-white border-2 px-2 text-sm outline-none"
                onChange={(e) => handleInput(e, i)}
              />
            </div>
          ))
        ) : (
          <div>문제가 발생하였습니다.</div>
        )}
      </div>
      <button
        className="w-[150px] h-[50px] bg-main_Red rounded-lg text-lg font-semibold text-white relative z-50"
        onClick={() => handleAddData()}
      >
        추가하기
      </button>
    </div>
  );
};

export default AddModal;
