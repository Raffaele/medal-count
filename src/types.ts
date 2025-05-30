export enum SortKey {
  GOLD = "gold",
  SILVER = "silver",
  BRONZE = "bronze",
  TOTAL = "total",
};

export type CountryResult = {
  code: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
  flagIndex: number;
};