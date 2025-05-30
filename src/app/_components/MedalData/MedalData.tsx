"use client";

import { CountryResult, SortKey } from "@/types";
import { useQuery } from "@tanstack/react-query";
import style from "./MedalData.module.css";
import { MedalTable } from "../MedalTable/MedalTable";

type Props = { sort: SortKey };

export const MedalData = ({ sort }: Props) => {
  const {
    isLoading,
    isError,
    data: countries = [],
    refetch,
  } = useQuery<CountryResult[]>({
    queryKey: ["medals"],
    queryFn: async () => {
      const res = await fetch("/api/medals");
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    },
    retry: 0,
    select: (data) => {
      const sortedCodes = data.map(({ code }) => code);
      return data.map((country) => {
        return {
          ...country,
          total: country.gold + country.silver + country.bronze,
          flagIndex: sortedCodes.indexOf(country.code),
        };
      });
    },
  });

  if (isLoading) return <div className={style.loadingPanel}>Loading...</div>;

  if (isError)
    return (
      <div className={style.errorPanel}>
        <h3>Error</h3>
        <button onClick={() => refetch()}>RETRY</button>
      </div>
    );
  return <MedalTable sort={sort} countries={countries} />;
};
