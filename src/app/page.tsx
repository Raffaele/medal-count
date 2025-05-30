import Image from "next/image";

import { Metadata } from "next";
import { SortKey } from "@/types";
import { MedalData } from "./_components/MedalData/MedalData";

export const metadata: Metadata = {
  title: "Medals",
  description: "Medals for test",
};

type Props = {
  searchParams: Promise<{ sort: SortKey }>;
};

export default async function Home({ searchParams }: Props) {
  const { sort = SortKey.GOLD } = await searchParams;

  return (
    <main>
      <MedalData sort={sort} />
    </main>
  );
}
