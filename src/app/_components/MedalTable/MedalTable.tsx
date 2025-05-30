import { CountryResult, SortKey } from "@/types";
import style from "./MedalTable.module.css";
import { useMemo } from "react";
import Link from "next/link";
import { Flag } from "../Flag/Flag";

type Props = { sort: SortKey; countries: CountryResult[] };

export const MedalTable = ({ sort, countries }: Props) => {
  const sortedCountries = useMemo(() => {
    switch (sort) {
      case SortKey.GOLD:
        return [...countries].sort(
          (a, b) => b.gold - a.gold || b.silver - a.silver
        );
      case SortKey.SILVER:
        return [...countries].sort(
          (a, b) => b.silver - a.silver || b.gold - a.gold
        );
      case SortKey.BRONZE:
        return [...countries].sort(
          (a, b) => b.bronze - a.bronze || b.gold - a.gold
        );
      case SortKey.TOTAL:
        return [...countries].sort(
          (a, b) => b.total - a.total || b.gold - a.gold
        );
    }
  }, [sort, countries]);
  return (
    <table className={style.medalTable}>
      <thead>
        <tr>
          <th colSpan={3}></th>
          <th className={sort === SortKey.GOLD ? style.active : ""}>
            <Link
              href={`?sort=${SortKey.GOLD}`}
              className={style.medalGold}
            ></Link>
          </th>
          <th className={sort === SortKey.SILVER ? style.active : ""}>
            <Link
              href={`?sort=${SortKey.SILVER}`}
              className={style.medalSilver}
            ></Link>
          </th>
          <th className={sort === SortKey.BRONZE ? style.active : ""}>
            <Link
              href={`?sort=${SortKey.BRONZE}`}
              className={style.medalBronze}
            ></Link>
          </th>
          <th className={sort === SortKey.TOTAL ? style.active : ""}>
            <Link href={`?sort=${SortKey.TOTAL}`}>TOTAL</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedCountries.slice(0, 10).map((country, index) => (
          <tr key={country.code}>
            <td className={style.rank}>{index + 1}</td>
            <td>
              <Flag country={country} />
            </td>
            <td className={style.countryCode}>{country.code}</td>
            <td className={style.value}>{country.gold}</td>
            <td className={style.value}>{country.silver}</td>
            <td className={style.value}>{country.bronze}</td>
            <td className={style.total}>{country.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
