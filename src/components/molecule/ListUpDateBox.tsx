"use client";

import { ListUpDateBoxPropsType } from "@/type/props/molecule";
import InputBox from "./InputBox";
import { listUpDateBoxStyle1, listUpDateBoxStyle2 } from "@/style/molecule";

// 리스트 업데이트 드롭다운
const ListUpDateBox = ({
  data,
  index,
  listBodyOpen,
  listCategory,
  setDataSet,
}: ListUpDateBoxPropsType) => {
  return (
    <div
      className={`${listBodyOpen ? listUpDateBoxStyle1 : listUpDateBoxStyle2}`}
    >
      {listBodyOpen && (
        <div>
          <InputBox
            data={data}
            ple=""
            textColor="text-black"
            index={index}
            listCategory={listCategory}
            setDataSet={setDataSet}
          />
        </div>
      )}
    </div>
  );
};

export default ListUpDateBox;
