"use client";

import { listHeaderContentStyle, listHeaderStyle } from "@/style/molecule";
import Title from "../atom/Title";
import { ListHeaderPropsType } from "@/type/props/molecule";
import Arrowicon from "../atom/Arrowicon";
import BtnBox from "./BtnBox";
import { useEffect, useState } from "react";
import { MovieDataType } from "@/type/data/movieData";
import { MemberDataType } from "@/type/data/memberData";
import { MemberProfileDataType } from "@/type/data/memberProfileData";

// 리스트 헤더
const ListHeader = ({
  data,
  setListBodyOpen,
  listCategory,
  dataSet,
  setDataReload
}: ListHeaderPropsType) => {
  // 상태 타입을 MovieDataType 또는 memberDataType으로 설정
  const [datas, setDatas] = useState<
    MovieDataType | MemberDataType | MemberProfileDataType | null
  >(null);

  useEffect(() => {
    if (listCategory === "contents" && "movie_id" in data) {
      setDatas(data as MovieDataType);
    } else if (listCategory === "member" && "id" in data) {
      setDatas(data as MemberDataType);
    } else if (listCategory === "profile" && "member_id" in data) {
      setDatas(data as MemberProfileDataType);
    }
  }, [data, listCategory]);

  // 멤버 데이터와 영화 데이터의 타이틀 렌더링
  return (
    <div className={`${listHeaderStyle}`}>
      <div className={`${listHeaderContentStyle}`}>
        {/* 콘텐츠 */}
        {listCategory === "contents" && datas && (
          <>
            <Title
              title={String((datas as MovieDataType).movie_id)}
              size="text-xl"
              textColor="text-white"
              align="text-start"
            />
            <Title
              title={(datas as MovieDataType).movie_title}
              size="text-xl"
              textColor="text-white"
              align="text-start"
            />
            <Title
              title={(datas as MovieDataType).genre_names}
              size="text-xl"
              textColor="text-white"
              align="text-start"
            />
            <Title
              title={(datas as MovieDataType).runtime}
              size="text-xl"
              textColor="text-white"
              align="text-start"
            />
            <Title
              title={(datas as MovieDataType).release_date}
              size="text-xl"
              textColor="text-white"
              align="text-start"
            />
          </>
        )}
        {/* 멤버 */}
        {listCategory === "member" && datas && (
          <>
            <Title
              title={String((datas as MemberDataType).id)}
              size="text-xl"
              textColor="text-white"
              align="text-start"
            />
            <Title
              title={(datas as MemberDataType).name}
              size="text-xl"
              textColor="text-white"
              align="text-start"
            />
            <Title
              title={(datas as MemberDataType).email}
              size="text-xl"
              textColor="text-white"
              align="text-start"
            />
          </>
        )}
        {/* 프로필  */}
        {listCategory === "profile" && datas && (
          <>
            <Title
              title={String((datas as MemberProfileDataType).id)}
              size="text-xl"
              textColor="text-white"
              align="text-start"
            />
            <Title
              title={String((datas as MemberProfileDataType).member_id)}
              size="text-xl"
              textColor="text-white"
              align="text-start"
            />
            <Title
              title={(datas as MemberProfileDataType).member_name}
              size="text-xl"
              textColor="text-white"
              align="text-start"
            />
            <Title
              title={(datas as MemberProfileDataType).member_email}
              size="text-xl"
              textColor="text-white"
              align="text-start"
            />
            <Title
              title={(datas as MemberProfileDataType).member_password}
              size="text-xl"
              textColor="text-white"
              align="text-start"
            />
          </>
        )}
      </div>
      <div className={`${listHeaderContentStyle}`}>
        <BtnBox listCategory={listCategory} dataSet={dataSet} setDataReload={setDataReload} />
        <div onClick={() => setListBodyOpen((prev) => !prev)}>
          <Arrowicon rotate="rotate-0" />
        </div>
      </div>
    </div>
  );
};

export default ListHeader;
