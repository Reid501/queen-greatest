import React, { FC } from "react";

interface TableRowType {
  title: string | undefined;
  cover: string | undefined;
  vote: () => void;
}

const VoteCard: FC<TableRowType> = ({ title, cover, vote }) => {
  return (
    <div className="w-[35%] flex justify-center flex-col items-center">
      <h2 className="text-primary-100 text-2xl mb-5">{title}</h2>
      <img src={cover} width={"80%"} />
      <button
        onClick={vote}
        className="bg-white text-primary-100 py-2 px-4 border-2 border-primary-100 rounded-md mt-10 w-40 mx-auto hover:bg-primary-100 hover:text-white"
      >
        VOTE
      </button>
    </div>
  );
};

export default VoteCard;
