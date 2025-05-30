import { SortKey, CountryResult } from "@/types";
import { MedalTable } from "./MedalTable";
import { render, screen } from "@testing-library/react";

import countries from "@/app/api/medals/medals.json";

const getCountryCodeIndex = (rank: number) => 2 + rank * 7;

describe("MedalData component", () => {
  const countryResult = countries.map<CountryResult>(
    (singleCountry, flagIndex) => ({
      ...singleCountry,
      total: singleCountry.gold + singleCountry.silver + singleCountry.bronze,
      flagIndex,
    })
  );
  it("should show the correct number of countries", () => {
    render(<MedalTable sort={SortKey.GOLD} countries={countryResult} />);
    // 10 countries, 7 cells per country
    expect(screen.getAllByRole("cell")).toHaveLength(70);
  });
  it("should show the countries in the correct order for gold sort", () => {
    render(<MedalTable sort={SortKey.GOLD} countries={countryResult} />);

    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(0)].textContent
    ).toEqual("RUS");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(1)].textContent
    ).toEqual("NOR");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(2)].textContent
    ).toEqual("CAN");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(3)].textContent
    ).toEqual("USA");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(4)].textContent
    ).toEqual("NED");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(5)].textContent
    ).toEqual("GER");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(6)].textContent
    ).toEqual("SUI");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(7)].textContent
    ).toEqual("BLR");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(8)].textContent
    ).toEqual("AUT");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(9)].textContent
    ).toEqual("FRA");
  });

  it("should show the countries in the correct order for silver sort", () => {
    render(<MedalTable sort={SortKey.SILVER} countries={countryResult} />);

    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(0)].textContent
    ).toEqual("RUS");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(1)].textContent
    ).toEqual("CAN");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(2)].textContent
    ).toEqual("AUT");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(3)].textContent
    ).toEqual("USA");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(4)].textContent
    ).toEqual("NED");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(5)].textContent
    ).toEqual("SWE");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(6)].textContent
    ).toEqual("GER");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(7)].textContent
    ).toEqual("NOR");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(8)].textContent
    ).toEqual("FRA");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(9)].textContent
    ).toEqual("CHN");
  });

  it("should show the countries in the correct order for bronze sort", () => {
    render(<MedalTable sort={SortKey.BRONZE} countries={countryResult} />);

    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(0)].textContent
    ).toEqual("USA");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(1)].textContent
    ).toEqual("NOR");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(2)].textContent
    ).toEqual("RUS");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(3)].textContent
    ).toEqual("NED");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(4)].textContent
    ).toEqual("FRA");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(5)].textContent
    ).toEqual("SWE");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(6)].textContent
    ).toEqual("ITA");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(7)].textContent
    ).toEqual("CAN");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(8)].textContent
    ).toEqual("GER");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(9)].textContent
    ).toEqual("AUT");
  });

  it("should show the countries in the correct order for total sort", () => {
    render(<MedalTable sort={SortKey.TOTAL} countries={countryResult} />);

    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(0)].textContent
    ).toEqual("RUS");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(1)].textContent
    ).toEqual("USA");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(2)].textContent
    ).toEqual("NOR");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(3)].textContent
    ).toEqual("CAN");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(4)].textContent
    ).toEqual("NED");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(5)].textContent
    ).toEqual("GER");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(6)].textContent
    ).toEqual("AUT");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(7)].textContent
    ).toEqual("FRA");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(8)].textContent
    ).toEqual("SWE");
    expect(
      screen.getAllByRole("cell")[getCountryCodeIndex(9)].textContent
    ).toEqual("SUI");
  });
});
