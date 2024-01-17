"use server";

import AnimeCard, { type AnimeProp } from "@/components/AnimeCard";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&season=2024&order=popularity`,
  );
  const data = await response.json();

  if (data.length < 5) {
    return fetchAnime(page - 10);
  }

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
