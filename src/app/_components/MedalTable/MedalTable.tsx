import { CountryResult, SortKey } from "@/types";
import style from "./MedalTable.module.css";
import { useMemo } from "react";
import Link from "next/link";

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
          <th>
            <Link href={`?sort=${SortKey.GOLD}`}>G</Link>
          </th>
          <th>
            <Link href={`?sort=${SortKey.SILVER}`}>S</Link>
          </th>
          <th>
            <Link href={`?sort=${SortKey.BRONZE}`}>B</Link>
          </th>
          <th>
            <Link href={`?sort=${SortKey.TOTAL}`}>TOTAL</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedCountries.slice(0, 10).map((country, index) => (
          <tr key={country.code}>
            <td>{index + 1}</td>
            <td>{country.code}</td>
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
