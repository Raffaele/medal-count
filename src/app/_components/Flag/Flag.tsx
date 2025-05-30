import { CountryResult } from "@/types";
import style from "./Flag.module.css";

type Props = {
  country: CountryResult;
};

export const Flag = ({ country }: Props) => {
  const offset = -country.flagIndex * 17;
  return (
    <div
      className={style.flag}
      style={{ backgroundPositionY: `${offset}px` }}
    ></div>
  );
};
