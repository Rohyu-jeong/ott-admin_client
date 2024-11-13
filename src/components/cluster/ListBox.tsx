"use client";

import ListHeader from "../molecule/ListHeader";
import { ListBoxPropsBox } from "@/type/props/cluster";
import { ListBoxStyle } from "@/style/cluster";
import ListUpDateBox from "../molecule/ListUpDateBox";
import { useEffect, useState } from "react";
import { MovieDataType } from "@/type/data/movieData";
import { MemberProfileDataType } from "@/type/data/memberProfileData";
import { MemberDataType } from "@/type/data/memberData";

// 리스트 박스 (행)
const ListBox = ({
  data,
  index,
  listCategory,
  setDataReload,
}: ListBoxPropsBox) => {
  // 입력 본문창 오픈 상태
  const [listBodyOpen, setListBodyOpen] = useState<boolean>(false);

  // 변경될 콘텐츠 값
  const [dataSet, setDataSet] = useState<
    MovieDataType | MemberDataType | MemberProfileDataType
  >(() => {
    if (listCategory === "contents" && "movie_id" in data) {
      return {
        age_rating: data.age_rating,
        category_names: data.category_names,
        director_names: data.director_names,
        genre_names: data.genre_names,
        movie_id: data.movie_id,
        movie_title: data.movie_title,
        plot_summary: data.plot_summary,
        poster_img: data.poster_img,
        production_company_names: data.production_company_names,
        movie_rating: data.movie_rating,
        release_date: data.release_date,
        runtime: data.runtime,
        teaser_url: data.teaser_url,
      };
    } else if (listCategory === "member" && "email" in data) {
      return {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        membership_id: data.membership_id,
      };
    } else if (listCategory === "profile" && "member_email" in data) {
      return {
        id: data.id,
        member_id: data.member_id,
        member_name: data.member_name,
        member_email: data.member_email,
        member_password: data.member_password,
      };
    } else {
      return { id: 0, name: "", email: "", password: "", membership_id: "" };
    }
  });

  useEffect(() => {
    setDataSet(() => {
      if (listCategory === "contents" && "movie_id" in data) {
        return {
          age_rating: data.age_rating,
          category_names: data.category_names,
          director_names: data.director_names,
          genre_names: data.genre_names,
          movie_id: data.movie_id,
          movie_title: data.movie_title,
          plot_summary: data.plot_summary,
          poster_img: data.poster_img,
          production_company_names: data.production_company_names,
          movie_rating: data.movie_rating,
          release_date: data.release_date,
          runtime: data.runtime,
          teaser_url: data.teaser_url,
        };
      } else if (listCategory === "member" && "email" in data) {
        return {
          id: data.id,
          name: data.name,
          email: data.email,
          password: data.password,
          membership_id: data.membership_id,
        };
      } else if (listCategory === "profile" && "member_email" in data) {
        return {
          id: data.id,
          member_id: data.member_id,
          member_name: data.member_name,
          member_email: data.member_email,
          member_password: data.member_password,
        };
      } else {
        return { id: 0, name: "", email: "", password: "", membership_id: "" };
      }
    });
  }, [data, listCategory]);

  return (
    <div className={`${ListBoxStyle}`}>
      <ListHeader
        data={data}
        setListBodyOpen={setListBodyOpen}
        listCategory={listCategory}
        dataSet={dataSet}
        setDataReload={setDataReload}
      />
      <ListUpDateBox
        data={data}
        index={index}
        listBodyOpen={listBodyOpen}
        listCategory={listCategory}
        setDataSet={setDataSet}
      />
    </div>
  );
};

export default ListBox;
