"use client";

import AddModal from "@/components/AddModal";
import ListBox from "@/components/cluster/ListBox";
import HeaderContainer from "@/components/header/HeaderContainer"; // 헤더
import Login from "@/components/Login";
import { memberGet } from "@/service/get/memberGetService";
import { memberProfileGet } from "@/service/get/memberProfileGetService";
import { movieGet } from "@/service/get/movieGetService";
import { MemberDataType } from "@/type/data/memberData";
import { MemberProfileDataType } from "@/type/data/memberProfileData";
import { MovieDataType } from "@/type/data/movieData";
import { ChangeEvent, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

// "/" (루트 페이지)
export default function Home() {
  // 로그인 상태
  const [login, setLogin] = useState<boolean>(true);
  // 리스트 카테고리
  const [listCategory, setListCategory] = useState<
    "member" | "profile" | "contents"
  >("contents");

  // 추가하기 모달 오픈 상태
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);

  // 데이터 리로드 의존성
  const [dataReload, setDataReload] = useState<boolean>(false);

  // 데이터
  const [datas, setDatas] = useState<
    MovieDataType[] | MemberDataType[] | MemberProfileDataType[]
  >([]);
  const [movies, setMovies] = useState<MovieDataType[]>([]); // 콘텐츠 데이터
  const [members, setMembers] = useState<MemberDataType[]>([]); // 멤버 데이터
  const [memberProfiles, setMemberProfiles] = useState<MemberProfileDataType[]>(
    []
  ); // 프로필 데이터

  // 검색 입력란 필터 핸들러
  const handleFiltering = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    // 필터링된 데이터
    const filteredData = (() => {
      // 콘텐츠
      if (listCategory === "contents") {
        return movies.filter((movie) =>
          movie.movie_title.toLowerCase().includes(query)
        );
      }
      // 멤버
      if (listCategory === "member") {
        return members.filter((member) =>
          member.name.toLowerCase().includes(query)
        );
      }
      // 프로필
      if (listCategory === "profile") {
        return memberProfiles.filter((profile) =>
          profile.member_name.toLowerCase().includes(query)
        );
      }
      return [];
    })();

    setDatas(filteredData);
  };

  // 영화 데이터 가져오기
  useEffect(() => {
    const fetchMovie = async () => {
      const moviesData: MovieDataType[] = await movieGet();

      // 중복 제거
      const uniqueMovies: MovieDataType[] = Array.from(
        new Map(
          moviesData.map((movie: MovieDataType) => [movie.movie_id, movie])
        ).values()
      );

      setMovies(uniqueMovies);
    };
    fetchMovie();
  }, [dataReload, listCategory]);

  // 멤버 데이터 가져오기
  useEffect(() => {
    const fetchMember = async () => {
      const membersData = await memberGet();
      setMembers(membersData);
    };
    fetchMember();
  }, [dataReload, listCategory]);

  // 멤버 프로필 데이터 가져오기
  useEffect(() => {
    const fetchMemberProfile = async () => {
      const memberProfilesData = await memberProfileGet();
      setMemberProfiles(memberProfilesData);
    };
    fetchMemberProfile();
  }, [dataReload, listCategory]);

  // 데이터 상태 업데이트
  useEffect(() => {
    setDatas(
      listCategory === "contents"
        ? movies
        : listCategory === "member"
        ? members
        : listCategory === "profile"
        ? memberProfiles
        : []
    );
  }, [listCategory, movies, members, memberProfiles, dataReload]);

  // 타입 가드 함수
  const isMovieData = (
    data: MovieDataType | MemberDataType | MemberProfileDataType
  ): data is MovieDataType => {
    return (data as MovieDataType).movie_id !== undefined;
  };

  return (
    <main
      className={`w-screen h-screen bg-white overflow-x-hidden flex justify-center px-8 ${
        login ? "pt-[120px]" : "items-center"
      }`}
    >
      {login ? (
        <div className="w-full h-fit flex flex-col">
          {/* 헤더 */}
          <HeaderContainer
            setListCategory={setListCategory}
            setLogin={setLogin}
          />
          <div className="w-full h-fit flex justify-between items-center px-2 relative">
            <button className="w-fit h-[50px] text-lg font-bold text-start px-2 bg-black text-white rounded-lg">
              {listCategory === "contents"
                ? "콘텐츠" + ` - ${movies.length}개 항목`
                : listCategory === "member"
                ? "멤버" + ` - ${members.length}개 항목`
                : "프로필" + ` - ${memberProfiles.length}개 항목`}
            </button>
            {/* 검색란 */}
            <div className="w-[30vw] h-[50px] mx-auto relative">
              <input
                type="text"
                onChange={(e) => handleFiltering(e)}
                className="w-full h-full text-lg bg-black/70  outline-none rounded-md text-white px-4 font-bold"
              />
              <div className="absolute top-2 right-4 text-3xl text-white">
                <CiSearch />
              </div>
            </div>
            {/* 추가 버튼 */}
            <button
              className="bg-main_Red w-[150px] h-[50px] text-white font-semibold text-lg rounded-lg"
              onClick={() => setAddModalOpen(true)}
            >
              추가하기
            </button>
          </div>
          {/* 콘텐츠 리스트 */}
          {datas.map((data, index: number) => (
            <div
              key={
                isMovieData(data) ? data.movie_id : (data as MemberDataType).id
              }
            >
              <ListBox
                data={data}
                index={index}
                listCategory={listCategory}
                setDataReload={setDataReload}
              />
            </div>
          ))}
          {/* 추가 모달 */}
          {addModalOpen && (
            <div className="w-screen h-screen bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-50">
              <AddModal
                setAddModalOpen={setAddModalOpen}
                listCategory={listCategory}
                setDataReload={setDataReload}
              />
            </div>
          )}
        </div>
      ) : (
        // 로그인 페이지
        <Login setLogin={setLogin} />
      )}
    </main>
  );
}
