import VoteCard from "@/components/VoteCard";
import Head from "next/head";
import { useEffect, useState } from "react";

const API_BASE = "http://localhost:3001";

interface SongType {
  _id: string;
  title: string;
  cover: string;
  votes: number;
}

export default function Home() {
  const [songs, setSongs] = useState<SongType[] | []>();
  const [songOne, setSongOne] = useState<SongType>();
  const [songTwo, setSongTwo] = useState<SongType>();

  const getSongs = () => {
    fetch(API_BASE + "/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error("Error: ", error));
  };

  useEffect(() => {
    getSongs();
  }, []);

  useEffect(() => {
    getTwoSongs();
  }, [songs]);

  const getTwoSongs = () => {
    if (songs) {
      const songOneIndex = Math.floor(Math.random() * songs?.length);
      let songTwoIndex = Math.floor(Math.random() * songs?.length);

      do {
        songTwoIndex = Math.floor(Math.random() * songs?.length);
      } while (songOneIndex === songTwoIndex);
      setSongOne(songs[songOneIndex]);

      setSongTwo(songs[songTwoIndex]);
    }
  };

  const vote = async (id: string | undefined) => {
    await fetch(API_BASE + "/song/vote/" + id, {
      method: "PUT",
    }).then((res) => res.json());

    getTwoSongs();
  };

  return (
    <>
      <Head>
        <title>Queens Greatest hit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-[80%] mx-auto flex justify-between">
        <VoteCard
          title={songOne?.title}
          cover={songOne?.cover}
          vote={() => vote(songOne?._id)}
        />
        <div className="flex items-center font-bold text-2xl">VS</div>
        <VoteCard
          title={songTwo?.title}
          cover={songTwo?.cover}
          vote={() => vote(songTwo?._id)}
        />
      </div>
    </>
  );
}
