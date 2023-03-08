import React, { FC } from "react";

interface TableRowType {
  title: string;
  cover: string;
  votes: number;
}

const TableRow: FC<TableRowType> = ({ title, cover, votes }) => {
  return (
    <div className="flex">
      <div className="mx-auto border-2 border-slate-800  flex-2 py-5 px-10">
        <h2 className={"font-bold"}>{votes}</h2>
      </div>
      <div className="mx-auto border-2 border-slate-800  flex-2">
        <img src={cover} width={"150px"} />
      </div>
      <div className="mx-auto border-2 border-slate-800  flex-1">
        <h2 className="font-bold p-5">{title}</h2>
      </div>
    </div>
  );
};

export default TableRow;
